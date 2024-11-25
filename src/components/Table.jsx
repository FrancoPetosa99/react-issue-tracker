import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react';
import ViewRequestModal from './ViewRequestModal';

function Table({ solicitudes }) {

    const [ show, setShow ] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState(null);

    const handleViewRequest = (solicitud) => {
        setSelectedRequest(solicitud);
        setShow(true);
    };

    const getPriorityColor = (priority) => {
        const styles = {
            'Urgente': {
                backgroundColor: '#90000F' // Darkest/most intense red
            },
            'Alta': {
                backgroundColor: '#dc3545' // Bright red
            },
            'Media': {
                backgroundColor: '#ff6b6b' // Medium red
            },
            'Baja': {
                backgroundColor: '#ffb4b4' // Light red
            }
        };

        return styles[priority] || { backgroundColor: '#dc3545' };
    };

    return (
        <table className="table table-hover table-responsive info">
            {show && <ViewRequestModal setShow={setShow} solicitud={selectedRequest} />}
            <caption>Lista de Solicitudes</caption>
            <thead>
                <tr>
                    <th scope="col">Fecha Alta</th>
                    <th scope="col">Codigo</th>
                    <th scope="col">Prioridad</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Propietario</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {solicitudes.map((solicitud) => (
                    <tr key={solicitud.id}>
                        <td>{solicitud.createdAt}</td>
                        <td>{solicitud.codigo}</td>
                        <td style={getPriorityColor(solicitud.prioridad)}>
                            {solicitud.prioridad}
                        </td>
                        <td>{solicitud.tipoRequerimiento}</td>
                        <td>{solicitud.estado}</td>
                        <td>{solicitud.usuarioPropietario ? solicitud.usuarioPropietario : '-'}</td>
                        <td>
                            <button 
                                onClick={() => handleViewRequest(solicitud)} 
                                className="btn btn-outline-primary btn-sm"
                            >
                                <i className="bi bi-eye"></i>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;