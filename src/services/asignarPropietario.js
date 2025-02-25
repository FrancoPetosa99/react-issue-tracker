import baseURL from "./baseURL";

function asignarPropietario(authToken, requerimientoId, usuarioPropietarioId) {
    const endpoint = '/api/requerimientos/' + requerimientoId + '/propietarios/' + usuarioPropietarioId;
    return fetch(baseURL() + endpoint, {
        method:'PUT', 
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authToken
        }
    })
    .then(res => res.json())
    .then((data) => data.data);
};

export default asignarPropietario;