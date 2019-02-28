import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './public/style.css';

import {
  MDBRow,
  MDBCol,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBJumbotron
} from 'mdbreact';

import {Header} from '../../general-component/header/header';
import {Footer} from '../../general-component/footer';
import {JobListHome} from '../home/job-list-home';
import {Campus} from './campus';
import {General} from './general';
import {Intern} from './intern';
import {languageHelper} from '../../tool/language-helper';

const basicCHNFont = {
  fontFamily: 'PingFang SC',
  fontStyle: 'normal',
  fontWeight: 'normal',
  lineHeight: 'normal'
};

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
        {id: 1, name: '校园招聘', url: 'campus'},
        {id: 2, name: '社会招聘', url: 'general'},
        {id: 3, name: '实习', url: 'intern'}
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
          backgroundColor: '#4F65E1',
          color: 'white'
        }}>
          <MDBRow className="text-center">
            <MDBCol>
              <br/>
              <br/>
              <br/>
              <p style={{...basicCHNFont, fontSize: '36px', fontWeight: '600'}}>发现合适你的职位和公司</p>
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
                        className={this.props.location.pathname.includes(item.url) ? 'active activeTabFontColor font-weight-bold' : ''}
                        to={`${this.props.match.url}/${item.url}`}
                        style={{
                          ...basicCHNFont,
                          color: '#31394D',
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

          <Switch>
            <Route
              path={`${this.props.match.url}/campus`}
              component={routeProps => <Campus basicCHNFont={basicCHNFont}/>}
            />
            <Route
              path={`${this.props.match.url}/general`}
              component={routeProps => <General basicCHNFont={basicCHNFont}/>}
            />
            <Route
              path={`${this.props.match.url}/intern`}
              component={routeProps => <Intern basicCHNFont={basicCHNFont}/>}
            />
            <Redirect to={`${this.props.match.url}/campus`}/>
          </Switch>

          {/*<div style={{*/}
          {/*display: 'flex',*/}
          {/*justifyContent: 'center',*/}
          {/*backgroundColor: '#FAFBFD'*/}
          {/*}}>*/}
          {/*<div style={{*/}
          {/*display: 'flex',*/}
          {/*flexDirection: 'column',*/}
          {/*width: 1224*/}
          {/*}}>*/}
          {/*{*/}
          {/*(*/}
          {/*() => {*/}
          {/*let tag;*/}
          {/*if (this.state.selectedTab === 1) {*/}
          {/*return (*/}
          {/*<div>*/}
          {/*<JobListHome/>*/}
          {/*<JobListHome/>*/}
          {/*<JobListHome/>*/}
          {/*</div>*/}
          {/*);*/}
          {/*} else if (this.state.selectedTab === 2) {*/}
          {/*return (*/}
          {/*<div>*/}
          {/*<JobListHome/>*/}
          {/*<JobListHome/>*/}
          {/*<JobListHome/>*/}
          {/*</div>*/}
          {/*);*/}
          {/*} else {*/}
          {/*return (*/}
          {/*<div>*/}
          {/*<JobListHome/>*/}
          {/*<JobListHome/>*/}
          {/*<JobListHome/>*/}
          {/*</div>*/}
          {/*);*/}
          {/*}*/}
          {/*}*/}
          {/*)()*/}
          {/*}*/}
          {/*</div>*/}
          {/*</div>*/}
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
