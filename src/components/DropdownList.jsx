import 'bootstrap/dist/css/bootstrap.min.css';
import SelectBox from './SelectBox';

function DropdownList({ name, label, options, handleChange }){
    return( 
        <SelectBox handleChange={handleChange} name={name} label={label} options={[ { value: 0, text: 'Seleccionar elemento' }, ...options ]} />
    );
};

export default DropdownList;