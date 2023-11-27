import React from 'react';
import logo from '../img/logo.png';

function Header() {
    return (
        <React.Fragment>
            <header className="text-center bg-info">
                <div className="mt-3 ml-3 d-inline float-left">
                    <a href="/" className="text-white"><i className="fas fa-home fa-3x"></i>Inicio</a>
                </div>
                <div className="d-inline">
                    <img src={logo} className="p-3" width="200px" heigth="100px" alt='logo del sitio' />
                </div>
            </header>
        </React.Fragment>
    );
}

export default Header;