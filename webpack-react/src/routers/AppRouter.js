import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Router as DefaultRouter, Route, Switch, HashRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import '../styles/main.css';
// Lazy Load
const PageHome = lazy(() => import('../components/pages/Home'));
const PageNotFound = lazy(() => import('../components/pages/NotFound'));
const PageProduct = lazy(() => import('../components/pages/Product'));

const history = createBrowserHistory();

export const AppRouter = () => {
  const Router = BrowserRouter || DefaultRouter

  return (
    <Router basename="/#index.html" history={history}>
      <Suspense fallback={<div />}>
        <Switch>
          <Route exact path="/product" component={PageProduct} />
          <Route exact path="/" component={PageHome} />
          <Route component={PageNotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRouter;