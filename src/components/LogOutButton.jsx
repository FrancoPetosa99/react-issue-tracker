import React from 'react';

function LogoutButton({ logout }) {

  const navIcon = {
    marginRight: "1rem"
  };

  const styleButton = {
    color: 'white',
    background: "transparent",
    border: "none"
  };

  return (
    <button style={styleButton} onClick={logout}><i style={navIcon} className="bi bi-box-arrow-right"></i>Logout</button>
  );
}

export default LogoutButton;