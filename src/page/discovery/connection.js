import React from 'react';
import {languageHelper} from '../../tool/language-helper';

import {MDBContainer, MDBRow} from 'mdbreact';
import {ApplicantCard} from '../../general-component/applicant-card';
import {getAsync} from "../../tool/api-helper";

export class Connection extends React.Component {
  constructor(props) {
    super(props);
    this.text = Connection.i18n[languageHelper()];
    this.state = {};
  }

  async componentDidMount() {
    const result = await getAsync(`/discovery/connection`)
    // console.log(result)
    if (result && result.status && result.status.code === 2000) {
      let mockData =
        {
          status: {
            code: result.status.code
          }
        };
      this.setState(() => {
        return {backend: mockData};
      });
    } else {
      let mockData = {
        status: result.status
      }
      this.setState(() => {
        return {backend: mockData};
      });
    }
  }

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <MDBContainer fluid>
        <MDBRow style={{margin: '1rem 0rem'}}>
          <ApplicantCard/>
        </MDBRow>
      </MDBContainer>
    ) : null;
  }
}

Connection.i18n = [
  {},
  {}
];
