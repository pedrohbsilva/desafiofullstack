import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import Home from '../pages/Home';

const Routes = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
