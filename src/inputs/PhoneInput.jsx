import React from 'react';
import { IoCallSharp } from 'react-icons/io5';

function PhoneInput({ 
    name, 
    label, 
    placeholder, 
    handleChange, 
    value, 
    showError, 
    required, 
    showCallBtn, 
    readonly,
    handleCall
    }) {

    const requiredStyles = {
        fontSize: '14px', 
        color: 'red'
    };
    
    return (
        <div className="input-group mb-3"> 
            <span className="input-group-text">+54</span>
            <div className="form-floating">
                <input 
                    placeholder={ placeholder ? placeholder :'Telefono...' }
                    type="number" 
                    className={`form-control ${showError ? 'is-invalid' : ''}`}
                    name={name ? name: 'telefono'} 
                    value={value}
                    onChange={handleChange}
                    disabled={readonly}
                />
                <label htmlFor={name}>{label ? label :'Télefono'}</label>
            </div>
            { showCallBtn && <button onClick={handleCall} className="btn btn-outline-secondary" type="button" > <IoCallSharp size={20}/> </button> }
            { required && <b style={requiredStyles}>*</b> }
        </div>
    );
}

export default PhoneInput;