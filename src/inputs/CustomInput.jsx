import React from 'react';

function CustomInput({ name, type, label, handleChange, value, showError, required, readonly }) {

    const requiredStyles = {
        fontSize: '14px', 
        color: 'red'
    };

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1px' }}>
            <div style={{ width: '100%' }} className="form-floating mb-3">
                <input 
                    type={type || 'text' } 
                    className={`form-control ${showError ? 'is-invalid' : ''}`}
                    name={name ? name : '' } 
                    value={value || ''}
                    onChange={handleChange}
                    placeholder={name}
                    disabled={readonly}
                />
                <label htmlFor={name}>{label}</label>
            </div>
            { required && <b style={requiredStyles}>*</b> }
        </div>
    );
}

export default CustomInput;