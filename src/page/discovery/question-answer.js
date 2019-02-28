import React from 'react';
import {languageHelper} from '../../tool/language-helper';

import {MDBContainer, MDBRow} from 'mdbreact';

import {QuestionCard} from '../../general-component/question-card';
import {getAsync} from '../../tool/api-helper';

// import {getAsync} from '../../tool/api-helper';
import {Redirect} from "react-router-dom";

export class QuestionAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.text = QuestionAnswer.i18n[languageHelper()];
    this.state = {};
  }

  async componentDidMount() {
    // const result = await getAsync(`/discovery/question-answer`)
    // console.log(result)
    const result = {
      status:{
        code:2000
      }
    }
    if (result && result.status && result.status.code === 2000) {
      let mockData =
        {
          questionId:[1,2,3,4],
          status: {
            code: result.status.code
          }
        };
      this.setState(() => {
        return {backend: mockData};
      });
    } else {
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
    ) : null;
  }
}

QuestionAnswer.i18n = [
  {},
  {}
];
