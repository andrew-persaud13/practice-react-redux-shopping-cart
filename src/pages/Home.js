import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '../actions/products';

import { clearCart } from '../actions/cart';
import ProductCard from '../components/ProductCard';

function Home() {
  const dispatch = useDispatch();

  const {
    items: products,
    loading,
    error,
  } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <div className='section'>
        <div className='container grid grid--3-cols'>
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>

      <button onClick={() => dispatch(clearCart())}>Clear cart rass</button>
    </>
  );
}

export default Home;
