import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import NavbarSecondary from '../components/navbar/NavbarSecondary';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Benefits from '../components/Benefits';
import Category from '../components/Category';
import products from '../data/products';
import { FaSearch } from 'react-icons/fa';

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

  // sorting according to order
  const sortByOrder = (e) => {
    if (e.target.value === 'allproducts') {
      setProductsItems(products);
    } else {
      let newArray = products.slice().sort((a, b) => {
        if (e.target.value === 'cheap') {
          return a.price > b.price ? 1 : -1;
        } else {
          return a.price < b.price ? 1 : -1;
        }
      });
      setProductsItems(newArray);
    }
  };

  // sorting according to rating
  const sortByRating = (e) => {
    if (e.target.value === 'allproducts') {
      setProductsItems(products);
    } else {
      let newArray = products.slice().sort((a, b) => {
        if (e.target.value === 'newest') {
          return a._id < b._id ? 1 : -1;
        } else {
          return a.rating < b.rating ? 1 : -1;
        }
      });
      setProductsItems(newArray);
    }
  };

  // sort by letter
  const sortByLetter = (e) => {
    // let newArray = products.sort((a, b) => {
    //   if (a.name > b.name) {
    //     return 1;
    //   } else {
    //     return -1;
    //   }
    // });
    // setProductsItems(newArray);
    console.log(e);
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
              <form className='search-form'>
                <input
                  type='search'
                  placeholder='search here...'
                  onChange={(e) => sortByLetter(e.target.value)}
                />
                <button type='submit' className='search-btn'>
                  <FaSearch />
                </button>
              </form>
              <div>
                <label>Order by :</label>
                <select onChange={sortByOrder}>
                  <option value='allproducts'>All Products</option>
                  <option value='cheap'>Lowest First</option>
                  <option value='expensive'>Highest First</option>
                </select>
              </div>
              <div>
                <label>Sort by :</label>
                <select onChange={sortByRating}>
                  <option value='allproducts'>All Products</option>
                  <option value='newest'>Newest</option>
                  <option value='popular'>Popular</option>
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
