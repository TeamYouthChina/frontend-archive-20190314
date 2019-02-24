import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {
  MDBCol,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBRow,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavItem,
  MDBNavLink,
  MDBMask,
  MDBView,
  MDBBtn,
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBIcon
} from 'mdbreact';

import './public/style.css'
import {HomeIntro} from "./home-intro";

export class HomeHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      searchBarClicked: false
    }
  }

  handleTogglerClick = () => {
    // TODO:设计导航栏上搜索栏和搜索图标的切换(可见Figma上描述）
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  handleSearchBarClick = () => {
    
    this.setState({
      searchBarClicked: true
    });
  };


  render() {
    const navStyle = {marginTop: "4rem"};

    const overlay = (
      <div
        id="sidenav-overlay"
        style={{backgroundColor: "transparent"}}
        onClick={this.handleTogglerClick}
      />
    );
    return (

      <div>
        <Router>
          <div>
            <MDBNavbar color="homeHeaderBackgroundColor" dark expand="md" fixed="top" scrolling transparent>
              <MDBCol md="1">
                <MDBNavbarBrand href="/">
                  <strong>YouthChina</strong>
                </MDBNavbarBrand>
              </MDBCol>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.handleTogglerClick}/>}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBCol md="4">
                  <MDBNavbarNav>
                    <MDBNavItem>
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
                  <MDBNavItem style={{width: '45px', height: '45px'}} className="p-0 mx-2 align-middle">
                    <img
                      src="https://s2.ax1x.com/2019/01/27/kuUMYq.jpg"
                      className="rounded-circle z-depth-1-half img-fluid p-0 float-right"
                      alt="Sample avatar"
                    />
                  </MDBNavItem>
                  <MDBNavItem style={{marginTop: '5px'}}>
                    <MDBDropdown>
                      <MDBDropdownToggle nav>
                        <p className="h6">Zhicheng</p>
                      </MDBDropdownToggle>
                      <MDBDropdownMenu color="indigo darken-1" basic left style={{marginTop: '20px'}}>
                        <MDBDropdownItem href="/application/1">个人主页</MDBDropdownItem>
                        <MDBDropdownItem href="/collection">我的关注</MDBDropdownItem>
                        <MDBDropdownItem href="#!">退出</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
            {this.state.collapsed && overlay}
          </div>
        </Router>
        <MDBCarousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100 img-fluid"
                  src="http://47.254.46.117:5000/home/home4.png"

                />
                <MDBMask
                  overlay="stylish-strong"
                  className="flex-center  text-white"
                >
                  <HomeIntro/>
                </MDBMask>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100 img-fluid"
                  src="http://47.254.46.117:5000/home/home.png"

                />
                <MDBMask
                  overlay="stylish-strong"
                  className="flex-center  text-white"
                >
                  <HomeIntro/>
                </MDBMask>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100 img-fluid"
                  src="http://47.254.46.117:5000/home/home3.png"

                />
                <MDBMask
                  overlay="stylish-strong"
                  className="flex-center  text-white"
                >
                  <HomeIntro/>
                </MDBMask>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="4">
              <MDBView>
                <img
                  className="d-block w-100 img-fluid"
                  src="http://47.254.46.117:5000/home/home2.png"

                />
                <MDBMask
                  overlay="stylish-strong"
                  className="flex-center  text-white"
                >
                  <HomeIntro/>
                </MDBMask>
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </div>
    );
  }
}
