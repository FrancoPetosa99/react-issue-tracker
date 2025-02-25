import 'bootstrap/dist/css/bootstrap.min.css';
import SelectBox from './SelectBox';

function Filter({ name, label, options, handleChange }){
    return( 
        <SelectBox handleChange={handleChange} name={name} label={label} options={[ { value: 'Todos', text: 'Todos' }, ...options ]} />
    );
};

export default Filter;