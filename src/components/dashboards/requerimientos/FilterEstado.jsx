import React, { useState } from 'react';
import FilterLabel from '../FilterLabel';
import FilterSelect from '../FilterSelect';

function FilterEstado({ handleChange }) {

    const [ filters, setFilters ] = useState([ ]);

    const loadOptions = (searchValue, callback) => {
        callback([
            {
                label: 'Abierto',
                value: 'Abierto',
                id: 'Abierto'
            },
            {
                label: 'Asignado',
                value: 'Asignado',
                id: 'Asignado'
            },
            {
                label: 'Cerrado',
                value: 'Cerrado',
                id: 'Cerrado'
            }
        ]);
    };

    const onFilterChange = (selectedOption) => {
        const value = selectedOption.value;
        setFilters([ ...filters, value]);
        handleChange('estado', [ ...filters, value]);
    };

    const removeFilter = (value) => {
        setFilters(filters.filter(filter => filter !== value));
        handleChange('estado', filters.filter(filter => filter !== value));
    };

    return (
        <div style={containerStyles}>
            <FilterSelect
                name={'estadoSelect'}
                id={'estadoSelect'}
                placeholder={'Estado...'}
                onFilterChange={onFilterChange}
                loadOptions={loadOptions}
            />
            <div style={filterContainerStyles}>
                {
                    filters.map((filter, index) => 
                        <FilterLabel 
                            filter={filter} 
                            removeFilter={removeFilter} 
                            key={index}
                        />
                    )
                }
            </div>
        </div>
    );
}

const containerStyles = {
    height: 'auto',
    width: '100%', 
    maxWidth: '400px'
};

const filterContainerStyles = {
    height: 'auto',
    width: '100%', 
    display:'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
};

export default FilterEstado;