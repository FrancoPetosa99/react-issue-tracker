import React, { createContext, useState } from 'react';
import Toast from '../utils/Toast';
import ConfirmModal from '../utils/ConfirmModal';
import { useNavigate } from 'react-router-dom';

// Crear el contexto
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [ isAuthenticated, setIsAuthenticated ] = useState(true);

  // login
  const login = () => {
    setIsAuthenticated(true);
  };

  // logout
  const logout = (event) => {
    setIsAuthenticated(false); 
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;