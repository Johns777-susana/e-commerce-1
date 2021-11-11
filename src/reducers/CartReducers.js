import {
  ADD_CART,
  DECREASE_PRODUCT,
  DELETE_CART,
  GET_TOTAL,
  INCREASE_PRODUCT,
} from '../actions/CartActions';

const CartReducers = (state, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case DELETE_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload),
      };
    case INCREASE_PRODUCT:
      let tempIncCart = state.cartItems.map((x) => {
        if (x.id === action.payload) {
          return { ...x, qty: x.qty + 1 };
        }
        return x;
      });

      return {
        ...state,
        cartItems: tempIncCart,
      };
    case DECREASE_PRODUCT:
      let tempDecCart = state.cartItems
        .map((x) => {
          if (x.id === action.payload) {
            return { ...x, qty: x.qty - 1 };
          }
          return x;
        })
        .filter((x) => x.qty !== 0);
      // here we are chaining the filter function above so that when the qty is 0 it is removed automatically.

      return {
        ...state,
        cartItems: tempDecCart,
      };
    case GET_TOTAL:
      const { qty, totalPrice, wholePrice } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          // cartToal is total of cart item and cartItem is each and every item we are rendering
          const { price, qty, shippingCost, tax } = cartItem;
          //For quantity
          cartTotal.qty += qty;
          //For Total without tax and shipping chartge
          const itemTotal = price * qty;
          cartTotal.totalPrice += itemTotal;
          // For whole Total
          const tempTotal = shippingCost + tax;
          const wholeTotal = itemTotal + tempTotal;
          cartTotal.wholePrice += wholeTotal;

          return cartTotal;
        },
        {
          qty: 0,
          totalPrice: 0,
          wholePrice: 0,
        }
      );

      return { ...state, qty, totalPrice, wholePrice };
    default:
      return state;
  }
};

export default CartReducers;
