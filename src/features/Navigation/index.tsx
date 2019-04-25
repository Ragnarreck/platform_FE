import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter,
} from 'react-router-dom';
import { Provider } from 'mobx-react';
import { stores } from '../../config/store';
import { AuthPage } from '../../pages/AuthPage';


export const Navigation = () => (
  <Provider {...stores}>
    <BrowserRouter>
      <Switch>
        <Route name="login" component={AuthPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
);
