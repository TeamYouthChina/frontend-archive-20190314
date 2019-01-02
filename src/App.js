import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import {Home} from './page';
import {Login} from './page/login';
import {SearchS1} from './page/search/s1';
import {SearchS2} from './page/search/s2';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route
              path="/"
              exact component={routeProps => <Home {...routeProps} />}
            />
            <Route
              path="/login"
              component={routeProps => <Login {...routeProps} />}
            />
            <Route
              path="/search/s1"
              component={routeProps => <SearchS1 {...routeProps} />}
            />
            <Route
              path="/search/s2"
              component={routeProps => <SearchS2 {...routeProps} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
