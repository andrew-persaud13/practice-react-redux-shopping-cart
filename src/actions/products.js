import axios from 'axios';

export const getProducts = () => async dispatch => {
  dispatch({ type: 'FETCH_PRODUCTS_INIT' });
  try {
    const response = await axios.get('http://localhost:3001/api/v1/product');
    const products = response.data;
    dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', products });
    return products;
  } catch (err) {
    dispatch({ type: 'FETCH_PRODUCTS_ERROR', error: err.message });
    return Promise.reject(err.message);
  }
};

export const getProductById = productId => async dispatch => {
  dispatch({ type: 'FETCH_PRODUCT_INIT' });
  try {
    const response = await axios.get(
      `http://localhost:3001/api/v1/product/${productId}`
    );
    const product = response.data;
    dispatch({ type: 'FETCH_PRODUCT_SUCCESS', product });
    return product;
  } catch (err) {
    dispatch({ type: 'FETCH_PRODUCT_ERROR', error: err.message });
    return Promise.reject(err.message);
  }
};
