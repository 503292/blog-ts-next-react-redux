import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../components/redux/store';
import App from '../components/App';

const IndexPage = () => (
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);

export default IndexPage;
