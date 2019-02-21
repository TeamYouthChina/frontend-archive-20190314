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
        backend: await getAsync(`/job/${this.props.id}`)
      });
    } else {
      this.setState({
        backend: await getAsync(`/job/1`)
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
            <p>
              {this.state.backend.content.organization.note}
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
