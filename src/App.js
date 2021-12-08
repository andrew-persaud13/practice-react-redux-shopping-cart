import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './Routes';
import initStore from './store';

const AppWithProviders = () => {
  return (
    <Provider store={initStore()}>
      <Routes />
    </Provider>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppWithProviders />
    </BrowserRouter>
  );
};

export default App;
