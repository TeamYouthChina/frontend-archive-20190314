import React from 'react';
import {
  MDBCol,
  MDBRow,
} from 'mdbreact';

import {JobCardBar} from "../../../general-component/job-card-bar/job-card-bar";
import {languageHelper} from "../../../tool/language-helper";
import {getAsync} from "../../../tool/api-helper";

export class CollectionJob extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null
    };
    this.text = CollectionJob.i18n[languageHelper()];
  }
  
  async componentDidMount() {
    if (this.props.id) {
      this.setState({
        backend: await getAsync(`/jobs/${this.props.id}`)
      });
    } else {
      this.setState({
        backend: await getAsync(`/jobs/1`)
      });
    }
  }
  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        <MDBRow>
          <MDBCol>
            <div>
              <JobCardBar fulltext={this.state.backend}></JobCardBar>
              <JobCardBar fulltext={this.state.backend}></JobCardBar> 
              <JobCardBar fulltext={this.state.backend}></JobCardBar> 
              <JobCardBar fulltext={this.state.backend}></JobCardBar>
            </div>
            
          </MDBCol>

        </MDBRow>
        <MDBRow></MDBRow>
      </div>
    ) : null;
  }
}

CollectionJob.i18n = [
  {
    applyBefore: '申请截止'
  },
  {
    applyBefore: 'Apply Before'
  },
];
