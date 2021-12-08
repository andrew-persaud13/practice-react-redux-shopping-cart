import axios from 'axios';

export const getProductsInCart = async productIds => {
  try {
    const response = await axios.post(
      'http://localhost:3001/api/v1/product/cart',
      {
        productIds,
      }
    );
    const products = response.data;

    return products;
  } catch (err) {
    return Promise.reject(err.message);
  }
};
