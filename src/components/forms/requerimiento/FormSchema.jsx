import * as yup from "yup";

function FormSchema() {

    const schema = yup.object().shape({
        descripcion: yup.string().required("La descripcion es obligatoria"),
        asunto: yup.string().required("El asunto es obligatorio"),
        prioridad: yup.string().required("Seleccionar prioridad es obligatorio"),
        estado: yup.string().required("El estado es obligatorio").default('Abierto'),
        tipoRequerimientoId: yup.number().required("Seleccionar tipo es obligatorio"),
        categoriaRequerimientoId: yup.number().required("Seleccionar categoria es obligatorio"),
        usuarioPropietarioId: yup.number().optional(),
        listaRequerimientosId: yup.array().of(yup.number()).optional().default([]),
        listaArchivos: yup.array().of(
            yup.object().shape({
                nombre: yup.string().required("El nombre del archivo es obligatorio"),
                extension: yup.string()
                    .oneOf(["doc", "docx", "xls", "xlsx", "pdf"], "Solo se permiten archivos Word, Excel o PDF")
                    .required("La extensión es obligatoria"),
                contenido: yup.mixed().required("El contenido del archivo es obligatorio")
            })
        )
        .max(5, "No se pueden adjuntar mas de 5 archivos")
        .optional()
    });

    return schema;
}

export default FormSchema;