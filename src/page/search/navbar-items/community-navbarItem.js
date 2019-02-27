import React from 'react';

import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
  MDBNavItem
} from 'mdbreact';

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
              <div className="d-md-inline" style={{...this.props.basicCHNFont, color: '#31394D'}}>发贴时间
                <MDBIcon icon="caret-down" style={{color: '#8D9AAF'}}/>
              </div>
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">最近发布</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">最近一周</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">最近一个月</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>

        <MDBNavItem className="mx-2">
          <MDBDropdown>
            <MDBDropdownToggle nav>
              <div className="d-md-inline" style={{...this.props.basicCHNFont, color: '#31394D'}}>帖子类型
                <MDBIcon icon="caret-down" style={{color: '#8D9AAF'}}/>
              </div>
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">吐槽</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">科普</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">生活</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>
      </div>
    );
  }
}
