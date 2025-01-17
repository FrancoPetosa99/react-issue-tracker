import React, { createContext, useState } from 'react';
import Toast from '../utils/Toast';
import ConfirmModal from '../utils/ConfirmModal';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [ isAuthenticated, setIsAuthenticated ] = useState(() => localStorage.getItem('isAuthenticated') == "true");
  const [ authToken, setAuthToken ] = useState(() => localStorage.getItem('authToken'));
  
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