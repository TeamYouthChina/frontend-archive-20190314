import React from 'react';
import {
  MDBCard,
} from 'mdbreact';

import {languageHelper} from '../tool/language-helper';

export class JobCardBar extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null
    };
    this.text = JobCardBar.i18n[languageHelper()];
  }

  componentWillMount() {
    let mockData =
      {
        id: 0,
        name: 'Summer 2019 Tech Internship',
        organization: {
          id: 0,
          name: 'New Frontier Data',
          avatarUrl: 'https://s3.amazonaws.com/handshake.production/app/public/assets/institutions/111044/small/hs-emp-logo-data.?1478033500'
        },
        location: 'Washington, D.C, U.S.A', // It would be "1-200" in future.
        type: 'Unpaid Part-Time Internship', // It would be defined in future.
        deadLine: 1546300800,
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
      <MDBCard>

      </MDBCard>
    ) : null;
  }
}

JobCardBar.i18n = [
  {},
  {},
];
