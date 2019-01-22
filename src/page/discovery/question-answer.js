import React from 'react';
import {languageHelper} from '../../tool/language-helper';

import {MDBContainer} from 'mdbreact';

export class QuestionAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.text = QuestionAnswer.i18n[languageHelper()];
  }

  render() {
    return (
      <MDBContainer fluid>

      </MDBContainer>
    );
  }
}

QuestionAnswer.i18n = [
  {},
  {}
];
