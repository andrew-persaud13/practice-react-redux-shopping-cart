import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import cartItemsReducer from '../reducers/cartItemsReducer';
import cartReducer from '../reducers/cartReducer';
import productReducer from '../reducers/productReducer';

import productsReducer from '../reducers/productsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initStore = () =>
  createStore(
    combineReducers({
      products: productsReducer,
      cart: cartReducer,
      product: productReducer,
      cartItems: cartItemsReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

export default initStore;
