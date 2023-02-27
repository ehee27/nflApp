import React from 'react';
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
