import React from 'react';
import { Row, Col, Image, Form, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import NavbarSecondary from '../components/navbar/NavbarSecondary';
import staticData from '../data/staticData';

const CartScreen = () => {
  return (
    <>
      <NavbarSecondary />

      <Row className='cart-screen-container'>
        <Col md={8}>
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
            <ListGroup variant='flush'>
              {staticData.map((item) => (
                <ListGroup key={item._id}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to='/product' className='home-link'>
                        {item.name}
                      </Link>
                    </Col>
                    <Col md={2}>${item.price}</Col>
                    <Col md={2}>
                      <Form.Control as='select'>
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option value={x + 1} key={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <button>
                        <FaTimes />
                      </button>
                    </Col>
                  </Row>
                </ListGroup>
              ))}
            </ListGroup>
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default CartScreen;
