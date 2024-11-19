import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap-icons/font/bootstrap-icons.css';

function LogInForm() {
    const formStyle = {
        backgroundColor: "white",
        padding: "2.5rem",
        borderRadius: "25px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
        width: "100%",
        maxWidth: "500px"
    }

    const inputStyle = {
        padding: "0.8rem",
        marginBottom: "1rem",
        borderRadius: "12px",
        border: "1px solid #e0e0e0",
        backgroundColor: "#f8f9fa",
        fontSize: "0.9rem"
    }

    const buttonStyle = {
        width: "100%",
        padding: "0.8rem",
        borderRadius: "12px",
        backgroundColor: "#030D59",
        border: "none",
        color: "white",
        fontWeight: "500",
        marginTop: "1rem"
    }

    return (
        <form style={formStyle}>
            <div className="mb-4">
                <p className="text-muted mb-2">¡BIENVENIDO DE VUELTA!</p>
                <h2 className="mb-4">Log In</h2>
            </div>
            
            <div className="mb-3">
                <input 
                    type="email" 
                    className="form-control" 
                    style={inputStyle}
                    placeholder="Email"
                />
            </div>

            <div className="mb-3">
                <input 
                    type="password" 
                    className="form-control" 
                    style={inputStyle}
                    placeholder="Password"
                />
            </div>

            <button 
                type="submit" 
                className="btn" 
                style={buttonStyle}
            >
                Log In
            </button>

            <div className="text-center mt-3">
                <span className="text-muted">¿Olvidaste tu contraseña? </span>
                <a href="#" className="text-decoration-none">Recuperar Contraseña</a>
            </div>

            <div className="text-center mt-4">
                <small className="text-muted">
                    By Creating an Account, it means you agree to our{' '}
                    <a href="#" className="text-decoration-none">Privacy Policy</a> and{' '}
                    <a href="#" className="text-decoration-none">Terms of Service</a>
                </small>
            </div>
        </form>
    );
}

export default LogInForm;