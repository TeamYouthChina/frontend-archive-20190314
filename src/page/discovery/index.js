import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import {
  MDBCol,
  MDBCard,
  MDBContainer,
  MDBIcon,
  MDBNav,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBRow,
} from 'mdbreact';

import {Article} from './article';
import {Connection} from './connection';
import {Footer} from '../../general-component/footer';
import {Header} from '../../general-component/header';
import {QuestionAnswer} from './question-answer';
import {Review} from './review';
import {Video} from './video';
import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';

export class Discovery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedTab: 1
    };
    this.text = Discovery.i18n[languageHelper()];
  }

  render() {
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    
    if (pathname) {
      return (<Redirect to={pathname}/>);
    }
    
    return (
      <div>
        <Header/>
        <div className="classic-tabs">
          <MDBNav
            classicTabs
            className="d-flex justify-content-center"
            style={{
              boxShadow: 'none',
              borderBottom: 'solid #E0E0E0 1px'
            }}>
            <MDBNavItem className="ml-0">
              <MDBNavLink
                to={`${this.props.match.url}/article`}
                onClick={
                  () => {
                    this.setState({selectedTab: 1});
                  }
                }
                className={this.state.selectedTab === 1 ? 'active font-weight-bold' : ''}
                style={{
                  color: '#454F69',
                  fontSize: '16px'
                }}>
                {this.text.article}
              </MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink
                to={`${this.props.match.url}/review`}
                onClick={
                  () => {
                    this.setState({selectedTab: 2});
                  }
                }
                className={this.state.selectedTab === 2 ? 'active font-weight-bold' : ''}
                style={{
                  color: '#454F69',
                  fontSize: '16px'
                }}>
                {this.text.review}
              </MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink
                to={`${this.props.match.url}/question-answer`}
                onClick={
                  () => {
                    this.setState({selectedTab: 3});
                  }
                }
                className={this.state.selectedTab === 3 ? 'active font-weight-bold' : ''}
                style={{
                  color: '#454F69',
                  fontSize: '16px'
                }}>
                {this.text.questionAnswer}
              </MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink
                to={`${this.props.match.url}/video`}
                onClick={
                  () => {
                    this.setState({selectedTab: 4});
                  }
                }
                className={this.state.selectedTab === 4 ? 'active font-weight-bold' : ''}
                style={{
                  color: '#454F69',
                  fontSize: '16px'
                }}>
                {this.text.video}
              </MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink
                to={`${this.props.match.url}/connection`}
                onClick={
                  () => {
                    this.setState({selectedTab: 5});
                  }
                }
                className={this.state.selectedTab === 5 ? 'active font-weight-bold' : ''}
                style={{
                  color: '#454F69',
                  fontSize: '16px'
                }}>
                {this.text.connection}
              </MDBNavLink>
            </MDBNavItem>
          </MDBNav>

          <div style={{backgroundColor: '#FAFBFD'}}>
            <MDBContainer>
              <MDBRow className="mx-0">
                <MDBCol md="9" lg="9">
                  <Switch>
                    <Route
                      path={`${this.props.match.url}/article`}
                      component={routeProps => <Article {...routeProps} />}
                    />
                    <Route
                      path={`${this.props.match.url}/review`}
                      component={routeProps => <Review {...routeProps} />}
                    />
                    <Route
                      path={`${this.props.match.url}/question-answer`}
                      component={routeProps => <QuestionAnswer {...routeProps} />}
                    />
                    <Route
                      path={`${this.props.match.url}/video`}
                      component={routeProps => <Video {...routeProps} />}
                    />
                    <Route
                      path={`${this.props.match.url}/connection`}
                      component={routeProps => <Connection {...routeProps} />}
                    />
                    <Redirect to={`${this.props.match.url}/article`}/>
                  </Switch>
                </MDBCol>

                <MDBCol className="mt-5" md="3" lg="3">
                  <MDBCard>
                    <MDBRow>

                      <MDBCol md="4" lg="4">
                        <MDBRow center style={{marginTop: '20px'}}>
                          <MDBIcon icon="shield" size="3x"/>
                        </MDBRow>
                        <MDBRow center>
                          normal
                        </MDBRow>
                      </MDBCol>

                      <MDBCol md="4" lg="4">
                        <MDBRow center style={{marginTop: '20px'}}>
                          <MDBIcon icon="shield" size="3x"/>
                        </MDBRow>
                        <MDBRow center>
                          normal
                        </MDBRow>
                      </MDBCol>

                      <MDBCol md="4" lg="4">
                        <MDBRow center style={{marginTop: '20px'}}>
                          <MDBIcon icon="shield" size="3x"/>
                        </MDBRow>
                        <MDBRow center>
                          normal
                        </MDBRow>
                      </MDBCol>
                    </MDBRow>

                    <MDBRow>

                      <MDBCol md="4" lg="4">
                        <MDBRow center style={{marginTop: '20px'}}>
                          <MDBIcon icon="shield" size="3x"/>
                        </MDBRow>
                        <MDBRow center>
                          normal
                        </MDBRow>
                      </MDBCol>

                      <MDBCol md="4" lg="4">
                        <MDBRow center style={{marginTop: '20px'}}>
                          <MDBIcon icon="shield" size="3x"/>
                        </MDBRow>
                        <MDBRow center>
                          normal
                        </MDBRow>
                      </MDBCol>

                      <MDBCol md="4" lg="4">
                        <MDBRow center style={{marginTop: '20px'}}>
                          <MDBIcon icon="shield" size="3x"/>
                        </MDBRow>
                        <MDBRow center>
                          normal
                        </MDBRow>
                      </MDBCol>

                    </MDBRow>
                  </MDBCard>

                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

Discovery.i18n = [
  {
    article: '文章',
    connection: '人脉',
    review: '长评',
    questionAnswer: '问答',
    video: '视频',
  },
  {
    article: 'Article',
    connection: 'Connection',
    review: 'Review',
    questionAnswer: 'Question & Answer',
    video: 'Video',
  }
];
