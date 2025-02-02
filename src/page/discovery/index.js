import React from 'react';
import {Redirect, Route, Switch, Link} from 'react-router-dom';
import Cookies from "js-cookie";
import style from './index.module.css';

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
  MDBListGroup,
  MDBListGroupItem
} from 'mdbreact';

// import {Article} from './article';
import {Connection} from './connection';
import {Footer} from '../../general-component/footer';
import {Header} from '../../general-component/header/header';
import {QuestionAnswer} from './question-answer';
import {Review} from './review';
import {Video} from './video';
import {ArticleWithLoading} from './withLoading/article-with-loading';
import {ArticleCreate} from "../article/create";
import {QuestionCreate} from "../question/create";
import {ReviewCreate} from "../review/create";
import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';
import {getAsync} from '../../tool/api-helper';

export class Discovery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedTab: null
    };
    this.text = Discovery.i18n[languageHelper()];
  }

  isUserLogin = () => {
    return Cookies.get('token');
  };

  render() {
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    if (pathname) {
      return (<Redirect to={pathname}/>);
    }
    return (
      <div>
        <div>
          <Header/>
          <div className="classic-tabs">
            <MDBNav
              classicTabs
              className="d-flex justify-content-left"
              style={{
                boxShadow: 'none',
                borderBottom: 'solid #E0E0E0 1px',
                // marginLeft: '159px'
                left: '11%'
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

            <div style={{backgroundColor: '#F3F5F7'}}>
              <MDBContainer>
                <MDBRow center className="mx-0">
                  <MDBCol className="mt-2" md="9" lg="10">
                    <Switch>
                      <Route
                        path={`${this.props.match.url}/article`}
                        component={routeProps => <ArticleWithLoading {...routeProps} />}
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

                  <MDBCol className="mt-5" md="3" lg="2">

                    <div>
                      <MDBListGroup style={{
                        fontSize: '16px'
                      }}>
                        <MDBListGroupItem
                          hover
                          className={`d-flex justify-content-center align-items-center ${style.listGroupItems}`}
                          style={{borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0}}>
                          <Link style={{color: '#4F65E1'}} to="/article/create">
                            <MDBIcon fa icon="edit" className="mr-2"/>写文章
                          </Link>
                        </MDBListGroupItem>
                        <MDBListGroupItem
                          hover
                          className={`d-flex justify-content-center align-items-center ${style.listGroupItems}`}
                          style={{borderLeftWidth: 0, borderRightWidth: 0}}>
                          <Link style={{color: '#4F65E1'}} to="/question/create">
                            <MDBIcon far icon="question-circle" className="mr-2"/>提问题
                          </Link>
                        </MDBListGroupItem>
                        <MDBListGroupItem
                          hover
                          className={`d-flex justify-content-center align-items-center ${style.listGroupItems}`}
                          style={{borderLeftWidth: 0, borderRightWidth: 0}}>
                          <Link style={{color: '#4F65E1'}} to="/review/create">
                            <MDBIcon fal icon="comments" className="mr-2"/>写短评
                          </Link>
                        </MDBListGroupItem>
                      </MDBListGroup>

                      <Switch>
                        {
                          this.isUserLogin() &&
                          <Route
                            path="/article/create"
                            component={routeProps => <ArticleCreate {...routeProps} />}
                          />
                        }
                        {
                          this.isUserLogin() &&
                          <Route
                            path="/question/create"
                            component={routeProps => <QuestionCreate {...routeProps} />}
                          />
                        }
                        {
                          this.isUserLogin() &&
                          <Route
                            path="/review/create"
                            component={routeProps => <ReviewCreate {...routeProps} />}
                          />
                        }
                      </Switch>
                    </div>

                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </div>
          </div>
          <Footer/>
        </div>
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
    video: 'VideoMobile',
  }
];
