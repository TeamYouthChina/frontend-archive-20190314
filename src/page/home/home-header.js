import React from 'react';

import {
  MDBCol,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavItem,
  MDBNavLink,
  MDBMask,
  MDBView
} from 'mdbreact';

export class HomeHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);

    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
    };

  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  toggle() {
    this.setState({collapse: !this.state.collapse});
  }

  render() {
    return (
      <div>
        <header>
          <MDBNavbar color="indigo darken-1" dark expand="md" fixed="top" scrolling transparent>
            <MDBCol md="1">
              <MDBNavbarBrand href="/">
                <strong>YouthChina</strong>
              </MDBNavbarBrand>
            </MDBCol>
            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick}/>}
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBCol md="4">
                <MDBNavbarNav>
                  {
                    /*
                    <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav>
                        <div className="d-none d-md-inline">职 务</div>
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem href="#!">实 习</MDBDropdownItem>
                        <MDBDropdownItem divider/>
                        <MDBDropdownItem href="#!">校园招聘</MDBDropdownItem>
                        <MDBDropdownItem divider/>
                        <MDBDropdownItem href="#!">社会招聘</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem> 
                    */
                  }
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav>
                        <div className="d-none d-md-inline">探 索</div>
                      </MDBDropdownToggle>
                      <MDBDropdownMenu style={{marginTop:'20px'}}>
                        <MDBDropdownItem href="/discovery/article">文 章</MDBDropdownItem>
                        <MDBDropdownItem divider/>
                        <MDBDropdownItem href="/discovery/review">长 评</MDBDropdownItem>
                        <MDBDropdownItem divider/>
                        <MDBDropdownItem href="/discovery/question-answer">问 答</MDBDropdownItem>
                        <MDBDropdownItem divider/>
                        <MDBDropdownItem href="/discovery/video">视 频</MDBDropdownItem>
                        <MDBDropdownItem divider/>
                        <MDBDropdownItem href="/discovery/connection">人 脉</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCol>
              <MDBNavbarNav>
                <MDBNavLink to="/search/s1">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="搜索"
                    aria-label="Search"
                  />
                </MDBNavLink>
              </MDBNavbarNav>
              <MDBNavbarNav right style={{marginRight: '5em'}}>
                <MDBNavItem style={{width:'45px',height:'45px'}} className="p-0 mx-2 align-middle">
                  <img
                    src="https://s2.ax1x.com/2019/01/27/kuUMYq.jpg"
                    className="rounded-circle z-depth-1-half img-fluid p-0 float-right"
                    alt="Sample avatar"
                  />
                </MDBNavItem>
                <MDBNavItem style={{marginTop:'5px'}}>
                  <MDBDropdown>
                    <MDBDropdownToggle nav>
                      <p className="h6">Zhicheng</p>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu color="indigo darken-1" basic left style={{marginTop:'20px'}}>
                      <MDBDropdownItem href="/people/1">个人主页</MDBDropdownItem>
                      <MDBDropdownItem href="/myfavorite">我的关注</MDBDropdownItem>
                      <MDBDropdownItem href="#!">退出</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          <MDBView>
            <img className="d-block w-100" src="https://ws1.sinaimg.cn/large/94365dd2ly1fydxiftsgaj20sg0aygnj.jpg"/>
            <MDBMask
              overlay="indigo-light"
              style={{
                flexDirection: 'column',
                height: '100vh'
              }}
              className="flex-center  text-white text-center"
            >
              <h2>YouthChina</h2>
              <h5>欢迎，这是一句话</h5>
              <br/>
              <p>Full page intro with background image will be always displayed in full screen mode, regardless of
                device </p>
            </MDBMask>
          </MDBView>
        </header>
      </div>
    );
  }
}
