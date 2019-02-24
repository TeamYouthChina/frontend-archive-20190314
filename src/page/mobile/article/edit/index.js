import React from 'react';
import {languageHelper} from '../../../../tool/language-helper';

import {
  MDBBtn,
  MDBRow,
  MDBCol,
} from 'mdbreact';

import {ArticleEditInit} from '../../../article/articleEditInit';
// import './public/style.css';

// import {Header} from '../../../general-component/header';
// import {Footer} from '../../../general-component/footer';

export class MobileArticleEdit extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null
    };
    this.text = MobileArticleEdit.i18n[languageHelper()];
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
        {/*<Header/>*/}
        <div style={{padding: '30px'}}>
          <div className="form-group">
            <h4>{this.text.write}</h4>
            <MDBRow>
              <MDBCol size="9">
                <input className="form-control" placeholder={this.text.title}/>
              </MDBCol>
              <MDBCol size="3">
                <MDBBtn style={{margin:'5px 15px',padding:'5px 5px',float:'right'}} size="sm" color="info" onClick={this.handleInputClick}>{this.text.submitBtn}</MDBBtn>
              </MDBCol>
            </MDBRow>

          </div>
          <br/>
          <ArticleEditInit ref={(answerText)=>{this.answerText = answerText}}></ArticleEditInit>
        </div>
        {/*<Footer/>*/}
      </div>

    ) : null;
  }
}

MobileArticleEdit.i18n = [
  {
    title: '标题',
    submitBtn: '提交文章',
    write:'编辑文章'
  },
  {
    title: 'Title',
    submitBtn: 'submit article',
    write:'edit article'
  },
];
