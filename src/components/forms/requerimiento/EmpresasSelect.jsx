import 'bootstrap/dist/css/bootstrap.min.css';
import DropDownList from '../../../inputs/DropDownList';
import Toast from '../../../utils/Toast';
import getEmpresas from '../../../services/getEmpresas';

function EmpresasSelect({ formData, setFormData }){

    const name = 'empresaId';
    const label = 'Empresa';
    const isSearchable = false;
    const isClearable = true;

    const loadOptions = (searchValue, callback) => {
    
        getEmpresas()
        .then((data) => {

            const mappedArr = data.data.map(empresa => {
                return { value: empresa.id, label: empresa.nombre, id: empresa.id };
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
            required={true}
            readOnly={false}
            loadOptions={loadOptions}
            isClearable={isClearable}
            isSearchable={isSearchable}
            isDisabled={formData.tipoRequerimientoId ? false : true}
        />
    );
};

export default EmpresasSelect;