import baseURL from "./baseURL";

function getRequerimientos(authToken) {
    const endpoint = '/api/requerimientos/';
    return fetch(baseURL() + endpoint, { 
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authToken
        }
    });
};

export default getRequerimientos;