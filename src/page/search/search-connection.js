import React from 'react';
import {languageHelper} from '../../tool/language-helper';

import {
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdbreact';

import {ApplicantCard} from '../../general-component/applicant-card/applicant-card';
import {getAsync} from '../../tool/api-helper';

export class SearchConnectionResult extends React.Component {
  constructor(props) {
    super(props);
    this.text = SearchConnectionResult.i18n[languageHelper()];
    this.state = {};
  }

  async componentDidMount() {
    const result = await getAsync(`/discovery/users`);
    if (result && result.status && result.status.code === 2000) {
      let mockData =
        {
          content: result.content,
          status: {
            code: result.status.code
          }
        };
      this.setState(() => {
        return {backend: mockData};
      });
    } else {// fail to fetch data
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
      <MDBRow className="my-3" center>
        {this.state.backend.content.users.map((item, index) => (
          <MDBCol className="mx-1 my-3" size="11" md="5" xl="3" key={index}>
            <ApplicantCard id={item.id}/>
          </MDBCol>
        ))}
      </MDBRow>
    ) : null;
  }
}

SearchConnectionResult.i18n = [
  {},
  {}
];
