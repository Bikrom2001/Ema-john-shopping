import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);




    return (
        <div>
           <nav className='Header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/order">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/about">About</Link>
              {  
              user?.uid ? 
                 <Link onClick={logOut}>LogOut</Link>
              :
                <>
                 <Link to="/login">Login</Link>
                <Link to="/signup">SignUp</Link>
                </>
                }
            </div>
           </nav>
        </div>
    );
};

export default Header;