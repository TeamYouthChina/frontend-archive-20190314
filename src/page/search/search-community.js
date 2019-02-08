import React from 'react';

import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBIcon,
  MDBCollapse,
  MDBContainer,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle, 
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem
} from 'mdbreact';

import {ArticleCard} from '../../general-component/article-card';

export class SearchCommunityResult extends React.Component{
  constructor (props) {

    super(props);

    this.state={
      backend: null
    };

  }

  componentWillMount() {
    let mockData =
      {
        id: 0,
        jobList: [
          {id:1},
          {id:2},
          {id:3},
          {id:4}
        ],
        status: {
          code: 2000
        }
      };
    this.setState(() => {
      return {backend: mockData};
    });
  }

  render () {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        <MDBNavbar className="mb-3" expand="md" style={{
          background:'#F9F9F9',
        }}>
          <MDBContainer>
            <MDBCollapse navbar>
              <MDBNavbarNav left>
                <MDBNavItem className="mx-2">
                  <MDBDropdown id="navDropdown">
                    <MDBDropdownToggle nav>
                      <div className="d-none d-md-inline" style={{color: 'black'
                      }}>社区 <MDBIcon icon="caret-down" style={{color: '#BDBDBD'}}/>
                      </div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem href="#!" onClick={this.props.toggleClassicTabs1("1")}>
                        <MDBIcon icon="user-circle"/> 职位
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#!" onClick={this.props.toggleClassicTabs1("2")}>
                        <MDBIcon icon="building"/> 公司
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#!"                                        
                                       className="active"
                                       onClick={this.props.toggleClassicTabs1("3")}>
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
                      <div className="d-none d-md-inline" style={{color: 'black'}}>发贴时间
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
                      <div className="d-none d-md-inline" style={{color: 'black'}}>帖子类型 
                        <MDBIcon icon="caret-down" style={{color: '#BDBDBD'}}/>
                      </div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem href="#!">吐槽</MDBDropdownItem>
                      <MDBDropdownItem href="#!">科普</MDBDropdownItem>
                      <MDBDropdownItem href="#!">生活</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
        <MDBRow>
          <MDBCol className="my-3" md="8" lg="9">
            <MDBRow>
              {this.state.backend.jobList.map((item, index) => {
                return(
                  <MDBCol size="12" className="mb-4" key={index}>
                    <ArticleCard/>
                  </MDBCol>
                );
              })}
            </MDBRow>
          </MDBCol>
          <MDBCol className="my-3" md="4" lg="3">
            <MDBCard>
              <MDBRow>
                <MDBCol>
                  <div className="mb-3">
                    <MDBRow center style={{marginTop: '20px'}}>
                      <MDBIcon icon="question" size="2x"/>
                    </MDBRow>
                    <MDBRow center>
                      提问题
                    </MDBRow>
                  </div>
                </MDBCol>
                <MDBCol>
                  <div className="mb-3">
                    <MDBRow center style={{marginTop: '20px'}}>
                      <MDBIcon icon="question" size="2x"/>
                    </MDBRow>
                    <MDBRow center>
                      写文章
                    </MDBRow>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    ) : null;
  }
}
