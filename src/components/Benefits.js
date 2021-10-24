import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Benefits = () => {
  return (
    <div className='benefits-container'>
      <Container>
        <Row>
          <Col className='benefits'>
            <i class='fas fa-truck-moving'></i>
            <div className='benefits-text'>
              <p>free shipping & return</p>
              <p>free shipping over $250</p>
            </div>
          </Col>
          <Col className='benefits'>
            <i class='fas fa-dollar-sign'></i>
            <div className='benefits-text'>
              <p>money back guarantee</p>
              <p>over 25 days money back guarantee</p>
            </div>
          </Col>
          <Col className='benefits'>
            <i class='fas fa-headset'></i>
            <div className='benefits-text'>
              <p>02-005-779-253589</p>
              <p>24/7 customer support</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Benefits;
