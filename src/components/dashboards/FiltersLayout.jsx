import React from 'react';

function FiltersLayout({ children }) {
    return(
        <div style={stylesContainer}>
            { children }
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

export default FiltersLayout;