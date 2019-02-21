import React from 'react';
import {
  MDBBtn,
  MDBCol,
  MDBRow,
} from 'mdbreact';
import {AnswerText} from '../question/answerText'

export class ArticleEditInit extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  
  render () {
    return (
      <div style={{height:'100%',margin:'20px 0px 0px 0px',boxShadow: '1px 1px 20px rgba(0, 0, 0, 0.08)'}}>
        <MDBRow style={{height:'100%',margin:'20px 0px 0px 0px'}}>
          <AnswerText></AnswerText>
        </MDBRow>
        <MDBRow>
          <MDBCol size="10"></MDBCol>
          <MDBCol size="2">
            <MDBBtn flat style={{float:'right',padding: '5px 10px',zIndex:10}}>
              提交回答
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </div>
    )

  }

}

