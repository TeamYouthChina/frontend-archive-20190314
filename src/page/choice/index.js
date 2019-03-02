import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {ArticleCardSquareFull} from './article-card-small';
import {QuestionCardSquareFull} from './question-card-small';
import {ReviewCardSquareFull} from './review-card-small';

import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';

export class Choice extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.text = Choice.i18n[languageHelper()];
  }

  render() {
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    if (pathname) {
      return (<Redirect to={pathname}/>);
    }
    return (
      <div>
        <ArticleCardSquareFull fulltext={{
          organization:{
            name:'123',
            location:'123'
          },
          id:1,
          name:'123'
        }}></ArticleCardSquareFull>
        <QuestionCardSquareFull fulltext={{
          organization:{
            name:'123',
            location:'123'
          },
          id:1,
          name:'123'
        }}></QuestionCardSquareFull>
        <ReviewCardSquareFull fulltext={{
          organization:{
            name:'123',
            location:'123'
          },
          id:1,
          name:'123'
        }}></ReviewCardSquareFull>
      </div>
    );
  }
}

Choice.i18n = [
  {
    
  },
  {
    
  },
];
