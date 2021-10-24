import React from 'react';
import Slider from './Slider';

const Header = () => {
  return (
    <navbar>
      <div className='carousel-container'>
        <Slider />
      </div>
      <div className='navbar'>
        <div className='nav-brand'>
          <h4>e-LECTR0</h4>
          <span style={{ fontSize: '1.5rem' }}>.</span>
        </div>
        <div className='nav-links'>
          <a href='#'>Home</a>
          <a href='#'>Products</a>
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
    </navbar>
  );
};

export default Header;
