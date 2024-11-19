import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, {useState} from 'react';


function ViewRequestModal({solicitud}) {
    
    const getPriorityColor = (priority) => {
        const styles = {
            urgente: {
                backgroundColor: '#900000' // Darkest/most intense red
            },
            alta: {
                backgroundColor: '#dc3545' // Bright red
            },
            media: {
                backgroundColor: '#ff6b6b' // Medium red
            },
            baja: {
                backgroundColor: '#ffb4b4' // Light red
            }
        };

        return styles[priority?.toLowerCase()] || { backgroundColor: '#dc3545' };
    };
    
    return (
        <div className="modal" id="viewRequestModal" tabIndex="-1">
            <div className="modal-dialog modal-dialog-scrollable modal-lg">
                <div className="modal-content gap-3">
                    <div className={`modal-header text-white`} style={getPriorityColor(solicitud?.priority)}>
                        <div className="d-flex flex-column">
                            <h5 className="modal-title">Solicitud {solicitud?.cod}</h5>
                            <small>Fecha: {solicitud?.date}</small>
                        </div>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="container">
                        <div className="row mb-3">
                            <div className="col">
                                <label className="form-label fw-bold">Tipo</label>
                                <p>{solicitud?.type}</p>
                            </div>
                            <div className="col">
                                <label className="form-label fw-bold">Estado</label>
                                <p>{solicitud?.state}</p>
                            </div>
                            <div className="col">
                                <label className="form-label fw-bold">Prioridad</label>
                                <p>{solicitud?.priority}</p>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-bold">Categoría</label>
                            <p>{solicitud?.category}</p>
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-bold">Asunto</label>
                            <p>{solicitud?.subject}</p>
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-bold">Propietario</label>
                            <p>{solicitud?.author}</p>
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

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewRequestModal

