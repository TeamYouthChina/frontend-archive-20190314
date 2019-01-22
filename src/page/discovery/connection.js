import React from 'react';
import {languageHelper} from '../../tool/language-helper';

import {MDBContainer} from 'mdbreact';

export class Connection extends React.Component {
  constructor(props) {
    super(props);
    this.text = Connection.i18n[languageHelper()];
  }

  render() {
    return (
      <MDBContainer fluid>

      </MDBContainer>
    );
  }
}

Connection.i18n = [
  {},
  {}
];
