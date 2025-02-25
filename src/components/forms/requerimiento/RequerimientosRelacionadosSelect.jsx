import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import DropDownList from '../../../inputs/DropDownList';
import getRequerimientos from '../../../services/getRequerimientos';

function RequerimientosRelacionadosSelect({ field, showError, errorMessage  }){
    
    const { authToken } = useContext(AuthContext);

    const loadOptions = (searchValue, callback) => {

        getRequerimientos(authToken)
        .then(data => {
            
            const requerimientos = data.data;

            const mappedArr = requerimientos.map(requerimiento => {
                return {
                    value: requerimiento.id, 
                    label: requerimiento.codigo + " - " + requerimiento.asunto, 
                    id: requerimiento.id 
                };
            });

            if (searchValue) {
                const filteredArr = mappedArr.filter(requerimiento => requerimiento.label.includes(searchValue));
                return callback(filteredArr);
            }

            callback(mappedArr);

        })
        .catch((e)=> Toast({ icon: 'error', title: 'Ups!', text: 'Ha ocurrido un error: ' + e.mssage }));
    }

    const handleChange = (data) => {
        const listaRequerimientosId = data.map(opcion => opcion.value);
        field.onChange(listaRequerimientosId);
    };
    
    return( 
        <DropDownList 
            isMulti={true}
            handleChange={handleChange} 
            name={'listaRequerimientosId'} 
            label={'Relacionar Requerimientos'}
            placeholder={'Seleccionar Requerimiento...'}
            loadOptions={loadOptions}
            isClearable={true}
            isSearchable={true}
            showError={showError}
            errorMessage={errorMessage}
        />
    );
};

export default RequerimientosRelacionadosSelect;