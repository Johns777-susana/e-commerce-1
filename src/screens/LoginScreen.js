import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import NavbarSecondary from '../components/navbar/NavbarSecondary';
import { Link } from 'react-router-dom';
import { RiLoginBoxLine } from 'react-icons/ri';
import Benefits from '../components/Benefits';
import Footer from '../components/Footer';

const LoginScreen = () => {
  return (
    <>
      <div className='login-screen-container'>
        <NavbarSecondary />
        <div className='login-headings'>
          <Col className='flex-row'>
            <Link to='/' className='home-link'>
              Home
            </Link>{' '}
            / <p style={{ color: '#00000071' }}>Customer Zone</p>
          </Col>
          <Col>
            <h1>Customer Zone</h1>
          </Col>
        </div>

        <Row className='login-screen-details'>
          <Col className='login-part' md={4}>
            <h5>log in</h5>
            <div style={{ paddingLeft: '2rem' }}>
              <p>Already our customer?</p>
              <p className='login-texts'>
                Please enter your login details below.
              </p>
              <div className='login-underline'></div>
              <Form>
                <Form.Group
                  className='mb-3 login-form'
                  controlId='formBasicEmail'
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email' className='form-control-login' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    className='form-control-login'
                  />
                </Form.Group>
                <Button variant='outline-primary login-btn' type='submit'>
                  <RiLoginBoxLine /> Log In
                </Button>
              </Form>
            </div>
          </Col>
          <Col className='register-part' md={4}>
            <h5>New Account</h5>
            <div style={{ paddingLeft: '2rem' }}>
              <p>Not our registered customer yet?</p>
              <p className='login-texts'>
                With registration with us new world of fashion, fantastic
                discounts and much more opens to you! The whole process will not
                take you more than a minute!
                <br /> <br />
                If you have any questions, please feel free to contact us, our
                customer service center is working for you 24/7.
              </p>
              <div className='login-underline'></div>
              <Form>
                <Form.Group
                  className='mb-3 login-form'
                  controlId='formBasicEmail'
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control type='name' className='form-control-login' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email' className='form-control-login' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    className='form-control-login'
                  />
                </Form.Group>
                <Button variant='outline-primary login-btn' type='submit'>
                  <i class='fi fi-rr-user'></i> Register
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      <Benefits />
      <Footer />
    </>
  );
};

export default LoginScreen;
