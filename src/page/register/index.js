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

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.text = Register.i18n[languageHelper()];
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
              <form className="mx-5">
                <p className="h4 text-center mb-4">Sign up</p>
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

                <div className="text-center mt-4">
                  <MDBBtn color="indigo" type="submit">{this.text.submitBtn}</MDBBtn>
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

Register.i18n = [
  {
    email: '邮箱',
    password: '密码',
    submitBtn: '注册'
  },
  {
    email: 'email',
    password: 'password',
    submitBtn: 'Signup'
  }
];
