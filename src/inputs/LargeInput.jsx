import React from 'react';

function LargeInput({ name, label, handleChange, value, showError, required, readonly }) {

    return (
        <div className="mb-3" style={{ width: '100%' }}>
            <div style={{ width: '100%' }}>
                <label for={name} class="form-label">{label}</label>
                { required && <b style={requiredStyles}>*</b> }
             </div>
            <textarea 
                className={`form-control ${showError ? 'is-invalid' : ''}`} 
                id={name}
                name={name}
                rows="4"
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

export default LargeInput;