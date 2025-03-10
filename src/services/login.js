import baseURL from "./baseURL";

function login(formData) {
    const endpoint = '/api/auth/login';
    return fetch(baseURL() + endpoint, { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData) 
    })
    .then((res) => res.json())
    .then((data) => {
        if (data.status !== 'Success') throw new Error(data.message);
        return data.data;
    });
};

export default login;