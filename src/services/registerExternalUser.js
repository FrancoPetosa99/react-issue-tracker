import baseURL from "./baseURL";

function registerExternalUser(data, authToken) {
    const endpoint = '/api/usuarios/externo';
    return fetch(baseURL() + endpoint, { 
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authToken
        },
        body: JSON.stringify(data) 
    });
};

export default registerExternalUser;