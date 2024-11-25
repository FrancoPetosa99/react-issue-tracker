import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import LogoutButton from './LogOutButton'
import ConfirmModal from '../utils/ConfirmModal';
import Toast from '../utils/Toast';

function SideBar() {

    const navegate = useNavigate();
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    const logout = (event) => {
        event.preventDefault();
        ConfirmModal(() => {
            setIsAuthenticated(false);
            Toast({title: 'Se ha cerrado la sesión con éxito'});
            navegate("/login");
        }, {
          text: '¿Estás seguro de que deseas cerrar sesión? Tendrás que volver a iniciar sesión para acceder a tu cuenta.'
        });
      };
    
    const stylesNav = {
        height: '100vh',
        width: '100%',
        background: 'linear-gradient(to bottom, #475BEB, #030D59)',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: "center",
        fontSize: "1.2rem",
        flexDirection: 'column',
        overflowY: 'auto',
        padding: "1rem"
    };

    const stylesLogo = {
        height: 'auto',
        width: '100px',
    };

    const navTextLink = {
        color: 'white'
    };

    const navItemStyles = {
        display: 'flex',
        justifyContent: 'left',
        width: '100%',
        marginLeft: "4vw",
        alignItems: "center",
        color: 'white',
        gap: '2vw'
    };

    const navTextButton = {
        color: 'white',
        background: "transparent",
        border: "none"
    }

    const navItemsLayoutStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        gap: "1rem"
    };

    const navIcon = {
        marginRight: "1rem"
    }

    return (
        <nav style={stylesNav} className="navbar navbar-dark"> 
            <Link to="/">
                <img style={stylesLogo} src="./src/public/logo.webp" alt="Logo" />
            </Link>
     
            <ul style={navItemsLayoutStyles} className="navbar-nav w-100">
                <li style={navItemStyles}>
                    
                    <Link style={navTextLink} className="nav-link" to="/home"><i style={navIcon} className="bi bi-house"></i>Home</Link>
                </li>
                <li style={navItemStyles}>
                    
                    <Link style={navTextLink} className="nav-link" to="/"><i style={navIcon} className="bi bi-grid"></i>Mis Solicitudes</Link>
                </li>
                <li style={navItemStyles}>
                    
                    <Link style={navTextLink} className="nav-link" to="/profile"><i style={navIcon} className="bi bi-person"></i>Mi Perfil</Link>
                </li>
                <li style={navItemStyles}>
                    
                    <Link style={navTextLink} className="nav-link" to="/settings"><i style={navIcon} className="bi bi-gear"></i>Configuracion</Link>
                </li>
            </ul>
            <ul style={navItemsLayoutStyles} className="navbar-nav w-100">
                {!isAuthenticated && (
                    <li style={navItemStyles}>
                        <Link style={navTextLink} className="nav-link" to="/login"><i style={navIcon} className="bi bi-box-arrow-right"></i>LogOut</Link>
                    </li>
                )}
                {isAuthenticated && (
                    <li style={navItemStyles}>
                        
                        {isAuthenticated && <LogoutButton navIcon={navIcon} styleButton={navTextButton} logout={logout} />}
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default SideBar;