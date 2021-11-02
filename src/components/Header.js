import React from 'react';
import Slider from './Slider';
import Navbar from './navbar/Navbar';

const Header = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Navbar />
      <div className='carousel-container'>
        <Slider />
      </div>
    </div>
  );
};

export default Header;
