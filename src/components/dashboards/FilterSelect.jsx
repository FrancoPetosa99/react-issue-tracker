import React from 'react';
import { MdFilterAlt } from "react-icons/md";
import AsyncSelect from 'react-select/async';

function FilterSelect({ name, placeholder, loadOptions, onFilterChange }) {

    const CustomDropdownIndicator = (props) => {
        const { selectProps } = props;
        return (
            <div {...props.innerRef} {...props.innerProps} style={{ padding: "5px" }}>
                <MdFilterAlt size={20} color={selectProps.menuIsOpen ? "#007bff" : "#6c757d"} />
            </div>
        );
    };

    return (
        <AsyncSelect
            className="basic-single"
            classNamePrefix="select" 
            name={name}
            id={name}
            placeholder={placeholder}
            required={false}
            isDisabled={false}
            isSearchable={false}
            isClearable={false}
            onChange={(selectedOption) => onFilterChange(selectedOption)}
            loadOptions={loadOptions}
            defaultOptions
            isMulti={false}
            components={{ DropdownIndicator: CustomDropdownIndicator }} 
        />
    );
}

export default FilterSelect;