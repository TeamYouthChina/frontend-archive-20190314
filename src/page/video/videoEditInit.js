import React from 'react';
import {
  MDBRow,
} from 'mdbreact';
import {AnswerTextForVideo} from './answerTextForVideo'

export class VideoEditInit extends React.Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div style={{minHeight:'400px',height:'100%',margin:'20px 0px 0px 0px',boxShadow: '1px 1px 20px rgba(0, 0, 0, 0.08)'}}>
        <MDBRow style={{height:'100%',margin:'20px 0px 0px 0px'}}>
          <AnswerTextForVideo data={this.props.inputData}></AnswerTextForVideo>
        </MDBRow>
      </div>
    )

  }

}

