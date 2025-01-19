import 'bootstrap/dist/css/bootstrap.min.css';
import DropDownList from '../../../inputs/DropDownList';

function PrioridadRequerimientoSelect({ formData, setFormData }){
    
    const name = 'prioridad';
    const label = 'Prioridad';
    const isSearchable = false;
    const isClearable = true;

    const loadOptions = (searchValue, callback) => {

        const options = [
            { value: 'Baja', label: 'Baja' },
            { value: 'Media', label: 'Media' },
            { value: 'Alta', label: 'Alta' },
            { value: 'Urgente', label: 'Urgente' }
        ];

        callback(options);
    }

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

export default PrioridadRequerimientoSelect;