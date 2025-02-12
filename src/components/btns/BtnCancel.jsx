import React from 'react';

function BtnCancel({ action }) {
    
    const stylesBtn = {
        width: '100%'
    };

    return ( 
        <button style={stylesBtn} className="btn btn-secondary" onClick={action} >
            Cancelar
        </button>);
}

export default BtnCancel;