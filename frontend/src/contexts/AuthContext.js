import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      // Check for session_id in URL fragment first (from OAuth redirect)
      const hash = window.location.hash;
      const sessionIdMatch = hash.match(/session_id=([^&]+)/);
      
      if (sessionIdMatch) {
        const sessionId = sessionIdMatch[1];
        setLoading(true);
        
        try {
          // Exchange session_id for session_token
          const response = await axios.post(`${BACKEND_URL}/api/auth/session`, {
            session_id: sessionId
          }, {
            withCredentials: true
          });
          
          if (response.data.success) {
            setUser(response.data.user);
          }
          
          // Clean up URL
          window.history.replaceState({}, document.title, window.location.pathname);
        } catch (error) {
          console.error('Error processing session:', error);
        } finally {
          setLoading(false);
          setInitializing(false);
        }
      } else {
        // Check if already authenticated
        try {
          const response = await axios.get(`${BACKEND_URL}/api/auth/me`, {
            withCredentials: true
          });
          setUser(response.data);
        } catch (error) {
          // Not authenticated
          setUser(null);
        } finally {
          setLoading(false);
          setInitializing(false);
        }
      }
    };
    
    initAuth();
  }, []);

  const login = () => {
    const redirectUrl = window.location.origin;
    window.location.href = `https://auth.emergentagent.com/?redirect=${encodeURIComponent(redirectUrl)}`;
  };

  const logout = async () => {
    try {
      await axios.post(`${BACKEND_URL}/api/auth/logout`, {}, {
        withCredentials: true
      });
      setUser(null);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, initializing }}>
      {children}
    </AuthContext.Provider>
  );
};