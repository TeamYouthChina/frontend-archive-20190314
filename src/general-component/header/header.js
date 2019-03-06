import React from 'react';
import {withRouter} from 'react-router-dom';
import Cookies from 'js-cookie';
import classes from './header.module.css';
import {
  MDBCol,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
  MDBRow
} from 'mdbreact';

import {languageHelper} from '../../tool/language-helper';
import {Logined} from "./logined";
import {UnLogin} from "./unlogin";
import {MDBBtn} from "../../page/applicant";

class Header1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: 'discover',
      chosen: 0,
      hover: 0,
      login: null
    };
    this.text = Header1.i18n[languageHelper()];
  }

  toggleCollapse(collapseID) {
    this.setState(
      prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ''
      })
    );
  }

  login() {
    this.setState(
      this.login = Cookies.get("avatar")
    )
  }

  render() {
    return (
      <div>
        <div>
          <MDBNavbar
            dark
            expand="md"
            fixed="top"
            scrolling
            style={{background: '#31394D'}}
          >
            <MDBCol className={classes.yc} md="1">
              <MDBNavbarBrand href="/">
                
                  职 道
                
              </MDBNavbarBrand>
            </MDBCol>
            <MDBCol md="2">
              <MDBNavbarNav>
                <MDBNavItem
                  onMouseEnter={
                    () => {
                      this.setState({
                        hover: 1
                      });
                    }
                  }
                  onMouseLeave={
                    () => {
                      this.setState({
                        hover: 0
                      });
                    }
                  }
                  style={this.props.location.pathname.indexOf('/job-for-you') > -1 || this.state.hover === 1 ? {borderBottom: '4px solid #FFFFFF'} : null}
                >
                  <MDBNavLink to="/job-for-you2">
                    职 位
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem
                  onMouseEnter={
                    () => {
                      this.setState({
                        hover: 2
                      });
                    }
                  }
                  onMouseLeave={
                    () => {
                      this.setState({
                        hover: 0
                      });
                    }
                  }
                  style={this.props.location.pathname.indexOf('/discovery') > -1 || this.state.hover === 2 ? {borderBottom: '4px solid #FFFFFF'} : null}
                >
                  <MDBNavLink to="/discovery">
                    探 索
                  </MDBNavLink>
                </MDBNavItem>
               
              </MDBNavbarNav>
            </MDBCol>


            <MDBNavbarNav left style={{width: '300px'}}>

              <div
                className="d-flex flex-row align-items-center"
                onClick={
                  () => {
                    this.props.history.push('/search');
                  }
                }
              >

                <div className="flex-fill">
                  <input
                    className="form-control disabled"
                    type="text"
                    placeholder="搜索"
                    aria-label="Search"
                  />
                </div>
                <div className="flex-fill align-self-center mx-3">
                  <MDBIcon icon="search" size="2x" className="white-text"/>
                </div>

              </div>


            </MDBNavbarNav>
            <div className="d-flex flex-row">
              {
                Cookies.get('avatar') ? (
                  <Logined/>
                ) : (
                  <UnLogin/>
                )
              }


            </div>


          </MDBNavbar>
        </div>
        <div style={{height: '78px'}}></div>

      </div>
    );
  }
}

Header1.i18n = [
  {},
  {}
];

export const Header = withRouter(Header1)
