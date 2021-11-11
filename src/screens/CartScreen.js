import React, { useContext } from 'react';
import { Row, Col, Image, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';
import NavbarSecondary from '../components/navbar/NavbarSecondary';
import Benefits from '../components/Benefits';
import Footer from '../components/Footer';
import CartContext from '../context/cart-context';
import ResponsiveCartScreen from './responsive screens/ResponsiveCartScreen';

const CartScreen = () => {
  /*Context*/
  const {
    cartItems,
    deleteProduct,
    decreaseProduct,
    increaseProduct,
    totalPrice,
    wholePrice,
  } = useContext(CartContext);

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
          {cartItems.length > 0 ? (
            <>
              <Col>
                <Container fluid>
                  <Row className='cart-items-container'>
                    <Col xs={8} className='cart-first-container'>
                      <Row className='cart-headers'>
                        <Col style={{ padding: '0' }}></Col>
                        <Col xs={4}>Item</Col>
                        <Col className='responsive-off'>Price</Col>
                        <Col className='responsive-off'>Quantity</Col>
                        <Col></Col>
                      </Row>
                      {cartItems.map((item) => (
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
                              <p style={{ marginBottom: '0rem' }}>
                                {item.name}
                              </p>
                            </span>
                            <p style={{ color: '#868e96' }}>
                              Category: {item.category}
                            </p>
                          </Col>
                          <Col style={{ paddingTop: '1rem' }}>
                            <p>${item.price}</p>
                          </Col>
                          <Col
                            className='qty-control'
                            style={{ paddingLeft: '0' }}
                          >
                            <button
                              className='qty-btns'
                              onClick={() => decreaseProduct(item.id)}
                            >
                              <HiMinusSm />
                            </button>
                            <p>{item.qty}</p>
                            <button
                              className='qty-btns'
                              onClick={() => increaseProduct(item.id)}
                            >
                              <HiPlusSm />
                            </button>
                          </Col>
                          <Col>
                            <button
                              className='cross-btn-cart'
                              onClick={() => deleteProduct(item.id)}
                            >
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
                          paddingBottom: '1rem',
                        }}
                      >
                        <Col xs={8}>
                          <p>Order Subtotal</p>
                        </Col>
                        <Col>${totalPrice}.00</Col>
                      </Row>
                      <Row
                        style={{
                          borderBottom: '1px solid #eee',
                          marginBottom: '1rem',
                          paddingBottom: '1rem',
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
                          paddingBottom: '1rem',
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
                          <p style={{ fontWeight: 'bold' }}>${wholePrice}.00</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <div className='cart-btns'>
                <Link to='/products' className='home-link'>
                  <button className='continue-shopping-btn'>
                    &#8592; Continue Shopping
                  </button>
                </Link>
                <button className='checkout-btn'>
                  Proceed to checkout &#8594;
                </button>
              </div>
            </>
          ) : (
            <div className='no-items-cart'>
              <h2>There are no items in your cart.</h2>
              <h2>Please add some items.</h2>
              <Link
                className='home-link'
                to='/products'
                style={{ marginTop: '1rem' }}
              >
                <Button variant='outline-success' className='no-items-cart-btn'>
                  Continue Shopping
                </Button>
              </Link>
            </div>
          )}
        </Col>
      </Row>
      <div className='responsive-cart-screen-container'>
        <ResponsiveCartScreen />
      </div>
      <Benefits />
      <Footer />
    </>
  );
};

export default CartScreen;
