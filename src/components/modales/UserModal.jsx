import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import CustomInput from '../../inputs/CustomInput';
import { FaStar } from 'react-icons/fa';
import FormatDate from '../../utils/FormatDate';

function UserModal({ setShow, user }) {

    const handleClose = () => setShow(false);

    
    
    return (
        <>
            <div className="modal-backdrop fade show"></div>

            <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }} role="dialog">
                <div className="modal-dialog modal-dialog-scrollable modal-lg">
                    <div className="modal-content gap-3">
                     
                        <div className="modal-header" >
                            <div className="d-flex flex-column">
                                <h4 className="modal-title">
                                    <span className="badge text-bg-primary">
                                        {user.nombreUsuario}
                                        { user.destacado && <FaStar color="gold" />}
                                    </span>
                                </h4>
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
                                            name={"nombre"}
                                            label={"Nombre"}
                                            value={user.nombre}
                                            readonly={true}
                                        />
                                    </div>
                                    <div className="col">
                                        <CustomInput 
                                            type="text"
                                            name={"apellido"}
                                            label={"Apellido"}
                                            value={user.apellido}
                                            readonly={true}
                                        />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col">
                                        <CustomInput 
                                            type="text"
                                            name={"email"}
                                            label={"Email"}
                                            value={user.email}
                                            readonly={true}
                                        />
                                    </div>
                                    <div className="col">
                                        <CustomInput 
                                            type="text"
                                            name={"descripcion"}
                                            label={"Descripcion"}
                                            value={user.descripcion || 'N/A'}
                                            readonly={true}
                                        />
                                    </div>
                                </div>
                                
                                <div className="row mb-3">
                                    <div className="col">
                                        <CustomInput 
                                            type="text"
                                            name={"empresa"}
                                            label={"Empresa"}
                                            value={user.empresa.nombre}
                                            readonly={true}
                                        />
                                    </div>
                                    <div className="col">
                                        <CustomInput 
                                            type="text"
                                            name={"fechaAlta"}
                                            label={"Fecha Alta Usuario"}
                                            value={FormatDate(user.createdAt) || 'N/A'}
                                            readonly={true}
                                        />
                                    </div>
                                </div>

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

export default UserModal;