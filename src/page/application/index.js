import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBDataTable,
  MDBBtn,

} from 'mdbreact';
import {languageHelper} from "../../tool/language-helper";
import {Header} from '../../general-component/header';
import {Footer} from "../../general-component/footer";
import {ResumeTitle} from "../../general-component/resumeTitle";
import {removeUrlSlashSuffix} from "../../tool/remove-url-slash-suffix";
import {AppTable} from "./apptable";
import {Collection} from "../collection";

export class Application extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    };
    this.text = Application.i18n[languageHelper()];
    this.pip = 0;
  }

  

  render() {
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
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
                <MDBRow>
                  <MDBCol style={{textAlign: 'left'}}>
                    <p>
                      <MDBBtn flat href={`${this.props.match.url}/application`}>我的申请</MDBBtn>
                    </p>
                    <p>
                      <MDBBtn  to="/home" flat>个人档案库</MDBBtn>
                    </p>
                    <p>
                      <MDBBtn flat>我的简历</MDBBtn>
                    </p>
                    <p>
                      <MDBBtn flat href={`${this.props.match.url}/collection`}>收 藏</MDBBtn>
                    </p>
                    <p>
                      <MDBBtn flat>好友列表</MDBBtn>
                    </p>
                    <p>
                      <MDBBtn flat>消 息</MDBBtn>
                    </p>
                  </MDBCol>
                </MDBRow>
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

Application.i18n = [
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
