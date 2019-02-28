import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {
  MDBCol,
  MDBRow,
  MDBBtn,

} from 'mdbreact';
import Cookies from 'js-cookie'
import {languageHelper} from "../../tool/language-helper";
import {Header} from "../../general-component/header/header";
import {Footer} from "../../general-component/footer";
import {ResumeTitle} from "../../general-component/resumeTitle";
import {removeUrlSlashSuffix} from "../../tool/remove-url-slash-suffix";
import {AppTable} from "./application/apptable";
import {Collection} from "./collection";
import MainBody from '../ProfileNew/Components/MainBody/MainBody'
import {Notification} from './notification';
import {Setting} from './setting';
import {Message} from './message';


export class Applicant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.text = Applicant.i18n[languageHelper()];

    this.commonStyle = {
      width: '140px',
      textAlign: 'left'
    };
    this.selectedStyle = {
      ...this.commonStyle,
      fontWeight: '450',
      borderLeft: '4px solid #7C97B8',
      fontSize: '16px',
      background: '#F2F2F2'
    };
    this.unselectedStyle = {
      ...this.commonStyle,
      fontWeight: '300',
      fontSize: '16px'
    };
  }

  render() {
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    const navStyle = {marginTop: "4rem"};
    if (pathname) {
      return (<Redirect to={pathname}/>);
    }
    return (
      <div>
        <Header/>
        <ResumeTitle/>
        <MDBRow center>
          <MDBCol md="10" className="">
            <MDBRow>
              <MDBCol md="2">
                <MDBRow>
                  <MDBBtn
                    style={this.props.location.pathname.indexOf('/profile') > -1 ? this.selectedStyle : this.unselectedStyle}
                    flat
                    onClick={
                      () => {
                        this.props.history.push(`${this.props.match.url}/profile`);
                      }
                    }
                  >
                    个人档案
                  </MDBBtn>
                </MDBRow>
                <MDBRow>
                  <MDBBtn
                    style={this.props.location.pathname.indexOf('/resume') > -1 ? this.selectedStyle : this.unselectedStyle}
                    flat
                    onClick={
                      () => {
                        this.props.history.push(`${this.props.match.url}/resume`);
                      }
                    }
                  >
                    我的简历
                  </MDBBtn>
                </MDBRow>
                <MDBRow>
                  <MDBBtn
                    style={this.props.location.pathname.indexOf('/application') > -1 ? this.selectedStyle : this.unselectedStyle}
                    flat
                    onClick={
                      () => {
                        this.props.history.push(`${this.props.match.url}/application`);
                      }
                    }
                  >
                    我的申请
                  </MDBBtn>
                </MDBRow>
                <MDBRow>
                  <MDBBtn
                    style={this.props.location.pathname.indexOf('/collection') > -1 ? this.selectedStyle : this.unselectedStyle}
                    flat
                    onClick={
                      () => {
                        this.props.history.push(`${this.props.match.url}/collection`);
                      }
                    }
                  >
                    我的收藏
                  </MDBBtn>
                </MDBRow>
                <MDBRow>
                  <MDBBtn
                    style={this.props.location.pathname.indexOf('/messafe') > -1 ? this.selectedStyle : this.unselectedStyle}
                    flat
                    onClick={
                      () => {
                        this.props.history.push(`${this.props.match.url}/message`);
                      }
                    }
                  >
                    好友
                  </MDBBtn>
                </MDBRow>
                <MDBRow>
                  <MDBBtn
                    style={this.props.location.pathname.indexOf('/notification') > -1 ? this.selectedStyle : this.unselectedStyle}
                    flat
                    onClick={
                      () => {
                        this.props.history.push(`${this.props.match.url}/notification`);
                      }
                    }
                  >
                    通知
                  </MDBBtn>
                </MDBRow>
                <MDBRow>
                  <MDBBtn
                    style={this.props.location.pathname.indexOf('/setting') > -1 ? this.selectedStyle : this.unselectedStyle}
                    flat
                    onClick={
                      () => {
                        this.props.history.push(`${this.props.match.url}/setting`);
                      }
                    }
                  >
                    设置
                  </MDBBtn>
                </MDBRow>
                <MDBRow>
                  <MDBBtn
                    style={this.props.location.pathname.indexOf('/help') > -1 ? this.selectedStyle : this.unselectedStyle}
                    flat
                    onClick={
                      () => {
                        this.props.history.push('/help');
                      }
                    }
                  >
                    帮助
                  </MDBBtn>
                </MDBRow>
              </MDBCol>
              <MDBCol md="10" left>
                <div
                  style={{margin: '20px'}}
                >
                  <Switch>
                    <Route
                      path={`${this.props.match.url}/application`}
                      component={routeProps => <AppTable {...routeProps} />}
                    />
                    <Route
                      path={`${this.props.match.url}/collection`}
                      component={routeProps => <Collection {...routeProps} />}
                    />
                    <Route
                      path={`${this.props.match.url}/message`}
                      component={routeProps => <Message/>}
                    />
                    <Route
                      path={`${this.props.match.url}/notification`}
                      component={routeProps => <Notification/>}
                    />
                    <Route
                      path={`${this.props.match.url}/profile/:id`}
                      component={routeProps => <MainBody {...routeProps}/>}
                    />
                    <Route
                      path={`${this.props.match.url}/resume`}
                      component={routeProps => null}
                    />
                    <Route
                      path={`${this.props.match.url}/setting/`}
                      component={routeProps => <Setting/>}
                    />
                    <Redirect to={`${this.props.match.url}/profile/${Cookies.get('id') ? Cookies.get('id') : 1}`}/>
                  </Switch>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <Footer/>

      </div>
    );
  }
}

Applicant.i18n = [
  {
    description: '职位描述',
    requirements: '职位要求',
    better: '加分项'
  },
  {
    description: 'Job Description',
    requirements: 'Candidate Requirements',
    better: 'Good to have'
  },
];
