import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import DropDownList from '../../../inputs/DropDownList';
import getRequerimientos from '../../../services/getRequerimientos';

function RequerimientosRelacionadosSelect({ formData, setFormData }){
    
    const name = 'listaRequerimientosId';
    const label = 'Relacionar Requerimientos';
    const isSearchable = true;
    const isClearable = true;
    const isMulti = true;

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
        const mappedArr = data.map(opcion => opcion.value);
        setFormData({
            ...formData,
            [name]: mappedArr,
        });
    };
    
    return( 
        <DropDownList 
            isMulti={isMulti}
            handleChange={handleChange} 
            name={name} 
            label={label}
            loadOptions={loadOptions}
            isClearable={isClearable}
            isSearchable={isSearchable}
        />
    );
};

export default RequerimientosRelacionadosSelect;