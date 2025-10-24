# AI Tools Hub - Contracts Document

## Overview
This document outlines the technical contracts between frontend and backend, data structures, and implementation details for the AI Tools Hub application.

## Authentication Flow

### Frontend → Backend
**Endpoint:** `POST /api/auth/session`
**Purpose:** Exchange session_id from OAuth redirect for session_token

Request:
```json
{
  "session_id": "string"
}
```

Response:
```json
{
  "success": true,
  "user": {
    "id": "string",
    "email": "string",
    "name": "string",
    "picture": "string"
  }
}
```

**Endpoint:** `GET /api/auth/me`
**Purpose:** Get current authenticated user data
**Headers:** Cookie with session_token or Authorization Bearer token

Response:
```json
{
  "id": "string",
  "email": "string", 
  "name": "string",
  "picture": "string"
}
```

**Endpoint:** `POST /api/auth/logout`
**Purpose:** Logout user and clear session

Response:
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

## Data Models

### User
```python
{
  "id": "uuid",
  "email": "string",
  "name": "string",
  "picture": "string (optional)",
  "created_at": "datetime"
}
```

### Session
```python
{
  "id": "uuid",
  "user_id": "string",
  "session_token": "string",
  "expires_at": "datetime (timezone-aware)",
  "created_at": "datetime"
}
```

### AI Tool (Frontend Mock Data)
```javascript
{
  "id": "number",
  "name": "string",
  "description": "string",
  "category": "string (writing|presentation|design|video|productivity|code|marketing|research)",
  "tags": "array of strings",
  "pricing": "string (Free|Freemium|Paid)",
  "url": "string (external website URL)",
  "featured": "boolean"
}
```

## Current Implementation Status

### ✅ Completed Features
1. **Frontend (React)**
   - Homepage with hero section
   - Category filtering (8 categories)
   - Search functionality
   - Tool cards with pricing badges and tags
   - Dark/Light theme toggle
   - Responsive design
   - Google OAuth authentication UI
   - Session management

2. **Backend (FastAPI)**
   - Authentication endpoints (session creation, get user, logout)
   - MongoDB integration
   - Session management with timezone-aware expiry
   - CORS configuration

3. **Data**
   - 35 AI tools across 8 categories (mock data)
   - All tools have working external links

### 🔄 Mock Data (Frontend Only)
- All AI tools are stored in `/app/frontend/src/mockData.js`
- Tools are filtered and searched on frontend
- No backend API for tools yet

### 🚀 Future Enhancements (Not Implemented)
1. **Backend API for AI Tools**
   - GET `/api/tools` - Get all tools with pagination
   - GET `/api/tools/:id` - Get single tool
   - GET `/api/tools/category/:category` - Filter by category
   - GET `/api/tools/search?q=query` - Search tools
   - POST `/api/tools` - Submit new tool (requires auth)

2. **User Features**
   - Bookmark/Save favorite tools
   - User profile page
   - Tool submission form
   - Ratings and reviews

3. **Admin Features**
   - Tool approval system
   - User management
   - Analytics dashboard

## Environment Variables

### Frontend (.env)
```
REACT_APP_BACKEND_URL=<backend_url>
```

### Backend (.env)
```
MONGO_URL=<mongodb_connection_string>
DB_NAME=<database_name>
```

## Authentication Notes
- Uses Emergent Auth platform for Google OAuth
- Session tokens expire after 7 days
- Stored in httpOnly cookies for security
- Frontend checks for session_id in URL fragment on mount
- Existing sessions checked via `/api/auth/me` endpoint
