import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import registerExternalUser from '../../../services/registerExternalUser';
import BtnSave from '../../btns/BtnSave';
import CustomInput from '../../../inputs/CustomInput';
import EmpresasSelect from '../requerimiento/EmpresasSelect';
import Toast from '../../../utils/Toast';
import FormSchema from './FormSchema';
import Checkbox from '../../../inputs/Checkbox';
import BtnCancel from '../../btns/BtnCancel';
import { useNavigate } from 'react-router-dom';

function ExternalUserForm() {

    const navigate = useNavigate();

    const { authToken } = useContext(AuthContext);

    const [ loading, setLoading ] = useState(false);

    const onSubmit = (data) => {
                
        setLoading(true);

        registerExternalUser(data, authToken)
        .then((res) => res.json())
        .then((data) => {
            
            if (data.status != 'Success') {
                return Toast({ icon: 'error', title: 'Ups! Ha ocurrido un error', text: data.message });
            }

            Toast({ icon: 'success', title: 'Usuario Registrado', text: 'Se ha creado su cuenta con exito' });
        })
        .catch(()=> Toast({ icon: 'error', title: 'Ups!', text: 'Ha ocurrido un error' }))
        .finally(()=> setLoading(false));
    };

    const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(FormSchema()) });

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
            
            <div className="d-flex gap-2 mb-3">

                <Controller
                    name={'nombre'}
                    control={control}
                    render={({ field }) => (
                        <CustomInput  
                            type={'text'}
                            name={'nombre'}
                            label={'Nombre'}
                            handleChange={field.onChange}
                            value={field.value}
                            showError={errors.nombre}
                            errorMessage={ errors.nombre && errors.nombre.message }
                            required={true}
                        />
                    )}
                />

                <Controller
                    name={'apellido'}
                    control={control}
                    render={({ field }) => (
                        <CustomInput  
                            type={'text'}
                            name={'apellido'}
                            label={'Apellido'}
                            handleChange={field.onChange}
                            value={field.value}
                            showError={errors.apellido}
                            errorMessage={ errors.apellido && errors.apellido.message }
                            required={true}
                        />
                    )}
                />

            
            </div>

            <div className="d-flex gap-2 mb-3">

                <Controller
                    name={'email'}
                    control={control}
                    render={({ field }) => (
                        <CustomInput  
                            type={'email'}
                            name={'email'}
                            label="Email"
                            handleChange={field.onChange}
                            value={field.value}
                            showError={errors.email}
                            errorMessage={ errors.email && errors.email.message }
                            required={true}
                        />
                    )}
                />

                <Controller
                    name={'nombreUsuario'}
                    control={control}
                    render={({ field }) => (
                        <CustomInput  
                            type={'text'}
                            name={'nombreUsuario'}
                            label="Nombre de Usuario"
                            handleChange={field.onChange}
                            value={field.value}
                            showError={errors.nombreUsuario}
                            errorMessage={ errors.nombreUsuario && errors.nombreUsuario.message }
                            required={true}
                        />
                    )}
                />

            </div>

            <div className="mb-3">

                <Controller
                    name={'descripcion'}
                    control={control}
                    render={({ field }) => (
                        <CustomInput  
                            type={'text'}
                            name={'descripcion'}
                            label={'Descripción'}
                            handleChange={field.onChange}
                            value={field.value}
                            showError={errors.descripcion}
                            errorMessage={ errors.descripcion && errors.descripcion.message }
                            required={true}
                        />
                    )}
                />
                
            </div>

            <div className="d-flex gap-3 mb-3">

                <Controller
                    name={'empresaId'}
                    control={control}
                    render={({ field }) => (
                        <EmpresasSelect 
                            field={field}  
                            showError={errors.empresaId} 
                            errorMessage={ errors.empresaId && errors.empresaId.message }  
                        /> 
                    )}
                />

                <Controller
                    name={'cuil'}
                    control={control}
                    render={({ field }) => (
                        <CustomInput  
                            type={'number'}
                            name={'cuil'}
                            label={'CUIL'}
                            handleChange={field.onChange}
                            value={field.value}
                            showError={errors.cuil}
                            errorMessage={ errors.cuil && errors.cuil.message }
                            required={true}
                        />
                    )}
                />

            </div>

            <div className="d-flex gap-2 mb-3">

                <Controller
                    name={'password'}
                    control={control}
                    render={({ field }) => (
                        <CustomInput  
                            type={'password'}
                            name={'password'}
                            label={'Contraseña'}
                            handleChange={field.onChange}
                            value={field.value}
                            showError={errors.password}
                            errorMessage={ errors.password && errors.password.message }
                            required={true}
                        />
                    )}
                />

                <Controller
                    name={'confirmPassword'}
                    control={control}
                    render={({ field }) => (
                        <CustomInput  
                            type={'password'}
                            name={'confirmPassword'}
                            label={'Repetir Contraseña'}
                            handleChange={field.onChange}
                            value={field.value}
                            showError={errors.confirmPassword}
                            errorMessage={ errors.confirmPassword && errors.confirmPassword.message }
                            required={true}
                        />
                    )}
                />



            </div>

            <div className="d-flex gap-2 mb-3">

                <Controller
                    name={'destacado'}
                    control={control}
                    render={({ field }) => (
                        <Checkbox  
                            name={'destacado'}
                            label={'Service Level Agreement'}
                            descripcion={'Al seleccionar esta opción, se indicará que el usuario es destacado'}
                            handleChange={field.onChange}
                            checked={field.value}
                            showError={errors.destacado}
                            errorMessage={ errors.destacado && errors.destacado.message }
                            required={false}
                        />
                    )}
                />

            </div>

            <div className='d-flex gap-2'>
                <BtnSave action={handleSubmit} loading={loading} />
                <BtnCancel action={()=> navigate('/users')} />
            </div>

        </form>
    );
}

const formStyle = {
    backgroundColor: "white",
    padding: "2.5rem",
    borderRadius: "25px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    width: "100%"
};

export default ExternalUserForm;