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
import './public/style.css';
import {HomeHeader} from '../home-header';
import {Footer} from '../../general-component/footer';

export class Article extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null
    };
    this.text = Article.i18n[languageHelper()];
    this.handleInputClick = this.handleInputClick.bind(this);
  }

  componentWillMount() {
    let mockData =
      {
        id: 0,
        name: 'New Frontier Data',
        avatarUrl: 'https://s3.amazonaws.com/handshake.production/app/public/assets/institutions/111044/small/hs-emp-logo-data.?1478033500',
        url: 'https://www.google.com',
        scale: '500',
        employNumber: '100',
        type: 'Computer Software', // It would be defined in future.
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
    this.refs.answerText.submitContent();
  }
  
  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        <HomeHeader/>
        <div style={{padding: '100px'}}>
          <div className="form-group">
            <MDBRow>
              <MDBCol middle size="9">
                <input className="form-control" placeholder={this.text.title} />
              </MDBCol>
              <MDBCol size="1"></MDBCol>
              <MDBCol size="2">
                <MDBBtn size="sm" rounded color="info" onClick={this.handleInputClick}>{this.text.submitBtn}</MDBBtn>
              </MDBCol>
            </MDBRow>

          </div>
          <br/>
          <AnswerText ref="answerText"></AnswerText>
        </div>
        <Footer/>
      </div>

    ) : null;
  }
}

Article.i18n = [
  {
    title: '标题',
    submitBtn: '提交文章',
  },
  {
    title: 'Title',
    submitBtn: 'submit article',
  },
];
