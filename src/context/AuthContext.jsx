import React, { createContext, useState } from 'react';
import Toast from '../utils/Toast';
import ConfirmModal from '../utils/ConfirmModal';
import { useNavigate } from 'react-router-dom';

// Crear el contexto
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [ isAuthenticated, setIsAuthenticated ] = useState(true);
  const [ authToken, setAuthToken ] = useState(true);
  
  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, setIsAuthenticated,
      authToken, setAuthToken
     }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;