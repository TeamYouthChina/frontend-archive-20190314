import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import {
  MDBNavItem,
  MDBNavLink,
  MDBRow,
  MDBCol,
  MDBNav
} from 'mdbreact';

import {languageHelper} from '../../tool/language-helper';
import {HomeHeader} from './home-header';
import {Footer} from '../../general-component/footer';
import {New} from './new';
import {Hot} from './hot';


export class Home extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.text = Home.i18n[languageHelper()];
  }

  render() {
    console.log(this.props);
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <HomeHeader/>
        <div className="classic-tabs">
          <MDBNav
            classicTabs
            className="d-flex justify-content-center"
            style={{
              boxShadow: 'none',
              borderBottom: 'solid #E0E0E0 1px'
            }}
          >
            <MDBRow>
              <MDBCol size="12" md="6">
                <MDBNavItem className="ml-0">
                  <MDBNavLink
                    to={`${this.props.match.url}/hot`}
                    className={this.props.location.pathname.indexOf('/hot') > -1 ? 'active font-weight-bold' : ''}
                    style={{
                      color: '#454F69',
                      fontSize: '16px'
                    }}
                  >
                    {this.text.hot}
                  </MDBNavLink>
                </MDBNavItem>
              </MDBCol>
              <MDBCol size="12" md="6">
                <MDBNavItem className="ml-0">
                  <MDBNavLink
                    to={`${this.props.match.url}/new`}
                    className={this.props.location.pathname.indexOf('/new') > -1 ? 'active font-weight-bold' : ''}
                    style={{
                      color: '#454F69',
                      fontSize: '16px'
                    }}
                  >
                    {this.text.new}
                  </MDBNavLink>
                </MDBNavItem>
              </MDBCol>
            </MDBRow>
          </MDBNav>
        </div>
        <Switch>
          <Route
            path={`${this.props.match.url}/hot`}
            component={routeProps => <Hot/>}
          />
          <Route
            path={`${this.props.match.url}/new`}
            component={routeProps => <New/>}
          />
          <Redirect to={`${this.props.match.url}/hot`}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

Home.i18n = [
  {
    hot: '热门企业',
    new: '新锐公司'
  },
  {
    hot: 'Hot',
    new: 'New'
  },
];
