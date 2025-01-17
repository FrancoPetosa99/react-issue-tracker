import baseURL from "./baseURL";

function getCategoriaRequerimientos(authToken, tipoRequerimientoId) {
    const endpoint = '/api/categorias_requerimiento/tipos_requerimientos/' + tipoRequerimientoId;
    return fetch(baseURL() + endpoint, { 
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authToken
        }
    });
};

export default getCategoriaRequerimientos;