import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';

function ViewRequestModal({ setShow, solicitud }) {

    const handleClose = () => setShow(false);

    const getPriorityColor = (priority) => {
        const styles = {
            'Urgente': {
                backgroundColor: '#900000' // Darkest/most intense red
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
        <>
            {/* Fondo del modal */}
            <div className="modal-backdrop fade show"></div>
            
            {/* Modal principal */}
            <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }} role="dialog">
                <div className="modal-dialog modal-dialog-scrollable modal-lg">
                    <div className="modal-content gap-3">
                        {/* Header */}
                        <div
                            className="modal-header text-white"
                            style={getPriorityColor(solicitud.prioridad)}
                        >
                            <div className="d-flex flex-column">
                                <h5 className="modal-title">Solicitud {solicitud.codigo}</h5>
                                <small>Fecha: {solicitud.createdAt || 'N/A'}</small>
                            </div>
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                aria-label="Close"
                                onClick={handleClose}
                            ></button>
                        </div>

                        {/* Body */}
                        <div className="modal-body">
                            <div className="container">
                                <div className="row mb-3">
                                    <div className="col">
                                        <label className="form-label fw-bold">Tipo</label>
                                        <p>{solicitud.tipoRequerimiento || 'N/A'}</p>
                                    </div>
                                    <div className="col">
                                        <label className="form-label fw-bold">Estado</label>
                                        <p>{solicitud.estado || 'N/A'}</p>
                                    </div>
                                    <div className="col">
                                        <label className="form-label fw-bold">Prioridad</label>
                                        <p>{solicitud.prioridad || 'N/A'}</p>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Asunto</label>
                                    <p>{solicitud.asunto || 'N/A'}</p>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Descripción</label>
                                    <p>{solicitud.descripcion || 'N/A'}</p>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Propietario</label>
                                    <p>{solicitud.usuarioPropietario || 'N/A'}</p>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Archivos adjuntos</label>
                                    <div className="list-group">
                                        <a href="#" className="list-group-item list-group-item-action">
                                            <i className="bi bi-file-earmark me-2"></i>archivo.pdf
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={handleClose}
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewRequestModal;