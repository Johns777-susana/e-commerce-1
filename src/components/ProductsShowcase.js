import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductsShowcase = () => {
  return (
    <div className='showcase-container'>
      <div className='showcase-headers'>
        <h1>our picks to match your needs</h1>
        <p>
          We provide you best electronics at best price with fitting discounts.
          Get yours at minimum price rate.
        </p>
      </div>
      <Container fluid className='showcase-grid-container'>
        <Col className='showcase-2A showcase-col'>
          <h1>top rated</h1>
          <Link to='/products'>
            <Button variant='outline-light' className='showcase-btn'>
              Shop Now &#8594;
            </Button>
          </Link>
        </Col>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
        >
          <Row className='showcase-flex-col px-2'>
            <Col className='showcase-1A showcase-col'>
              <h1>top picks</h1>
              <Link to='/products'>
                <Button variant='outline-light' className='showcase-btn'>
                  Shop Now &#8594;
                </Button>
              </Link>
            </Col>
          </Row>
          <Row className='showcase-row px-2'>
            <Col className='showcase-1B showcase-col'>
              <h2>Deals</h2>
            </Col>
            <Col className='showcase-2B showcase-col'>
              <h2>Sales</h2>
            </Col>
            <Col className='showcase-3B showcase-col'>
              <h2>Gears</h2>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ProductsShowcase;
