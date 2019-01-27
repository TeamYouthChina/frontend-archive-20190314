import React from 'react';
import {languageHelper} from '../../tool/language-helper';

import {MDBContainer} from 'mdbreact';

export class Video extends React.Component {
  constructor(props) {
    super(props);
    this.text = Video.i18n[languageHelper()];
  }

  render() {
    return (
      <MDBContainer fluid>

      </MDBContainer>
    );
  }
}

Video.i18n = [
  {},
  {}
];
