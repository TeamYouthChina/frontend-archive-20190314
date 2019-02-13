import React from "react";
import {Redirect, Route, Switch} from 'react-router-dom';
import {
  MDBCol,
  MDBCard,
  MDBCollapse,
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavItem,
  MDBNavLink,
  MDBRow,
  MDBListGroup, MDBListGroupItem
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
      isOpen: false
    };
    this.text = Discovery.i18n[languageHelper()];
  }

  toggleCollapse() {
    this.setState({isOpen: !this.state.isOpen});
  };

  render() {
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    if (pathname) {
      return (<Redirect to={pathname}/>);
    }
    return (
      <MDBContainer fluid>
        <Header/>
        <MDBRow center>
          <MDBCol md="9" lg="8">

            <MDBNavbar color="indigo" dark expand="md" style={{borderRadius: '5px'}}>
              <MDBNavbarBrand>
                <strong className="white-text">Navbar</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.toggleCollapse}/>
              <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem>
                    <MDBNavLink to={`${this.props.match.url}/article`}>{this.text.article}</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to={`${this.props.match.url}/review`}>{this.text.review}</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to={`${this.props.match.url}/question-answer`}>{this.text.questionAnswer}</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to={`${this.props.match.url}/video`}>{this.text.video}</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to={`${this.props.match.url}/connection`}>{this.text.connection}</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
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
          <MDBCol md="3" lg="2" className="pt-3" style={{marginTop: '50px'}}>
            <p>
              <MDBCard style={{height: '200px', width: '400px'}}>
                <MDBRow>
                  <MDBCol md="4" lg="4">
                    <div className="px-10">
                      <MDBRow center style={{marginTop: '20px'}}>
                        <MDBIcon icon="shield" size="3x"/>
                      </MDBRow>
                      <MDBRow center>
                        normal
                      </MDBRow>
                    </div>
                  </MDBCol>
                  <MDBCol md="4" lg="4">
                    <div className="px-10">
                      <MDBRow center style={{marginTop: '20px'}}>
                        <MDBIcon icon="shield" size="3x"/>
                      </MDBRow>
                      <MDBRow center>
                        normal
                      </MDBRow>
                    </div>
                  </MDBCol>
                  <MDBCol  md="4" lg="4">
                    <div className="px-10">
                      <MDBRow center style={{marginTop: '20px'}}>
                        <MDBIcon icon="shield" size="3x"/>
                      </MDBRow>
                      <MDBRow center>
                        normal
                      </MDBRow>
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="4" lg="4">
                    <div className="px-10">
                      <MDBRow center style={{marginTop: '20px'}}>
                        <MDBIcon icon="shield" size="3x"/>
                      </MDBRow>
                      <MDBRow center>
                        normal
                      </MDBRow>
                    </div>
                  </MDBCol>
                  <MDBCol md="4" lg="4">
                    <div className="px-10">
                      <MDBRow center style={{marginTop: '20px'}}>
                        <MDBIcon icon="shield" size="3x"/>
                      </MDBRow>
                      <MDBRow center>
                        normal
                      </MDBRow>
                    </div>
                  </MDBCol>
                  <MDBCol  md="4" lg="4">
                    <div className="px-10">
                      <MDBRow center style={{marginTop: '20px'}}>
                        <MDBIcon icon="shield" size="3x"/>
                      </MDBRow>
                      <MDBRow center>
                        normal
                      </MDBRow>
                    </div>
                  </MDBCol>
                </MDBRow>             
              </MDBCard>
            </p>
          </MDBCol>
        </MDBRow>
        <Footer/>
      </MDBContainer>
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
