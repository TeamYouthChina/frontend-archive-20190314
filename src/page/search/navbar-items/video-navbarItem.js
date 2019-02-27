import React from 'react';

import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
  MDBNavItem
} from 'mdbreact';

export class VideoNavbarItem extends React.Component {
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
              <div className="d-md-inline" style={{...this.props.basicCHNFont, color: '#31394D'}}>发布时间
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
              <div className="d-md-inline" style={{...this.props.basicCHNFont, color: '#31394D'}}>视频类型
                <MDBIcon icon="caret-down" style={{color: '#8D9AAF'}}/>
              </div>
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">行业</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">生活</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">娱乐</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>
      </div>
    );
  }
}
