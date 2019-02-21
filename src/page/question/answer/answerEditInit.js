import React from 'react';
import {
  MDBRow,
} from 'mdbreact';
import {AnswerTextForQuestion} from './answerTextForQuestion'

export class AnswerEditInit extends React.Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div style={{height:'100%',margin:'20px 0px 0px 0px',boxShadow: '1px 1px 20px rgba(0, 0, 0, 0.08)'}}>
        <MDBRow style={{height:'100%',margin:'20px 0px 0px 0px'}}>
          <AnswerTextForQuestion data={this.props.inputData}></AnswerTextForQuestion>
        </MDBRow>
      </div>
    )

  }

}

