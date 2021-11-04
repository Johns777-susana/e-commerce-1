import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router>
      <Route path='/' component={HomeScreen} exact />
      <Switch>
        <Route path='/products' component={ProductsScreen} />
        <Route path='/:id' component={ProductScreen} />
      </Switch>
    </Router>
  );
}

export default App;
