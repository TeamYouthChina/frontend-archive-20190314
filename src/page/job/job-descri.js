import React from 'react';

import {
  Col,
  MDBAvatar,
  MDBCol,
  MDBRow,
  MDBView,
  Row,
} from 'mdbreact';
import {languageHelper} from "../../tool/language-helper";
import {getAsync} from "../../tool/api-helper";
import {JobCardSquare} from "../../general-component/job-card-square/job-card-square";

export class JobDescri extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backend: null,
      modal15:false
    };
    this.text = JobDescri.i18n[languageHelper()];
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

            <h4>
              <strong>职位描述</strong>
            </h4>
            <h6>
              <strong>
                岗位职责：
              </strong>
            </h6>
            <p>
              {this.state.backend.content.job_duty}
              
            </p>
            <h6>
              <strong>
                任职要求：
              </strong>
            </h6>
            <p>
              {this.state.backend.content.job_description}
            </p>
          </MDBCol>
        </MDBRow>
      </div>
    ): null;


  }
}
JobDescri.i18n = [
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
