import React from 'react';
import { LuCalendar } from "react-icons/lu";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

function DateInput({ name, label, handleChange, value, showError, required }) {

    const handleIconClick = () => {
        document.getElementsByName(name)[0].showPicker();
    };

    const formatDate = (date)=> {
        if (!date) return '';
        dayjs.extend(utc);
        return dayjs.utc(date).format('DD/MM/YYYY');
    };

    const formatDateInput = (date)=> {
        dayjs.extend(utc);
        return dayjs.utc(date).format('YYYY-MM-DD');
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
                    value={formatDate(value)}
                    placeholder={label}
                    readOnly
                />
                <label htmlFor={name}>{label}</label>
            </div>
                <input
                    style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }} 
                    type="date" 
                    name={name ? name: 'fecha'}
                    value={formatDateInput(value)}
                    onChange={handleChange}
                />
                <button 
                    className="btn btn-outline-secondary" 
                    type="button"
                    onClick={handleIconClick}
                >
                    <LuCalendar size={20} />
                </button>
            { required && <b style={requiredStyles}>*</b> }
        </div>
    );
}

export default DateInput;