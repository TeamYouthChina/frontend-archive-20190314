import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink
} from "mdbreact";
import React from "react";
import {languageHelper} from "../../tool/language-helper";

export class UnLogin extends React.Component {
  constructor(props) {
    super(props);
    this.text = UnLogin.i18n[languageHelper()];
  }

  render() {
    return (
      <div className="d-flex flex-row">
        <div className="flex-fill">
          <MDBNavbarNav style={{marginRight: '1em'}}>
            <MDBNavItem className="align-middle">
              <MDBNavLink to="/login">登 录</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </div>
        <MDBNavbarNav right style={{marginRight: '3em'}}>
          <MDBNavItem className="mx-2 align-middle">
            <MDBNavLink to="/register">注 册</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
        </div>
      
    );
  }
}

UnLogin.i18n = [
  {},
  {}
];



