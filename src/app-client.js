/* global window document */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components/App';
import store from './store';

const AppClient = () => (
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);

window.onload = () => {
  render(<AppClient />, document.getElementById('main'));
};
