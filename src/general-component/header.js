import React from 'react';

import {
  MDBCol,
  MDBAvatar,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
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
      <div>
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

                  style={this.state.chosen === 1 || this.state.hover===1? {borderBottom: '4px solid #FFFFFF'} : null}
                >
                  <MDBNavLink to="/job-for-you">
                    招 聘
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
                        hover:0
                      });
                    }
                  }

                  style={this.state.chosen === 2 ||this.state.hover === 2 ? {borderBottom: '4px solid #FFFFFF'} : null}
                >
                  <MDBDropdown>
                    <MDBDropdownToggle nav>
                      <div className="d-none d-md-inline">探 索</div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu style={{marginTop:'20px'}}>
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
              <MDBNavItem style={{width:'45px',height:'45px'}} className="p-0 mx-2 align-middle">
                <img
                  src="https://s2.ax1x.com/2019/01/27/kuUMYq.jpg"
                  className="rounded-circle z-depth-1-half img-fluid p-0 float-right"
                  alt="Sample avatar"
                />
              </MDBNavItem>
              <MDBNavItem style={{marginTop:'5px'}}>
                <MDBDropdown>
                  <MDBDropdownToggle nav>
                    <p className="h6">Zhicheng</p>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu color="indigo darken-1" basic left style={{marginTop:'20px'}}>
                    <MDBDropdownItem href="/people/1">个人主页</MDBDropdownItem>
                    <MDBDropdownItem href="/myfavorite">我的关注</MDBDropdownItem>
                    <MDBDropdownItem href="#!">退出</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBNavbar>
        </div>
        <div style={{height:'78px'}}></div>
        
      </div>
    );
  }
}

Header.i18n = [
  {},
  {}
];
