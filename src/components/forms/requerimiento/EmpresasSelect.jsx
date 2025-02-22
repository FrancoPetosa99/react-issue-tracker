import 'bootstrap/dist/css/bootstrap.min.css';
import DropDownList from '../../../inputs/DropDownList';
import Toast from '../../../utils/Toast';
import getEmpresas from '../../../services/getEmpresas';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

function EmpresasSelect({ field, showError, errorMessage }){

    const { authToken } = useContext(AuthContext);

    const loadOptions = (searchValue, callback) => {
    
        getEmpresas(authToken)
        .then((data) => {

            const mappedArr = data.data.map(empresa => {
                return { 
                    value: empresa.id, 
                    label: empresa.nombre, 
                    id: empresa.id 
                };
            });
            
            callback(mappedArr);

        })
        .catch((e)=> Toast({ icon: 'error', title: 'Ups!', text: 'Ha ocurrido un error: ' + e.mssage }));
    };

    const handleChange = (selectedOption) => field.onChange(selectedOption.value);

    return(
        <>
            <input 
                type={'number'}
                name={'empresaId'}
                id={'empresaId'}
                value={field.value} 
                style={{ display: 'none' }}
                onChange={handleChange} 
            />

            <DropDownList
                handleChange={handleChange} 
                name={'empresa'}
                label={'Empresa'}
                required={true}
                readOnly={false}
                loadOptions={loadOptions}
                isClearable={true}
                isSearchable={false}
                isDisabled={false}
                showError={showError}
                errorMessage={errorMessage}
            />
        </>
    );
};

export default EmpresasSelect;