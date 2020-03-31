import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/reactotronConfig';

import { store } from './store';

import GlobalStyle from './styles/global';
import Home from './pages/Home';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Home />
      <ToastContainer autoClose={3000} />
    </Provider>
  );
}

export default App;
