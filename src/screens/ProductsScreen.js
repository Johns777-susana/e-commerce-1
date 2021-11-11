import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { BsArrowLeft } from 'react-icons/bs';
import NavbarSecondary from '../components/navbar/NavbarSecondary';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Benefits from '../components/Benefits';
import products from '../data/products';

const ProductScreen = () => {
  return (
    <>
      <div className='products-screen-container'>
        <NavbarSecondary />
        <div className='all-products-headers'>
          <Link to='/' className='home-link'>
            <BsArrowLeft /> Home
          </Link>
          <h1>All Products</h1>
        </div>
        <Row className='all-products mx-0 px-3'>
          {products.map((product) => (
            <Col sm={6} md={4} lg={4} xl={3}>
              <Product key={product._id} product={product} />
            </Col>
          ))}
        </Row>
      </div>
      <Benefits />
      <Footer />
    </>
  );
};

export default ProductScreen;
