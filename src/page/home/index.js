import React from 'react';

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTabPane,
  MDBTabContent,
  MDBNav
} from 'mdbreact';

import {languageHelper} from '../../tool/language-helper';
import {HomeHeader} from './home-header';
import {Footer} from '../../general-component/footer';
import {JobListHome} from './job-list-home';
import {JobName} from "../job/job-name";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      selectedTab: 1,
      activeItemClassicTabs1: 1
    };
    /*
    * */
    this.text = Home.i18n[languageHelper()];
  }

  toggleClassicTabs1() {

  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <HomeHeader/>
        <div className="classic-tabs">

          <MDBNav
            classicTabs
            className="d-flex justify-content-center"
            style={{
              boxShadow: 'none',
              borderBottom: 'solid #E0E0E0 1px'
            }}
          >
            <MDBRow>

              <MDBCol size="12" md="4">
                <MDBNavItem className="ml-0">
                  <MDBNavLink
                    onClick={
                      () => {
                        this.setState({selectedTab: 0});
                      }
                    }
                    to="#"
                    className={this.state.selectedTab === 0 ? 'active h5' : ''}
                    style={{
                      color: '#454F69',
                      fontSize: '16px'
                    }}
                  >
                    推荐
                  </MDBNavLink>
                </MDBNavItem>
              </MDBCol>

              <MDBCol size="12" md="4">
                <MDBNavItem className="ml-0">
                  <MDBNavLink
                    onClick={
                      () => {
                        this.setState({selectedTab: 1});
                      }
                    }
                    to="#"
                    className={this.state.selectedTab === 1 ? 'active h5' : ''}
                    style={{
                      color: '#454F69',
                      fontSize: '16px'
                    }}
                  >
                    {this.text.hot}
                  </MDBNavLink>
                </MDBNavItem>
              </MDBCol>

              <MDBCol size="12" md="4">
                <MDBNavItem className="ml-0">
                  <MDBNavLink
                    onClick={
                      () => {
                        this.setState({selectedTab: 2});
                      }
                    }
                    to="#"
                    className={this.state.selectedTab === 2 ? 'active h5' : ''}
                    style={{
                      color: '#454F69',
                      fontSize: '16px'
                    }}
                  >
                    {this.text.new}
                  </MDBNavLink>
                </MDBNavItem>
              </MDBCol>

            </MDBRow>
          </MDBNav>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: '#FAFBFD'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: 1224,
              }}
            >
              {
                (
                  () => {
                    let tag;
                    if (this.state.selectedTab === 2) {
                      return null;
                    } else { // this.state.selectedTab === 1
                      return (
                        <div>
                          <JobListHome
                            name={this.text.it}
                            search={{
                              industry: 'IT',
                              tagList: [
                                `${tag}`
                              ],
                              page: 1,
                              size: 4,
                              skipAuth: true
                            }}
                          />
                          <JobListHome
                            name={this.text.finance}
                            search={{
                              industry: 'finance',
                              tagList: [
                                `${tag}`
                              ],
                              page: 1,
                              size: 4,
                              skipAuth: true
                            }}
                          />
                          <JobListHome
                            name={this.text.industry}
                            search={{
                              industry: 'industry',
                              tagList: [
                                `${tag}`
                              ],
                              page: 1,
                              size: 4,
                              skipAuth: true
                            }}
                          />
                        </div>
                      );
                    }
                  }
                )()
              }
            </div>
          </div>

        </div>
        <Footer/>
      </div>
    );
  }
}

Home.i18n = [
  {
    hot: '热门企业',
    new: '新锐公司',
    it: 'IT / 互联网',
    finance: '金融',
    industry: '工业'
  },
  {
    hot: 'Hot',
    new: 'New',
    it: 'IT / Internet',
    finance: 'Finance',
    industry: 'Industry'
  },
];
