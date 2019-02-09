import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './public/style.css'

import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTabPane, 
  MDBTabContent, 
  MDBNav, 
  MDBNavItem, 
  MDBNavLink,
  MDBNavbar, 
  MDBNavbarBrand, 
  MDBNavbarNav, 
  MDBNavbarToggler, 
  MDBCollapse, 
  MDBFormInline,
  MDBDropdown, 
  MDBDropdownToggle, 
  MDBDropdownMenu, 
  MDBDropdownItem,
  MDBIcon
} from 'mdbreact';

import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';
import {SearchJobResult} from "./search-job";
import {SearchCompanyResult} from './search-company';
import {SearchCommunityResult} from "./search-community";
import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';
import {SearchVideoResult} from "./search-video";

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.text = Search.i18n[languageHelper()];

    this.state = {
      activeItemClassicTabs1: "1",
      collapseID: ""
    };
    
    this.toggleClassicTabs1 = this.toggleClassicTabs1.bind(this);
  }

  toggleClassicTabs1 = tab => () => {
    if (this.state.activeItemClassicTabs1 !== tab) {
      this.setState({
        activeItemClassicTabs1: tab
      });
    }
  }
  
  render() {
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    if (pathname) {
      return (<Redirect to={pathname}/>);
    }
    return (
      <MDBContainer
        fluid
        style={{padding: 0}}
      >
        <Header/>
        <MDBContainer>
          <img
            alt="aligment"
            className="rounded mx-auto d-block"
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          />
          <MDBRow>
            <MDBCol className="m-0 p-0">
              <MDBInput className="flex-fill form-control" icon="search" hint="通过以下方式搜索" style={{
                fontSize: '28px'
              }}/>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        {/*////////////////////////////////////////////////////////////////*/}
        {/*<MDBRow center className="mt-5">*/}
          {/*<MDBCol className="mt-5" md="12" lg="10">*/}
            <div className="classic-tabs">
              <MDBTabContent className="mx-5 px-5" activeItem={this.state.activeItemClassicTabs1}>
                <MDBTabPane tabId="1">
                  <SearchJobResult
                    toggleClassicTabs1={this.toggleClassicTabs1}
                    activeTab={this.state.activeItemClassicTabs1}
                  />
                </MDBTabPane>
                <MDBTabPane tabId="2">
                  <SearchCompanyResult 
                    toggleClassicTabs1={this.toggleClassicTabs1}
                    activeTab={this.state.activeItemClassicTabs1}
                  />
                </MDBTabPane>
                <MDBTabPane tabId="3">
                  <SearchCommunityResult
                    toggleClassicTabs1={this.toggleClassicTabs1}
                    activeTab={this.state.activeItemClassicTabs1}
                  />
                </MDBTabPane>
                <MDBTabPane tabId="4">
                  <SearchVideoResult
                    toggleClassicTabs1={this.toggleClassicTabs1}
                    activeTab={this.state.activeItemClassicTabs1}
                  />
                </MDBTabPane>
                <MDBTabPane tabId="5">
                  <MDBBtn color="primary" href="/search">建设中，点我返回</MDBBtn>
                </MDBTabPane>
              </MDBTabContent>
            </div>
          {/*</MDBCol>*/}
        {/*</MDBRow>*/}

        <Footer/>
      </MDBContainer>
    );
  }
}

Search.i18n = [
  {},
  {}
];

