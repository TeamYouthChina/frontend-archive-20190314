import React from 'react';
import {languageHelper} from '../../tool/language-helper';

import {MDBContainer, MDBRow} from 'mdbreact';
import {ApplicantCard} from '../../general-component/applicant-card';

export class Connection extends React.Component {
  constructor(props) {
    super(props);
    this.text = Connection.i18n[languageHelper()];
  }

  render() {
    return (
      <MDBContainer fluid>
        <MDBRow style={{margin: '1rem 0rem'}}>
          <ApplicantCard/>
        </MDBRow>
      </MDBContainer>
    );
  }
}

Connection.i18n = [
  {},
  {}
];
