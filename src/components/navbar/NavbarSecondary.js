import React from 'react';
import { Link } from 'react-router-dom';

const NavbarSecondary = () => {
  return (
    <div className='navbar-secondary'>
      <div className='nav-brand-secondary'>
        <Link to='/' className='home-link'>
          <h4>e-Lectro</h4>
        </Link>
        <span style={{ fontSize: '1.5rem', color: 'skyblue' }}>.</span>
      </div>
      <div className='nav-links-secondary'>
        <a href='/'>Home</a>
        <a href='/products'>Products</a>
        <a href='#'>Contact</a>
        <a href='#'>About Us</a>
      </div>
      <div className='nav-icons-secondary'>
        <a href='#'>
          <i className='fi fi-rr-search'></i>
        </a>
        <a href='#'>
          <i className='fi fi-rr-user'></i>
        </a>
        <a href='#'>
          <i className='fi fi-rr-shopping-cart'></i>
        </a>
      </div>
    </div>
  );
};

export default NavbarSecondary;
