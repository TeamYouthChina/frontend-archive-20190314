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

import {Header} from '../../general-component/header/header';
//
import {Footer} from '../../general-component/footer';
import {UserInfo} from './user-info';
import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';
import {postAsync} from "../../tool/api-helper";
import Cookies from "js-cookie";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.text = Register.i18n[languageHelper()];
    this.state = {
      modal: false,
      type: 'password',
      password: '',
      phone_number: '',
      email: '',
      ifRedirect: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    window.scrollTo(0, 0);//回到页面顶部
  }
  
  handleRegisterSubmit = async (event) => {
    event.preventDefault();
    
    const backend = await postAsync('/applicants/register', {
      //some user info are temporally fixed
      username: 'Yorick',
      date_of_birth: '1994-04-18',
      password: this.state.password,
      phone_number: this.state.phone_number,
      email: this.state.email,
      nation: 'China',
      gender: 'male',
      age: 18
    });

    if (backend && backend.status && backend.status.code === 2000) {
      // Cookies.set('id', backend.content.id, {expires: 1});
      // Cookies.set('avatar', backend.content.avatarUrl ? backend.content.avatarUrl : 'https://s2.ax1x.com/2019/01/27/kuUMYq.jpg', {expires: 1});
      // register success: --> /login
      // this.props.history.push('/login');

      //if register success, set ifRedirect value to be true and re-render the page.
      this.setState({ifRedirect: true});
    } else {
      // register fail
      console.log(backend);
    }
  };

  async handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  //switch password text field between text and password (hidden).
  showHidePasswd = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      type: this.state.type === 'text' ? 'password' : 'text'
    })
  };

  //handle whether allows user to fill out information or not
  toggleUserInfo = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    const btnColor = '#31394D';

    if (pathname) {
      return (<Redirect to={pathname}/>);
    }

    return (
      <MDBContainer
        fluid
        style={{padding: 0}}
      >
        {/*if register success, redirect to the login page*/}
        {this.state.ifRedirect ?
          <Redirect to="/login"/> : null
        }
        {/*if token exist, redirect to the home page*/}
        {
          Cookies.get('token') ? <Redirect to="/"/> : null
        }
        <Header/>
        {/*<Animation type="fadeIn" duration="5s">*/}

          <MDBRow className="m-0">
            <MDBModal isOpen={this.state.modal} toggle={() => this.toggleUserInfo()} size="lg" position="center">
              <UserInfo handleSubmit={this.handleRegisterSubmit} className="mx-5 px-5"/>
            </MDBModal>
            <MDBCol className="p-0" md="7">
              {/*<Animation type="fadeInLeft" duration="2s">*/}
                <MDBView hover>
                  <img className="img-fluid"
                       src="https://images.unsplash.com/photo-1522152302542-71a8e5172aa1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3010&q=80"/>
                  <MDBMask className="flex-center" overlay="grey-light">
                    <p className="h1 white-text">海外留学生找工作快捷通道</p>
                  </MDBMask>
                </MDBView>
              {/*</Animation>*/}
            </MDBCol>
            <MDBCol md="5">
              {/*<Animation type="fadeInRight" duration="2s" delay="1s">*/}
                <MDBRow className="my-4">
                  <MDBCol className="mt-5 offset-2" size="8">
                    <div className="text-center">
                      {/*<Animation type="fadeInRight" duration="3s">*/}
                        <p className="mb-1" style={{
                          color: '#757575',
                          fontSize: '1.5rem'
                        }}>
                          开启智能求职之旅吧！
                        </p>
                      {/*</Animation>*/}
                      <br/>
                      <br/>
                      {/*<Animation type="fadeInRight" duration="2.5s">*/}
                        <p style={{
                          color: '#757575',
                          fontSize: '2.25rem',
                          fontWeight: '500'
                        }}>
                          <MDBIcon className="mr-3" color="grey" icon="circle"/>
                          Youth China
                        </p>
                      {/*</Animation>*/}
                    </div>
                    <form onSubmit={this.handleRegisterSubmit}>
                      <MDBInput
                        label="邮箱"
                        group
                        name="email"
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        onChange={this.handleChange}
                        value={this.state.email}
                        required
                      />
                      <MDBInput
                        label="手机号"
                        group
                        name="phone_number"
                        type="text"
                        validate
                        onChange={this.handleChange}
                        required
                      />
                      <div style={{position: 'relative'}}>
                        <MDBInput
                          label="密码"
                          group
                          name="password"
                          type={this.state.type}
                          validate
                          onChange={this.handleChange}
                          required
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
                          type="submit"
                          color={btnColor}
                          style={{
                            backgroundColor: '#31394D'
                          }}
                          // onClick={() => (this.toggleUserInfo())}
                        >
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
              {/*</Animation>*/}
            </MDBCol>
          </MDBRow>
        {/*</Animation>*/}
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
