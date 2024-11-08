import React from 'react';
import SideBar from '../components/SideBar';

function Layout({ children }) {
    
    const style = {
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: '1rem'
    };
    
    const stylesContent = {
        height: '100vh',
        width: "100%",
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        overflow: "auto"
    };
    
    const sideBarContainerStyles = {
        maxWidth: "250px",
        width: "100%"
    };

    return (
        <div style={style}>
            <div style={sideBarContainerStyles}><SideBar /></div>
            <div style={stylesContent}>
                { children }
            </div>
        </div>
    );
}

export default Layout;