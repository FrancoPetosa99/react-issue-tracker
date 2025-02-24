import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Unauthorized() {
    return (
        <div className="container min-vh-100 d-flex align-items-center justify-content-center">
            <div className="text-center">
                <i className="bi bi-shield-lock display-1 text-danger mb-4 shaking-icon"></i>
                <h1 className="display-4 mb-3">Acceso Denegado</h1>
                <p className="lead fs-3 text-muted mb-4">
                    No tienes permiso para acceder a este recurso
                </p>
                <div className="mt-4">
                    <Link to="/" className="btn btn-danger btn-lg">
                        <i className="bi bi-house-door me-2"></i>
                        Volver al Inicio
                    </Link>
                </div>
            </div>
            <style>
                {`
                    .shaking-icon {
                        display: inline-block;
                        animation: shake 0.5s ease-in-out infinite alternate;
                    }

                    @keyframes shake {
                        from {
                            transform: translateX(-5px);
                        }
                        to {
                            transform: translateX(5px);
                        }
                    }
                `}
            </style>
        </div>
    );
}

export default Unauthorized;