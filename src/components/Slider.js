import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <img
          className='d-block slider-img'
          src='https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'
          alt='First slide'
        />
        <Carousel.Caption className='carousel-text'>
          <p>our best seller</p>
          <h3>
            classy
            <br /> headphones
          </h3>
          <Link to='/products'>
            <Button variant='outline-dark' className='carousel-btn'>
              Start Shopping
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className='d-block slider-img'
          src='https://images.unsplash.com/photo-1518908336710-4e1cf821d3d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1013&q=80'
          alt='Second slide'
        />
        <Carousel.Caption className='carousel-text'>
          <p>our best seller</p>
          <h3>
            Play-Tech
            <br /> Consoles
          </h3>
          <Link to='/products'>
            <Button variant='outline-dark' className='carousel-btn'>
              Get Yours
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className='d-block slider-img'
          src='https://images.unsplash.com/photo-1510297182321-a75bdc5b1299?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=902&q=80'
          alt='Third slide'
        />
        <Carousel.Caption className='carousel-text'>
          <p>our best seller</p>
          <h3>
            brand new
            <br />
            smart phones
          </h3>
          <Link to='/products'>
            <Button variant='outline-dark' className='carousel-btn'>
              View Collection
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
