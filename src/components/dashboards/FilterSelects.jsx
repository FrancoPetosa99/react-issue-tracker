import React from 'react';
import FilterSelect from './FilterSelect';

function Filters({ filters, onFilterChange }) {
    return(
        <div style={stylesContainer}>
            { filters.map(filter => 
                <FilterSelect 
                    name={filter.name}
                    placeholder={filter.label}
                    key={filter.name}
                    callback={onFilterChange}
                    fetchOptions={filter.fetchOptions}
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