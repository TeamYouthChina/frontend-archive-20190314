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
      <div
        style={{
          padding: 0,
          backgroundColor: '#F3F5F7'
        }}
      >
        <Header/>
        <div style={{
          backgroundColor: 'white'
        }}>
          <MDBContainer>
            <MDBRow>
              <MDBCol className="mt-5 p-0">
                <MDBInput
                  className="flex-fill form-control"
                  icon="search"
                  hint="通过以下方式搜索"
                  style={{
                    fontSize: '28px',
                  }}/>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        
        <div className="classic-tabs">
          <MDBTabContent className="px-0 py-0" activeItem={this.state.activeItemClassicTabs1}>

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

        <Footer/>
      </div>
    );
  }
}

Search.i18n = [
  {},
  {}
];

