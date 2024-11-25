import 'bootstrap/dist/css/bootstrap.min.css';

function SelectBox({ name, label, options, handleChange }){

    return( 
        <div>
            <label>{label}</label>
            <select name={name} onChange={handleChange} class="form-select form-select-sm" aria-label="Small select example">
                { options.map(option => <option key={option.value} value={option.value}>{option.text}</option>) }
            </select>
        </div>
    );
};

export default SelectBox;