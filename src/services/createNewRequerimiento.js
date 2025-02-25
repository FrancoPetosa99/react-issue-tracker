import baseURL from "./baseURL";

function createNewRequerimiento(authToken, data) {
    const endpoint = '/api/requerimientos/';
    return fetch(baseURL() + endpoint, {
        method:'POST', 
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authToken
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json());
};

export default createNewRequerimiento;