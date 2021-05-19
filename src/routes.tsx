import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Mooneyedu from './pages/mooneyedu';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/mooneyedu" component={Mooneyedu} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
