import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { BsArrowsFullscreen } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded products-container'>
      <Card.Img src={product.image} variant='top' alt={product.name} />
      <Card.Body className='products-text'>
        <Card.Title as='div'>
          <h6
            style={{
              textTransform: 'capitalize',
              fontSize: '1rem',
              letterSpacing: '2px',
            }}
          >
            {product.name}
          </h6>
        </Card.Title>
        <Card.Text as='div' style={{ color: '#868e96', fontSize: '0.9rem' }}>
          ${product.price}.00
        </Card.Text>
      </Card.Body>
      <Card.Body className='card-overlay card-overlayFade'>
        <Button variant='outline-light' className='overlay-btns'>
          <FiShoppingCart /> Add
        </Button>
        <Link to={`/product/${product._id}`} className='home-link'>
          <Button variant='outline-light' className='overlay-btns'>
            <BsArrowsFullscreen /> View
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Product;
