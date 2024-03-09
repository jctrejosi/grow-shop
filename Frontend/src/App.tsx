// ---- Routes

import { Provider } from 'react-redux';
import { AppRouter } from './routes';

// ---- Store

import { store } from './store';

// ---- Configuration

import { axiosConfiguration } from './configuration/axios';

axiosConfiguration();

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
