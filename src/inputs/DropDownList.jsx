import React from "react";
import AsyncSelect from "react-select/async";

function DropDownList({ 
    name,
    label,
    required,
    readOnly,
    isSearchable, 
    isClearable, 
    isLoading, 
    handleChange,
    loadOptions,
    value,
    isMulti
}) {

    return(
        <div style={styles} >
            <div>
                <label>{label}</label>
                { required && <b style={requiredStyles}>*</b> }
            </div>
            <AsyncSelect
                className="basic-single"
                classNamePrefix="select"
                isDisabled={readOnly}
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

const requiredStyles = {
    fontSize: '14px', 
    color: 'red'
};

export default DropDownList;