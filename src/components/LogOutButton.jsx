import React from 'react';
import { useNavigate } from 'react-router-dom';
import Toast from '../utils/Toast';
import ConfirmModal from '../utils/ConfirmModal';


function LogoutButton({ navIcon, styleButton, setIsAuthenticated }) {
  const navigate = useNavigate();

  const logout = (event) => {
    event.preventDefault();
    ConfirmModal(() => {
      setIsAuthenticated(false);
      Toast({title: 'Se ha cerrado la sesión con éxito'});
      navigate("/login");
    }, {
      text: '¿Estás seguro de que deseas cerrar sesión? Tendrás que volver a iniciar sesión para acceder a tu cuenta.'
    });
  };

  return (
    <button style={styleButton} onClick={logout}><i style={navIcon} className="bi bi-box-arrow-right"></i>Logout</button>
  );
}

export default LogoutButton;