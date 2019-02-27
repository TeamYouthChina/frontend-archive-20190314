import React from 'react';
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


export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: 'discover',
      chosen: 0,
      hover: 0,
      login: null
    };
    this.text = Header.i18n[languageHelper()];
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
                <strong>
                  WeYouth
                </strong>
              </MDBNavbarBrand>
            </MDBCol>
            <MDBCol md="2">
              <MDBNavbarNav>
                <MDBNavItem
                  to="#"
                  onClick={
                    () => {
                      this.setState({
                        chosen: 1
                      });
                    }
                  }
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

                  style={this.state.chosen === 1 || this.state.hover === 1 ? {borderBottom: '4px solid #FFFFFF'} : null}
                >
                  <MDBNavLink to="/">
                   职 位
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem
                  onClick={
                    () => {
                      this.setState({
                        chosen: 2
                      });
                      this.toggleCollapse('discover');

                    }
                  }
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

                  style={this.state.chosen === 2 || this.state.hover === 2 ? {borderBottom: '4px solid #FFFFFF'} : null}
                >
                  <MDBDropdown>
                    <MDBDropdownToggle nav>
                      <div className="d-none d-md-inline">探 索</div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu style={{marginTop: '20px'}}>
                      <MDBDropdownItem href="/discovery/article">文 章</MDBDropdownItem>
                      <MDBDropdownItem divider/>
                      <MDBDropdownItem href="/discovery/review">长 评</MDBDropdownItem>
                      <MDBDropdownItem divider/>
                      <MDBDropdownItem href="/discovery/question-answer">问 答</MDBDropdownItem>
                      <MDBDropdownItem divider/>
                      <MDBDropdownItem href="/discovery/video">视 频</MDBDropdownItem>
                      <MDBDropdownItem divider/>
                      <MDBDropdownItem href="/discovery/connection">人 脉</MDBDropdownItem>

                    </MDBDropdownMenu>


                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCol>


            <MDBNavbarNav left style={{width: '300px'}}>
              <MDBNavLink to="/search/s1">
                <div className="d-flex flex-row ">
                  <div className="flex-fill align-self-center mx-3">
                    <MDBIcon icon="search" size="2x" className="white-text"/>
                  </div>
                  <div className="flex-fill">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="搜索"
                      aria-label="Search"
                    />
                  </div>
                </div>

              </MDBNavLink>
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

Header.i18n = [
  {},
  {}
];
