import React from 'react';
import {
  MDBCard,
} from 'mdbreact';

import {languageHelper} from '../tool/language-helper';

export class QuestionAnswerCard extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null
    };
    this.text = QuestionAnswerCard.i18n[languageHelper()];
  }

  componentWillMount() {
    let mockData =
      {
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

QuestionAnswerCard.i18n = [
  {},
  {},
];
