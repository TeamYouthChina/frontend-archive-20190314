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
  MDBNavbarToggler
} from 'mdbreact';

import {SearchJobCards} from './search-job-cards';

export class SearchJobResult extends React.Component {
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
        jobList: [
          {id: 1},
          {id: 1},
          {id: 1},
          {id: 1},
          {id: 1},
          {id: 1},
          {id: 1},
          {id: 1},
          {id: 1},
          {id: 1}
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
                      }}>职位 <MDBIcon icon="caret-down" style={{color: '#BDBDBD'}}/>
                      </div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem href="#!"
                                       className="active"
                                       onClick={this.props.toggleClassicTabs1("1")}>
                        <MDBIcon icon="user-circle"/> 职位
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#!" onClick={this.props.toggleClassicTabs1("2")}>
                        <MDBIcon icon="building"/> 公司
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#!" onClick={this.props.toggleClassicTabs1("3")}>
                        <MDBIcon icon="bullhorn"/> 社区
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#!" onClick={this.props.toggleClassicTabs1("4")}>
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
                      <MDBDropdownItem href="#!">最近发布</MDBDropdownItem>
                      <MDBDropdownItem href="#!">最近一周</MDBDropdownItem>
                      <MDBDropdownItem href="#!">最近一个月</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem className="mx-2">
                  <MDBDropdown>
                    <MDBDropdownToggle nav>
                      <div className="d-md-inline" style={{
                        color: 'black'
                      }}>实习时间 <MDBIcon icon="caret-down" style={{color: '#BDBDBD'}}/>
                      </div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem href="#!">立即入职</MDBDropdownItem>
                      <MDBDropdownItem href="#!">一个月以内</MDBDropdownItem>
                      <MDBDropdownItem href="#!">一个月——三个月</MDBDropdownItem>
                      <MDBDropdownItem href="#!">三个月以上</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem className="mx-2">
                  <MDBDropdown>
                    <MDBDropdownToggle nav>
                      <div className="d-md-inline" style={{
                        color: 'black'
                      }}>日薪范围 <MDBIcon icon="caret-down" style={{color: '#BDBDBD'}}/>
                      </div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem href="#!">50 - 100</MDBDropdownItem>
                      <MDBDropdownItem href="#!">101 - 200</MDBDropdownItem>
                      <MDBDropdownItem href="#!">201 - 400</MDBDropdownItem>
                      <MDBDropdownItem href="#!">大于400</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem className="mx-2">
                  <MDBDropdown>
                    <MDBDropdownToggle nav>
                      <div className="d-md-inline" style={{
                        color: 'black'
                      }}>最低学历 <MDBIcon icon="caret-down" style={{color: '#BDBDBD'}}/>
                      </div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem href="#!">大专</MDBDropdownItem>
                      <MDBDropdownItem href="#!">本科</MDBDropdownItem>
                      <MDBDropdownItem href="#!">硕士研究生</MDBDropdownItem>
                      <MDBDropdownItem href="#!">博士研究生</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>

        <MDBRow className="mx-5" center>
          {this.state.backend.jobList.map((item, index) => {
            return (
              <MDBCol className="my-3" md="5" key={index}>
                <SearchJobCards id={item.id}/>
              </MDBCol>
            );
          })}
        </MDBRow>
      </div>
    ) : null;
  }
}
