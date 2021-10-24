import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ProductsShowcase = () => {
  return (
    <div className='showcase-container'>
      <Container fluid>
        <Row className='showcase-row pt-2 px-2'>
          <Col className='showcase-1A showcase-col'>
            <h1>top picks</h1>
            <Button variant='outline-light showcase-btn'>
              Shop Now &#8594;
            </Button>
          </Col>
          <Col className='showcase-2A showcase-col'>
            <h1>new arrivals</h1>
            <Button variant='outline-light showcase-btn'>
              Shop Now &#8594;
            </Button>
          </Col>
        </Row>
        <Row className='showcase-row pt-2 pb-3 px-2'>
          <Col className='showcase-1B showcase-col'>
            <h5>Flashy Deals</h5>
            <Button variant='outline-light showcase-btn'>
              Shop Now &#8594;
            </Button>
          </Col>
          <Col className='showcase-2B showcase-col'>
            <h5>Best Products</h5>
            <Button variant='outline-light showcase-btn'>
              Shop Now &#8594;
            </Button>
          </Col>
          <Col className='showcase-3B showcase-col'>
            <h5>All Products</h5>
            <Button variant='outline-light showcase-btn showcase-3B-only-black-btn'>
              Shop Now &#8594;
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductsShowcase;
