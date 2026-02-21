import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo-section">
                    <img src="../../public/images/logo.png" alt="Logo" className="logo" />
                    {/* <h1 className="site-name">RESOLVEX</h1> */}
                </div>
                <nav className="menu">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                <div className="user-section">
                    <span className="user-info">User Name</span>
                    <button className="logout-btn">Logout</button>
                </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;