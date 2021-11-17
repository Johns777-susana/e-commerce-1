import React, { useEffect, useMemo, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import NavbarSecondary from '../components/navbar/NavbarSecondary';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Benefits from '../components/Benefits';
import Category from '../components/Category';
import products from '../data/products';

const ProductsScreen = () => {
  const [productsItems, setProductsItems] = useState(products);

  // function for sorting by categories
  const allProducts = () => {
    const wholeArray = products;
    setProductsItems(wholeArray);
  };

  const sortByCategory = (e) => {
    const newArray = products.filter((x) => x.category === e.target.value);
    setProductsItems(newArray);
  };

  // function for sorting by brands
  const sortByBrands = (e) => {
    const newArray = products.filter((x) => x.brand === e.target.value);
    setProductsItems(newArray);
  };

  return (
    <>
      <div className='products-screen-container'>
        <NavbarSecondary />
        <div className='all-products-headers'>
          <div className='all-products-headers-link'>
            <Link to='/' className='home-link'>
              <p style={{ color: '#1a1a1a' }}>Home</p>
            </Link>{' '}
            / <p style={{ color: '#00000071' }}>Products</p>
          </div>
          <h1>All Products</h1>
        </div>
        <div className='all-products-container'>
          <div className='category-container'>
            <Category
              allProducts={allProducts}
              sortByCategory={sortByCategory}
              sortByBrands={sortByBrands}
            />
          </div>
          <div style={{ width: '100%' }}>
            <div className='sort-products'>
              <div>
                <label>Order by :</label>
                <select>
                  <option>Default</option>
                  <option>Cheap First</option>
                  <option>Expensive First</option>
                </select>
              </div>
              <div>
                <label>Sort by :</label>
                <select>
                  <option>Default</option>
                  <option>Newest</option>
                  <option>Popular</option>
                </select>
              </div>
            </div>
            <Row className='all-products mx-0 px-3'>
              {productsItems.map((product) => (
                <Col sm={6} md={4} lg={4} xl={4}>
                  <Product key={product._id} product={product} />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
      <Benefits />
      <Footer />
    </>
  );
};

export default ProductsScreen;
