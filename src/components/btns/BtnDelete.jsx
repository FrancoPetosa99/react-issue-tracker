import React from 'react';
import { MdDeleteForever } from "react-icons/md";

function BtnDelete({ action, loading }) {
    
    const stylesBtn = {
        width: '100%',
        minWidth: '150px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '.4rem'
    };
    
    return ( 
        <button style={stylesBtn} className="btn btn-danger" onClick={action} >
            Eliminar
            { loading 
                ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> 
                :  <MdDeleteForever size={20} />
            }
        </button>);
}

export default BtnDelete;