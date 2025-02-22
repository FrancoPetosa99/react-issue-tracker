import React from 'react';
import { IoReturnDownBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function BtnBack({ route }) {

    const navigate = useNavigate();
    
    const handleBack = () => route ? navigate(route) : navigate(-1);
    
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light" style={styles}>
            <button className="nav-link" onClick={handleBack} style={{ border: 'none', background: 'none' }}>
                <IoReturnDownBackOutline style={{ fontSize: "40px" }} /> Regresar
            </button>
        </div>
    );
}

const styles = {
    width: '100%',
    padding: '1rem',
    margin: '1rem'
};

export default BtnBack;