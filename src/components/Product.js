import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { BsArrowsFullscreen } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CartContext from '../context/cart-context';

const Product = ({ product }) => {
  /*Context*/
  const { addProduct } = useContext(CartContext);

  const addProductHandler = () => {
    const newCartItems = {
      id: Math.random(),
      image: product.image,
      price: product.price,
      name: product.name,
      category: product.category,
      qty: product.qty,
      shippingCost: product.shippingCost,
      tax: product.tax,
    };
    addProduct(newCartItems);
  };

  return (
    <>
      <Card className='my-3 p-3 rounded products-container'>
        <div className='overlay-container'>
          <Card.Img src={product.image} variant='top' alt={product.name} />
          <Card.Body className='card-overlay card-overlayFade'>
            <Button
              variant='outline-dark'
              className='overlay-btn-left'
              onClick={addProductHandler}
            >
              <FiShoppingCart />
            </Button>
            <Link to={`/product/${product._id}`} className='home-link'>
              <Button variant='dark' className='overlay-view-btn'>
                <FaSearch /> View
              </Button>
            </Link>
            <Link to='/products'>
              <Button variant='outline-dark' className='overlay-btn-right'>
                <BsArrowsFullscreen />
              </Button>
            </Link>
          </Card.Body>
        </div>
        <Card.Body className='products-text'>
          <Card.Text
            as='div'
            style={{
              color: '#868e96',
              fontSize: '0.9rem',
              paddingBottom: '0.15rem',
              textTransform: 'capitalize',
            }}
          >
            {product.category}
          </Card.Text>
          <Card.Title as='div' style={{ marginBottom: '0' }}>
            <Link to={`/product/${product._id}`} className='home-link'>
              <h6
                style={{
                  textTransform: 'uppercase',
                  fontSize: '1rem',
                  letterSpacing: '1px',
                  color: '#343a40',
                }}
              >
                {product.name}
              </h6>
            </Link>{' '}
          </Card.Title>
          <Card.Text as='div' style={{ color: '#868e96', fontSize: '1rem' }}>
            ${product.price}.00
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
