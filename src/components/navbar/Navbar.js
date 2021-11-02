import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar navbar-in-product-screen'>
      <div className='nav-brand'>
        <Link to='/' className='home-link'>
          <h4>e-Lectro</h4>
        </Link>
        <span style={{ fontSize: '1.5rem', color: 'skyblue' }}>.</span>
      </div>
      <div className='nav-links'>
        <a href='/'>Home</a>
        <a href='/products'>Products</a>
        <a href='#'>Contact</a>
        <a href='#'>About Us</a>
      </div>
      <div className='nav-icons'>
        <a href='#'>
          <i class='fi fi-rr-search'></i>
        </a>
        <a href='#'>
          <i class='fi fi-rr-user'></i>
        </a>
        <a href='#'>
          <i class='fi fi-rr-shopping-cart'></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
