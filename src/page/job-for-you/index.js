import React from 'react';

import {Header} from "../../general-component/header";
import {Footer} from "../../general-component/footer";
import {JobCardBar} from "../../general-component/job-card-bar";
import {languageHelper} from "../../tool/language-helper";

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink
} from "mdbreact";

export class JobForYou extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      backend: null,
      selectedTab: 1
    };

    this.text = JobForYou.i18n[languageHelper()];
  }
  
  render() {
    return (
      <div>
        <Header/>
        <MDBNavbar expand="md">
          <MDBNavbarNav center>
            <MDBNavItem>
              <MDBNavLink 
                onClick = {
                  () => {
                  this.setState({selectedTab: 1});
                  }
                }
                to= "#"
              >
                {this.text.intern}
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                onClick = {
                  () => {
                    this.setState({selectedTab: 2});
                  }
                }
                to= "#"
              >
                {this.text.campus}
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                onClick = {
                  () => {
                    this.setState({selectedTab: 3});
                  }
                }
                to= "#"
              >
                {this.text.general}
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBNavbar>
        <div style={{
          display: 'flex',
          marginTop: '55px',
          justifyContent: 'center'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: 1224
          }}>
            {
              (
                () => {
                  let tag;
                  if (this.state.selectedTab === 1 ) {
                    return (
                      <div>
                        <div className="h3 mb-4">实习</div>
                        <JobCardBar/>
                        <JobCardBar/>
                        <JobCardBar/>
                      </div>
                    );
                  } else if (this.state.selectedTab ===2 ) {
                    return (
                      <div>
                        <div className="h3 mb-4">校园招聘</div>
                        <JobCardBar/>
                        <JobCardBar/>
                        <JobCardBar/>
                      </div>
                    );
                  } else {
                    return (
                      <div>
                        <div className="h3 mb-4">社会招聘</div>
                        <JobCardBar/>
                        <JobCardBar/>
                        <JobCardBar/>
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
    )
  }
}

JobForYou.i18n = [
  {
    intern: '实习',
    campus: '校园招聘',
    general: '社会招聘'
  },
  {
    intern: 'intern',
    campus: 'campus',
    general: 'general'
  }
];
