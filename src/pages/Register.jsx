import React from 'react';
import LogInInfo from '../components/LogInInfo';
import RegisterForm from '../components/RegisterForm';
import { useNavigate } from 'react-router-dom';

function Register() {

    const navigate = useNavigate();

    return (
        <div  style={loginStyles}>
            <div style={headerStyle}>
                <p className="m-0 ">¿Ya eres Miembro?</p>
                <button 
                    onClick={()=> navigate("/login")}
                    style={registerButtonStyle}
                    onMouseOver={(e) => { e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)' }}
                    onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent' }}
                >
                    Login
                </button>
            </div>
            <div style={contentStyle}>
                <div className='w-50 d-flex justify-content-center align-items-center'>
                    <LogInInfo />
                </div>
                <div className='w-50 d-flex justify-content-center align-items-center'>
                    <RegisterForm />
                </div>
            </div>
        </div>
    );
}

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
    padding: '1rem 1rem',
    color: 'white',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '1rem',
    fontSize: "0.8rem"
}

const contentStyle = {
    display: 'flex',
    flexDirection: 'row',
    height: 'calc(100vh - 70px)',
    padding: '0 2rem'
}

export default Register;