import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from './Layout';
import { NotFoundPage } from './NotFoundPage';
import { Home } from './Home/Home';
import Dashboard from './Dashboard/Dashboard';

const CONDITION = true;

const AutoRedirect = (Logged, NotLogged) => (
  CONDITION ? (
    Logged
  ) : (
    NotLogged
  )
);

const HomeRedir = () => (
  <Redirect to="/" />
);

const DashRedir = () => (
  <Redirect to="/dashboard" />
);

export const App = () => (
  <Layout>
    <Switch>
      <Route
        exact
        path="/"
        component={AutoRedirect(DashRedir, Home)}
      />
      <Route
        exact
        path="/dashboard"
        component={AutoRedirect(Dashboard, HomeRedir)}
      />
      <Route component={NotFoundPage} />
    </Switch>
  </Layout>
);


export default App;
