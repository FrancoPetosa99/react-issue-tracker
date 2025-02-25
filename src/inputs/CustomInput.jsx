import React from 'react';

function CustomInput({ 
    name, 
    label, 
    type, 
    handleChange, 
    value, 
    showError, 
    errorMessage, 
    required, 
    readonly 
}) {
       
    return (
        <div className="mb-3" style={{ width: '100%' }}>
            <div style={{ width: '100%' }}>
                <label htmlFor={name} className="form-label">{label}</label>
                { required && <b style={requiredStyles}>*</b> }
             </div>
            <input 
                className={`form-control ${showError ? 'is-invalid' : ''}`} 
                id={name}
                name={name}
                type={type}
                onChange={handleChange}
                value={value}
                disabled={readonly}
            />
           { showError && <b style={errorMessageStyles}> { errorMessage } </b> }
        </div>
    );
}

const requiredStyles = {
    fontSize: '14px', 
    color: 'red'
};

const errorMessageStyles = {
    fontSize: '12px', 
    color: '#dc3545'
};

export default CustomInput;