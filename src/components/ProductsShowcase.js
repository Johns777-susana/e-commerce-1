import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductsShowcase = () => {
  return (
    <div className='showcase-container'>
      <Container fluid>
        <Row className='showcase-row pt-2 px-2'>
          <Col className='showcase-1A showcase-col'>
            <h1>top picks</h1>
            <Link to='/products'>
              <Button variant='outline-light' className='showcase-btn'>
                Shop Now &#8594;
              </Button>
            </Link>
          </Col>
          <Col className='showcase-2A showcase-col'>
            <h1>new arrivals</h1>
            <Link to='/products'>
              <Button variant='outline-light' className='showcase-btn'>
                Shop Now &#8594;
              </Button>
            </Link>
          </Col>
        </Row>
        <Row className='showcase-row pt-2 pb-3 px-2'>
          <Col className='showcase-1B showcase-col'>
            <p>Flashy Deals</p>
            <Link to='/products'>
              <Button variant='outline-light' className='showcase-btn'>
                Shop Now &#8594;
              </Button>
            </Link>
          </Col>
          <Col className='showcase-2B showcase-col'>
            <p>Best Products</p>
            <Link to='/products'>
              <Button variant='outline-light' className='showcase-btn'>
                Shop Now &#8594;
              </Button>
            </Link>
          </Col>
          <Col className='showcase-3B showcase-col'>
            <p>All Products</p>
            <Link to='/products'>
              <Button
                variant='outline-light'
                className='showcase-btn showcase-3B-only-black-btn'
              >
                Shop Now &#8594;
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductsShowcase;
