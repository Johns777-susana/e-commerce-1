import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { BsArrowsFullscreen } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded products-container'>
      <Card.Img src={product.image} variant='top' alt={product.name} />
      <Card.Body className='products-text'>
        <Card.Title as='div' style={{ textTransform: 'capitalize' }}>
          <strong>{product.name}</strong>
        </Card.Title>
        <Card.Text as='div' style={{ color: '#f57224', fontSize: '1.5rem' }}>
          ${product.price}
        </Card.Text>
      </Card.Body>
      <Card.Body className='card-overlay card-overlayFade'>
        <Button variant='outline-light' className='overlay-btns'>
          <FiShoppingCart /> Add
        </Button>
        <Button variant='outline-dark' className='overlay-btns'>
          <BsArrowsFullscreen /> View
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
