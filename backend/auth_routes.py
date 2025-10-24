from fastapi import APIRouter, HTTPException, Request, Response
import aiohttp
from datetime import datetime, timezone, timedelta
from motor.motor_asyncio import AsyncIOMotorClient
import os
from models import User, Session, SessionData
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/auth", tags=["auth"])

EMERGENT_AUTH_API = "https://demobackend.emergentagent.com/auth/v1/env/oauth/session-data"

# Get database from server.py instead of creating new connection
def get_db():
    from server import db
    return db

@router.post("/session")
async def create_session(request: Request, response: Response):
    """
    Process session_id from frontend and create session
    """
    try:
        db = get_db()
        body = await request.json()
        session_id = body.get('session_id')
        
        if not session_id:
            raise HTTPException(status_code=400, detail="session_id is required")
        
        # Call Emergent Auth API to get user data
        async with aiohttp.ClientSession() as session:
            headers = {"X-Session-ID": session_id}
            async with session.get(EMERGENT_AUTH_API, headers=headers) as resp:
                if resp.status != 200:
                    raise HTTPException(status_code=resp.status, detail="Failed to get session data")
                
                data = await resp.json()
                session_data = SessionData(**data)
        
        # Check if user exists
        existing_user = await db.users.find_one({"email": session_data.email})
        
        if not existing_user:
            # Create new user
            user = User(
                email=session_data.email,
                name=session_data.name,
                picture=session_data.picture
            )
            await db.users.insert_one(user.dict())
            user_id = user.id
        else:
            user_id = existing_user['id']
        
        # Create session with 7 days expiry (timezone-aware)
        expires_at = datetime.now(timezone.utc) + timedelta(days=7)
        session_record = Session(
            user_id=user_id,
            session_token=session_data.session_token,
            expires_at=expires_at
        )
        
        await db.sessions.insert_one(session_record.dict())
        
        # Set httpOnly cookie
        response.set_cookie(
            key="session_token",
            value=session_data.session_token,
            httponly=True,
            secure=True,
            samesite="none",
            max_age=7 * 24 * 60 * 60,  # 7 days in seconds
            path="/"
        )
        
        return {
            "success": True,
            "user": {
                "id": user_id,
                "email": session_data.email,
                "name": session_data.name,
                "picture": session_data.picture
            }
        }
        
    except Exception as e:
        logger.error(f"Error creating session: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/me")
async def get_current_user(request: Request):
    """
    Get current authenticated user
    """
    db = get_db()
    # Check cookie first, then Authorization header
    session_token = request.cookies.get("session_token")
    
    if not session_token:
        # Fallback to Authorization header
        auth_header = request.headers.get("Authorization")
        if auth_header and auth_header.startswith("Bearer "):
            session_token = auth_header.replace("Bearer ", "")
    
    if not session_token:
        raise HTTPException(status_code=401, detail="Not authenticated")
    
    # Find session
    session = await db.sessions.find_one({"session_token": session_token})
    
    if not session:
        raise HTTPException(status_code=401, detail="Invalid session")
    
    # Check if session expired (timezone-aware comparison)
    if session['expires_at'] < datetime.now(timezone.utc):
        await db.sessions.delete_one({"session_token": session_token})
        raise HTTPException(status_code=401, detail="Session expired")
    
    # Get user
    user = await db.users.find_one({"id": session['user_id']})
    
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    return {
        "id": user['id'],
        "email": user['email'],
        "name": user['name'],
        "picture": user.get('picture')
    }

@router.post("/logout")
async def logout(request: Request, response: Response):
    """
    Logout user and clear session
    """
    db = get_db()
    session_token = request.cookies.get("session_token")
    
    if session_token:
        # Delete session from database
        await db.sessions.delete_one({"session_token": session_token})
    
    # Clear cookie
    response.delete_cookie(
        key="session_token",
        path="/",
        secure=True,
        samesite="none"
    )
    
    return {"success": True, "message": "Logged out successfully"}