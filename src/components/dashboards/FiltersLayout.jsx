import React from 'react';

function FiltersLayout({ children }) {
    return(
        <div className='mb-3' style={stylesContainer}>
            { children }
      </div>
    );
}

const stylesContainer = {
    height: 'auto',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '.4rem'
};

export default FiltersLayout;