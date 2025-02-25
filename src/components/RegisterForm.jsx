import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react';
import Toast from '../utils/Toast';
import register from '../services/registerExternalUser';
import EmpresasSelect from './forms/requerimiento/EmpresasSelect';

function RegisterForm() {

    const [ loading, setLoading ] = useState(false);
    
    const [ formData, setFormData ] = useState({
        nombre: '',
        apellido: '',
        email: '',
        nombreUsuario: '',
        empresaId: '',
        descripcion: '',
        cuil: '',
        password: '',
        confirmPassword: '',
        destacado: true
    });

    const handleSubmit = (e)=> {

        e.preventDefault();

        setLoading(true);

        register(formData)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            Toast({ icon: 'success', title: 'Usuario Registrado', text: 'Se ha creado su cuenta con exito' });
        })
        .catch(()=> Toast({ icon: 'error', title: 'Ups!', text: 'Ha ocurrido un error' }))
        .finally(()=> setLoading(false));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        

        
        <form onSubmit={handleSubmit} style={formStyle}>
            <div className="mb-4">
                <p className="text-muted mb-1" style={{fontSize: "0.9rem"}}>EMPECEMOS</p>
                <h2 className="mb-1" style={{fontSize: "2rem"}}>Crear Cuenta</h2>
            </div>
            
            <div className="d-flex gap-2 mb-3">

                <input 
                    type="text" 
                    className="form-control" 
                    style={inputStyle}
                    placeholder="Nombre"
                    name='nombre'
                    value={formData.nombre}
                    onChange={handleChange}
                />

                <input 
                    type="text" 
                    className="form-control" 
                    style={inputStyle}
                    placeholder="Apellido"
                    name='apellido'
                    value={formData.apellido}
                    onChange={handleChange}
                />
            </div>

            <div className="d-flex gap-2 mb-3">

                <input 
                    type="email" 
                    className="form-control" 
                    style={inputStyle}
                    placeholder="Correo electrónico"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />

                <input 
                    type="text" 
                    className="form-control" 
                    style={inputStyle}
                    placeholder="Nombre de Usuario"
                    name='nombreUsuario'
                    value={formData.nombreUsuario}
                    onChange={handleChange}
                />

            </div>

            <div className="mb-3">

                <input 
                    type="text" 
                    className="form-control" 
                    style={inputStyle}
                    placeholder="Descripción"
                    name='descripcion'
                    value={formData.descripcion}
                    onChange={handleChange}
                />

            </div>

            <div className="d-flex gap-3 mb-3">

                <EmpresasSelect formData={formData} setFormData={setFormData} />

                <input 
                    type="text" 
                    className="form-control" 
                    style={inputStyle}
                    placeholder="CUIL"
                    name='cuil'
                    value={formData.cuil}
                    onChange={handleChange}
                />

            </div>

            <div className="d-flex gap-2 mb-3">

                <input 
                    type="password" 
                    className="form-control" 
                    style={inputStyle}
                    placeholder="Contraseña"
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                />

                <input 
                    type="password" 
                    className="form-control" 
                    style={inputStyle}
                    placeholder="Repetir Contraseña"
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                
            </div>

            <button 
                type="submit" 
                className="btn" 
                style={buttonStyle}
            >
                REGISTRARSE
            </button>

            <div className="text-center mt-2">
                <span className="text-muted" style={{fontSize: "0.6rem"}}>¿Ya eres miembro? </span>
                <a href="#" className="text-decoration-none" style={{fontSize: "0.6rem"}}>LOGIN</a>
            </div>

            <div className="text-center mt-2">
                <small style={{fontSize: "0.6rem"}} className="text-muted">
                    By Creating an Account, it means you agree to our{' '}
                    <a href="#" className="text-decoration-none">Privacy Policy</a> and{' '}
                    <a href="#" className="text-decoration-none">Terms of Service</a>
                </small>
            </div>
        </form>

    );
}

const formStyle = {
    backgroundColor: "white",
    padding: "2.5rem",
    borderRadius: "25px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    width: "100%",
    maxWidth: "500px"
}

const inputStyle = {
    padding: "0.5rem",
    marginBottom: "0.1  rem",
    borderRadius: "12px",
    border: "1px solid #e0e0e0",
    backgroundColor: "#fff",
    fontSize: "0.7rem"
}

const buttonStyle = {
    width: "100%",
    padding: "0.8rem",
    borderRadius: "12px",
    backgroundColor: "#030D59",
    border: "none",
    color: "white",
    fontWeight: "500",
    marginTop: "1rem",
    fontSize: "0.9rem" 
}

export default RegisterForm;