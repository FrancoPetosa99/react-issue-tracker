import baseURL from "./baseURL";

function getExternalUsers(authToken) {
    const endpoint = '/api/usuarios/externo';
    return fetch(baseURL() + endpoint, { 
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authToken
        }
    })
    .then((res) => res.json())
};

export default getExternalUsers;