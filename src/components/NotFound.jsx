import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="container min-vh-100 d-flex align-items-center justify-content-center">
            <div className="text-center">
                {/* Error Number */}
                <h1 className="display-1 fw-bold text-primary">404</h1>
                
                {/* Error Icon */}
                <i className="bi bi-exclamation-triangle display-4 text-warning mb-4"></i>
                
                {/* Error Message */}
                <h2 className="display-5 mb-3">¡Página no encontrada!</h2>
                <p className="lead text-muted mb-4">
                    Lo sentimos, la página que buscas no existe o ha sido movida.
                </p>
                
                {/* Action Buttons */}
                <div className="d-flex justify-content-center gap-3">
                    <button 
                        onClick={() => window.history.back()} 
                        className="btn btn-outline-primary btn-lg"
                    >
                        <i className="bi bi-arrow-left me-2"></i>
                        Volver
                    </button>
                    
                    <Link to="/" className="btn btn-primary btn-lg">
                        <i className="bi bi-house-door me-2"></i>
                        Ir al Inicio
                    </Link>
                </div>
                
                {/* Optional: Custom Styles */}
                <style>
                    {`
                        .display-1 {
                            font-size: 8rem;
                            text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
                        }
                        
                        .bi-exclamation-triangle {
                            animation: shake 0.8s ease-in-out infinite;
                        }
                        
                        @keyframes shake {
                            0%, 100% { transform: translateX(0); }
                            25% { transform: translateX(-5px); }
                            75% { transform: translateX(5px); }
                        }
                    `}
                </style>
            </div>
        </div>
    );
}

export default NotFound;