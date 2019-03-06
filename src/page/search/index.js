import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './public/style.css'
import classes from  './tabs.module.css'

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

import {Header} from '../../general-component/header/header';
import {Footer} from '../../general-component/footer';
import {SearchJobResult} from "./search-job";
import {SearchCompanyResult} from './search-company';
import {SearchCommunityResult} from "./search-community";
import {SearchVideoResult} from "./search-video";
import {SearchConnectionResult} from './search-connection';
import {JobNavbarItem} from './navbar-items/job-navbarItem';
import {CompanyNavbarItem} from './navbar-items/company-navbarItem';
import {CommunityNavbarItem} from './navbar-items/community-navbarItem';
import {VideoNavbarItem} from './navbar-items/video-navbarItem';
import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';
import {HotTemp} from '../home/hotTemp';
import {NewTemp} from '../home/newTemp';

const basicCHNFont = {
  fontFamily: 'PingFang SC',
  fontStyle: 'normal',
  fontWeight: 'normal',
  lineHeight: 'normal'
};

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.text = Search.i18n[languageHelper()];

    this.state = {
      // activeItemClassicTabs1: "1",
      collapseID: '',
      tabsContent: '职位',
    };

    // this.toggleClassicTabs1 = this.toggleClassicTabs1.bind(this);
  }

  handleTabsContent = tabsContent => {
    console.log('handleTabsContent call')
    this.setState({
      ...this.state,
      tabsContent
    })
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({collapseID: (prevState.collapseID !== collapseID ? collapseID : '')}));
  };

  render() {
    console.log('render()')
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    if (pathname) {
      return (<Redirect to={pathname}/>);
    }
    console.log(this.props.location.pathname);

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

        <MDBNavbar light className="mb-3" expand="md" style={{
          background: 'white',
          boxShadow: 'none',
          borderTop: 'solid #E0E0E0 1px',
          borderBottom: 'solid #E0E0E0 1px'
        }}>
          <MDBContainer>
            <MDBNavbarToggler onClick={this.toggleCollapse('navbarCollapse')}/>
            <MDBCollapse id="navbarCollapse" isOpen={this.state.collapseID} navbar>
              <MDBNavbarNav left>

                <MDBNavItem className="mx-2">
                  <MDBDropdown>
                    <MDBDropdownToggle nav>
                      <div className="d-md-inline" style={{
                        ...basicCHNFont,
                        color: '#31394D'
                      }}>{this.state.tabsContent} <MDBIcon icon="caret-down" style={{color: '#8D9AAF'}}/>
                      </div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className={classes.menu}>
                      <MDBDropdownItem
                        className={`p-0 ${classes.dropdownItems}${this.props.location.pathname.includes('/search-job-result') ? ' active' : ''}`}
                        onClick={() => this.handleTabsContent('职位')}>
                        <MDBNavLink
                          className="p-2 d-flex justify-content-center align-items-center"
                          style={{...basicCHNFont, color: '#31394D'}}
                          to={`${this.props.match.url}/search-job-result`}
                        >
                          <MDBIcon style={{width: '20px', marginRight: '5px'}} icon="user-circle"/> 职位
                        </MDBNavLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem
                        className={`p-0 ${classes.dropdownItems}${this.props.location.pathname.includes('/search-company-result') ? ' active' : ''}`}
                        onClick={() => this.handleTabsContent('公司')}>
                        <MDBNavLink
                          className="p-2 d-flex justify-content-center align-items-center"
                          style={{...basicCHNFont, color: '#31394D'}}
                          to={`${this.props.match.url}/search-company-result`}
                        >
                          <MDBIcon style={{width: '20px', marginRight: '5px'}} icon="building"/> 公司
                        </MDBNavLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem
                        className={`p-0 ${classes.dropdownItems}${this.props.location.pathname.includes('/search-community-result') ? ' active' : ''}`}
                        onClick={() => this.handleTabsContent('社区')}>
                        <MDBNavLink
                          className="p-2 d-flex justify-content-center align-items-center"
                          style={{...basicCHNFont, color: '#31394D'}}
                          to={`${this.props.match.url}/search-community-result`}>
                          <MDBIcon style={{width: '20px', marginRight: '5px'}} icon="bullhorn"/> 社区
                        </MDBNavLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem
                        className={`p-0 ${classes.dropdownItems}${this.props.location.pathname.includes('/search-video-result') ? ' active' : ''}`}
                        onClick={() => this.handleTabsContent('视频')}>
                        <MDBNavLink
                          className="p-2 d-flex justify-content-center align-items-center"
                          style={{...basicCHNFont, color: '#31394D'}}
                          to={`${this.props.match.url}/search-video-result`}>
                          <MDBIcon style={{width: '20px', marginRight: '5px'}} fab icon="play-circle"/> 视频
                        </MDBNavLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem
                        className={`p-0 ${classes.dropdownItems}${this.props.location.pathname.includes('/search-connect-result') ? ' active' : ''}`}
                        onClick={() => this.handleTabsContent('人脉')}>
                        <MDBNavLink
                          className="p-2 d-flex justify-content-center align-items-center"
                          style={{...basicCHNFont, color: '#31394D'}}
                          to={`${this.props.match.url}/search-connect-result`}>
                          <MDBIcon style={{width: '20px', marginRight: '5px'}} icon="users"/> 人脉
                        </MDBNavLink>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>

                <Switch>
                  <Route
                    path={`${this.props.match.url}/search-job-result`}
                    component={routeProps => <JobNavbarItem basicCHNFont={basicCHNFont}/>}
                  />
                  <Route
                    path={`${this.props.match.url}/search-company-result`}
                    component={routeProps => <CompanyNavbarItem clickable={this.handleTabsContent} basicCHNFont={basicCHNFont}/>}
                  />
                  <Route
                    path={`${this.props.match.url}/search-community-result`}
                    component={routeProps => <CommunityNavbarItem basicCHNFont={basicCHNFont}/>}
                  />
                  <Route
                    path={`${this.props.match.url}/search-video-result`}
                    component={routeProps => <VideoNavbarItem basicCHNFont={basicCHNFont}/>}
                  />
                  <Route
                    path={`${this.props.match.url}/search-connect-result`}
                    component={routeProps => <JobNavbarItem basicCHNFont={basicCHNFont}/>}
                  />
                  <Redirect to={`${this.props.match.url}/search-job-result`}/>
                </Switch>

              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>

        <Switch>
          <Route
            path={`${this.props.match.url}/search-job-result`}
            component={routeProps => <SearchJobResult basicCHNFont={basicCHNFont}/>}
          />
          <Route
            path={`${this.props.match.url}/search-company-result`}
            component={routeProps => <SearchCompanyResult basicCHNFont={basicCHNFont}/>}
          />
          <Route
            path={`${this.props.match.url}/search-community-result`}
            component={routeProps => <SearchCommunityResult basicCHNFont={basicCHNFont}/>}
          />
          <Route
            path={`${this.props.match.url}/search-video-result`}
            component={routeProps => <SearchVideoResult basicCHNFont={basicCHNFont}/>}
          />
          <Route
            path={`${this.props.match.url}/search-connect-result`}
            component={routeProps => <SearchConnectionResult basicCHNFont={basicCHNFont}/>}
          />
          <Redirect to={`${this.props.match.url}/search-job-result`}/>
        </Switch>

        <Footer/>
      </div>
    );
  }
}

Search.i18n = [
  {},
  {}
];

