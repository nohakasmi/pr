import { useState, useEffect, createContext, useContext } from 'react';
import api, { setAuthToken } from '../services/api';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthToken(token);
      api.get('/user').then(res => setUser(res.data)).catch(() => logout()).finally(() => setLoading(false));
    } else setLoading(false);
  }, []);

  const login = async (credentials) => {
    const { data } = await api.post('/login', credentials);
    localStorage.setItem('token', data.token);
    setAuthToken(data.token);
    setUser(data.user);
  };

  const register = async (info) => {
    const { data } = await api.post('/register', info);
    localStorage.setItem('token', data.token);
    setAuthToken(data.token);
    setUser(data.user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuthToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);