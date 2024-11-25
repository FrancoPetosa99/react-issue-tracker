import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';

function LogInInfo() {

    const stylesLogo = {
        width: "200px",
        height: "auto", // fixed typo
        filter: "drop-shadow(7px 7px 15px rgba(0, 0, 0, 0.3))"
    }

    const stylesText = {
        color: "#030D59",
        background: "white",
        padding: "0.5rem",
        borderRadius: "8px",
        boxShadow:  "drop-shadow(7px 7px 15px rgba(0, 0, 0, 0.3))"
    }

    return (
        <div className='container d-flex flex-column justify-content-center p-5 w-40 align-items-start m-5'>
            <img 
                style={stylesLogo} 
                src="./src/public/logo.webp" 
                alt="Logo" 
                className="mb-4"
            />
            <div className='d-flex flex-column justify-content-start align-items-start gap-3'>
                <h1 style={stylesText}>Gestión de Requerimientos</h1>
                <h1 style={stylesText}>e Incidencias</h1>
            </div>
        </div>
    );
}

export default LogInInfo;