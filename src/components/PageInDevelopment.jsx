import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function PageInDevelopment() {
    const { isAuthenticated } = useContext(AuthContext);
    
    return (
        <div className="container min-vh-100 d-flex align-items-center justify-content-center">
            <div className="text-center">
                <i className="bi bi-gear-wide-connected display-1 text-primary mb-4 spinning-gear"></i>
                <h1 className="display-4 mb-3">Página en Construcción</h1>
                <p className="lead fs-3 text-muted mb-4">
                    ¡Estamos trabajando para traerte algo increíble!
                </p>
                <div className="mt-4">
                    <Link to="/" className="btn btn-primary btn-lg">
                        <i className="bi bi-house-door me-2"></i>
                        Volver al Inicio
                    </Link>
                </div>
            </div>
            <style>
                {`
                    .spinning-gear {
                        display: inline-block;
                        animation: spin 15s linear infinite;
                    }
                    
                    @keyframes spin {
                        from {
                            transform: rotate(0deg);
                        }
                        to {
                            transform: rotate(360deg);
                        }
                    }
                `}
            </style>
        </div>
    );
}

export default PageInDevelopment;


