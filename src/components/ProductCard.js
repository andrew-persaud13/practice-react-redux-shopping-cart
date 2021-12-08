import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { capitalize } from '../utils';
import { addToCart } from '../actions/cart';

import '../styles/product-card.css';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className='product-card'>
      <img src={product.image} alt='One of the products' />
      <div className='content'>
        <p className='product-title'>{capitalize(product.title)}</p>
        <p className='product-description'>{product.description}</p>
        <p className='product-price'>${product.price}</p>
        <div className='button-container'>
          <button
            onClick={() => dispatch(addToCart(product._id))}
            className='btn btn-add'
          >
            Add To Cart
          </button>
          <button
            onClick={() => history.push(`/product/${product._id}`)}
            className='btn btn-details'
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
