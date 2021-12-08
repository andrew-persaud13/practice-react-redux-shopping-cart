const getCartFromStorage = () => {
  const cart = localStorage.getItem('bc-cart');
  return cart ? { ...JSON.parse(cart) } : {};
};

const setCartInStorage = cart => {
  localStorage.setItem('bc-cart', JSON.stringify(cart));
};

const doesCartExist = (cart, id) => !!cart[id];

export const ADD_TO_CART = 'ADD_TO_CART';
export const DECREMENT_CART_ITEM = 'DECREMENT_CART_ITEM';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const GET_CART = 'GET_CART';
export const CLEAR_CART = 'CLEAR_CART';

const initialState = getCartFromStorage();

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const cart = { ...state };
      if (cart[action.productId]) {
        cart[action.productId] += 1;
      } else {
        cart[action.productId] = 1;
      }

      setCartInStorage(cart);
      return cart;
    }
    case DECREMENT_CART_ITEM: {
      const cart = { ...state };
      if (!doesCartExist(cart, action.productId)) return state;
      if (cart[action.productId] === 1) return state;
      cart[action.productId] -= 1; //dont let it go to zero on front end, use garbage can icon to remove

      setCartInStorage(cart);
      return cart;
    }
    case REMOVE_FROM_CART: {
      let cart = { ...state };
      console.log(cart);
      if (!doesCartExist(cart, action.productId)) return state;
      delete cart[action.productId];
      console.log(cart);
      setCartInStorage(cart);
      return cart;
    }
    case GET_CART:
      return getCartFromStorage();
    case CLEAR_CART:
      console.log('here');
      setCartInStorage({});
      return {};
    default:
      return state;
  }
};

export default cartReducer;
