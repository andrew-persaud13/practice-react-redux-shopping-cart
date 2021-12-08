import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrementCart, removeFromCart } from '../actions/cart';
import { getProducts } from '../actions/products';

import '../styles/cart.css';
import { calculateTotal, capitalize } from '../utils';

const extractProducts = (cart, products) => {
  const normalizedProducts = products.reduce((acc, product) => {
    acc[product._id] = product;
    return acc;
  }, {});

  return Object.keys(cart).map(id => normalizedProducts[id]);
};

function Cart() {
  const dispatch = useDispatch();
  const { cart, products, loading } = useSelector(state => {
    return {
      cart: state.cart,
      products: extractProducts(state.cart, state.products.items),
      loading: state.products.loading,
    };
  });

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (!products.length)
    return (
      <h1 className='text-center margin-top-md'>
        Cart is empty <ion-icon name='sad-outline'></ion-icon>
      </h1>
    );

  return (
    <div className='section'>
      <div className='container'>
        <h1 className='text-center margin-bottom-md'>Your cart</h1>
      </div>
      <div className='container cart-table'>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Product Image</th>
              <th>Amount</th>
              <th>Quantity</th>
              <th>Remove</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr>
                <td>{capitalize(product.title)}</td>
                <td>
                  <img src={product.image} style={{ width: '100%' }} alt='' />
                </td>
                <td>${product.price * cart[product._id]}</td>
                <td>
                  <div className='quantity-container'>
                    <div
                      onClick={() => dispatch(decrementCart(product._id))}
                      className='quantity-change'
                    >
                      -
                    </div>
                    <div className='cart-quantity'>{cart[product._id]}</div>
                    <div
                      onClick={() => dispatch(addToCart(product._id))}
                      className='quantity-change'
                    >
                      +
                    </div>
                  </div>
                </td>
                <td onClick={() => dispatch(removeFromCart(product._id))}>
                  <ion-icon name='trash-bin-outline'></ion-icon>
                </td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <strong>${calculateTotal(cart, products)}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cart;
