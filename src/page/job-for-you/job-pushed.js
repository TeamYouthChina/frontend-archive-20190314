import React from 'react';

import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCol,
  MDBRow,
} from 'mdbreact';

import {JobCardBar} from "../../general-component/job-card-bar";

export class JobPushed extends React.Component {

  render() {
    return (
      <div>
        <JobCardBar/>
        <JobCardBar/>
        <JobCardBar/>
        <JobCardBar/>
      </div>
    );
  }
}
