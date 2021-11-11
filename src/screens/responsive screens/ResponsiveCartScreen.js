import React, { useContext } from 'react';
import { Row, Col, Container, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';
import CartContext from '../../context/cart-context';

const ResponsiveCartScreen = () => {
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
      <Row className='responsive-cart-screen'>
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
              <div className='resp-cart-items-container'>
                <div className='resp-cart-first-container'>
                  <div className='resp-cart-headers'>
                    <div>Item</div>
                  </div>
                  {cartItems.map((item) => (
                    <div className='resp-cart-items-details'>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div className='resp-cart-1st-row'>
                          <Image
                            src={item.image}
                            alt={item.name}
                            className='cart-product-image'
                          />
                          <div>
                            <span style={{ fontWeight: 'bold' }}>
                              <p
                                style={{
                                  marginBottom: '0rem',
                                  fontSize: '0.9rem',
                                }}
                              >
                                {item.name}
                              </p>
                            </span>
                            <p
                              style={{
                                color: '#868e96',
                                fontSize: '0.9rem',
                              }}
                            >
                              Category: {item.category}
                            </p>
                          </div>
                        </div>
                        <div>
                          <button
                            className='cross-btn-cart'
                            onClick={() => deleteProduct(item.id)}
                          >
                            <FaTimes />
                          </button>
                        </div>
                      </div>
                      <div className='resp-price'>
                        <div>Price Per Item</div>
                        <div
                          style={{
                            paddingTop: '1rem',
                            textAlign: 'right',
                          }}
                        >
                          <p>${item.price}</p>
                        </div>
                      </div>
                      <div className='resp-qty'>
                        <div>Quantity</div>
                        <div
                          className='qty-control'
                          style={{
                            paddingLeft: '0',
                          }}
                        >
                          <button
                            className='qty-btns'
                            onClick={() => decreaseProduct(item.id)}
                          >
                            <HiMinusSm />
                          </button>
                          <p className='qty'>{item.qty}</p>
                          <button
                            className='qty-btns'
                            onClick={() => increaseProduct(item.id)}
                          >
                            <HiPlusSm />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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
    </>
  );
};

export default ResponsiveCartScreen;
