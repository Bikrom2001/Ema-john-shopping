import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div>
           <nav className='Header'>
            <img src={logo} alt="" />
            <div>
                <a href="/Order">Order</a>
                <a href="/order">Order Review</a>
                <a href="/manage">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
           </nav>
        </div>
    );
};

export default Header;