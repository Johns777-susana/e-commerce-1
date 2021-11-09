import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen';
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <Router>
      <Route path='/' component={HomeScreen} exact />
      <Route path='/products' component={ProductsScreen} />
      <Route path='/product/:id' component={ProductScreen} />
      <Route path='/login' component={LoginScreen} />
      <Route path='/cart' component={CartScreen} />
    </Router>
  );
}

export default App;
