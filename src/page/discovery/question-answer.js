import React from 'react';
import {languageHelper} from '../../tool/language-helper';

import {MDBContainer, MDBRow} from 'mdbreact';
import {QuestionCard} from '../../general-component/question-card';
import {getAsync} from '../../tool/api-helper';

export class QuestionAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.text = QuestionAnswer.i18n[languageHelper()];
    this.state = {};
  }

  async componentDidMount() {
    const result = await getAsync(`/discovery/question-answer`)
    // console.log(result)
    if (result && result.status && result.status.code === 2000) {
      let mockData =
        {
          id: result.id,
          name: 'Summer 2019 Tech Internship',
          tags: result.content.tags || ['tag1', 'tag2', 'tag3', 'tag4'],
          content: {
            title: result.content.title,
            descrption: result.content.body
          },
          author: result.content.author,
          editTime: result.content.editTime,
          answerList: [1, 2,] || result.content.answerList,
          focus: result.content.focus || 123,
          reading: result.content.reading || 123,
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
