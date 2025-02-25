import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import DropDownList from '../../../inputs/DropDownList';
import getInternalUsers from '../../../services/getInternalUsers';

function UsuariosPropietariosSelect({ field, showError, errorMessage  }){
    
    const { authToken } = useContext(AuthContext);

    const loadOptions = (searchValue, callback) => {

        getInternalUsers(authToken)
        .then(users => {
            
            const mappedArr = users.map(user => {
                return {
                    value: user.id, 
                    label: user.nombre + " " + user.apellido + " - " + user.nombreUsuario, 
                    id: user.id 
                };
            });

            if (searchValue) {
                const filteredArr = mappedArr.filter(user => user.label.includes(searchValue));
                return callback(filteredArr);
            }

            callback(mappedArr);

        })
        .catch((e)=> Toast({ icon: 'error', title: 'Ups!', text: 'Ha ocurrido un error: ' + e.mssage }));
    }

    const handleChange = (selectedUser) => {
        if (!selectedUser) return field.onChange();
        const usuarioPropietarioId = selectedUser.id;        
        field.onChange(usuarioPropietarioId);
    };
    
    return( 
        <DropDownList 
            isMulti={false}
            handleChange={handleChange} 
            name={'usuarioPropietarioId'} 
            label={'Asignar Requerimiento'}
            placeholder={'Seleccionar Propietario...'}
            loadOptions={loadOptions}
            isClearable={true}
            isSearchable={true}
            showError={showError}
            errorMessage={errorMessage}
        />
    );
};

export default UsuariosPropietariosSelect;