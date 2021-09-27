import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <h1>Concert for Bangladesh</h1>
            <h3>Budget 50 Lacks</h3>
            <nav>
                <a href="#">Home</a>
                <a href="#">Review</a>
                <a href="#">Contact</a>
            </nav>
        </div>
    );
};

export default Header;