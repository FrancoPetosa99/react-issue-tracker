import baseURL from "./baseURL";

function register(formData) {
    const endpoint = '/api/usuario/externo';
    return fetch(baseURL() + endpoint, { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData) 
    });
};

export default register;