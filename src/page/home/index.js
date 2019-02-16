import React from 'react';

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
} from 'mdbreact';

import {languageHelper} from '../../tool/language-helper';
import {HomeHeader} from './home-header';
import {Footer} from '../../general-component/footer';
import {JobListHome} from './job-list-home';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      selectedTab: 1
    };
    /*
    * */
    this.text = Home.i18n[languageHelper()];
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
        <MDBNavbar expand="md">
          <MDBNavbarNav>
            <MDBNavItem>
              <MDBNavLink
                onClick={
                  () => {
                    this.setState({selectedTab: 1});
                  }
                }
                to="#"
              >
                {this.text.hot}
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                onClick={
                  () => {
                    this.setState({selectedTab: 2});
                  }
                }
                to="#"
              >
                {this.text.new}
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBNavbar>
        <div
          style={{
            display: 'flex',
            marginTop: '55px',
            justifyContent: 'center'
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
