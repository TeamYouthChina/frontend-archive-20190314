import React from 'react';
import {languageHelper} from '../../tool/language-helper';

import {MDBContainer, MDBRow} from 'mdbreact';
import {ArticleCard} from '../../general-component/article-card';

export class Article extends React.Component {
  constructor(props) {
    super(props);
    this.text = Article.i18n[languageHelper()];
  }

  render() {
    return (
      <MDBContainer
        fluid
        style={{padding: 0}}
      >
        <MDBRow style={{margin: '1rem 0rem'}}>
          <ArticleCard type={1}/>
        </MDBRow>
        <MDBRow style={{margin: '1rem 0rem'}}>
          <ArticleCard type={1}/>
        </MDBRow>
        <MDBRow style={{margin: '1rem 0rem'}}>
          <ArticleCard type={1}/>
        </MDBRow>
      </MDBContainer>
    );
  }
}

Article.i18n = [
  {},
  {}
];
