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
      <div style={{height:'100%',margin:'0px'}}>
        <MDBRow style={{height:'100%',margin:'20px 0px 0px 0px'}}>
          <AnswerTextForQuestion ></AnswerTextForQuestion>
        </MDBRow>
      </div>
    )

  }

}

