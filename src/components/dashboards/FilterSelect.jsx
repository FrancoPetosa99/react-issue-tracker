import React, { useState } from 'react';
import DropDownList from '../../inputs/DropDownList';

function FilterSelect({ name, placeholder, fetchOptions, handleChange }) {

    const [ input, setInput ] = useState('');

    const loadOptions = (searchValue, callback) => {
        fetchOptions()
        .then((data) => callback(data));
    };

    const onFilterChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setInput(value);

        handleChange(name, value);
    };

    return (
        <DropDownList 
            name={name}
            placeholder={placeholder}
            required={false}
            readOnly={false}
            isSearchable={false}
            isClearable={false}
            handleChange={onFilterChange}
            loadOptions={loadOptions}
            value={input}
            isMulti={false}
        />
    );
}

export default FilterSelect;