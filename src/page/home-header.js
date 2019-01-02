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
                <MDBNavbarNav center>
                  <MDBNavItem to="/">
                    <MDBNavLink to="#">主 页</MDBNavLink>
                  </MDBNavItem>
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
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav>
                        <div className="d-none d-md-inline">探 索</div>
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem href="/discovery/">文 章</MDBDropdownItem>
                        <MDBDropdownItem divider/>
                        <MDBDropdownItem href="#!">视 频</MDBDropdownItem>
                        <MDBDropdownItem divider/>
                        <MDBDropdownItem href="#!">人 脉</MDBDropdownItem>
                        <MDBDropdownItem divider/>
                        <MDBDropdownItem href="#!">直 播（空中宣讲会）</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCol>
              <MDBNavbarNav>
                <MDBDropdown>
                  <MDBDropdownToggle nav>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="搜索"
                      aria-label="Search"
                    />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu
                    className="dropdown-indigo darken-1"
                    style={{
                      marginLeft: '1em',
                      verticalAlign: 'middle'
                    }}
                  >
                    <MDBDropdownItem href="/search/s1">职 位</MDBDropdownItem>
                    <MDBDropdownItem divider/>
                    <MDBDropdownItem href="/search/s1">组 织</MDBDropdownItem>
                    <MDBDropdownItem divider/>
                    <MDBDropdownItem href="/search/s2">文 章</MDBDropdownItem>
                    <MDBDropdownItem divider/>
                    <MDBDropdownItem href="/search/s2">人 脉</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink className="waves-effect waves-light" to="#!">
                    <MDBIcon icon="twitter"/>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink className="waves-effect waves-light" to="#!">
                    <MDBIcon icon="google-plus"/>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav>
                      <MDBIcon icon="user"/>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu color="blue" basic right>
                      <MDBDropdownItem href="#!">个人主页</MDBDropdownItem>
                      <MDBDropdownItem href="#!">我的消息</MDBDropdownItem>
                      <MDBDropdownItem href="#!">我的申请</MDBDropdownItem>
                      <MDBDropdownItem href="#!">我的好友</MDBDropdownItem>
                      <MDBDropdownItem href="#!">我的关注</MDBDropdownItem>
                      <MDBDropdownItem href="#!">帮助</MDBDropdownItem>
                      <MDBDropdownItem href="#!">设置</MDBDropdownItem>
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
