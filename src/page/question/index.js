import React from 'react';
import {Redirect} from 'react-router-dom';
import {languageHelper} from '../../tool/language-helper';
import {
  MDBNavLink,
  MDBBtn,
  MDBCol,
  MDBRow,
} from 'mdbreact';

import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';
import {QuestionDes} from './question-description'
import {QuestionAnswerPart} from './question-answer-part'
import {QuestionBar} from './question-side-bar'
import {getAsync} from '../../tool/api-helper'

export class QuestionAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: null,
      firstTime: 1,
      selectType: 1
    };
    this.text = QuestionAnswer.i18n[languageHelper()];
  }

  async componentDidMount() {
    const result = await getAsync(`/question/${this.props.match.params.questionId}`)
    console.log(result)
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
          answerList: result.content.answerList,
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
    return (this.state.backend && this.state.backend.status) ? (
      <div>
        {/*有状态码且为2000时候才渲染*/}
        {this.state.backend.status.code && this.state.backend.status.code !== 2000 ? (
          <div>
            <Redirect to="/404"></Redirect>
          </div>
        ) : (
          <div>
            <Header></Header>

            <MDBRow>
              <MDBCol size="1"></MDBCol>
              <MDBCol size="10">
                <QuestionDes
                  tags={this.state.backend.tags}
                  content={this.state.backend.content}
                  focus={this.state.backend.focus}
                  reading={this.state.backend.reading} 
                  questionId={this.props.match.params.questionId}>
                </QuestionDes>
              </MDBCol>
            </MDBRow>
            <br/>
            <MDBRow>
              <MDBCol size="1"></MDBCol>
              <MDBCol size="9">
                <QuestionAnswerPart answerLists={this.state.backend.answerList}></QuestionAnswerPart>
              </MDBCol>
              <MDBCol size="2">
                <QuestionBar></QuestionBar>
              </MDBCol>

            </MDBRow>

          </div>
        )}
      </div>
    ) : null;
  }
}

QuestionAnswer.i18n = [
  {
    applyBefore: '申请截止'
  },
  {
    applyBefore: 'Apply Before'
  },
];
