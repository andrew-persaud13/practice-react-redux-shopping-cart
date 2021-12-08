import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { history, useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import '../../styles/header.css';
import { getCart } from '../../actions/cart';
import { useSelector } from 'react-redux';

import { countCartItems } from '../../utils';

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { cart } = useSelector(state => state);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);
  return (
    <header className='header'>
      <div onClick={() => history.push('/')} className='logo'>
        BearCaveBooks
      </div>
      <nav>
        <ul className='nav-list'>
          <li>
            <div className='cart'>
              <ion-icon
                onClick={() => history.push('/cart')}
                name='cart-outline'
                className='cart'
              ></ion-icon>
              <span className='badge'>{countCartItems(cart)}</span>
            </div>
          </li>
          <li>
            <Link to='/login' className='nav-item'>
              Login
            </Link>
          </li>
          <li>
            <Link to='/register' className='nav-item'>
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
