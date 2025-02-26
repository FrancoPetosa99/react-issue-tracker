import baseURL from "./baseURL";

function getRequerimientos(authToken) {
    const endpoint = '/api/requerimientos/?size=50';
    return fetch(baseURL() + endpoint, { 
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authToken
        }
    })
    .then(res => res.json())
    .then(data => {

        console.log(data);
        return data;
    });
};

export default getRequerimientos;