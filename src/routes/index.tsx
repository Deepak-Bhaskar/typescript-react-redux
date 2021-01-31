import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Landing = lazy(() => import('../containers/Landing'));
const PageNotFound = lazy(() => import('../containers/PageNotFound'));

export const Routes = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='*' component={PageNotFound} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
