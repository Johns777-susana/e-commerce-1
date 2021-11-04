import React from 'react';
import NavbarSecondary from '../components/navbar/NavbarSecondary';
import allProducts from '../data/allProducts';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  ListGroup,
  Card,
  Button,
  Image,
  Form,
} from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi';

const ProductScreen = (props) => {
  const product = allProducts.find(
    (x) => x._id === Number(props.match.params.id)
  );

  return (
    <div className='individual-product-container'>
      <NavbarSecondary />

      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={6}>
          <
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
