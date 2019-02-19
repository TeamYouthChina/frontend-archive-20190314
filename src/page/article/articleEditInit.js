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
      backend: null,
      editorState: null,
      showNow:0
    }
    this.submitContent = this.submitContent.bind(this)
  }

  componentWillMount() {
    let mockData =
      {
        id: 0,
        name: 'Summer 2019 Tech Internship',
        tags: ['tag1', 'tag2', 'tag3', 'tag4'],
        content: {
          title: 'this is a title',
          descrption: 'wen ti de miao shu'
        },
        time:8,
        commentLists: [1, 2, 3],
        allReplys: [1, 2],
        focus: 123,
        reading: 123,
        status: {
          code: 2000
        }
      };
    this.setState(() => {
      return {backend: mockData};
    });
  }
  submitContent(){
    
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

