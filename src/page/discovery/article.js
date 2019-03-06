import React from 'react';
import {languageHelper} from '../../tool/language-helper';

import {
  MDBContainer, 
  MDBRow,
  MDBSpinner
} from 'mdbreact';
import {ArticleCard} from '../article/article-card';
import {getAsync} from '../../tool/api-helper';
import {data} from "./question-data";

export class Article extends React.Component {
  constructor(props) {
    super(props);
    this.text = Article.i18n[languageHelper()];
    this.state = {};
  }

  async componentDidMount() {
    try {
      let result = await getAsync(`/discovery/articles`,true)
      let articles
      // console.log(result)
      if (result && result.status && result.status.code === 200) {
        articles = result.content.articles
        let mockData =
          {
            articles:articles,
            status: {
              code: result.status.code
            }
          };
        this.setState(() => {
          return {backend: mockData};
        });
      } else {
        let mockData = {
          status: result.status
        }
        this.setState(() => {
          return {backend: mockData};
        });
      }
    } catch (e) {
      console.log(e)
    }
    
  }

  render() {
    // map data to articles
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 200) ? (
      <MDBContainer
        fluid
        style={{padding: 0}}
      >
        {this.state.backend.articles.map((article)=>(
          <MDBRow key={article.id} style={{margin: '1rem 0rem'}}>
            <ArticleCard article={article}/>
          </MDBRow>
        ))}
        
        
      </MDBContainer>
    ) :
      // a spinner displayed when data is loading
      <div className="my-5 text-center">
        <MDBSpinner/>
      </div>;
  }
}

Article.i18n = [
  {},
  {}
];
