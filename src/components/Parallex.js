import React from 'react';
import { Button } from 'react-bootstrap';

const Parallex = () => {
  return (
    <div className='parallex'>
      <div className='first-parallex flex'>
        <div className='parallex-details justify-left'>
          <h6>Just arrived</h6>
          <h1>
            Latest Smart
            <br /> Watches
          </h1>
          <Button variant='outline-light' className='parallex-btn border-thin'>
            See Products
          </Button>
        </div>
      </div>
      <div className='second-parallex flex'>
        <div className='parallex-details justify-left'>
          <h1>
            Classy <br /> Headphones
          </h1>
          <h6>Trendy. Comfy. Fashionable</h6>
          <Button variant='outline-dark' className='parallex-btn border-thin'>
            See Products
          </Button>
        </div>
      </div>
      <div className='third-parallex flex'>
        <div className='parallex-details justify-right'>
          <h6>
            Our Favourites <br /> Collections
          </h6>
          <h1>
            Smart <br /> Phones
          </h1>
          <Button variant='outline-dark' className='parallex-btn border-thin'>
            See Products
          </Button>
        </div>
      </div>
      <div className='fourth-parallex flex'>
        <div className='parallex-details justify-left'>
          <h1>
            Canon's
            <br /> Collection
          </h1>
          <Button variant='outline-light' className='parallex-btn border-thin'>
            See Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Parallex;
