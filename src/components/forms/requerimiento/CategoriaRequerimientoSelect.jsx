import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import DropDownList from '../../../inputs/DropDownList';
import getCategoriaRequerimientos from '../../../services/getCategoriaRequerimientos';
import Toast from '../../../utils/Toast';

function CategoriaRequerimientoSelect({ field, showError, errorMessage }){
 
    const { authToken } = useContext(AuthContext);

    const loadOptions = (searchValue, callback) => {
        
        getCategoriaRequerimientos(authToken)
        .then((data) => {
            const mappedArr = data.data.map(categoria => {
                return { 
                    value: categoria.id, 
                    label: categoria.descripcion, 
                    id: categoria.id 
                };
            });
            callback(mappedArr);
        })
        .catch((e)=> Toast({ icon: 'error', title: 'Ups!', text: 'Ha ocurrido un error: ' + e.mssage }));
    };

    const handleChange = (selectedCategoriaRequerimiento) => {
        if (!selectedCategoriaRequerimiento) return field.onChange(null);
        const categoriaRequerimientoId = selectedCategoriaRequerimiento.id;        
        field.onChange(categoriaRequerimientoId);
    };

    return(
        <>
            <input 
                type={'number'}
                name={'categoriaRequerimientoId'}
                id={'categoriaRequerimientoId'}
                value={field.value} 
                style={{ display: 'none' }}
                onChange={handleChange} 
            />
            <DropDownList
                handleChange={handleChange} 
                name={'categoriaRequerimiento'}
                label={'Categoría Requerimiento'}
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

export default CategoriaRequerimientoSelect;