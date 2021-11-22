import React from 'react';
import Slider from './Slider';
import Navbar from './navbar/Navbar';
import Parallex from './Parallex';

const Header = () => {
  return (
    <div>
      {/* <div className='carousel-container'>
        <Slider />
      </div> */}
      <div className='parallex-container'>
        <Parallex />
      </div>
      <div className='nav-abs'>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
