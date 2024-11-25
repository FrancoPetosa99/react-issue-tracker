import React from 'react';
import LogInInfo from '../components/LogInInfo';
import LogInForm from '../components/LogInForm';
import { Link } from 'react-router-dom';

function Login() {
    
    const loginStyles = {
        background: 'linear-gradient(to bottom, #475BEB, #030D59)',
        minHeight: '100vh'
    }

    const registerButtonStyle = {
        backgroundColor: 'transparent',
        border: '1px solid white',
        color: 'white',
        padding: '0.5rem 1.5rem',
        borderRadius: '20px',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
    }

    const headerStyle = {
        padding: '1rem 2rem',
        color: 'white',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '1rem'
    }

    const contentStyle = {
        display: 'flex',
        flexDirection: 'row',
        height: 'calc(100vh - 70px)',
        padding: '0 2rem'
    }

    return (
        <div style={loginStyles}>
            {/* Header with Register Button */}
            <div style={headerStyle}>
                <p className="m-0">¿Aún no eres Miembro?</p>
                <Link 
                    to="/register"
                    style={{
                        ...registerButtonStyle,
                        textDecoration: 'none'
                    }}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = 'transparent'
                    }}
                >
                    Register
                </Link>
            </div>

            {/* Main Content */}
            <div style={contentStyle}>
                {/* Left Side - Login Info */}
                <div className='w-50 d-flex justify-content-center align-items-center'>
                    <LogInInfo />
                </div>

                {/* Right Side - Login Form */}
                <div className='w-50 d-flex justify-content-center align-items-center'>
                    <LogInForm />
                </div>
            </div>
        </div>
    );
}

export default Login;