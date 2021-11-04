import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import allProducts from '../data/allProducts';
import { BsArrowLeft } from 'react-icons/bs';
import NavbarSecondary from '../components/navbar/NavbarSecondary';

const ProductScreen = () => {
  return (
    <div className='products-screen-container'>
      <NavbarSecondary />
      <div className='all-products-headers'>
        <a href='/'>
          <BsArrowLeft /> Home
        </a>
        <h1>All Products</h1>
      </div>
      <Row className='all-products mx-0 px-3'>
        {allProducts.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product key={product._id} product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductScreen;
