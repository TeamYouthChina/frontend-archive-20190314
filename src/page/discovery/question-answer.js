import React from 'react';
import {languageHelper} from '../../tool/language-helper';

import {
  MDBContainer, 
  MDBRow,
  MDBSpinner
} from 'mdbreact';

// import {QuestionCard} from '../../general-component/question-card';
import {QuestionCard} from '../question/question-card-test';
import {getAsync} from '../../tool/api-helper';

// import {getAsync} from '../../tool/api-helper';
import {Redirect} from "react-router-dom";

import {data} from './question-data'

export class QuestionAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.text = QuestionAnswer.i18n[languageHelper()];
    this.state = {
      backend:null
    };
  }

  async componentDidMount() {
    if(data.env){
      let mockData = {
        users:data.content.users,
        status: {
          code: data.status.code
        }
      }
      this.setState({
        backend:mockData
      })
    } else {
      try {
        const result = await getAsync(`/discovery/questions`,!data.env)
        if (result && result.status && result.status.code === 200) {
          let mockData =
            {
              users:result.content.questions,
              status: {
                code: result.status.code
              }
            };
          // console.log(result.content.questions)
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
      } catch (e) {
        alert(e)
      }
    }
    
    // console.log(result)
  }

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 200) ? (
      <MDBContainer
        fluid
        style={{padding: 0}}
      >
        {this.state.backend.users.map((user)=>(
          <MDBRow key={user.id} style={{margin: '1rem 0rem'}}>
            <QuestionCard question={user} />
          </MDBRow>
        ))}
      </MDBContainer>
    ) :
      // a spinner displayed when data is loading
      <div className="my-5 text-center">
        <MDBSpinner/>
      </div>;
  }
}

QuestionAnswer.i18n = [
  {},
  {}
];
