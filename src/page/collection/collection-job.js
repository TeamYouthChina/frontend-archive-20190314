import React from 'react';
import {languageHelper} from '../../tool/language-helper';
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

import {JobCardSquare} from '../../general-component/job-card-square'

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

  componentWillMount() {
    let mockData =
      {
        id: 0,
        name: 'Summer 2019 Tech Internship',
        jobCollection: [
          {id:1},
          {id:2},
          {id:3},
          {id:4},
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
        <MDBRow>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="9">
            {this.state.backend.jobCollection.map((item)=>{
              return (
                <MDBRow key={item}><JobCardSquare></JobCardSquare></MDBRow>
              );
            })}
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
