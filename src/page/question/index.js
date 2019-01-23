import React from 'react';
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
import {QuestionAnswer} from './question-answer'
import {QuestionBar} from './question-side-bar'

export class Question extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null,
      selectType: 1
    };
    this.text = Question.i18n[languageHelper()];
  }

  componentWillMount() {
    let mockData =
      {
        id: 0,
        name: 'Summer 2019 Tech Internship',
        answers: [
          {
            user: 1,
            content: 'this is a content',
            agree: '123'
          },
          {
            user: 2,
            content: 'this is a content',
            agree: '123'
          },
          {
            user: 3,
            content: 'this is a content',
            agree: '123'
          },
        ],
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
      <div>
        <Header></Header>
        <MDBRow>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="9">
            <MDBRow>
              <QuestionDes></QuestionDes>
            </MDBRow>
            <br/>
            <br/>
            <br/>
            <MDBRow>
              <MDBCol size="9">
                <MDBRow>
                  <strong>
                    {this.state.backend.answers.length}个回答
                  </strong>
                </MDBRow>
                {this.state.backend.answers.map((item) => {
                  return (
                    <QuestionAnswer key={item.user} data={item}></QuestionAnswer>
                  );
                })}

              </MDBCol>
              <MDBCol size="3">
                <QuestionBar></QuestionBar>
              </MDBCol>

            </MDBRow>
          </MDBCol>
          <MDBCol size="1"></MDBCol>
        </MDBRow>

        <Footer></Footer>
      </div>
    ) : null;
  }
}

Question.i18n = [
  {
    applyBefore: '申请截止'
  },
  {
    applyBefore: 'Apply Before'
  },
];
