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
  MDBBtn,
  MDBSpinner
} from 'mdbreact';

import {JobCardSquareFull} from '../../../general-component/job-card-square-full/job-card-square-full';
import {getAsync} from '../../../tool/api-helper';
import {JobCardSquare} from "../../../general-component/job-card-square/job-card-square";

export class JobBasedOnHot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: null,
      updatedList: [],
      page: null
    };
  }

  async componentDidMount() {
    this.setState({
      backend: await getAsync(`/home/hot`, true)
    });

    this.handleReadMore();
  }

  handleReadMore = () => {
    const newPage = this.state.page + 6;
    this.setState({
      page: newPage,
      updatedList: this.state.backend.content.jobList.slice(0, newPage)
    });
  };

  render() {
    if (!(this.state.backend && this.state.backend.status && this.state.backend.status.code === 200)) {
      console.log('API error: this.state=', this.state);
    }
    return (
      (this.state.backend && this.state.backend.status && this.state.backend.status.code === 200) ?
        <MDBRow left className="justify-content-center"
                style={{
                  backgroundColor: '#f7f7f7',
                  padding: '1rem 0rem'
                }}>
          <MDBCol lg="10" xl="8">
            <div style={{marginBottom: '1rem'}}>
              <h2>这几家企业非常热门</h2>
            </div>
            <MDBRow className="row">
              <MDBCol
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquareFull fulltext={this.state.backend.content.jobList[0]}/>
              </MDBCol>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquareFull fulltext={this.state.backend.content.jobList[1]}/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquareFull fulltext={this.state.backend.content.jobList[2]}/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquareFull fulltext={this.state.backend.content.jobList[3]}/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquareFull fulltext={this.state.backend.content.jobList[4]}/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquareFull fulltext={this.state.backend.content.jobList[5]}/>
              </div>
            </MDBRow>
            <div>
              <h6><a href="/search">查看更多 -></a></h6>
            </div>
          </MDBCol>
        </MDBRow> :
        // a spinner displayed when data is loading
        <div className="my-5 text-center d-flex align-items-center justify-content-center"
             style={{height: '400px'}}>
          <MDBSpinner/>
        </div>)
  }
}

