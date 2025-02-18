import React from 'react';
import FilterInput from './FilterInput';

function Filters({ filters, onFilterChange }) {
    return(
        <div style={stylesContainer}>
            { filters.map(filter => 
                <FilterInput 
                    type={'text'}
                    name={filter.name}
                    placeholder={filter.label}
                    key={filter.name}
                    callback={onFilterChange}
                />
            )}
      </div>
    );
}

const stylesContainer = {
    height: 'auto',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '.4rem'
};

export default Filters;