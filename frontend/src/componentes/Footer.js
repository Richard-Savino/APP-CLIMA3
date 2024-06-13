import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>&copy; APLICACION METEOROLIGICA 2024.</p>
        </footer>
    );
};

const footerStyle = {
    background: 'black',
    color: '#fff',
    padding: '10px 0',
    textAlign: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100%'
};

export default Footer;
