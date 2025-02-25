import baseURL from "./baseURL";

function getCategoriaRequerimientos(authToken) {
    const endpoint = '/api/categorias_requerimientos/';
    return fetch(baseURL() + endpoint, { 
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authToken
        }
    })
    .then(res => res.json());
};

export default getCategoriaRequerimientos;