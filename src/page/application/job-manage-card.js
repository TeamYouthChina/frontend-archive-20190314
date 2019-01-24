import React from 'react';

import {
  MDBCol,
  MDBRow,
  MDBBtn, 
  MDBBtnGroup
} from 'mdbreact';
import {languageHelper} from "../../tool/language-helper";



export class JobManageCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backend: null,
      
    };
    this.text = JobManageCard.i18n[languageHelper()];
  }





  componentWillMount() {
    let mockData =
      {
        
        jobname: '数据分析实习',
        subject: 'GE通用电气',
       
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
          <MDBCol size="3">
            <h5 className="font-weight-bold p-0" style={{textAlign: 'center'}}>
              <strong>
                {this.state.backend.jobname}
              </strong>
            </h5>
            <h6 style={{textAlign: 'center'}}>
              {this.state.backend.subject}
            </h6>
          </MDBCol>
          <MDBCol size="9">
            <MDBBtnGroup size="lg">
              <MDBBtn  rounded color="cyan">已投递</MDBBtn>
              <MDBBtn  rounded color="blue-grey">已查阅</MDBBtn>
              <MDBBtn  rounded color="mdb-color">已面试</MDBBtn>
              <MDBBtn  rounded color="indigo">获得offer</MDBBtn>
            </MDBBtnGroup>
          </MDBCol>
        </MDBRow>
        
      </div>
    ): null;


  }
}
JobManageCard.i18n = [
  {
    description: '职位描述',
    requirements: '职位要求',
    better: '加分项'
  },
  {
    description: 'Job Description',
    requirements: 'Candidate Requirements',
    better: 'Good to have'
  },
];
