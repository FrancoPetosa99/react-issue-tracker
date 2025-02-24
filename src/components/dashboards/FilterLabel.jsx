import React from 'react';

function FilterLabel({ removeFilter, filter }) {
    return (      
        <div style={tagStyles}>
            {filter}  
            <span 
                style={removeFilterBtnStyles}
                onClick={() => removeFilter(filter)}
            >
                ×
            </span>
        </div>
    );
}

const tagStyles = {
    padding: '8px 12px',
    backgroundColor: '#475BEB',
    color: '#FFFFFF',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '12px',
    margin: '5px'
};

const removeFilterBtnStyles = {
    marginLeft: '8px',
    cursor: 'pointer',
    color: '#FFFFFF'
};

export default FilterLabel;