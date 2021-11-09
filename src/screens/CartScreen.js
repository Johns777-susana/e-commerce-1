import React from 'react';
import { Row, Col, Image, Form, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import NavbarSecondary from '../components/navbar/NavbarSecondary';
import staticData from '../data/staticData';
import Benefits from '../components/Benefits';
import Footer from '../components/Footer';

const CartScreen = () => {
  return (
    <>
      <NavbarSecondary />

      <Row className='cart-screen-container'>
        <Col md={10}>
          <Col className='flex-row'>
            <Link to='/' className='home-link'>
              Home
            </Link>{' '}
            / <p style={{ color: '#00000071' }}>Shopping Cart</p>
          </Col>
          <Col>
            <h1>Shopping Cart</h1>
          </Col>
          <Col>
            <Container fluid>
              <Row className='cart-items-container'>
                <Col xs={8} className='cart-first-container'>
                  <Row className='cart-headers'>
                    <Col></Col>
                    <Col xs={4}>Item</Col>
                    <Col>Price</Col>
                    <Col>Quantity</Col>
                    <Col>Total</Col>
                    <Col></Col>
                  </Row>
                  {staticData.map((item) => (
                    <Row className='cart-items-details'>
                      <Col xs={2}>
                        <Image
                          src={item.image}
                          alt={item.name}
                          className='cart-product-image'
                        />
                      </Col>
                      <Col xs={4}>
                        <span style={{ fontWeight: 'bold' }}>
                          <p style={{ marginBottom: '0rem' }}>{item.name}</p>
                        </span>
                        <p style={{ color: '#868e96' }}>
                          Category: {item.category}
                        </p>
                      </Col>
                      <Col style={{ paddingTop: '1rem' }}>
                        <p>${item.price}</p>
                      </Col>
                      <Col>
                        <Form.Control as='select' className='quantity-form'>
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                      <Col>
                        <p
                          style={{ paddingLeft: '0.5rem', paddingTop: '1rem' }}
                        >
                          $123
                        </p>
                      </Col>
                      <Col>
                        <button className='cross-btn-cart'>
                          <FaTimes />
                        </button>
                      </Col>
                    </Row>
                  ))}
                </Col>
                <Col className='order-container'>
                  <Row className='order-header'>
                    <Col>order summary</Col>
                  </Row>
                  <Row>
                    <p
                      style={{
                        fontSize: '0.7875rem',
                      }}
                    >
                      Shipping and additional costs are calculated based on
                      values you have entered.
                    </p>
                  </Row>
                  <Row
                    style={{
                      borderBottom: '1px solid #eee',
                      marginBottom: '1rem',
                      marginTop: '1rem',
                    }}
                  >
                    <Col xs={8}>
                      <p>Order Subtotal</p>
                    </Col>
                    <Col>$390.00</Col>
                  </Row>
                  <Row
                    style={{
                      borderBottom: '1px solid #eee',
                      marginBottom: '1rem',
                    }}
                  >
                    <Col xs={8}>
                      <p>Shipping and handling</p>
                    </Col>
                    <Col>$10.00</Col>
                  </Row>
                  <Row
                    style={{
                      borderBottom: '1px solid #eee',
                      marginBottom: '1rem',
                    }}
                  >
                    <Col xs={8}>
                      <p>Tax</p>
                    </Col>
                    <Col>$10.00</Col>
                  </Row>
                  <Row
                    style={{
                      marginBottom: '0.5rem',
                    }}
                  >
                    <Col xs={8}>
                      <p>Total</p>
                    </Col>
                    <Col>
                      <p style={{ fontWeight: 'bold' }}>$400.00</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Col>
        </Col>
      </Row>
      <div className='cart-btns'>
        <Link to='/products' className='home-link'>
          <button className='continue-shopping-btn'>
            &#8592; Continue Shopping
          </button>
        </Link>
        <button className='checkout-btn'>Proceed to checkout &#8594;</button>
      </div>
      <Benefits />
      <Footer />
    </>
  );
};

export default CartScreen;
