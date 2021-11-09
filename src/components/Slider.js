import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <div className='d-block slider-img-1'></div>
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
        <div className='d-block slider-img-2'></div>
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
        <div className='d-block slider-img-3'></div>
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
