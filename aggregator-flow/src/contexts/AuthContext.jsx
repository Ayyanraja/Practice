import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

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

  useEffect(() => {
    // Check for existing session
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Mock login - replace with actual API call
    const mockUser = {
      id: '1',
      email,
      name: email.split('@')[0],
      role: email.includes('admin') ? 'admin' : 'user',
      token: 'mock-jwt-token-' + Date.now()
    };
    
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    return { success: true, user: mockUser };
  };

  const register = async (name, email, password) => {
    // Mock register - replace with actual API call
    const mockUser = {
      id: Date.now().toString(),
      email,
      name,
      role: 'user',
      token: 'mock-jwt-token-' + Date.now()
    };
    
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    return { success: true, user: mockUser };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const refresh = async () => {
    // Mock refresh - replace with actual API call
    if (user) {
      const refreshedUser = { ...user, token: 'mock-jwt-token-' + Date.now() };
      setUser(refreshedUser);
      localStorage.setItem('user', JSON.stringify(refreshedUser));
      return { success: true };
    }
    return { success: false };
  };

  const verify = async () => {
    // Mock verify - replace with actual API call
    return { success: !!user, user };
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    refresh,
    verify,
    isAdmin: user?.role === 'admin',
    isAuthenticated: !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
