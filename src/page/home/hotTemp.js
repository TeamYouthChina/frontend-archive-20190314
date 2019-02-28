import React from 'react';

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBBtn
} from 'mdbreact';

import {JobCardSquareFull} from '../../general-component/job-card-square-full/job-card-square-full';
import {getAsync} from '../../tool/api-helper';

export class HotTemp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    this.setState({
      backend: await getAsync(`/home/hot`)
    });
  }

  render() {
    if (!(this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000)) {
      console.log('API error: this.state=', this.state);
    }
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#F3F5F7'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: 1224,
          }}
        >
          {
            /*
            <div>
              <JobListHome
                title="IT / Internet"
                jobIdList={null}
                searchRequestBody={null}
              />
              <JobListHome
                title="金融"
                jobIdList={null}
                searchRequestBody={null}
              />
              <JobListHome
                title="工业"
                jobIdList={null}
                searchRequestBody={null}
              />
            </div>
            */
          }
          {
            (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ?
              <div
                style={{
                  padding: '24px 16px'
                }}
              >
                <MDBContainer>
                  <div
                    style={{
                      marginBottom: '16px'
                    }}
                  >
                <span style={{
                  fontSize: '18px',
                  color: '#454F69',
                  ...this.props.basicCHNFont
                }}
                >
                  IT / 互联网
                </span>
                  </div>
                  <MDBRow center>
                    <MDBCol
                      className="my-3 px-4 py-1"
                      size="12"
                      md="6"
                      xl="4"
                    >
                      <JobCardSquareFull fulltext={this.state.backend.content.jobList[0]}/>
                    </MDBCol>
                    <MDBCol
                      className="my-3 px-4 py-1"
                      size="12"
                      md="6"
                      xl="4"
                    >
                      <JobCardSquareFull fulltext={this.state.backend.content.jobList[1]}/>
                    </MDBCol>
                    <MDBCol
                      className="my-3 px-4 py-1"
                      size="12"
                      md="6"
                      xl="4"
                    >
                      <JobCardSquareFull fulltext={this.state.backend.content.jobList[2]}/>
                    </MDBCol>
                    <MDBCol
                      className="my-3 px-4 py-1"
                      size="12"
                      md="6"
                      xl="4"
                    >
                      <JobCardSquareFull fulltext={this.state.backend.content.jobList[3]}/>
                    </MDBCol>
                    <MDBCol
                      className="my-3 px-4 py-1"
                      size="12"
                      md="6"
                      xl="4"
                    >
                      <JobCardSquareFull fulltext={this.state.backend.content.jobList[4]}/>
                    </MDBCol>
                    <MDBCol
                      className="my-3 px-4 py-1"
                      size="12"
                      md="6"
                      xl="4"
                    >
                      <JobCardSquareFull fulltext={this.state.backend.content.jobList[5]}/>
                    </MDBCol>
                  </MDBRow>
                  {/*
              <div className="text-center">
                <MDBBtn
                  rounded
                  color="rgba-grey-strong"
                  href="/job-for-you"
                  style={{
                    ...this.props.basicCHNFont,
                    boxShadow: 'none',
                    fontSize: '16px',
                    marginTop: '8px',
                    display: 'inline-block',
                    fontWeight: '300',
                    color: '#454F69',
                    background: '#F0F3FA'
                  }}
                >
                  显示全部
                </MDBBtn>
              </div>
              */}
                </MDBContainer>
              </div> :
              null
          }
          {
            (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ?
              <div
                style={{
                  padding: '24px 16px'
                }}
              >
                <MDBContainer>
                  <div
                    style={{
                      marginBottom: '16px'
                    }}
                  >
                <span style={{
                  fontSize: '18px',
                  color: '#454F69',
                  ...this.props.basicCHNFont
                }}
                >
                  金融
                </span>
                  </div>
                  <MDBRow center>
                    <MDBCol
                      className="my-3 px-4 py-1"
                      size="12"
                      md="6"
                      xl="4"
                    >
                      <JobCardSquareFull fulltext={this.state.backend.content.jobList[6]}/>
                    </MDBCol>
                    <MDBCol
                      className="my-3 px-4 py-1"
                      size="12"
                      md="6"
                      xl="4"
                    >
                      <JobCardSquareFull fulltext={this.state.backend.content.jobList[7]}/>
                    </MDBCol>
                    <MDBCol
                      className="my-3 px-4 py-1"
                      size="12"
                      md="6"
                      xl="4"
                    >
                      <JobCardSquareFull fulltext={this.state.backend.content.jobList[8]}/>
                    </MDBCol>
                    <MDBCol
                      className="my-3 px-4 py-1"
                      size="12"
                      md="6"
                      xl="4"
                    >
                      <JobCardSquareFull fulltext={this.state.backend.content.jobList[9]}/>
                    </MDBCol>
                    <MDBCol
                      className="my-3 px-4 py-1"
                      size="12"
                      md="6"
                      xl="4"
                    >
                      <JobCardSquareFull fulltext={this.state.backend.content.jobList[10]}/>
                    </MDBCol>
                    <MDBCol
                      className="my-3 px-4 py-1"
                      size="12"
                      md="6"
                      xl="4"
                    >
                      <JobCardSquareFull fulltext={this.state.backend.content.jobList[11]}/>
                    </MDBCol>
                  </MDBRow>
                  {/*
              <div className="text-center">
                <MDBBtn
                  rounded
                  color="rgba-grey-strong"
                  href="/job-for-you"
                  style={{
                    ...this.props.basicCHNFont,
                    boxShadow: 'none',
                    fontSize: '16px',
                    marginTop: '8px',
                    display: 'inline-block',
                    fontWeight: '300',
                    color: '#454F69',
                    background: '#F0F3FA'
                  }}
                >
                  显示全部
                </MDBBtn>
              </div>
              */}
                </MDBContainer>
              </div> :
              null
          }
        </div>
      </div>
    );
  }
}
