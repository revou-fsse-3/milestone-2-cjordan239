import { useNavigate } from 'react-router-dom';
import './style-navbar.css';
import React from 'react';

const NavBar = () => {
  const navigate = useNavigate()

  return (
    <nav className='Navbar'>
      <h1> NewsAPP </h1>
      <div>
        <ul className='NavbarMenu'>
        <button onClick={() => navigate('/home')}> 
            Home
          </button>
          <button onClick={() => navigate('/register')}> 
            register
          </button>
          <button onClick={() => navigate('/login')}> 
            Login
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
