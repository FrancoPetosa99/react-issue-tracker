import 'bootstrap/dist/css/bootstrap.min.css';
import DropDownList from '../../../inputs/DropDownList';
import getTipoRequerimientos from '../../../services/getTipoRequerimientos';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import Toast from '../../../utils/Toast';

function TipoRequerimientoSelect({ field, showError, errorMessage }){

    const { authToken } = useContext(AuthContext);

    const loadOptions = (searchValue, callback) => {
        getTipoRequerimientos(authToken)
        .then((data) => {
            const mappedArr = data.data.map(tipoRequerimiento => {
                return { 
                    value: tipoRequerimiento.id, 
                    label: tipoRequerimiento.descripcion, 
                    id: tipoRequerimiento.id 
                };
            });
            callback(mappedArr);
        })
        .catch((e)=> Toast({ icon: 'error', title: 'Ups!', text: 'Ha ocurrido un error: ' + e.mssage }));
    };

    const handleChange = (selectedTipoRequerimiento) => {
        if (!selectedTipoRequerimiento) return field.onChange(null);
        const tipoRequerimientoId = selectedTipoRequerimiento.id;        
        field.onChange(tipoRequerimientoId);
    };
    
    return( 
        <>
            <input 
                type={'number'}
                name={'tipoRequerimientoId'}
                id={'tipoRequerimientoId'}
                value={field.value} 
                style={{ display: 'none' }}
                onChange={handleChange} 
            />
            <DropDownList
                handleChange={handleChange} 
                name={'tipoRequerimiento'}
                label={'Tipo Requerimiento'}
                required={true}
                readOnly={false}
                loadOptions={loadOptions}
                isClearable={true}
                isSearchable={false}
                showError={showError}
                errorMessage={errorMessage}
            />
        </>
    );
};

export default TipoRequerimientoSelect;