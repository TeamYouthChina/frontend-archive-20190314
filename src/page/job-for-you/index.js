import React from 'react';

import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';
import {JobPushed} from './job-pushed';

import {languageHelper} from '../../tool/language-helper';

import {
  MDBRow,
  MDBCol,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBJumbotron
} from 'mdbreact';

export class JobForYou extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      backend: null,
      selectedTab: 1
    };

    this.text = JobForYou.i18n[languageHelper()];
  }

  componentWillMount() {
    let mockData = {
      jobType:[
        {id: 1, name: '实习'},
        {id: 2, name: '校园招聘'},
        {id: 3, name: '社会招聘'}
      ],
      status: {
        code: 2000
      }
    };

    this.setState( () =>{
      return {backend: mockData};
    });
  }
  
  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        <Header/>
        <MDBJumbotron className="d-none d-md-block m-0 pt-5" style={{
          height: '300px',
          backgroundColor: '#949494',
          color: 'white'
        }}>
          <MDBRow className="text-center">
            <MDBCol>
              <br/>
              <br/>
              <br/>
              <h1>发现合适你的职位和公司</h1>
            </MDBCol>
          </MDBRow>
        </MDBJumbotron>
        <MDBNavbar expand="md">
          <MDBNavbarNav center>
            {this.state.backend.jobType.map((item) =>{
              return (
                <MDBNavItem
                  key={item.id}>
                  <MDBNavLink
                    onClick = {
                      () => {
                        this.setState({selectedTab: item.id})
                      }
                    }
                    to= "#"
                  >
                    {item.name}
                  </MDBNavLink>
                </MDBNavItem>
              );
            })}
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
                        <div className="h3 font-weight-light mb-4">实习</div>
                        <JobPushed/>
                      </div>
                    );
                  } else if (this.state.selectedTab ===2 ) {
                    return (
                      <div>
                        <div className="h3 font-weight-light mb-4">校园招聘</div>
                        <JobPushed/>
                      </div>
                    );
                  } else {
                    return (
                      <div>
                        <div className="h3 font-weight-light mb-4">社会招聘</div>
                        <JobPushed/>
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
    ): null
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
