import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import './index.css';
import './mobile.css';
import App from './App';
import CartState from './context/CartState';

ReactDOM.render(
  <React.StrictMode>
    <CartState>
      <App />
    </CartState>
  </React.StrictMode>,
  document.getElementById('root')
);
