import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/offcanvas';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function SideBar() {

    const { isAuthenticated, logout } = useContext(AuthContext);

    const stylesNav = {
        height: '100vh',
        width: '100%',
        backgroundColor: 'rgb(32, 18, 77)',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: "center",
        flexDirection: 'column',
        overflowY: 'auto',
        padding: "1rem"
    };

    const stylesLogo = {
        height: 'auto',
        width: '100px',
    };

    const navItemStyles = {
        display: 'flex',
        justifyContent: 'center',
        margin: '10px 0',
    };

    const navItemsLayoutStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    };

    return (
        <nav style={stylesNav} className="navbar navbar-dark"> 
            <Link to="/">
                <img style={stylesLogo} src="/public/logo.png" alt="Logo" />
            </Link>
            <ul style={navItemsLayoutStyles} className="navbar-nav w-100">
                <li style={navItemStyles}>
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li style={navItemStyles}>
                    <Link className="nav-link" to="/admin">Admin</Link>
                </li>
                <li style={navItemStyles}>
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li style={navItemStyles}>
                    <Link className="nav-link" to="/about">About</Link>
                </li>
            </ul>
            <ul style={navItemsLayoutStyles} className="navbar-nav w-100">
                {!isAuthenticated && (
                    <li style={navItemStyles}>
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                )}
                {isAuthenticated && (
                    <li style={navItemStyles}>
                    <Link className="nav-link" onClick={(e) => logout(e)}>
                        Logout
                    </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default SideBar;