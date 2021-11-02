import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path='/' component={HomeScreen} exact />
      <Route path='/products' component={ProductsScreen} />
    </Router>
  );
}

export default App;
