import React, { createContext, useState } from 'react';
import Toast from '../utils/Toast';
import ConfirmModal from '../utils/ConfirmModal';

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
    event.preventDefault();
    ConfirmModal(()=> {
      setIsAuthenticated(false);
      Toast({title: 'Se ha cerrado la sesión con exito'});
    }, {text: '¿Estás seguro de que deseas cerrar sesión? Tendrás que volver a iniciar sesión para acceder a tu cuenta.'});
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;