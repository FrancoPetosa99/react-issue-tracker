import baseURL from "./baseURL";

function login(formData) {
    const endpoint = '/api/auth/login';
    return fetch(baseURL() + endpoint, { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData) 
    })
};

export default login;