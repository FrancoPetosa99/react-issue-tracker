import 'bootstrap/dist/css/bootstrap.min.css';

function SelectBox({ label, options, onChangeFunction }){

    return( 
        <div>
            <label>{label}</label>
            <select onChange={(e) => onChangeFunction(e.target.value, label)} class="form-select form-select-sm" aria-label="Small select example">
                <option value="Todos">Todos</option>
                {options.map((option)=>{
                    return (<option value={option}>{option}</option>)
                })}
            </select>
        </div>
    );
};

export default SelectBox;