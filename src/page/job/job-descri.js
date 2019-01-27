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

export class JobDescri extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backend: null,
      modal15:false
    };
    this.text = JobDescri.i18n[languageHelper()];
  }


  componentWillMount() {
    let mockData =
      {
        requirements: ['Good knowledge of mysql', 'Good knowledge of programming lanuguage(C++, Java).', 'Purus sodales ultricies', 'skill4'],
        better: ['Good knowledge of programming lanuguage(C++, Java).', 'Purus sodales ultricies.','Vestibulum laoreet porttitor sem','Ac tristique libero volutpat at'],
        employNumber: '100',
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

            <h4>
              <strong>职位描述</strong>
            </h4>
            <h5>
              <strong>Candidate requirements</strong>
            </h5>
            <p>
              <ul>
                {this.state.backend.requirements.map((item) => {
                  return (
                    <li key={item}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </p>
            <h5>
              <strong>Good to have</strong>
            </h5>
            <p>
              <ul>
                {this.state.backend.better.map((item) => {
                  return (
                    <li key={item}>
                      {item}
                    </li>
                  );
                })}
              </ul>
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
