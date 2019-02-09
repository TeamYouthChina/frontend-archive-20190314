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
  MDBNavItem
} from 'mdbreact';

import {CompanyCard} from '../../general-component/company-card';

export class SearchCompanyResult extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      backend: null
    };

  }

  componentWillMount() {
    let mockData =
      {
        id: 0,
        companyList: [
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
        <MDBNavbar className="mb-3" expand="md" style={{
          background: '#F9F9F9',
        }}>
          <MDBContainer>
            <MDBCollapse navbar>
              <MDBNavbarNav left>
                <MDBNavItem className="mx-2">
                  <MDBDropdown id="navDropdown">
                    <MDBDropdownToggle nav>
                      <div className="d-none d-md-inline" style={{
                        color: 'black'
                      }}>公司 <MDBIcon icon="caret-down" style={{color: '#BDBDBD'}}/>
                      </div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem href="#!" onClick={this.props.toggleClassicTabs1("1")}>
                        <MDBIcon icon="user-circle"/> 职位
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#!"
                                       className="active"
                                       onClick={this.props.toggleClassicTabs1("2")}>
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
                      <div className="d-none d-md-inline" style={{color: 'black'}}>公司类型
                        <MDBIcon icon="caret-down" style={{color: '#BDBDBD'}}/>
                      </div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem href="#!">互联网</MDBDropdownItem>
                      <MDBDropdownItem href="#!">金融</MDBDropdownItem>
                      <MDBDropdownItem href="#!">通信</MDBDropdownItem>
                      <MDBDropdownItem href="#!">交通运输</MDBDropdownItem>
                      <MDBDropdownItem href="#!">教育</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem className="mx-2">
                  <MDBDropdown>
                    <MDBDropdownToggle nav>
                      <div className="d-none d-md-inline" style={{
                        color: 'black'
                      }}>公司地址 <MDBIcon icon="caret-down" style={{color: '#BDBDBD'}}/>
                      </div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem href="#!">北京</MDBDropdownItem>
                      <MDBDropdownItem href="#!">上海</MDBDropdownItem>
                      <MDBDropdownItem href="#!">广州</MDBDropdownItem>
                      <MDBDropdownItem href="#!">深圳</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem className="mx-2">
                  <MDBDropdown>
                    <MDBDropdownToggle nav>
                      <div className="d-none d-md-inline" style={{
                        color: 'black'
                      }}>公司类型 <MDBIcon icon="caret-down" style={{color: '#BDBDBD'}}/>
                      </div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem href="#!">行业巨头</MDBDropdownItem>
                      <MDBDropdownItem href="#!">初创公司</MDBDropdownItem>
                      <MDBDropdownItem href="#!">国有企业</MDBDropdownItem>
                      <MDBDropdownItem href="#!">事业单位</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem className="mx-2">
                  <MDBDropdown>
                    <MDBDropdownToggle nav>
                      <div className="d-none d-md-inline" style={{
                        color: 'black'
                      }}>公司规模 <MDBIcon icon="caret-down" style={{color: '#BDBDBD'}}/>
                      </div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem href="#!">100人以下</MDBDropdownItem>
                      <MDBDropdownItem href="#!">100-1000人</MDBDropdownItem>
                      <MDBDropdownItem href="#!">1000-10000人</MDBDropdownItem>
                      <MDBDropdownItem href="#!">10000人以上</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
        {this.state.backend.companyList.map((item, index) => {
          return (
            <MDBRow key={index}>
              <MDBCol className="my-3">
                <CompanyCard/>
              </MDBCol>
            </MDBRow>
          );
        })}
      </div>
    ) : null;
  }
}
