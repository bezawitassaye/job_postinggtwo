import { createContext, useContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('token');
    if (stored) {
      setToken(stored);
      try {
        if (checkTokenValidity(stored)) {
          const decoded = jwt_decode(stored);
          setUser(decoded);
        } else {
          localStorage.removeItem('token');
        }
      } catch (e) {
        console.error("Error decoding token:", e);
        localStorage.removeItem('token');
      }
    }
  }, []);

  const login = (jwt) => {
    if (checkTokenValidity(jwt)) {
      localStorage.setItem('token', jwt);
      setToken(jwt);
      const decoded = jwt_decode(jwt);
      setUser(decoded);
    } else {
      console.error("Invalid or expired token.");
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

const checkTokenValidity = (jwt) => {
  try {
    const decoded = jwt_decode(jwt);
    const expirationDate = decoded.exp * 1000; // exp is in seconds, convert to milliseconds
    const now = Date.now();
    
    if (now > expirationDate) {
      console.error("Token has expired.");
      return false;  // Token has expired
    } else {
      return true;  // Token is still valid
    }
  } catch (error) {
    console.error("Error decoding token:", error);
    return false;  // Error decoding the token, it's invalid
  }
};
