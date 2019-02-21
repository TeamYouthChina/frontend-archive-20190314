import React from 'react';
import {Redirect} from 'react-router-dom';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBView,
  MDBMask,
  Animation
} from 'mdbreact';

import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';
import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';
import {postAsync} from '../../tool/api-helper';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.text = Login.i18n[languageHelper()];
    this.state = {
      submitted: false,
      type: 'password'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const frontend = await postAsync('/login', {
      id: '',
      password: ''
    });
    console.log('frontend', frontend);
  }

  handleChange = (event) => {
    this.setState({
      email: event.target.value
    });
  };

  showHidePasswd = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      type: this.state.type === 'text' ? 'password' : 'text'
    })
  };

  render() {

    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    const btnColor = '#7C97B8';

    if (pathname) {
      return (<Redirect to={pathname}/>);
    }

    return (
      <div>
        <Header/>
        <MDBRow className="m-0">

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
              <MDBRow className="mt-4">
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
                      onChange={this.handleChange}
                    />
                    <div style={{position: 'relative'}}>
                      <MDBInput
                        label="密码"
                        group
                        type={this.state.type}
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
                    <p className="font-small blue-text d-flex justify-content-end pb-3">
                      <a href="#!" className="blue-text ml-1">
                        忘记密码?
                      </a>
                    </p>
                    <div className="text-center mb-3">
                      <MDBBtn
                        href="/best-for-you"
                        className="btn-block z-depth-1a"
                        color={btnColor}
                        style={{
                          backgroundColor: '#7C97B8'
                        }}>
                        登录
                      </MDBBtn>
                    </div>
                  </form>
                  <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                    使用社交平台登录：
                  </p>
                  <div className="row d-flex justify-content-around">
                    <a
                      type="button"
                      color="white"
                      href="https://www.facebook.com"
                      className=" z-depth-1a"
                    >
                      <MDBIcon
                        icon="facebook-f"
                        className="text-center"
                        color={btnColor}
                        size="2x"
                        style={{color: '#7C97B8'}}
                      />
                    </a>
                    <a
                      type="button"
                      color="white"
                      href="https://twitter.com"
                      className="z-depth-1a"
                    >
                      <MDBIcon
                        icon="twitter"
                        color={btnColor}
                        size="2x"
                        style={{color: '#7C97B8'}}/>
                    </a>
                    <a
                      type="button"
                      color="white"
                      href="https://www.google.com"
                      className="z-depth-1a"
                    >
                      <MDBIcon
                        icon="google-plus"
                        color={btnColor}
                        size="2x"
                        style={{color: '#7C97B8'}}/>
                    </a>
                  </div>
                  <p className="my-3 font-small grey-text d-flex justify-content-end">
                    还没有账号?
                    <a href="/register" className="blue-text ml-1">
                      注册
                    </a>
                  </p>
                </MDBCol>
              </MDBRow>
            </Animation>
          </MDBCol>

        </MDBRow>
        <Footer/>
      </div>

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
