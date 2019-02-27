import React from 'react';
import {languageHelper} from '../../../tool/language-helper';

import {MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import {QuestionCard} from '../../question/question-card';

export class QuestionAnswerMobile extends React.Component {
  constructor(props) {
    super(props);
    this.text = QuestionAnswerMobile.i18n[languageHelper()];
  }

  render() {
    return (
      <MDBContainer
        fluid
        style={{padding: 0}}
      >
        <MDBRow center>
          <MDBCol size="11">
            <QuestionCard type={1}/>
          </MDBCol>
        </MDBRow>
        <MDBRow center>
          <MDBCol size="11">
            <QuestionCard type={1}/>
          </MDBCol>
        </MDBRow>
        <MDBRow center>
          <MDBCol size="11">
            <QuestionCard type={1}/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

QuestionAnswerMobile.i18n = [
  {},
  {}
];
