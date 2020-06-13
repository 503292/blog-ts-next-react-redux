import React from 'react';
import { Provider } from 'react-redux';
import App from '../components/App';
import { store } from '../redux/store';

const IndexPage = () => (
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);

export default IndexPage;
