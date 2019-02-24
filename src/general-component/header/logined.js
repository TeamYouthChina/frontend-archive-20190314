import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon, 
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem
} from "mdbreact";
import React from "react";
import {languageHelper} from "../../tool/language-helper";

export class Logined extends React.Component {
  constructor(props) {
    super(props);
    this.text = Logined.i18n[languageHelper()];
  }

  render() {
    return (
      <div className="d-flex flex-row">
        <div className="flex-fill align-self-center">
          <MDBNavbarNav right style={{marginRight: '0.5em'}}>
            <MDBNavItem className="align-middle">
              <MDBIcon icon="bell" className="white-text" />
            </MDBNavItem>
          </MDBNavbarNav>
        </div>
      <MDBNavbarNav right style={{marginRight: '5em'}}>
        <MDBNavItem style={{width: '60px', height: '60px'}} className="p-0 mx-2 align-middle">
          <MDBDropdown>
            <MDBDropdownToggle nav>
              <img
                src="https://s2.ax1x.com/2019/01/27/kuUMYq.jpg"
                className="rounded-circle z-depth-1-half img-fluid p-0 float-right"
                alt="Sample avatar"
              />
            </MDBDropdownToggle>
            <MDBDropdownMenu color="indigo darken-1" basic left style={{marginTop: '52px'}}>
              <MDBDropdownItem href="/applicant">个人主页</MDBDropdownItem>
              <MDBDropdownItem href="/">我的消息</MDBDropdownItem>
              <MDBDropdownItem href="/logout">退出</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>

        </MDBNavItem>
      </MDBNavbarNav>
      </div>
    );
  }
}

Logined.i18n = [
  {},
  {}
];



