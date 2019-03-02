import React from 'react';
import {
  MDBCol,
  MDBRow,
} from 'mdbreact';

import {JobCardBar} from "../../../general-component/job-card-bar/job-card-bar";
import {languageHelper} from "../../../tool/language-helper";

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
        searchResult: ['1', '2', '3', '4'],
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
          <MDBCol>
            {this.state.backend.jobCollection.map((item)=>{
              return (
                
                <div key={item}>
                  <JobCardBar></JobCardBar>
                </div>
                
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
