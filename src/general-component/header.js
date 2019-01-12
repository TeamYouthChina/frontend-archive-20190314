import React from 'react';

import {
  MDBCol,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBRow
} from 'mdbreact';

import {store} from '../global-data/store';
import {languageHelper} from '../tool/language-helper';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: ''
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

  render() {
    return (
      <div style={{marginBottom: '20px'}}>
        <div style={{height: '80px'}}>
          <MDBNavbar
            color="indigo darken-1"
            dark
            expand="md"
            fixed="top"
            scrolling
          >
            <MDBCol
              md="1"
              className="offset-md-1"
            >
              <MDBNavbarBrand href="/">
                <strong>
                  YouthChina
                </strong>
              </MDBNavbarBrand>
            </MDBCol>
            <MDBCol md="4">
              <MDBNavbarNav center>
                <MDBNavItem to="#">
                  <MDBNavLink to="/">
                    主 页
                  </MDBNavLink>
                </MDBNavItem>
                {/*
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    onClick={() => this.toggleCollapse('job')}
                  >
                    职 务
                  </MDBNavLink>
                </MDBNavItem>
                */}
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    onClick={() => this.toggleCollapse('discover')}
                  >
                    探 索
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCol>
            <MDBNavbarNav>
              <MDBDropdown>
                <MDBDropdownToggle nav>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="搜索"
                    aria-label="Search"
                  />
                </MDBDropdownToggle>
                <MDBDropdownMenu
                  className="dropdown-indigo darken-1"
                  style={{
                    marginLeft: '1em',
                    verticalAlign: 'middle'
                  }}
                >
                  <MDBDropdownItem href="/search/s1">职 位</MDBDropdownItem>
                  <MDBDropdownItem divider/>
                  <MDBDropdownItem href="/search/s1">组 织</MDBDropdownItem>
                  <MDBDropdownItem divider/>
                  <MDBDropdownItem href="/search/s2">文 章</MDBDropdownItem>
                  <MDBDropdownItem divider/>
                  <MDBDropdownItem href="/search/s2">人 脉</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarNav>
            <MDBNavbarNav right style={{marginRight: '5em'}}>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav>
                    <MDBRow>
                      <MDBCol md="4">
                        <MDBIcon icon="user"/>
                      </MDBCol>
                      <MDBCol md="8">
                        <p className="h6">Username</p>
                      </MDBCol>
                    </MDBRow>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu color="indigo darken-1" basic left>
                    <MDBDropdownItem href="/people/1">个人主页</MDBDropdownItem>
                    {/*<MDBDropdownItem href="#!">我的消息</MDBDropdownItem>*/}
                    {/*<MDBDropdownItem href="#!">我的申请</MDBDropdownItem>*/}
                    {/*<MDBDropdownItem href="#!">我的好友</MDBDropdownItem>(*/}
                    <MDBDropdownItem href="/myfavorite">我的关注</MDBDropdownItem>
                    {/*<MDBDropdownItem href="#!">帮助</MDBDropdownItem>*/}
                    {/*<MDBDropdownItem href="#!">设置</MDBDropdownItem>*/}
                    <MDBDropdownItem href="#!">退出</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBNavbar>
        </div>
        <main>
          {/*
          <MDBCollapse id="job" isOpen={this.state.collapseID}>
            <MDBNavbar className="indigo-text" color="grey lighten-5" expand="md">
              <MDBCol md="6" className="offset-md-4">
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="#!">
                      <p className="h6 indigo-text">职 务</p>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">
                      <p className="h6 indigo-text">| 实 习</p>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">
                      <p className="h6 indigo-text">| 校园招聘</p>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">
                      <p className="h6 indigo-text">| 社会招聘</p>
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCol>
            </MDBNavbar>
          </MDBCollapse>
          */}
          <MDBCollapse id="discover" isOpen={this.state.collapseID}>
            <MDBNavbar className="indigo-text" color="grey lighten-5" expand="md">
              <MDBCol md="6" className="offset-md-5">
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="#">
                      <p className="h6 indigo-text">探 索</p>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/discovery/">
                      <p className="h6 indigo-text">| 文 章</p>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/discovery/">
                      <p className="h6 indigo-text">| 视 频</p>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/discovery/">
                      <p className="h6 indigo-text">| 人 脉</p>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/discovery/">
                      <p className="h6 indigo-text">| 直 播（空中宣讲会）</p>
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCol>
            </MDBNavbar>
          </MDBCollapse>
        </main>
      </div>
    );
  }
}

Header.i18n = [
  {},
  {}
];
