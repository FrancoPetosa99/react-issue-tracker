import * as yup from "yup";

function FormSchema() {

    const schema = yup.object().shape({
        nombre: yup.string().required("El nombre es obligatorio"),
        apellido: yup.string().required("El apellido es obligatorio"),
        nombreUsuario: yup.string().required("El nombre de usuario es obligatorio"),
        descripcion: yup.string().required("La descripcion de usuario es obligatorio"),
        email: yup.string().email("Email inválido").required("El email es obligatorio"),
        cuil: yup.number().required("El CUIL es obligatorio"),
        empresaId: yup.number().required("La empresa es obligatoria"),
        password: yup.string().min(6, "La contraseña debe tener al menos 6 caracteres").required("La contraseña es obligatoria"),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "Las contraseñas no coinciden").required("Debes confirmar tu contraseña"),
        destacado: yup.boolean().default(false)
    });

    return schema;
}

export default FormSchema;