import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contato from './pages/contato';

import Home from './pages/home';
import Mooneyapp from './pages/mooneyapp';
import Mooneyedu from './pages/mooneyedu';
import Parceiros from './pages/parceiros';
import Sejamooney from './pages/sejamooney';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/mooneyedu" component={Mooneyedu} exact />
        <Route path="/mooneyapp" component={Mooneyapp} exact />
        <Route path="/partners" component={Parceiros} exact />
        <Route path="/contact" component={Contato} exact />
        <Route path="/sejamooney" component={Sejamooney} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
