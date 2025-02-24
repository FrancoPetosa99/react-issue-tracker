import React, { useContext, useState } from 'react';
import getTipoRequerimientos from '../../../services/getTipoRequerimientos';
import { AuthContext } from '../../../context/AuthContext';
import AsyncSelect from 'react-select/async';
import FilterLabel from '../FilterLabel';
import FilterSelect from '../FilterSelect';

function FilterTipoRequerimiento({ handleChange }) {

    const { authToken } = useContext(AuthContext);

    const [ filters, setFilters ] = useState([ ]);

    const loadOptions = (searchValue, callback) => {
        getTipoRequerimientos(authToken)
        .then((data) => {

            const mappedArr = data.data.map(tipo => {
                return { 
                    value: tipo.codigo, 
                    label: tipo.descripcion, 
                    id: tipo.id 
                };
            });
            
            callback(mappedArr);

        })
        .catch((e)=> Toast({ icon: 'error', title: 'Ups!', text: 'Ha ocurrido un error: ' + e.mssage }));
    };

    const onFilterChange = (selectedOption) => {
        const value = selectedOption.value;
        setFilters([ ...filters, value]);
        handleChange('tipoRequerimiento', [ ...filters, value]);
    };

    const removeFilter = (value) => {
        setFilters(filters.filter(filter => filter !== value));
        handleChange('tipoRequerimiento', filters.filter(filter => filter !== value));
    };

    return (
        <div style={containerStyles}>
            <FilterSelect 
                name={'tipoRequerimientoSelect'}
                id={'tipoRequerimientoSelect'}
                placeholder={'Tipo...'}
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

export default FilterTipoRequerimiento;