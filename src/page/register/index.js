import React from 'react';
import {Redirect} from 'react-router-dom';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBMask,
  MDBView,
  MDBModal,
  Animation
} from 'mdbreact';

import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';
import {UserInfo} from './user-info';
import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';
import {postAsync} from "../../tool/api-helper";

export class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      type: 'password'
    }

    this.text = Register.i18n[languageHelper()];
  }

  handleRegisterSubmit = (event) => {

    event.preventDefault();

    const data = new FormData(event.target);
    // console.log('success');

    postAsync('/applicants/register', data).then(json => console.log(json));
  };
  
  showHidePasswd = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      type: this.state.type === 'text' ? 'password' : 'text'
    })
  };

  toggleUserInfo = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    const btnColor = '#7C97B8';

    if (pathname) {
      return (<Redirect to={pathname}/>);
    }

    return (
      <MDBContainer
        fluid
        style={{padding: 0}}
      >
        <Header/>
        <MDBRow className="m-0">
          <MDBModal isOpen={this.state.modal} toggle={() => this.toggleUserInfo()} size="lg" position="center">
            <UserInfo handleSubmit={this.handleRegisterSubmit} className="mx-5 px-5"/>
          </MDBModal>
          <MDBCol className="p-0" md="7">
            <Animation type="fadeInLeft" duration="2s">
              <MDBView hover>
                <img className="img-fluid"
                     src="https://images.unsplash.com/photo-1522152302542-71a8e5172aa1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3010&q=80"/>
                <MDBMask className="flex-center" overlay="grey-light">
                  <p className="h1 white-text">海外留学生找工作快捷通道</p>
                </MDBMask>
              </MDBView>
            </Animation>
          </MDBCol>
          <MDBCol md="5">
            <Animation type="fadeInRight" duration="2s" delay="1s">
              <MDBRow className="my-4">
                <MDBCol className="mt-5 offset-2" size="8">
                  <div className="text-center">
                    <Animation type="fadeInRight" duration="3s">
                      <p className="mb-1" style={{
                        color: '#757575',
                        fontSize: '1.5rem'
                      }}>
                        开启智能求职之旅吧！
                      </p>
                    </Animation>
                    <br/>
                    <br/>
                    <Animation type="fadeInRight" duration="2.5s">
                      <p style={{
                        color: '#757575',
                        fontSize: '2.25rem',
                        fontWeight: '500'
                      }}>
                        <MDBIcon className="mr-3" color="grey" icon="circle"/>
                        Youth China
                      </p>
                    </Animation>
                  </div>
                  <form>
                    <MDBInput
                      label="邮箱"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="手机号"
                      group
                      type="text"
                      validate
                    />
                    <div style={{position: 'relative'}}>
                      <MDBInput
                        label="密码"
                        group
                        type={this.state.type }
                        validate
                      />
                      <span onClick={this.showHidePasswd} style={{
                        position: 'absolute',
                        right: '20px',
                        top: '7px',
                        color: '#616161'
                      }}>
                        {this.state.type === 'text' ?
                          <MDBIcon icon="eye"/> :
                          <MDBIcon flip="horizontal" icon="eye-slash"/>}
                      </span>
                    </div>
                    <div className="text-center mb-3">
                      <MDBBtn
                        className="btn-block z-depth-1a"
                        color={btnColor}
                        style={{
                          backgroundColor: '#7C97B8'
                        }} onClick={() => (this.toggleUserInfo())}>
                        注册
                      </MDBBtn>
                    </div>
                  </form>
                  <p className="my-3 font-small grey-text d-flex justify-content-end">
                    已有账号?
                    <a href="/login" className="blue-text ml-1">
                      登陆
                    </a>
                  </p>
                </MDBCol>
              </MDBRow>
            </Animation>
          </MDBCol>
        </MDBRow>
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
