import React, { useState } from 'react';
import { MdSaveAlt } from "react-icons/md";

function BtnSave({ action, loading }) {

    const stylesBtn = {
        width: '100%',
        minWidth: '150px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '.4rem'
    };

    return ( 
        <button style={stylesBtn} className="btn btn-primary" onClick={action} >
            Guardar
            { loading 
                ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> 
                :  <MdSaveAlt size={20} />
            }
        </button>);
}

export default BtnSave;