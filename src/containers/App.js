import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import 'semantic-ui-css/semantic.min.css';
// import Helmet from 'react-helmet';
import BrowserRouter from 'react-router-dom/BrowserRouter';
// import PrivateRoute from 'COMPONENTS/PrivateRoute';
import PublicRoute from 'COMPONENTS/PublicRoute';

import Home from './Home';
import Roadtrip from './Roadtrip';
import LittleBrain from './LittleBrain';
import NotFound from './NotFound';

// Force import during development to enable Hot-Module Replacement
if (process.env.NODE_ENV === 'development') {
  require('./Home'); // eslint-disable-line global-require
  require('./Roadtrip'); // eslint-disable-line global-require
  require('./LittleBrain'); // eslint-disable-line global-require
  require('./NotFound'); // eslint-disable-line global-require
}

const supportsHistory = 'pushState' in window.history;

const App = props => (
  <Provider store={props.store}>
    <BrowserRouter forceRefresh={!supportsHistory} keyLength={12}>
      <div>
        {/* <Helmet titleTemplate="%s - DeviceNet" defaultTitle="DeviceNet" /> */}
        <Switch>
          <PublicRoute path="/" component={Home} exact={true} />
          <PublicRoute path="/roadtrip" component={Roadtrip} exact={true} />
          <PublicRoute path="/little-brain" component={LittleBrain} exact={true} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
