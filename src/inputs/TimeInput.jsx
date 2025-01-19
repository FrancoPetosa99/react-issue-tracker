import React, { useRef, useState } from 'react';
import { IoMdTime } from "react-icons/io";
import dayjs from 'dayjs';

function TimeInput({ name, label, handleChange, value, showError, required }) {
    
    const timeInputRef = useRef(null);

    const handleIconClick = () => {
        timeInputRef.current && timeInputRef.current.showPicker();
    };
    
    const requiredStyles = {
        fontSize: '14px', 
        color: 'red'
    };

    return (
        <div style={{ gap: '1px' }} className="input-group mb-3"> 
            <div style={{ position: 'relative' }} className="form-floating">
                <input
                    type="text"
                    className={`form-control ${showError ? 'is-invalid' : ''}`}
                    value={value}
                    placeholder={label}
                    readOnly
                />
                <label htmlFor={name}>{label}</label>
            </div>
            <input
                style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }} 
                type="time"
                className={`form-control ${showError ? 'is-invalid' : ''}`}
                name={name} 
                value={value}
                onChange={handleChange}
                ref={timeInputRef}
            />
            <button 
                className="btn btn-outline-secondary" 
                type="button"
                onClick={handleIconClick}
            >
                <IoMdTime size={20} />
            </button>
            { required && <b style={requiredStyles}>*</b> }
        </div>
    );
}

export default TimeInput;