import React from 'react';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
} from 'mdbreact';

import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';
import {languageHelper} from '../../tool/language-helper';
import {Register} from "./index";

export class UserInfo extends React.Component {
  constructor (props) {
    super(props);
    this.text = UserInfo.i18n[languageHelper()];
  }
  
  render() {
    return (
      <div>
        <Header/>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="9">
              <form className="mx-5 my-5">
                <p className="h4 font-weight-lighter my-5">{this.text.heading}</p>
                <div className="input-group mb-3 d-flex">
                  <MDBRow>
                    <MDBCol md="4">
                      <div className="grey-text my-2 mr-2">
                        {this.text.name}
                      </div>
                    </MDBCol>
                    <MDBCol md="8">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                      />
                    </MDBCol>
                  </MDBRow>
                </div>
                <br/>
                <div className="input-group mb-3 d-flex">
                  <MDBRow>
                    <MDBCol md="4">
                      <div className="grey-text my-2 mr-2">
                        {this.text.tel}
                      </div>
                    </MDBCol>
                    <MDBCol md="8">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                      />
                    </MDBCol>
                  </MDBRow>
                </div>
                <br/>
                <div className="input-group mb-3 d-flex">
                  <MDBRow>
                    <MDBCol md="4">
                      <div className="grey-text my-2 mr-2">
                        {this.text.email}
                      </div>
                    </MDBCol>
                    <MDBCol md="8">
                      <input
                        type="email"
                        name="name"
                        className="form-control"
                      />
                    </MDBCol>
                  </MDBRow>
                </div>
                <br/>
                <div className="input-group mb-3 d-flex">
                  <MDBRow>
                    <MDBCol md="4">
                      <div className="grey-text my-2 mr-2">
                        {this.text.name}
                      </div>
                    </MDBCol>
                    <MDBCol md="8">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                      />
                    </MDBCol>
                  </MDBRow>
                </div>
                <br/>
                <div className="input-group mb-3 d-flex">
                  <MDBRow>
                    <MDBCol md="4">
                      <div className="grey-text my-2 mr-2">
                        {this.text.name}
                      </div>
                    </MDBCol>
                    <MDBCol md="8">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                      />
                    </MDBCol>
                  </MDBRow>
                </div>
                <br/>
                <div className="input-group mb-3 d-flex">
                  <MDBRow>
                    <MDBCol md="4">
                      <div className="grey-text my-2 mr-2">
                        {this.text.name}
                      </div>
                    </MDBCol>
                    <MDBCol md="8">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                      />
                    </MDBCol>
                  </MDBRow>
                </div>

                <div className="text-center mt-4">
                  <MDBBtn color="indigo" href="/" type="submit">{this.text.submitBtn}</MDBBtn>
                </div>
              </form>
            </MDBCol>
            <MDBCol md="3"></MDBCol>
          </MDBRow>
        </MDBContainer>
        <Footer/>
      </div>
    );
  }
}

UserInfo.i18n = [
  {
    heading: '基本信息:',
    name: '真实姓名:',
    tel: '手机:',
    email: '常用邮箱:',
    currentCity: '当前城市:',
    type: '求职意向:',
    status: '职业状态:',
    timeToWork: '预计到岗时间:',
    industry: '期望工作行业:',
    intendedCity: '期望工作城市:'
  },
  {
    heading: 'Basic information:',
    name: 'Full name:',
    tel: 'Tel:',
    email: 'e-mail:',
    currentCity: 'Current city:',
    type: 'Job type:',
    status: 'Your status:',
    timeToWork: 'When to work:',
    industry: 'Industry:',
    intendedCity: 'Intended city:'
  }
];
