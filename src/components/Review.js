import React from 'react';

function Review() {
  return (
    <div className='review-box'>
      <p>Mapleton</p> {'    '}
      <span className='product-detail-rating'>
        5.0<ion-icon name='star-outline'></ion-icon>
      </span>
      <p>Very sheep if you ask me.</p>
    </div>
  );
}

export default Review;
