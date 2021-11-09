import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { VscThreeBars } from 'react-icons/vsc';
import { FaTimes } from 'react-icons/fa';

const NavbarSecondary = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef();
  const linksRef = useRef();

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

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
        <Link to='/products'>Products</Link>
        <a href='#'>Contact</a>
        <a href='#'>About Us</a>
      </div>
      <div className='nav-icons-secondary'>
        <Link to='/' className='home-link'>
          <i className='fi fi-rr-search'></i>
        </Link>
        <Link to='/login' className='home-link'>
          <i className='fi fi-rr-user'></i>
        </Link>
        <Link to='/cart' className='home-link'>
          <i className='fi fi-rr-shopping-cart'></i>
        </Link>
      </div>

      {/* Part for responsive screen*/}
      {!showLinks && (
        <button className='nav-bar-responsive-secondary' onClick={toggleLinks}>
          <VscThreeBars />
        </button>
      )}
      {showLinks && (
        <button className='nav-bar-responsive-secondary' onClick={toggleLinks}>
          <FaTimes />
        </button>
      )}
      <div className='nav-mobile-links-container' ref={linksContainerRef}>
        <div ref={linksRef}>
          <div className='nav-mobile-links'>
            <Link to='/' className='home-link'>
              Home
            </Link>
            <Link to='/products' className='home-link black'>
              Products
            </Link>
            <Link to='/' className='home-link black'>
              Contact
            </Link>
            <Link to='/' className='home-link black'>
              About Us
            </Link>
            <div className='nav-mobile-icons'>
              <Link to='/login' className='home-link'>
                <span style={{ fontSize: '1.5rem' }}>
                  <i className='fi fi-rr-user'></i>
                </span>{' '}
                <span style={{ fontSize: '0.75rem' }}>Log In</span>
              </Link>
              <Link to='/cart' className='home-link'>
                <span style={{ fontSize: '1.5rem' }}>
                  <i className='fi fi-rr-shopping-cart'></i>
                </span>{' '}
                <span style={{ fontSize: '0.75rem' }}>View Cart</span>{' '}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSecondary;
