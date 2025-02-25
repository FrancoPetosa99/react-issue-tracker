import React from "react";
import AsyncSelect from "react-select/async";

function DropDownList({ 
    name,
    label,
    placeholder,
    required,
    readOnly,
    isSearchable, 
    isClearable, 
    isLoading, 
    handleChange,
    loadOptions,
    value,
    isMulti,
    showError, 
    errorMessage
}) {

    return(
        <div style={styles} >
            <div style={{ width: '100%' }}>
                <label htmlFor={name} className="form-label">{label}</label>
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
                id={name}
                loadOptions={loadOptions}
                value={value}
                onChange={(selectedOption) => handleChange(selectedOption)}
                defaultOptions
                placeholder={placeholder ? placeholder : 'Seleccionar...'}
                noOptionsMessage={() => "No hay opciones disponibles"}
                isMulti={isMulti}
                styles={{
                    control: (styles) => {
            
                        if (showError) {
                            return {
                                ... styles,
                                borderColor: '#dc3545'
                            }
                        }

                        return styles;
                    }
                }}
            />
            { showError && <b style={errorMessageStyles}> { errorMessage } </b> }
        </div>
    );
}

const styles = {
    width: '100%'
};

const requiredStyles = {
    fontSize: '14px', 
    color: 'red'
};

const errorMessageStyles = {
    fontSize: '12px', 
    color: '#dc3545'
};

export default DropDownList;