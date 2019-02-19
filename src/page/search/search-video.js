import React from 'react';

import {
  MDBRow,
  MDBCol,
  MDBCollapse,
  MDBContainer,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBNavLink
} from 'mdbreact';

import {VideoCard} from '../../general-component/video-card';

export class SearchVideoResult extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      backend: null,
      collapseID: ''
    };

  }

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({collapseID: (prevState.collapseID !== collapseID ? collapseID : '')}));
  }

  componentWillMount() {
    let mockData =
      {
        id: 0,
        videoList: [
          {id: 1},
          {id: 2},
          {id: 3},
          {id: 4},
          {id: 5},
          {id: 6}
        ],
        status: {
          code: 2000
        }
      };
    this.setState(() => {
      return {backend: mockData};
    });
  }

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        <MDBNavbar light className="mb-3" expand="md" style={{
          background: 'white',
          boxShadow: 'none',
          borderTop: 'solid #E0E0E0 1px',
          borderBottom: 'solid #E0E0E0 1px'
        }}>
          <MDBContainer>
            <MDBNavbarToggler onClick={this.toggleCollapse('navbarCollapse')}/>
            <MDBCollapse id="navbarCollapse" isOpen={this.state.collapseID} navbar>
              <MDBNavbarNav left>
                
                <MDBNavItem className="mx-2">
                  <MDBDropdown>
                    <MDBDropdownToggle nav>
                      <div className="d-md-inline" style={{
                        color: 'black'
                      }}>视频 <MDBIcon icon="caret-down" style={{color: '#BDBDBD'}}/>
                      </div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem href="#!" onClick={this.props.toggleClassicTabs1("1")}>
                        <MDBIcon icon="user-circle"/> 职位
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#!" onClick={this.props.toggleClassicTabs1("2")}>
                        <MDBIcon icon="building"/> 公司
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#!" onClick={this.props.toggleClassicTabs1("3")}>
                        <MDBIcon icon="bullhorn"/> 社区
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#!"
                                       className="active"
                                       onClick={this.props.toggleClassicTabs1("4")}
                        // style={{
                        //   backgroundColor: 'pink'
                        // }}
                      >
                        <MDBIcon icon="headphones"/> 视频
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#!" onClick={this.props.toggleClassicTabs1("5")}>
                        <MDBIcon icon="users"/> 人脉
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                
                <MDBNavItem className="mx-2">
                  <MDBDropdown>
                    <MDBDropdownToggle nav>
                      <div className="d-md-inline" style={{color: 'black'}}>发布时间
                        <MDBIcon icon="caret-down" style={{color: '#BDBDBD'}}/>
                      </div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem href="#!">最近一天</MDBDropdownItem>
                      <MDBDropdownItem href="#!">最近一周</MDBDropdownItem>
                      <MDBDropdownItem href="#!">最近一月</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                
                <MDBNavItem className="mx-2">
                  <MDBDropdown>
                    <MDBDropdownToggle nav>
                      <div className="d-md-inline" style={{
                        color: 'black'
                      }}>视频类型 <MDBIcon icon="caret-down" style={{color: '#BDBDBD'}}/>
                      </div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem href="#!">行业</MDBDropdownItem>
                      <MDBDropdownItem href="#!">生活</MDBDropdownItem>
                      <MDBDropdownItem href="#!">娱乐</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
        
        {this.state.backend.videoList.map((item, index) => {
          return (
            <MDBContainer>
              <MDBRow key={index}>
                <MDBCol className="my-3">
                  <VideoCard/>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          );
        })}
      </div>
    ) : null;
  }
}
