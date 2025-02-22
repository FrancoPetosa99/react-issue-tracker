import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useContext, useState, useRef } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthContext';
import Toast from '../utils/Toast';
import createNewRequerimiento from '../services/createNewRequerimiento';
import CustomInput from '../inputs/CustomInput';
import TipoRequerimientoSelect from './forms/requerimiento/TipoRequerimientoSelect';
import CategoriaRequerimientoSelect from './forms/requerimiento/CategoriaRequerimientoSelect';
import PrioridadRequerimientoSelect from './forms/requerimiento/PrioridadRequerimientoSelect';
import RequerimientosRelacionadosSelect from './forms/requerimiento/RequerimientosRelacionadosSelect';
import LargeInput from '../inputs/LargeInput';
import BtnSave from './btns/BtnSave';
import BtnCancel from './btns/BtnCancel';
import FormSchema from './forms/requerimiento/FormSchema';
import FileInput from '../inputs/FileInput'
import UsuariosPropietariosSelect from './forms/requerimiento/UsuariosPropietariosSelect';

function NewRequestModal({ setShow }) {
    
    const [ loading, setLoading ] = useState(false);

    const formRef = useRef(null);
    
    const { authToken } = useContext(AuthContext);

    const handleClose = () => setShow(false);

    const onSubmit = (data)=> {

        setLoading(true);

        console.log(data);

        createNewRequerimiento(authToken, data)
        .then((data) => {
            console.log(data);
            if (data.status !== 'Success') throw new Error(data.message);
            Toast({ title: 'Requerimiento Creado' });
        })
        .then(()=> setTimeout(()=> setShow(false), 1000))
        .catch((e)=> Toast({ icon: 'error', title: 'Ups!', text: 'Ha ocurrido un error: ' + e.mssage }))
        .finally(()=> setLoading(false));
    };

    const handleFileChange = (files) => setValue("listaArchivos", files);

    const { control, handleSubmit, formState: { errors }, setValue } = useForm({ resolver: yupResolver(FormSchema()) });

    console.log(errors);

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

                        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>

                            <div className="container">
                                <div className='row'>

                                    <div className="col">
                                        <Controller
                                            name={'tipoRequerimientoId'}
                                            control={control}
                                            render={({ field }) => (
                                                <TipoRequerimientoSelect 
                                                    field={field}  
                                                    showError={errors.tipoRequerimientoId} 
                                                    errorMessage={ errors.tipoRequerimientoId && errors.tipoRequerimientoId.message } 
                                                />
                                            )}
                                        />
                                    </div>

                                    <div className="col">
                                        <Controller
                                            name={'categoriaRequerimientoId'}
                                            control={control}
                                            render={({ field }) => (
                                                <CategoriaRequerimientoSelect 
                                                    field={field}  
                                                    showError={errors.categoriaRequerimientoId} 
                                                    errorMessage={ errors.categoriaRequerimientoId && errors.categoriaRequerimientoId.message } 
                                                />
                                            )}
                                        />
                                    </div>

                                    <div className="col">
                                        <Controller
                                            name={'prioridad'}
                                            control={control}
                                            render={({ field }) => (
                                                <PrioridadRequerimientoSelect 
                                                    field={field}  
                                                    showError={errors.categoriaRequerimientoId} 
                                                    errorMessage={ errors.prioridad && errors.prioridad.message } 
                                                />
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="container mt-3">
                                <div className='row'>
                                    <div className="input-group">
                                        <Controller
                                            name={'asunto'}
                                            control={control}
                                            render={({ field }) => (
                                                <CustomInput  
                                                    type={'text'}
                                                    name={'asunto'}
                                                    label={'Asunto'}
                                                    handleChange={field.onChange}
                                                    value={field.value}
                                                    showError={errors.asunto}
                                                    errorMessage={ errors.asunto && errors.asunto.message }
                                                    required={true}
                                                />
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="container mt-3">
                                <div className='row'>
                                    <div className="input-group">
                                        <Controller
                                            name={'descripcion'}
                                            control={control}
                                            render={({ field }) => (
                                                <LargeInput  
                                                    type={'descripcion'}
                                                    name={'descripcion'}
                                                    label={'Descripcion'}
                                                    handleChange={field.onChange}
                                                    value={field.value}
                                                    showError={errors.descripcion}
                                                    errorMessage={ errors.descripcion && errors.descripcion.message }
                                                    required={true}
                                                />
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="container mt-3">
                                <div className='row'>
                                    <div className="input-group">
                                        <Controller
                                            name={'usuarioPropietarioId'}
                                            control={control}
                                            render={({ field }) => (
                                                <UsuariosPropietariosSelect 
                                                    field={field}  
                                                    showError={errors.usuarioPropietarioId} 
                                                    errorMessage={ errors.usuarioPropietarioId && errors.usuarioPropietarioId.message } 
                                                />
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="container mt-3">
                                <div className='row'>
                                    <div className="input-group">
                                        <Controller
                                            name={'listaRequerimientosId'}
                                            control={control}
                                            render={({ field }) => (
                                                <RequerimientosRelacionadosSelect 
                                                    field={field}  
                                                    showError={errors.listaRequerimientosId} 
                                                    errorMessage={ errors.listaRequerimientosId && errors.listaRequerimientosId.message } 
                                                />
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="container mt-3">
                                <div className='row'>
                                    <div className="input-group">
                                        <FileInput
                                            name={'listaArchivos'}
                                            label={'Adjuntar Archivos'}
                                            descripcion={'Max 5 archivos con extension PDF, WORD o EXCEL'}
                                            callback={handleFileChange}  
                                            showError={errors.listaArchivos} 
                                            errorMessage={ errors.listaArchivos && errors.listaArchivos.message } 
                                        />
                                    </div>
                                </div>
                            </div>
                                
                        </form>
                        
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'nowrap' }} className="modal-footer">
                        <BtnCancel action={handleClose} />
                        <BtnSave action={()=> formRef.current.requestSubmit()} loading={loading} />
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default NewRequestModal;