import baseURL from "./baseURL";

function getComentariosByRequerimiento(authToken, requerimientoId) {
    const endpoint = '/api/comentarios/requerimientos/' + requerimientoId;
    return fetch(baseURL() + endpoint, { 
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authToken
        }
    })
    .then(res => res.json());
};

export default getComentariosByRequerimiento;