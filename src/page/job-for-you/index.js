import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {
  MDBRow,
  MDBCol,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBJumbotron,
  MDBNav
} from 'mdbreact';

import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';
import {languageHelper} from '../../tool/language-helper';
import {Intern} from './intern';
import {Campus} from './campus';
import {General} from './general';

export class JobForYou extends React.Component {
  constructor(props) {
    super(props);
    this.text = JobForYou.i18n[languageHelper()];
  }

  render() {
    return (
      <div>
        <Header/>
        <MDBJumbotron className="d-none d-md-block m-0 pt-5" style={{
          height: '300px',
          backgroundColor: '#949494',
          color: 'white'
        }}>
          <MDBRow className="text-center">
            <MDBCol>
              <br/>
              <br/>
              <br/>
              <h1>发现合适你的职位和公司</h1>
            </MDBCol>
          </MDBRow>
        </MDBJumbotron>
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
              <MDBCol size="12" md="4">
                <MDBNavItem className="ml-0">
                  <MDBNavLink
                    to={`${this.props.match.url}/intern`}
                    className={this.props.location.pathname.indexOf('/intern') > -1 ? 'active h5' : ''}
                    style={{
                      color: '#454F69',
                      fontSize: '16px'
                    }}
                  >
                    {this.text.intern}
                  </MDBNavLink>
                </MDBNavItem>
              </MDBCol>
              <MDBCol size="12" md="4">
                <MDBNavItem className="ml-0">
                  <MDBNavLink
                    to={`${this.props.match.url}/campus`}
                    className={this.props.location.pathname.indexOf('/campus') > -1 ? 'active h5' : ''}
                    style={{
                      color: '#454F69',
                      fontSize: '16px'
                    }}
                  >
                    {this.text.campus}
                  </MDBNavLink>
                </MDBNavItem>
              </MDBCol>
              <MDBCol size="12" md="4">
                <MDBNavItem className="ml-0">
                  <MDBNavLink
                    to={`${this.props.match.url}/general`}
                    className={this.props.location.pathname.indexOf('/general') > -1 ? 'active h5' : ''}
                    style={{
                      color: '#454F69',
                      fontSize: '16px'
                    }}
                  >
                    {this.text.general}
                  </MDBNavLink>
                </MDBNavItem>
              </MDBCol>
            </MDBRow>
          </MDBNav>
        </div>
        <div style={{
          display: 'flex',
          marginTop: '55px',
          justifyContent: 'center'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: 1224
          }}>
            <Switch>
              <Route
                path={`${this.props.match.url}/intern`}
                component={routeProps => <Intern {...routeProps} />}
              />
              <Route
                path={`${this.props.match.url}/campus`}
                component={routeProps => <Campus {...routeProps} />}
              />
              <Route
                path={`${this.props.match.url}/general`}
                component={routeProps => <General {...routeProps} />}
              />
              <Redirect to={`${this.props.match.url}/intern`}/>
            </Switch>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

JobForYou.i18n = [
  {
    intern: '实习',
    campus: '校园招聘',
    general: '社会招聘'
  },
  {
    intern: 'intern',
    campus: 'campus',
    general: 'general'
  }
];
