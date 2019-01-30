import React, {Component} from "react";

import {languageHelper} from '../../tool/language-helper';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler,
  MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from 'mdbreact';

import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';
import {VideoCard} from '../../general-component/video-card';

/* route: '/login' */

export class Discovery extends React.Component {
  constructor(props) {
    super(props);
    this.text = Discovery.i18n[languageHelper()];
  }

  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    return (
      <MDBContainer fluid>
        <Header/>
        <MDBRow>
          <MDBCol md="10" className="offset-md-1 pt-3">

            <MDBNavbar color="indigo" dark expand="md" style={{width: '50rem', borderRadius: '5px'}}>
              <MDBNavbarBrand>
                <strong className="white-text">Navbar</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.toggleCollapse}/>
              <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Features</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Pricing</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </MDBCol>
          <MDBCol md="8" lg="7">

          </MDBCol>

          <MDBCol md="4" lg="3">

          </MDBCol>
        </MDBRow>
        
        <VideoCard/>
        <Footer/>
      </MDBContainer>
    );
  }
}

Discovery.i18n = [
  {
    article: '文章',
    questionAnswer: '问答',
    video: '视频',
    connection: '人脉'
  },
  {
    article: 'Article',
    questionAnswer: 'Question & Answer',
    video: 'Video',
    connection: 'Connection'
  }
];

