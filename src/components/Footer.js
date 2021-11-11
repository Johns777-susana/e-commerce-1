import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import socioIcons from '../data/socioIcons';
import { FaPaperPlane } from 'react-icons/fa';
import { RiMastercardLine } from 'react-icons/ri';
import { SiPaypal, SiChase, SiVisa } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className='footer-container'>
        <Container className='mr-zero'>
          <Row className='footer-container-flex-col'>
            <Col className='mx-5 footer-1st-section'>
              <div className='footer-brand'>
                <h4>e-Lectro</h4>
                <span style={{ fontSize: '1.5rem', color: 'skyblue' }}>.</span>
              </div>
              <p>Providing customers best service available</p>
              <div className='social-icons-container'>
                {socioIcons.map((icons) => (
                  <ul key={icons.id}>
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
                  <Link to='/login' className='home-link'>
                    log in
                  </Link>
                </li>
                <li>
                  <Link to='/login' className='home-link'>
                    register
                  </Link>
                </li>
                <li>
                  <Link to='/' className='home-link'>
                    company policy
                  </Link>
                </li>
              </ul>
            </Col>
            <Col className='mx-5 footer-3rd-section'>
              <h6>daily offers & discounts</h6>
              <p>
                Suscribe to our newsletter to not miss our daily offers and
                discounts promo codes.
              </p>
              <Col>
                <form className='suscribe-container'>
                  <input type='email' placeholder='Your Email Address' />
                  <button type='submit'>
                    <FaPaperPlane />
                  </button>
                </form>
              </Col>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className='copyright-section'>
        <div className='copyright-section-text'>
          &copy; {new Date().getFullYear()} Copyright. All right reserved.
        </div>
        <div className='copyright-section-icons'>
          <SiVisa />
          <RiMastercardLine />
          <SiPaypal />
          <SiChase />
        </div>
      </div>
    </>
  );
};

export default Footer;
