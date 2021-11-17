import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import products from '../data/products';
import { categoryBtns, brandBtns } from '../data/btnsdata';

const Category = ({ sortByCategory, allProducts, sortByBrands }) => {
  const data = products;

  // all products length
  const allProductsLength = products.length;

  // for length of the products acc to the brand of the specific product
  const countForApple = data.filter((item) => item.brand === 'apple').length;
  const countForAmazon = data.filter((item) => item.brand === 'amazon').length;
  const countForBoss = data.filter((item) => item.brand === 'boss').length;
  const countForNikon = data.filter((item) => item.brand === 'nikon').length;
  const countForPlaystation = data.filter(
    (item) => item.brand === 'playstation'
  ).length;
  const countForCanon = data.filter((item) => item.brand === 'canon').length;
  const countForSamsung = data.filter(
    (item) => item.brand === 'samsung'
  ).length;
  const countForLogitech = data.filter(
    (item) => item.brand === 'logitech'
  ).length;
  const countForSony = data.filter((item) => item.brand === 'sony').length;
  const countForRazor = data.filter((item) => item.brand === 'razor').length;

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
