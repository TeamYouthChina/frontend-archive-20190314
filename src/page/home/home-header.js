import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Cookies from 'js-cookie';
import classes from './home-header.module.css';
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
  MDBIcon,
  MDBNav
} from 'mdbreact';

import './public/style.css'
import {HomeIntro} from "./home-intro";
import {languageHelper} from "../../tool/language-helper";
import {Logined} from "../../general-component/header/logined";
import {UnLogin} from "../../general-component/header/unlogin";


export class HomeHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      searchBarClicked: false
    }
    this.text = HomeHeader.i18n[languageHelper()];
  }

  handleTogglerClick = () => {
    // TODO:设计导航栏上搜索栏和搜索图标的切换(可见Figma上描述）
    this.setState({
      collapsed: !this.state.collapsed
    });
  };


  render() {


    const overlay = (
      <div
        id="sidenav-overlay"
        style={{backgroundColor: "transparent"}}
        onClick={this.handleTogglerClick}
      />
    );
    return (

      <div>
          <div>
            <MDBNavbar

              dark
              expand="md"
              fixed="top"
              scrolling
              transparent
              color="mdb-color"
            >
              <MDBCol className={classes.yc} md="1">
                <MDBNavbarBrand href="/">
                  <strong>WeYouth</strong>
                </MDBNavbarBrand>
              </MDBCol>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.handleTogglerClick}/>}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBCol md="2">
                  <MDBNavbarNav>
                    <MDBNavItem
                      to="#"

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

                      style={this.state.hover === 1 ? {borderBottom: '4px solid #FFFFFF'} : null}
                    >
                      <MDBNavLink to="/job-for-you">
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

                      style={this.state.hover === 2 ? {borderBottom: '4px solid #FFFFFF'} : null}
                    >
                      <MDBDropdown>
                        <MDBDropdownToggle nav>
                          <div className="d-none d-md-inline">{this.text.discovery}</div>
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
              </MDBCollapse>
            </MDBNavbar>
            {this.state.collapsed && overlay}
          </div>
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

HomeHeader.i18n = [
  {
    discovery: '探 索',
    search: '搜 索'

  },
  {
    discovery: 'DISCOVERY',
    search: 'SEARCH',
    article: 'Article',
    review: 'Review',
    question: 'Q & A',
    video: 'Video',
    people: 'People'

  },
];
