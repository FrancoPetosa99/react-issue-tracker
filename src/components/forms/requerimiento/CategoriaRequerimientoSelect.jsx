import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import DropDownList from '../../../inputs/DropDownList';
import getCategoriaRequerimientos from '../../../services/getCategoriaRequerimientos';
import Toast from '../../../utils/Toast';

function CategoriaRequerimientoSelect({ formData, setFormData, required, readOnly }){

    const name = 'categoriaRequerimientoId';
    const label = 'Categoría Requerimiento';
    const isSearchable = false;
    const isClearable = true;
    
    const { authToken } = useContext(AuthContext);

    const loadOptions = (searchValue, callback) => {
        
        getCategoriaRequerimientos(authToken, 1)
        .then((data) => {
            const mappedArr = data.data.map(categoria => {
                return { value: categoria.id, label: categoria.descripcion, id: categoria.id };
            });
            callback(mappedArr);
        })
        .catch((e)=> Toast({ icon: 'error', title: 'Ups!', text: 'Ha ocurrido un error: ' + e.mssage }));
    };

    const handleChange = ({ value }) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return(
        <DropDownList
            handleChange={handleChange} 
            name={name}
            label={label}
            required={required}
            readOnly={readOnly}
            loadOptions={loadOptions}
            isClearable={isClearable}
            isSearchable={isSearchable}
            isDisabled={formData.tipoRequerimientoId ? false : true}
        />
    );
};

export default CategoriaRequerimientoSelect;