import React from 'react';

function CustomInput({ name, label, handleChange, value, showError, required, readonly }) {
       
    return (
        <div className="mb-3" style={{ width: '100%' }}>
            <div style={{ width: '100%' }}>
                <label for={name} class="form-label">{label}</label>
                { required && <b style={requiredStyles}>*</b> }
             </div>
            <input 
                className={`form-control ${showError ? 'is-invalid' : ''}`} 
                id={name}
                name={name}
                onChange={handleChange}
                value={value}
                disabled={readonly}
            />
        </div>
    );
}

const requiredStyles = {
    fontSize: '14px', 
    color: 'red'
};

export default CustomInput;