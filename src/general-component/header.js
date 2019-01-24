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

import {languageHelper} from '../tool/language-helper';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: 'discover',
      chosen: 0,
      hover: 0,
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
      <div style={{marginBottom: '8px'}}>
        <div>
          <MDBNavbar
            dark
            expand="md"
            fixed="top"
            scrolling
            style={{background:'#7C97B8'}}
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

                  style={this.state.chosen === 1 || this.state.hover===1? {borderBottom: '4px solid #FFFFFF'} : null}
                >
                  <MDBNavLink to="/">
                    主 页
                  </MDBNavLink>
                </MDBNavItem>
               
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    
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
                          hover:0
                        });
                      }
                    }

                    style={this.state.chosen === 2 ||this.state.hover === 2 ? {borderBottom: '4px solid #FFFFFF'} : null}
                  >
                    探 索
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCol>
            <MDBNavbarNav>
              <MDBNavLink to="/search/s1">
                <input
                  className="form-control"
                  type="text"
                  placeholder="搜索"
                  aria-label="Search"
                />
              </MDBNavLink>
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
            <MDBNavbar 
              className="indigo-text" 
              color="grey lighten-5"
              expand="md" 
              style={{height:'143px'}}
            >
              
              <MDBCol md="6" className="offset-md-5">
                <br/>
                <br/>
                <br/>
                <br/>
                <MDBNavbarNav left >
                  <MDBNavItem
                    style={{borderBottom: '4px solid #7C97B8'}}
                  >
                    <MDBNavLink to="#">
                      <p className="h6 " style={{color:'#7C97B8'}}>探 索</p>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem
                    onClick={
                      () => {
                        this.setState({
                          chosen: 3
                        });
                        this.toggleCollapse('discover');

                      }

                    }
                    onMouseEnter={
                      () => {
                        this.setState({
                          hover: 3
                        });
                      }
                    }
                    onMouseLeave={
                      () => {
                        this.setState({
                          hover:0
                        });
                      }
                    }

                    style={this.state.chosen === 3 ||this.state.hover === 3 ? {borderBottom: '4px solid #7C97B8'} : null}
                  >
                    <MDBNavLink to="/discovery/">
                      <p className="h6 " style={{color:'#7C97B8'}}>| 文 章</p>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem
                    onClick={
                      () => {
                        this.setState({
                          chosen: 4
                        });
                        this.toggleCollapse('discover');

                      }

                    }
                    onMouseEnter={
                      () => {
                        this.setState({
                          hover: 4
                        });
                      }
                    }
                    onMouseLeave={
                      () => {
                        this.setState({
                          hover:0
                        });
                      }
                    }

                    style={this.state.chosen === 4 ||this.state.hover === 4 ? {borderBottom: '4px solid #7C97B8'} : null}
                  >
                    <MDBNavLink to="/discovery/">
                      <p className="h6 " style={{color:'#7C97B8'}}>| 视 频</p>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem
                    onClick={
                      () => {
                        this.setState({
                          chosen: 5
                        });
                        this.toggleCollapse('discover');

                      }

                    }
                    onMouseEnter={
                      () => {
                        this.setState({
                          hover: 5
                        });
                      }
                    }
                    onMouseLeave={
                      () => {
                        this.setState({
                          hover:0
                        });
                      }
                    }

                    style={this.state.chosen === 5 ||this.state.hover === 5 ? {borderBottom: '4px solid #7C97B8'} : null}
                  >
                    <MDBNavLink to="/discovery/">
                      <p className="h6 " style={{color:'#7C97B8'}}>| 人 脉</p>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem
                    onClick={
                      () => {
                        this.setState({
                          chosen: 6
                        });
                        this.toggleCollapse('discover');

                      }

                    }
                    onMouseEnter={
                      () => {
                        this.setState({
                          hover: 6
                        });
                      }
                    }
                    onMouseLeave={
                      () => {
                        this.setState({
                          hover:0
                        });
                      }
                    }

                    style={this.state.chosen === 6 ||this.state.hover === 6 ? {borderBottom: '4px solid #7C97B8'} : null}
                  >
                    <MDBNavLink to="/discovery/">
                      <p className="h6 " style={{color:'#7C97B8'}}>| 直 播（空中宣讲会）</p>
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
