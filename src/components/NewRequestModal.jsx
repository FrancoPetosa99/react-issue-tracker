import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import Toast from '../utils/Toast';
import DropdownList from '../inputs/DropDownList';
import getTipoRequerimientos from '../services/getTipoRequerimientos';
import getCategoriaRequerimientos from '../services/getCategoriaRequerimientos';
import createNewRequerimiento from '../services/createNewRequerimiento';
import CustomInput from '../inputs/CustomInput';
import TipoRequerimientoSelect from './forms/requerimiento/TipoRequerimientoSelect';
import CategoriaRequerimientoSelect from './forms/requerimiento/CategoriaRequerimientoSelect';
import PrioridadRequerimientoSelect from './forms/requerimiento/PrioridadRequerimientoSelect';
import RequerimientosRelacionadosSelect from './forms/requerimiento/RequerimientosRelacionadosSelect';

function NewRequestModal({ setShow }) {
    
    const [ loading, setLoading ] = useState(false);
    const [requerimientoTipos, setRequerimientoTipos] = useState([]);
    const [requerimientoCategorias, setRequerimientoCategorias] = useState([]);
    const [ formData, setFormData ] = useState({
        descripcion: '',
        asunto: '',
        prioridad: '',
        estado: 'Abierto',
        tipoRequerimientoId: null,
        listaRequerimientosId: [],
        listaArchivos: []
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
        console.log(formData);
        createNewRequerimiento(authToken, formData)
        .then((data) => {
            console.log(data);
            if (data.status !== 'Success') throw new Error(data.message);
            Toast({ icon: 'success', title: 'Requerimiento Creado' });
        })
        .then(()=> setTimeout(()=> setShow(false), 1000))
        .catch((e)=> Toast({ icon: 'error', title: 'Ups!', text: 'Ha ocurrido un error: ' + e.mssage }))
        .finally(()=> setLoading(false));
    };

    return (
        <div
            className="modal fade show"
            tabIndex="-1"
            style={{
                display: 'block',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
            role="dialog"
            aria-labelledby="newRequestModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-scrollable modal-lg">
                <div className="modal-content gap-5" style={{ padding: '0.5rem' }}>
                   
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

                    <div className="modal-body">
                        <div className="container row">
                            <div className="col">
                                <TipoRequerimientoSelect 
                                    formData={formData} 
                                    setFormData={setFormData} 
                                />
                            </div>
                            <div className="col">
                                <CategoriaRequerimientoSelect 
                                    formData={formData} 
                                    setFormData={setFormData}
                                />
                            </div>
                            <div className="col">
                                <PrioridadRequerimientoSelect 
                                    formData={formData} 
                                    setFormData={setFormData}
                                />
                            </div>
                        </div>
                        <div className="container col mt-3">
                            
                            <div className="input-group mb-3">
                                <CustomInput
                                    name={'asunto'}
                                    type={'text'}
                                    label={'Asunto'}
                                    handleChange={handleChange}
                                    value={formData.asunto}
                                    showError={null}
                                    required={true}
                                />
                            </div>

                            <div className="input-group mb-3">
                                <CustomInput
                                    name={'descripcion'}
                                    type={'textarea'}
                                    label={'Descripcion'}
                                    handleChange={handleChange}
                                    value={formData.descripcion}
                                    showError={null}
                                    required={true}
                                />
                            </div>

                            <div className="input-group mb-3">
                                <RequerimientosRelacionadosSelect
                                    formData={formData} 
                                    setFormData={setFormData}
                                />
                            </div>
                            
                            <div className="input-group mb-3">
                                <input
                                    type="file"
                                    className="form-control"
                                    id="inputGroupFile01"
                                />
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