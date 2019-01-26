import React from 'react';
import {Redirect} from 'react-router-dom';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
} from 'mdbreact';

import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';
import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.text = Login.i18n[languageHelper()];
  }

  render() {
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    if (pathname) {
      return (<Redirect to={pathname}/>);
    }
    return (
      <MDBContainer
        fluid
        style={{padding: 0}}
      >
        <Header/>
        <MDBContainer>
          <MDBRow center>
            <MDBCol md="6">
              <form className="mx-5 my-5">
                <p className="display-4 font-weight-lighter text-center my-5">Log In</p>
                  <div className="input-group mb-3 d-flex">
                    <label htmlFor="defaultFormLoginEmailEx" className="grey-text my-2 mr-2">
                      {this.text.email}
                    </label>
                    <input
                      type="email"
                      id="defaultFormLoginEmailEx"
                      className="form-control"
                    />
                  </div>
                
                  <br/>
                  
                  <div className="input-group d-flex">
                    <label htmlFor="defaultFormLoginPasswordEx" className="grey-text my-2 mr-2">
                      {this.text.password}
                    </label>
                    <input
                      type="password"
                      id="defaultFormLoginPasswordEx"
                      className="form-control"
                    />
                  </div>
                
                <div className="mt-4 text-center">
                  <MDBRow>
                    <MDBCol md="6">
                      <MDBBtn color="indigo" href="/" type="submit">{this.text.submitBtn}</MDBBtn>
                    </MDBCol>
                    <MDBCol className="py-3" md="6">
                      <a href="#">Forgot password?</a>
                    </MDBCol>
                  </MDBRow>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <Footer/>
      </MDBContainer>
    );
  }
}

Login.i18n = [
  {
    email: '邮箱',
    password: '密码',
    submitBtn: '登陆'
  },
  {
    email: 'email',
    password: 'password',
    submitBtn: 'Login'
  }
];
