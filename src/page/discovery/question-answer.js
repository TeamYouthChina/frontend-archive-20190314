import React from 'react';
import {languageHelper} from '../../tool/language-helper';

import {MDBContainer, MDBRow} from 'mdbreact';
import {QuestionCard} from '../../general-component/question-card';

export class QuestionAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.text = QuestionAnswer.i18n[languageHelper()];
  }

  render() {
    return (
      <MDBContainer
        fluid
        style={{padding: 0}}
      >
        <MDBRow style={{margin: '1rem 0rem'}}>
          <QuestionCard type={1}/>
        </MDBRow>
        <MDBRow style={{margin: '1rem 0rem'}}>
          <QuestionCard type={1}/>
        </MDBRow>
        <MDBRow style={{margin: '1rem 0rem'}}>
          <QuestionCard type={1}/>
        </MDBRow>
      </MDBContainer>
    );
  }
}

QuestionAnswer.i18n = [
  {},
  {}
];
