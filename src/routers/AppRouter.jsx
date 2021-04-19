import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from '../components/Header';
import DashboardPage from '../components/DashboardPage';
import AssetsPage from '../components/AssetsPage';

const AppRouter = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/">
        <DashboardPage />
      </Route>
      <Route path="/assets">
        <AssetsPage />
      </Route>
    </Switch>
  </Router>
);

export default AppRouter;
