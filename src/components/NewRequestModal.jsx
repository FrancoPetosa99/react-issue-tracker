import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useContext, useState } from 'react';
import SelectBox from './SelectBox';
import { AuthContext } from '../context/AuthContext';
import Toast from '../utils/Toast';

function NewRequestModal({ setShow }) {
    
    const [ loading, setLoading ] = useState(false);
    const [ formData, setFormData ] = useState({
        descripcion: '',
        asunto: '',
        prioridad: 'Baja',
        estado: 'Abierto',
        tipoRequerimientoId: 1
    });

    const { authToken } = useContext(AuthContext);
    
    const handleClose = () => setShow(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = ()=> {
        setLoading(true);
        fetch('http://localhost:8080' + '/api/requerimientos/', { 
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authToken
            },
            body: JSON.stringify(formData) 
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.status !== 'Success') throw new Error(data.message);
            Toast({ icon: 'success', title: 'Requerimiento Creado' });
        })
        .catch((e)=> Toast({ icon: 'error', title: 'Ups!', text: 'Ha ocurrido un error: ' + e.mssage }))
        .finally(()=> setLoading(false));
    };

    return (
        <div
            className="modal fade show"
            tabIndex="-1"
            style={{
                display: 'block',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
            }}
            role="dialog"
            aria-labelledby="newRequestModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-scrollable modal-lg">
                <div className="modal-content gap-5" style={{ padding: '0.5rem' }}>
                    {/* Header */}
                    <div
                        className="modal-header text-white"
                        style={{ backgroundColor: 'green' }}
                    >
                        <h5 className="modal-title">Nueva Solicitud</h5>
                        <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={handleClose}
                        ></button>
                    </div>

                    {/* Body */}
                    <div className="modal-body">
                        <div className="container row">
                            <div className="col">
                                <SelectBox handleChange={handleChange} name={'tipoRequerimientoId'} label="Tipo" options={[
                                    { value: 1, text: 'Requerimiento Hardware' },
                                    { value: 2, text: 'Errores' },
                                    { value: 3, text: 'Gestión Operativa' }
                                ]} />
                            </div>
                            <div className="col">
                                <SelectBox handleChange={handleChange} name={'estado'} label="Estado" options={[
                                    { value: 'Abierto', text: 'Abierto' },
                                    { value: 'Cerrado', text: 'Cerrado' },
                                    { value: 'Pendiente', text: 'Pendiente' }
                                ]} />
                            </div>
                            <div className="col">
                                <SelectBox handleChange={handleChange} name={'prioridad'} label="Prioridad" options={[
                                    { value: 'Baja', text: 'Baja' },
                                    { value: 'Media', text: 'Media' },
                                    { value: 'Alta', text: 'Alta' },
                                    { value: 'Urgente', text: 'Urgente' }
                                ]} />
                            </div>
                        </div>
                        <div className="container col mt-3">
                            <div className="input-group mb-3">
                                <input
                                    type="file"
                                    className="form-control"
                                    id="inputGroupFile01"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    Asunto
                                </span>
                                <input
                                    type="text"
                                    name='asunto'
                                    onChange={handleChange}
                                    value={formData.asunto}
                                    className="form-control"
                                    placeholder="Ingrese el asunto"
                                    aria-label="Asunto"
                                    aria-describedby="basic-addon1"
                                />
                            </div>
                            <div className="input-group">
                                <span className="input-group-text">Descripción</span>
                                <textarea
                                    className="form-control"
                                    type="text"
                                    name='descripcion'
                                    onChange={handleChange}
                                    value={formData.descripcion}
                                    aria-label="Descripción"
                                ></textarea>
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
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                            Guardar cambios
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewRequestModal;