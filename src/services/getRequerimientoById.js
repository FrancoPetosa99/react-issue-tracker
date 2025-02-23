import baseURL from "./baseURL";

function getRequerimientoById(authToken, id) {
    const endpoint = '/api/requerimientos/' + id;
    return fetch(baseURL() + endpoint, { 
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authToken
        }
    })
    .then(res => res.json());
};

export default getRequerimientoById;