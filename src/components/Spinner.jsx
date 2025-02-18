import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Spinner({ size }) {
    
    const spinnerStyles = {
        width: size, 
        height: size
    };

    return(
        <div style={styles}>
            <span 
                style={spinnerStyles} 
                className="spinner-border spinner-border text-primary" 
                role="status" 
                aria-hidden="true">
            </span>
        </div>
    );
}

const styles = {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '.2rem',
};

export default Spinner;