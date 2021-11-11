import React, { useEffect, useReducer } from 'react';
import {
  ADD_CART,
  DECREASE_PRODUCT,
  DELETE_CART,
  GET_TOTAL,
  INCREASE_PRODUCT,
} from '../actions/CartActions';
import CartReducers from '../reducers/CartReducers';
import CartContext from './cart-context';

const initialState = {
  cartItems: [],
  total: 0,
  qty: 0,
  totalPrice: 0,
  wholePrice: 0,
};

const CartState = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducers, initialState);

  const addProduct = (product) => {
    dispatch({
      type: ADD_CART,
      payload: product,
    });
  };

  const deleteProduct = (id) => {
    dispatch({
      type: DELETE_CART,
      payload: id,
    });
  };

  const increaseProduct = (id) => {
    dispatch({
      type: INCREASE_PRODUCT,
      payload: id,
    });
  };

  const decreaseProduct = (id) => {
    dispatch({
      type: DECREASE_PRODUCT,
      payload: id,
    });
  };

  useEffect(
    () =>
      dispatch({
        type: GET_TOTAL,
      }),
    [state.cartItems]
  );

  return (
    <CartContext.Provider
      value={{
        ...state,
        addProduct,
        deleteProduct,
        increaseProduct,
        decreaseProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
