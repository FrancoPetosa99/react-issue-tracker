import 'bootstrap/dist/css/bootstrap.min.css';
import DropDownList from '../../../inputs/DropDownList';
import getTipoRequerimientos from '../../../services/getTipoRequerimientos';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import Toast from '../../../utils/Toast';

function TipoRequerimientoSelect({ formData, setFormData }){
    
    const name = 'tipoRequerimientoId';
    const label = 'Tipo Requerimiento';
    const isSearchable = false;
    const isClearable = true;

    const { authToken } = useContext(AuthContext);

    const loadOptions = (searchValue, callback) => {
        getTipoRequerimientos(authToken)
        .then((data) => {
            const mappedArr = data.data.map(tipoRequerimiento => {
                return { value: tipoRequerimiento.id, label: tipoRequerimiento.descripcion, id: tipoRequerimiento.id };
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
            loadOptions={loadOptions}
            isClearable={isClearable}
            isSearchable={isSearchable}
        />
    );
};

export default TipoRequerimientoSelect;