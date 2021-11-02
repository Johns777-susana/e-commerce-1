import React from 'react';
import Header from '../components/Header';
import Benefits from '../components/Benefits';
import Footer from '../components/Footer';
import ProductsShowcase from '../components/ProductsShowcase';

const HomeScreen = () => {
  return (
    <>
      <Header />
      <ProductsShowcase />
      <Benefits />
      <Footer />
    </>
  );
};

export default HomeScreen;
