import React from 'react';

function Checkbox({ 
    name, 
    label,
    descripcion,
    handleChange, 
    checked, 
    showError, 
    errorMessage, 
    required, 
    readonly 
}) {
    return (
        <div className="mb-3" style={{ width: '100%' }}>
            <div className="form-check">
                <input 
                    className={`form-check-input ${showError ? 'is-invalid' : ''}`} 
                    id={name}
                    name={name}
                    type="checkbox"
                    onChange={handleChange}
                    checked={ checked || false }
                    disabled={readonly}
                />
                <label htmlFor={name} className="form-check-label">
                    {label} { required && <b style={requiredStyles}>*</b> }
                </label>
            </div>
            <p style={descripcionStyles}>{ descripcion }</p>
            { showError && <b style={errorMessageStyles}>{errorMessage}</b> }
        </div>
    );
}

const requiredStyles = {
    fontSize: '14px', 
    color: 'red',
    marginLeft: '5px'
};

const errorMessageStyles = {
    fontSize: '12px', 
    color: '#dc3545',
    display: 'block',
    marginTop: '5px'
};

const descripcionStyles = {
    fontSize: '12px',
    color: 'grey'
};

export default Checkbox;