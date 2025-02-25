import baseURL from "./baseURL";

function createNewComentario(authToken, data, id) {
    const endpoint = '/api/comentarios/requerimientos/' + id;
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

export default createNewComentario;