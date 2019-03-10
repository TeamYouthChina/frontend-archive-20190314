import React from 'react';

import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
  MDBNavItem
} from 'mdbreact';

const navyFont = {
  fontFamily: 'PingFang SC',
  fontStyle: 'normal',
  fontWeight: 'normal',
  lineHeight: 'normal',
  color: '#31394D'
};

const caretIconColor = {
  color: '#8D9AAF'
};

export class CommunityNavbarItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {

    return (
      <div className="d-inline-flex">
        <MDBNavItem className="mx-2">
          <MDBDropdown>
            <MDBDropdownToggle nav>
              <div className="d-md-inline" style={navyFont}>发贴时间
                <MDBIcon icon="caret-down" style={caretIconColor}/>
              </div>
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem
                style={navyFont} href="#!">最近发布</MDBDropdownItem>
              <MDBDropdownItem
                style={navyFont} href="#!">最近一周</MDBDropdownItem>
              <MDBDropdownItem
                style={navyFont} href="#!">最近一个月</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>

        <MDBNavItem className="mx-2">
          <MDBDropdown>
            <MDBDropdownToggle nav>
              <div className="d-md-inline" style={navyFont}>帖子类型
                <MDBIcon icon="caret-down" style={caretIconColor}/>
              </div>
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem
                style={navyFont}
                href="#!">吐槽</MDBDropdownItem>
              <MDBDropdownItem
                style={navyFont}
                href="#!">科普</MDBDropdownItem>
              <MDBDropdownItem
                style={navyFont}
                href="#!">生活</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>
      </div>
    );
  }
}
