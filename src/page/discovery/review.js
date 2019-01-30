import React from 'react';
import {languageHelper} from '../../tool/language-helper';

import {MDBContainer} from 'mdbreact';

export class Review extends React.Component {
  constructor(props) {
    super(props);
    this.text = Review.i18n[languageHelper()];
  }

  render() {
    return (
      <MDBContainer fluid>

      </MDBContainer>
    );
  }
}

Review.i18n = [
  {},
  {}
];
