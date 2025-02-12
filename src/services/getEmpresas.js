import baseURL from "./baseURL";

function getEmpresas() {
    const endpoint = '/api/empresas/';
    return fetch(baseURL() + endpoint, { 
        headers: { 
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json());
};

export default getEmpresas;