import 'bootstrap/dist/css/bootstrap.min.css';
import DropDownList from '../../../inputs/DropDownList';

function PrioridadRequerimientoSelect({ field, showError, errorMessage }){
    
    const loadOptions = (searchValue, callback) => {

        const options = [
            { value: 'Baja', label: 'Baja' },
            { value: 'Media', label: 'Media' },
            { value: 'Alta', label: 'Alta' },
            { value: 'Urgente', label: 'Urgente' }
        ];

        callback(options);
    }

    const handleChange = (prioridad) => {
        if (!prioridad) return field.onChange(null);
        const value = prioridad.value;        
        field.onChange(value);
    };
    
    return( 
        <>
            <input 
                type={'text'}
                name={'prioridad'}
                id={'prioridad'}
                value={field.value} 
                style={{ display: 'none' }}
                onChange={handleChange} 
            />
            <DropDownList 
                handleChange={handleChange} 
                name={'prioridad'} 
                label={'Prioridad'}
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

export default PrioridadRequerimientoSelect;