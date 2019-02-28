import React from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import Cookies from 'js-cookie';

import queryString from 'query-string';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBView,
  MDBMask,
  Animation,
  MDBModal,
  MDBModalBody,
  MDBModalFooter
} from 'mdbreact';

import {Header} from '../../general-component/header/header';
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
      type: 'password',   // default type of password input filed
      id: '',             // Stroe user id input
      password: '',       // store user password input
      ifRedirect: false,  // ifRedirect indicates if the browser should go to the 'best-for-you' page.
      modalDisplay: false // modalDisplay indicates if a user successfully loged in.
    };

    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    //if token exist, set ifRedirect value to be true and re-render the page.
    if (Cookies.get('token')) {
      this.setState({
        ifRedirect: true
      });
    }
  }

  toggleModal = () => {
    this.setState({
      modalDisplay: !this.state.modalDisplay
    });
  };

  handleLoginSubmit = async (event) => {
    event.preventDefault();

    const backend = await postAsync('/login', {
      id: this.state.id,
      password: this.state.password
    }, true);
    // must clean token, valid token will always cause 200 OK return.
    // Cookies.remove('token');
    if (backend && backend.status && backend.status.code === 2000) {
      Cookies.set('id', backend.content.id, {expires: 1});
      // Cookies.set('username', backend.content.username, {expires: 1}); //store username onto the local storage
      Cookies.set('avatar', backend.content.avatarUrl ? backend.content.avatarUrl : 'https://s2.ax1x.com/2019/01/27/kuUMYq.jpg', {expires: 1});
      // login success: --> /best-for-you
      const to = queryString.parse(this.props.location.search).to;
      this.props.history.push(to ? to : '/best-for-you');
      //if login success, set ifRedirect value to be true and re-render the page.
      if (Cookies.get('token')) {
        this.setState({ifRedirect: true});
      }
    } else {
      // login fail
      console.log(backend);
      this.setState({
        modalDisplay: !this.state.modalDisplay
      })
    }
  }
  
  async handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // show and hide password input
  showHidePasswd = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      type: this.state.type === 'text' ? 'password' : 'text'
    });
  }

  render() {
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    const btnColor = '#31394D';

    if (pathname) {
      return (<Redirect to={pathname}/>);
    }

    return (
      <div>
        <Header/>
        {this.state.ifRedirect ?
          <Redirect to="/best-for-you"/> : null
        }
        <MDBContainer>
          <MDBModal isOpen={this.state.modalDisplay} toggle={this.toggleModal} centered>
            <MDBModalBody>
              <p className="pt-3 px-3 pb-0">用户名或密码无效，请重新输入。</p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn
                color={btnColor} onClick={this.toggleModal}
                style={{backgroundColor: '#7C97B8'}}>Close</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>

        <Animation type="fadeIn" duration="5s">

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
                    <form
                      // className="needs-validation"
                      onSubmit={this.handleLoginSubmit}
                      // noValidate
                    >
                      <MDBInput
                        label="邮箱"
                        name='id'
                        className="form-control"
                        group type="text"
                        error="wrong" success="right"
                        onChange={this.handleChange}
                        required
                      />
                      {/*<div className="invalid-tooltip">请输入邮箱</div>*/}
                      {/*</MDBInput>*/}
                      <div style={{position: 'relative'}}>
                        <MDBInput
                          label="密码"
                          name='password'
                          group type={this.state.type}
                          onChange={this.handleChange}
                          required
                        />
                        {/*<div className="invalid-tooltip">请输入密码</div>*/}
                        {/*</MDBInput>*/}
                        <span onClick={this.showHidePasswd} style={{
                          position: 'absolute',
                          right: '20px',
                          top: '7px',
                          color: '#616161'
                        }}>
                        {
                          this.state.type === 'text' ?
                            <MDBIcon icon="eye"/> :
                            <MDBIcon flip="horizontal" icon="eye-slash"/>
                        }
                      </span>
                      </div>
                      <p className="font-small blue-text d-flex justify-content-end pb-3">
                        <a href="#!" className="blue-text ml-1">
                          忘记密码?
                        </a>
                      </p>
                      <div className="text-center mb-3">
                        <MDBBtn
                          // href="/best-for-you"
                          className="btn-block z-depth-1a"
                          type="submit" color={btnColor}
                          style={{backgroundColor: '#31394D'}}>
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
                          style={{color: '#31394D'}}
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
                          style={{color: '#31394D'}}/>
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
                          style={{color: '#31394D'}}/>
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
        </Animation>
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
