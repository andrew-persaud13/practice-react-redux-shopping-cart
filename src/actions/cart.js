import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREMENT_CART_ITEM,
  GET_CART,
  CLEAR_CART,
} from '../reducers/cartReducer';

export const addToCart = productId => ({
  type: ADD_TO_CART,
  productId,
});

export const removeFromCart = productId => ({
  type: REMOVE_FROM_CART,
  productId,
});

export const decrementCart = productId => ({
  type: DECREMENT_CART_ITEM,
  productId,
});

export const getCart = () => ({
  type: GET_CART,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
