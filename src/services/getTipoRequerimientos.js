import baseURL from "./baseURL";

function getTipoRequerimientos(authToken) {
    const endpoint = '/api/tipos_requerimientos/';
    return fetch(baseURL() + endpoint, { 
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authToken
        }
    })
    .then(res => res.json());
};

export default getTipoRequerimientos;