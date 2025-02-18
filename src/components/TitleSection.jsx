import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';

function TitleSection({ children }) {
    
    return (
        <div className="container">
            <h1 style={styleTitle}>{children}</h1>
            <hr className="border border-2 opacity-100" style={{borderColor: '#030D59'}}/>
        </div>
    );
}

const styleTitle = {
    color: "#030D59",
    minHeight: "3rem",
    fontSize: '2rem'
}

export default TitleSection;

