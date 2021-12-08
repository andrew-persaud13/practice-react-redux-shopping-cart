import { Switch, Route } from 'react-router-dom';
import Header from './components/shared/Header';
import Cart from './pages/Cart';

import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

const Routes = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/product/:id' component={ProductDetail} />
        <Route exact path='/cart' component={Cart} />
      </Switch>
    </>
  );
};

export default Routes;
