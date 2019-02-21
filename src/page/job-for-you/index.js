import React from 'react';

import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';

import {languageHelper} from '../../tool/language-helper';

import {
  MDBRow,
  MDBCol,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBJumbotron
} from 'mdbreact';
import {JobListHome} from '../home/job-list-home';

export class JobForYou extends React.Component {
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
      jobType: [
        {id: 1, name: '实习'},
        {id: 2, name: '校园招聘'},
        {id: 3, name: '社会招聘'}
      ],
      status: {
        code: 2000
      }
    };

    this.setState(() => {
      return {backend: mockData};
    });
  }

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        <Header/>
        <MDBJumbotron className="d-none d-md-block m-0 pt-5" style={{
          height: '300px',
          backgroundColor: '#555555',
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

        <div className="classic-tabs">
          <MDBNav
            classicTabs
            expand="md"
            className="d-flex justify-content-center"
            style={{
              boxShadow: 'none',
              borderBottom: 'solid #E0E0E0 1px'
            }}
          >
            <MDBRow>
              {this.state.backend.jobType.map((item) => {
                return (
                  <MDBCol key={item.id} size="12" md="4">
                    <MDBNavItem
                      className="ml-0 text-center p-0">
                      <MDBNavLink
                        onClick={
                          () => {
                            this.setState({selectedTab: item.id});
                          }
                        }
                        className={this.state.selectedTab === item.id ? 'active font-weight-bold' : ''}
                        to="#"
                        style={{
                          color: '#454F69',
                          fontSize: '16px',
                        }}
                      >
                        <p className="pr-2 py-0 m-0">{item.name}</p>
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBCol>
                );
              })}
            </MDBRow>
          </MDBNav>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#FAFBFD'
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
                    if (this.state.selectedTab === 1) {
                      return (
                        <div>
                          <JobListHome/>
                          <JobListHome/>
                          <JobListHome/>
                        </div>
                      );
                    } else if (this.state.selectedTab === 2) {
                      return (
                        <div>
                          <JobListHome/>
                          <JobListHome/>
                          <JobListHome/>
                        </div>
                      );
                    } else {
                      return (
                        <div>
                          <JobListHome/>
                          <JobListHome/>
                          <JobListHome/>
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
    ) : null
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
