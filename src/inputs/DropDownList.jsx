import React from "react";
import AsyncSelect from "react-select/async";

function DropDownList({ 
    name,
    label,
    isSearchable, 
    isClearable, 
    isLoading, 
    isDisabled, 
    handleChange,
    loadOptions,
    value,
    isMulti
}) {

    return(
        <div style={styles} >
            <label>{label}</label>
            <AsyncSelect
                className="basic-single"
                classNamePrefix="select"
                isDisabled={isDisabled}
                isLoading={isLoading}
                isClearable={isClearable}
                isSearchable={isSearchable}
                name={name}
                loadOptions={loadOptions}
                value={value}
                onChange={(selectedOption) => handleChange(selectedOption)}
                defaultOptions
                placeholder="Seleccionar..."
                noOptionsMessage={() => "No hay opciones disponibles"}
                isMulti={isMulti}
            />
        </div>
    );
}

const styles = {
    width: '100%'
}

export default DropDownList;