import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {
  MDBCol,
  MDBRow,
  MDBBtn,

} from 'mdbreact';
import {languageHelper} from "../../tool/language-helper";
import {Header, MDBNavItem} from '../../general-component/header';
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
      hover: 0,
    };
    this.text = Application.i18n[languageHelper()];
    this.pip = 0;
  }
  onClick(clickID){
    this.setState( {
      chosen:clickID
    });
  }
  onMouseEnter(enterID){
    this.setState( {
      hover:enterID
    });
  }
  onMouseLeave(leaveID){
    this.setState( {
      hover:leaveID
    });
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
                <p style={{textAlign:'left'}}>
                  
                  <p>
                    <MDBBtn
                      
                      style={this.props.location.pathname.indexOf('/application/application') > -1 ? {fontWeight:'450',borderLeft: '4px solid #7C97B8',fontSize:'16px',background:'#F2F2F2'}:{fontWeight:'300',fontSize:'16px'}} 
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
                     
                      style={this.props.location.pathname.indexOf('/collection/company')>-1||this.props.location.pathname.indexOf('/collection/job') > -1 ? {fontWeight:'450',borderLeft: '4px solid #7C97B8',fontSize:'16px',background:'#F2F2F2'}:{fontWeight:'300',fontSize:'16px'}}
                      flat href={`${this.props.match.url}/collection`}>收 藏</MDBBtn>
                  </p>
                  <p>
                    <MDBBtn style={{fontWeight:'300',fontSize:'16px'}} flat>好友列表</MDBBtn>
                  </p>
                  <p>
                    <MDBBtn style={{fontWeight:'300',fontSize:'16px'}} flat>消 息</MDBBtn>
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
