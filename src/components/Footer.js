import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import socioIcons from '../data/socioIcons';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <Container>
        <Row>
          <Col className='mx-5 footer-1st-section' xs={4}>
            <div className='footer-brand'>
              <h4>e-Lectro</h4>
              <span style={{ fontSize: '1.5rem', color: 'skyblue' }}>.</span>
            </div>
            <p>Providing customers best service available...</p>
            <div className='social-icons-container'>
              {socioIcons.map((icons) => (
                <ul>
                  <li>
                    <a href={icons.url}>{icons.icon}</a>
                  </li>
                </ul>
              ))}
            </div>
          </Col>
          <Col className='footer-2nd-section'>
            <h6>Company</h6>
            <ul>
              <li>
                <a href='#'>log in</a>
              </li>
              <li>
                <a href='#'>register</a>
              </li>
              <li>
                <a href='#'>login</a>
              </li>
              <li>
                <a href='#'>company policy</a>
              </li>
            </ul>
          </Col>
          <Col className='mx-5 footer-3rd-section' xs={4}>
            <h6>daily offers & discounts</h6>
            <p>
              Suscribe to our newsletter to not miss our daily offers and
              discounts promo codes.
            </p>
            <Col>
              <form className='suscribe-container'>
                <input type='email' placeholder='Your Email Address ...' />
                <button type='submit'>Submit</button>
              </form>
            </Col>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
