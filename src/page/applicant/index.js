import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

export class Applicant extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route
          path={`${this.props.match.url}/application`}
          component={routeProps => null}
        />
        <Route
          path={`${this.props.match.url}/collection`}
          component={routeProps => null}
        />
        <Route
          path={`${this.props.match.url}/message`}
          component={routeProps => null}
        />
        <Route
          path={`${this.props.match.url}/notification`}
          component={routeProps => null}
        />
        <Route
          path={`${this.props.match.url}/profile/:id`}
          component={routeProps => null}
        />
        <Redirect to="page-no-found"/>
      </Switch>
    );
  }
}
