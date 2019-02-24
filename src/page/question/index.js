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
import {QuestionBar} from './question-side-bar'
import {getAsync} from '../../tool/api-helper'
import {QuestionCard} from '../../general-component/question-card'

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
    const result = await getAsync(`/questions/${this.props.match.params.questionId}`)
    // console.log(result)
    if (result && result.status && result.status.code === 2000) {
      let mockData =
        {
          id: result.content.id,
          tags: ['互联网', '金融', '求职', '大学生'] || result.content.tags  ,
          content: {
            title: result.content.title||'标题',
            descrption: result.content.richTextDTO || '123'
          },
          author: result.content.creator,
          editTime: result.content.editTime,
          answerList: result.content.answers,
          focus: result.content.focus || 123,
          reading: result.content.reading || 123,
          status: {
            // code: result.status.code,
            code:2000
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
            <MDBRow style={{marginTop:'10px'}}>
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
              <MDBCol size="10">
                {this.state.backend.answerList.map((item)=>(
                  <QuestionCard 
                    type={1} 
                    key={item.id}
                    questionId={item.id} title={this.state.backend.title}>
                  </QuestionCard>
                ))}
              </MDBCol>
            </MDBRow>
            <Footer></Footer>
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
