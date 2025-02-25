import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import getCategoriaRequerimientos from '../../../services/getCategoriaRequerimientos';
import FilterLabel from '../FilterLabel';
import FilterSelect from '../FilterSelect';

function FilterCategoriaRequerimiento({ handleChange }) {

    const { authToken } = useContext(AuthContext);

    const [ filters, setFilters ] = useState([ ]);

    const loadOptions = (searchValue, callback) => {
        getCategoriaRequerimientos(authToken)
        .then((data) => {

            const mappedArr = data.data.map(categoria => {
                return { 
                    value: categoria.descripcion, 
                    label: categoria.descripcion, 
                    id: categoria.id 
                };
            });
            
            callback(mappedArr);

        })
        .catch((e)=> Toast({ icon: 'error', title: 'Ups!', text: 'Ha ocurrido un error: ' + e.mssage }));
    };

    const onFilterChange = (selectedOption) => {
        const value = selectedOption.value;
        setFilters([ ...filters, value]);
        handleChange('categoriaRequerimiento', [ ...filters, value]);
    };

    const removeFilter = (value) => {
        setFilters(filters.filter(filter => filter !== value));
        handleChange('categoriaRequerimiento', filters.filter(filter => filter !== value));
    };

    return (
        <div style={containerStyles}>
            <FilterSelect
                name={'categoriaRequerimientoSelect'}
                id={'categoriaRequerimientoSelect'}
                placeholder={'Categoria...'}
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

export default FilterCategoriaRequerimiento;