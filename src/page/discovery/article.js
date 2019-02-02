import React from 'react';
import {languageHelper} from '../../tool/language-helper';

import {MDBContainer} from 'mdbreact';
import {ArticleCard} from "../../general-component/article-card";

export class Article extends React.Component {
  constructor(props) {
    super(props);
    this.text = Article.i18n[languageHelper()];
  }

  render() {
    return (
      <MDBContainer fluid>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>

      </MDBContainer>
    );
  }
}

Article.i18n = [
  {},
  {}
];
