import React from 'react';

function CustomDivider() {

    const divider = {
        width: '100%',
        height: '2px',
        backgroundColor: '#dee2e6',
        margin: '.4rem 0 1rem 0' 
    }

    return(<div style={divider}></div>);
}

export default CustomDivider;