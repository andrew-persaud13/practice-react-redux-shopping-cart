import { combineReducers } from 'redux';

const FETCH_PRODUCT_INIT = 'FETCH_PRODUCT_INIT';
const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
const FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR';

const initProductReducer = () => {
  const item = (state = {}, action) => {
    switch (action.type) {
      case FETCH_PRODUCT_INIT:
        return [];
      case FETCH_PRODUCT_SUCCESS:
        return action.product;
      case FETCH_PRODUCT_ERROR:
        return [];
      default:
        return state;
    }
  };

  const loading = (state = false, action) => {
    switch (action.type) {
      case FETCH_PRODUCT_INIT:
        return true;
      case FETCH_PRODUCT_SUCCESS:
      case FETCH_PRODUCT_ERROR:
        return false;
      default:
        return state;
    }
  };

  const error = (state = null, action) => {
    switch (action.type) {
      case FETCH_PRODUCT_INIT:
        return null;
      case FETCH_PRODUCT_SUCCESS:
        return null;
      case FETCH_PRODUCT_ERROR:
        return action.error;
      default:
        return state;
    }
  };

  return combineReducers({
    item,
    loading,
    error,
  });
};

export default initProductReducer();
