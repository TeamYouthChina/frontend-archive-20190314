import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {
  MDBCol,
  MDBRow,
  MDBBtn,

} from 'mdbreact';
import {languageHelper} from "../../tool/language-helper";
import {Header} from "../../general-component/header";
import {Footer} from "../../general-component/footer";
import {ResumeTitle} from "../../general-component/resumeTitle";
import {removeUrlSlashSuffix} from "../../tool/remove-url-slash-suffix";
import {AppTable} from "./application/apptable";
import {Collection} from "./collection";


export class Applicant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.text = Applicant.i18n[languageHelper()];
    
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
        <MDBRow top>
          <MDBCol md="10" className="offset-md-1 my-5 p-0">

            <div className="d-flex flex-row">
              <div>
                <p style={{textAlign:'left'}}>

                  <p>
                    <MDBBtn

                      style={this.props.location.pathname.indexOf('/applicant/application') > -1 ? {fontWeight:'450',borderLeft: '4px solid #7C97B8',fontSize:'16px',background:'#F2F2F2'}:{fontWeight:'300',fontSize:'16px'}}
                      flat
                      href={`${this.props.match.url}/application` }
                    >我的申请</MDBBtn>
                  </p>
                  <p >
                    <MDBBtn style={{fontWeight:'300',fontSize:'16px'}} flat>个人档案库</MDBBtn>
                  </p>
                  <p>
                    <MDBBtn style={{fontWeight:'300',fontSize:'16px'}} flat>我的简历</MDBBtn>
                  </p>
                  <p>
                    <MDBBtn

                      style={this.props.location.pathname.indexOf('/collection/company') > -1 || this.props.location.pathname.indexOf('/collection/job') > -1 ? {fontWeight:'450',borderLeft: '4px solid #7C97B8',fontSize:'16px',background:'#F2F2F2'}:{fontWeight:'300',fontSize:'16px'}}
                      flat href={`${this.props.match.url}/collection`}>收藏</MDBBtn>
                  </p>
                  <p>
                    <MDBBtn style={{fontWeight:'300',fontSize:'16px'}} flat>好友</MDBBtn>
                  </p>
                  <p>
                    <MDBBtn style={{fontWeight:'300',fontSize:'16px'}} flat>通知</MDBBtn>
                  </p>
                </p>
              </div>
              <div className="flex-fill">
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
                    component={routeProps => null}
                  />
                  <Route
                    path={`${this.props.match.url}/notification`}
                    component={routeProps => null}
                  />
                  <Route
                    path={`${this.props.match.url}/profile/:id`}
                    component={routeProps => null}
                  />
                  <Redirect to={`${this.props.match.url}/application`}/>
                </Switch>
              </div>
            </div>
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
