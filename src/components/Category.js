import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import products from '../data/products';
import { categoryBtns, brandBtns } from '../data/btnsdata';

const Category = ({ sortByCategory, allProducts, sortByBrands }) => {
  const data = products;

  // all products length
  const allProductsLength = products.length;

  return (
    <>
      <Container>
        <h6 className='category-header'>Categories</h6>
        <Row className='category-row'>
          <Col style={{ marginBottom: '1rem' }}>
            <ul className='category-list'>
              <li>
                <button className='category-btn' onClick={allProducts}>
                  All products ({allProductsLength})
                </button>
              </li>
            </ul>
            {categoryBtns.map((btn) => (
              <ul className='category-list' key={btn.id}>
                <li>
                  <button
                    className='category-btn'
                    value={btn.value}
                    onClick={sortByCategory}
                  >
                    {btn.name} ({btn.countInStock})
                  </button>
                </li>
              </ul>
            ))}
          </Col>
        </Row>
      </Container>
      <Container>
        <h6 className='brand-header'>Brands</h6>
        <Row className='brand-row'>
          <Col>
            {brandBtns.map((btn) => (
              <ul className='brand-list' key={btn.id}>
                <li>
                  <button
                    className='brand-btn'
                    value={btn.value}
                    onClick={sortByBrands}
                  >
                    {btn.name} ({btn.countInStock})
                  </button>
                </li>
              </ul>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Category;
