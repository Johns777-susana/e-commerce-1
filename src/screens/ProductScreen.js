import React, { useContext } from 'react';
import NavbarSecondary from '../components/navbar/NavbarSecondary';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Image, Form } from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi';
import Rating from '../components/Rating';
import Footer from '../components/Footer';
import Benefits from '../components/Benefits';
import products from '../data/products';
import CartContext from '../context/cart-context';

const ProductScreen = (props) => {
  const product = products.find((x) => x._id === Number(props.match.params.id));

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
    <div className='individual-product-container'>
      <NavbarSecondary />
      <Row
        className='py-4'
        style={{
          marginLeft: '0',
          marginRight: '0',
          padding: '0 0.5rem',
          marginBottom: '4rem',
        }}
      >
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={6} className='individual-product-details'>
          <Col className='flex-row'>
            <Link to='/' className='home-link'>
              Home
            </Link>{' '}
            /{' '}
            <Link to='/products' className='home-link'>
              Products
            </Link>{' '}
            / <p style={{ color: '#00000071' }}>{product.name}</p>
          </Col>
          <Col>
            <h1>{product.name}</h1>
          </Col>
          <Row className='individual-product-price'>
            <Col>${product.price}.00</Col>
            <Col>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </Col>
          </Row>
          <Col className='individual-product-desc'>
            <p>{product.desc}</p>
          </Col>
          <Row className='individual-product-info'>
            <Col>
              <h4>Stock :</h4>{' '}
              <p>
                {product.countInStock > 0
                  ? 'Product In Stock'
                  : 'Not Available in Stock'}
              </p>{' '}
            </Col>
            <Col>
              {product.countInStock > 0 && (
                <Col>
                  <h4>Quantity :</h4>
                  <Form.Control as='select' className='quantity-form'>
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </Form.Control>
                </Col>
              )}
            </Col>
          </Row>
          <Col>
            <Button
              variant='dark'
              disabled={product.countInStock === 0}
              type='button'
              className='btn-addCart'
              onClick={addProductHandler}
            >
              <FiShoppingCart /> Add To Cart
            </Button>
          </Col>
        </Col>
      </Row>
      <Benefits />
      <Footer />
    </div>
  );
};

export default ProductScreen;
