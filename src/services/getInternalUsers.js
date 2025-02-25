import baseURL from "./baseURL";

function getInternalUsers(authToken) {
    const endpoint = '/api/usuarios/interno';
    return fetch(baseURL() + endpoint, { 
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authToken
        }
    })
    .then((res) => res.json())
    .then((data) => data.data);
};

export default getInternalUsers;