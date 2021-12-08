import { combineReducers } from 'redux';

const FETCH_PRODUCTS_INIT = 'FETCH_PRODUCTS_INIT';
const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

const initProductsReducer = () => {
  const items = (state = [], action) => {
    switch (action.type) {
      case FETCH_PRODUCTS_INIT:
        return [];
      case FETCH_PRODUCTS_SUCCESS:
        return action.products;
      case FETCH_PRODUCTS_ERROR:
        return [];
      default:
        return state;
    }
  };

  const loading = (state = false, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS_INIT:
        return true;
      case FETCH_PRODUCTS_SUCCESS:
      case FETCH_PRODUCTS_ERROR:
        return false;
      default:
        return state;
    }
  };

  const error = (state = null, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS_INIT:
        return null;
      case FETCH_PRODUCTS_SUCCESS:
        return null;
      case FETCH_PRODUCTS_ERROR:
        return action.error;
      default:
        return state;
    }
  };

  return combineReducers({
    items,
    loading,
    error,
  });
};

export default initProductsReducer();
