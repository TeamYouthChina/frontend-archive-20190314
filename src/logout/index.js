import React from 'react';
import {Redirect} from 'react-router-dom';
import Cookies from 'js-cookie';

export class Logout extends React.Component {
  UNSAFE_componentWillMount() {
    Cookies.remove('avatar');
    Cookies.remove('id');
    Cookies.remove('token');
  }

  render() {
    return <Redirect to='/'/>;
  }
}
