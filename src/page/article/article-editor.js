import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBRow,
  MDBCol,
} from 'mdbreact';
import {AnswerText} from './answerText';
// import './public/style.css';
import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';

export class ArticleEditor extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null
    };
    this.text = ArticleEditor.i18n[languageHelper()];
    this.handleInputClick = this.handleInputClick.bind(this);
  }

  componentWillMount() {
    let mockData =
      {
        id: 0,
        status: {
          code: 2000
        }
      };
    this.setState(() => {
      return {backend: mockData};
    });
  }

  handleInputClick() {
    //todo,通过refs调用的方法
    this.answerText.submitContent();
    // this.refs.answerText.submitContent();
  }

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        <Header/>
        <div style={{padding: '100px'}}>
          <div className="form-group">
            <MDBRow style={{padding:'20px'}}>
              {this.props.children}
            </MDBRow>
            <MDBRow>
              <MDBCol size="9">
                <input className="form-control" placeholder={this.text.title}/>
              </MDBCol>
              <MDBCol size="1"></MDBCol>
              <MDBCol size="2">
                <MDBBtn size="sm" rounded color="info" onClick={this.handleInputClick}>{this.text.submitBtn}</MDBBtn>
              </MDBCol>
            </MDBRow>

          </div>
          <br/>
          <AnswerText ref={(answerText)=>{this.answerText = answerText}}></AnswerText>
        </div>
        <Footer/>
      </div>

    ) : null;
  }
}

ArticleEditor.i18n = [
  {
    title: '标题',
    submitBtn: '提交文章',
  },
  {
    title: 'Title',
    submitBtn: 'submit article',
  },
];
