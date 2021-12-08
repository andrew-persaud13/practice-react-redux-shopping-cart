import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getProductById } from '../actions/products';

import { capitalize } from '../utils';

import '../styles/product-detail.css';
import { addToCart } from '../actions/cart';

function ProductDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const { item: product, loading, error } = useSelector(state => state.product);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  if (loading) return 'Loading...';
  return (
    <div className='section'>
      <div className='container'>
        <h1 className='margin-bottom-md text-center'>Product Detail Page</h1>
      </div>

      <div className='container grid grid--2-cols'>
        <div className='product-detail-image-container'>
          <img
            className='product-detail-image'
            src={product.image}
            alt='The resource'
          />
        </div>

        <div className='product-detail-content'>
          <h3 className='product-detail-title'>
            {capitalize(product.title)}
            {'    '}
            <span className='product-detail-rating'>
              5.0<ion-icon name='star-outline'></ion-icon>
            </span>
          </h3>
          <p className='product-detail-description'>{product.description}</p>
          <p className='product-detail-price'>${product.price}</p>
          <button
            onClick={() => dispatch(addToCart(product._id))}
            className='btn btn-add'
          >
            Add To Cart
          </button>
        </div>
      </div>

      <div className='container '>
        <h1 className='margin-bottom-md text-center margin-top-md'>
          Product Reviews
        </h1>
        <div className='container grid grid--4cols'>
          <div className='review-box'>
            <p>Mapleton</p> {'    '}
            <span className='product-detail-rating'>
              5.0<ion-icon name='star-outline'></ion-icon>
            </span>
            <p>Very sheep if you ask me.</p>
          </div>
          <div className='review-box'>
            <p>Mapleton</p> {'    '}
            <span className='product-detail-rating'>
              5.0<ion-icon name='star-outline'></ion-icon>
            </span>
            <p>Very sheep if you ask me.</p>
          </div>
          <div className='review-box'>
            <p>Mapleton</p> {'    '}
            <span className='product-detail-rating'>
              5.0<ion-icon name='star-outline'></ion-icon>
            </span>
            <p>Very sheep if you ask me.</p>
          </div>
          <div className='review-box'>
            <p>Mapleton</p> {'    '}
            <span className='product-detail-rating'>
              5.0<ion-icon name='star-outline'></ion-icon>
            </span>
            <p>Very sheep if you ask me.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
