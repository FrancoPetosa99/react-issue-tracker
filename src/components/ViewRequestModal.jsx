import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useContext, useEffect, useState } from 'react';
import CustomInput from '../inputs/CustomInput';
import LargeInput from '../inputs/LargeInput';
import CustomDivider from './CustomDivider';
import Comentario from './comments/Comentario';
import ComentarioController from './comments/ComentarioController';
import { AuthContext } from '../context/AuthContext';
import getComentariosByRequerimiento from '../services/getComentariosByRequerimiento';

function ViewRequestModal({ setShow, solicitud }) {

    const [ comentarios, setComentarios ] = useState([]);

    const { authToken } = useContext(AuthContext);

    useEffect(()=> {
        getComentariosByRequerimiento(authToken, solicitud.id)
        .then((data) => setComentarios(data.data));
    }, []);

    const handleClose = () => setShow(false);
    
    return (
        <>
            <div className="modal-backdrop fade show"></div>

            <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }} role="dialog">
                <div className="modal-dialog modal-dialog-scrollable modal-lg">
                    <div className="modal-content gap-3">
                     
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

                        <div className="modal-body">
                            <div className="container">
                                <div className="row mb-3">
                                    <div className="col">
                                        <CustomInput 
                                            type="text"
                                            name={"Tipo"}
                                            label={"Tipo Requerimiento"}
                                            value={solicitud.tipoRequerimiento}
                                            readonly={true}
                                            />
                                    </div>
                                    <div className="col">
                                        <CustomInput 
                                            type="text"
                                            name={"estado"}
                                            label={"Estado"}
                                            value={solicitud.estado}
                                            readonly={true}
                                            />
                                    </div>
                                    <div className="col">
                                        <CustomInput 
                                            type="text"
                                            name={"prioridad"}
                                            label={"Prioridad"}
                                            value={solicitud.prioridad}
                                            readonly={true}
                                            />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <CustomInput 
                                        type="text"
                                        name={"asunto"}
                                        label={"Asunto"}
                                        value={solicitud.asunto}
                                        readonly={true}
                                        />
                                </div>

                                <div className="mb-3">
                                    <LargeInput 
                                        type="text"
                                        name={"asunto"}
                                        label={"Asunto"}
                                        value={solicitud.asunto}
                                        readonly={true}
                                        />
                                </div>

                                <div className="mb-3">
                                    <CustomInput 
                                        type="text"
                                        name={"propietario"}
                                        label={"Propietario"}
                                        value={solicitud.propietario ? solicitud.propietario : "No se encuentra asignado"}
                                        readonly={true}
                                        />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Archivos adjuntos</label>
                                    <div className="list-group">
                                        <a href="#" className="list-group-item list-group-item-action">
                                            <i className="bi bi-file-earmark me-2"></i>archivo.pdf
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <CustomDivider />

                            <h5>Actividad</h5>

                            <ComentarioController 
                                comentarios={comentarios}
                                setComentarios={setComentarios}
                                requerimientoId={solicitud.id}
                            />

                            <div>
                                {
                                    comentarios.map(comentario => 
                                        <Comentario 
                                            descripcion={comentario.descripcion} 
                                            emisor={comentario.emisor} 
                                            fecha={comentario.createdAt}
                                    />)
                                }
                            </div>
                        </div>


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

const getPriorityColor = (priority) => {
    const styles = {
        'Urgente': { backgroundColor: '#900000' },
        'Alta': { backgroundColor: '#dc3545' },
        'Media': { backgroundColor: '#ff6b6b' },
        'Baja': { backgroundColor: '#ffb4b4' }
    };

    return styles[priority] || { backgroundColor: '#dc3545' };
};

export default ViewRequestModal;