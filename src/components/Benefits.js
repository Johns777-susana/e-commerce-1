import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Benefits = () => {
  return (
    <div className='benefits-container'>
      <Container fluid>
        <Row>
          <Col className='benefits'>
            <i class='fas fa-truck-moving'></i>
            <div className='benefits-text'>
              <p
                style={{
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                }}
              >
                free shipping & return
              </p>
              <p
                style={{
                  textTransform: 'capitalize',
                  letterSpacing: '1.25px',
                  opacity: '0.6',
                }}
              >
                free shipping over $250
              </p>
            </div>
          </Col>
          <Col className='benefits'>
            <i class='fas fa-coins'></i>
            <div className='benefits-text'>
              <p
                style={{
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                }}
              >
                money back guarantee
              </p>
              <p
                style={{
                  textTransform: 'capitalize',
                  letterSpacing: '1.25px',
                  opacity: '0.6',
                }}
              >
                over 25 days money back guarantee
              </p>
            </div>
          </Col>
          <Col className='benefits'>
            <i class='fas fa-headset'></i>
            <div className='benefits-text'>
              <p
                style={{
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                }}
              >
                02-005-779-253589
              </p>
              <p
                style={{
                  textTransform: 'capitalize',
                  letterSpacing: '1.25px',
                  opacity: '0.6',
                }}
              >
                24/7 customer support
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Benefits;
