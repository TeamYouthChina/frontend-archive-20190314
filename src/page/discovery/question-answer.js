import React from 'react';
import {languageHelper} from '../../tool/language-helper';

import {MDBContainer, MDBRow} from 'mdbreact';
import {QuestionCard} from '../question/question-card';
// import {getAsync} from '../../tool/api-helper';
import {Redirect} from "react-router-dom";

export class QuestionAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.text = QuestionAnswer.i18n[languageHelper()];
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
      <div>
        {/*有状态码且为2000时候才渲染*/}
        {this.state.backend.status.code && this.state.backend.status.code !== 2000 ? (
          <div>
            <Redirect to="/404"></Redirect>
          </div>
        ) : (
          <MDBContainer
            fluid
            style={{padding: 0}}
          >
            {this.state.backend.questionId.map((item)=>(
              <MDBRow key={item} style={{margin: '1rem 0rem'}}>
                <QuestionCard questionId={item} type={0}/>
              </MDBRow>
            ))}
          </MDBContainer>
        )}
      </div>
    ) : null;
  }
}

QuestionAnswer.i18n = [
  {},
  {}
];
