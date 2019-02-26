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

import {Header} from '../../general-component/header/header';
import {Footer} from '../../general-component/footer';
import {SearchJobResult} from "./search-job";
import {SearchCompanyResult} from './search-company';
import {SearchCommunityResult} from "./search-community";
import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';
import {SearchVideoResult} from "./search-video";
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
      collapseID: ''
    };

    // this.toggleClassicTabs1 = this.toggleClassicTabs1.bind(this);
  }

  // toggleClassicTabs1 = tab => () => {
  //   if (this.state.activeItemClassicTabs1 !== tab) {
  //     this.setState({
  //       activeItemClassicTabs1: tab
  //     });
  //   }
  // }

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({collapseID: (prevState.collapseID !== collapseID ? collapseID : '')}));
  }
  
  render() {
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
                      }}>社区 <MDBIcon icon="caret-down" style={{color: '#8D9AAF'}}/>
                      </div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem
                        className={this.props.location.pathname.includes('/search-job-result') ? 'active p-0' : 'p-0'}>
                        <MDBNavLink
                          className="p-2"
                          style={{...basicCHNFont, color: '#31394D'}}
                          to={`${this.props.match.url}/search-job-result`}
                        >
                          <MDBIcon icon="user-circle"/> 职位
                        </MDBNavLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem
                        className={this.props.location.pathname.includes('/search-company-result') ? 'active p-0' : 'p-0'}>
                        <MDBNavLink
                          className="p-2"
                          style={{...basicCHNFont, color: '#31394D'}}
                          to={`${this.props.match.url}/search-company-result`}>
                          <MDBIcon icon="building"/> 公司
                        </MDBNavLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem
                        className={this.props.location.pathname.includes('/search-community-result') ? 'active p-0' : 'p-0'}>
                        <MDBNavLink
                          className="p-2"
                          style={{...basicCHNFont, color: '#31394D'}}
                          to={`${this.props.match.url}/search-community-result`}>
                          <MDBIcon icon="bullhorn"/> 社区
                        </MDBNavLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem
                        className={this.props.location.pathname.includes('/search-video-result') ? 'active p-0' : 'p-0'}>
                        <MDBNavLink
                          className="p-2"
                          style={{...basicCHNFont, color: '#31394D'}}
                          to={`${this.props.match.url}/search-video-result`}>
                          <MDBIcon fab icon="play-circle"/> 视频
                        </MDBNavLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem
                        className={this.props.location.pathname.includes('/search-connect-result') ? 'active p-0' : 'p-0'}>
                        <MDBNavLink
                          className="p-2"
                          style={{...basicCHNFont, color: '#31394D'}}
                          to={`${this.props.match.url}/search-connect-result`}>
                          <MDBIcon icon="users"/> 人脉
                        </MDBNavLink>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                
                <MDBNavItem className="mx-2">
                  <MDBDropdown>
                    <MDBDropdownToggle nav>
                      <div className="d-md-inline" 
                           style={{...basicCHNFont, color: '#31394D'}}>发贴时间
                        <MDBIcon icon="caret-down" style={{color: '#8D9AAF'}}/>
                      </div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem 
                        style={{...basicCHNFont, color: '#31394D'}}
                        href="#!">最近发布</MDBDropdownItem>
                      <MDBDropdownItem
                        style={{...basicCHNFont, color: '#31394D'}}
                        href="#!">最近一周</MDBDropdownItem>
                      <MDBDropdownItem
                        style={{...basicCHNFont, color: '#31394D'}}
                        href="#!">最近一个月</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                
                <MDBNavItem className="mx-2">
                  <MDBDropdown>
                    <MDBDropdownToggle nav>
                      <div className="d-md-inline" 
                           style={{...basicCHNFont, color: '#31394D'}}>帖子类型
                        <MDBIcon icon="caret-down" style={{color: '#8D9AAF'}}/>
                      </div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem
                        style={{...basicCHNFont, color: '#31394D'}}
                        href="#!">吐槽</MDBDropdownItem>
                      <MDBDropdownItem
                        style={{...basicCHNFont, color: '#31394D'}}
                        href="#!">科普</MDBDropdownItem>
                      <MDBDropdownItem
                        style={{...basicCHNFont, color: '#31394D'}}
                        href="#!">生活</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                
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
            component={routeProps => <SearchCompanyResult/>}
          />
          <Route
            path={`${this.props.match.url}/search-community-result`}
            component={routeProps => <SearchCommunityResult/>}
          />
          <Route
            path={`${this.props.match.url}/search-video-result`}
            component={routeProps => <SearchVideoResult/>}
          />
          <Route
            path={`${this.props.match.url}/search-connect-result`}
            component={routeProps => <SearchJobResult/>}
          />
          <Redirect to={`${this.props.match.url}/search-job-result`}/>
        </Switch>
        
        {/*<div className="classic-tabs">*/}
          {/*<MDBTabContent className="px-0 py-0" activeItem={this.state.activeItemClassicTabs1}>*/}
        
            {/*<MDBTabPane tabId="1">*/}
              {/*<SearchJobResult*/}
                {/*toggleClassicTabs1={this.toggleClassicTabs1}*/}
                {/*activeTab={this.state.activeItemClassicTabs1}*/}
              {/*/>*/}
            {/*</MDBTabPane>*/}
        
            {/*<MDBTabPane tabId="2">*/}
              {/*<SearchCompanyResult*/}
                {/*toggleClassicTabs1={this.toggleClassicTabs1}*/}
                {/*activeTab={this.state.activeItemClassicTabs1}*/}
              {/*/>*/}
            {/*</MDBTabPane>*/}
        
            {/*<MDBTabPane tabId="3">*/}
              {/*<SearchCommunityResult*/}
                {/*toggleClassicTabs1={this.toggleClassicTabs1}*/}
                {/*activeTab={this.state.activeItemClassicTabs1}*/}
              {/*/>*/}
            {/*</MDBTabPane>*/}
        
            {/*<MDBTabPane tabId="4">*/}
              {/*<SearchVideoResult*/}
                {/*toggleClassicTabs1={this.toggleClassicTabs1}*/}
                {/*activeTab={this.state.activeItemClassicTabs1}*/}
              {/*/>*/}
            {/*</MDBTabPane>*/}
        
            {/*<MDBTabPane tabId="5">*/}
              {/*<MDBBtn color="primary" href="/search">建设中，点我返回</MDBBtn>*/}
            {/*</MDBTabPane>*/}
        
          {/*</MDBTabContent>*/}
        {/*</div>*/}

        <Footer/>
      </div>
    );
  }
}

Search.i18n = [
  {},
  {}
];

