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
  MDBNavItem,
  MDBNavbarToggler
} from 'mdbreact';

import {ArticleCard} from '../../general-component/article-card';

export class SearchCommunityResult extends React.Component {
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
        jobList: [
          {id: 1},
          {id: 2},
          {id: 3},
          {id: 4}
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
        <MDBContainer>
          <MDBRow>
            <MDBCol className="my-3" md="8" lg="9">
              <MDBRow>
                {this.state.backend.jobList.map((item, index) => {
                  return (
                    <MDBCol size="12" className="mb-4" key={index}>
                      <ArticleCard type={1}/>
                    </MDBCol>
                  );
                })}
              </MDBRow>
            </MDBCol>

            <MDBCol className="order-first order-md-last my-3" md="4" lg="3">
              <MDBCard style={{
                // boxShadow: 'none'
              }}>
                <MDBRow around>
                  <MDBCol size="5">
                    <div className="ml-3 mb-3">
                      <a href="/question/create" style={{
                        color: 'black'
                      }}>
                        <MDBRow center style={{marginTop: '20px'}}>
                          <MDBIcon icon="question" size="2x"/>
                        </MDBRow>
                        <MDBRow center>
                          提问题
                        </MDBRow>
                      </a>
                    </div>
                  </MDBCol>

                  <MDBCol size="5">
                    <div className="mr-3 mb-3">
                      <a href="/article/create" style={{
                        color: 'black'
                      }}>
                        <MDBRow center style={{marginTop: '20px'}}>
                          <MDBIcon icon="edit" size="2x"/>
                        </MDBRow>
                        <MDBRow center>
                          写文章
                        </MDBRow>
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

      </div>
    ) : null;
  }
}
