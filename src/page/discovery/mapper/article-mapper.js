import React from 'react';
import {languageHelper} from '../../../tool/language-helper';

import {
  MDBContainer,
  MDBRow,
  MDBSpinner
} from 'mdbreact';
import {ArticleCard} from '../../article/article-card';
import {getAsync} from '../../../tool/api-helper';
import {data} from "./../question-data";

export class ArticleMapper extends React.Component {
  constructor(props) {
    super(props);
    this.text = ArticleMapper.i18n[languageHelper()];
    this.state = {
      isLoading: this.props.isLoading
    };
  }

  async componentDidMount() {
    try {
      let result = await getAsync(`/discovery/articles`, true)
      let articles
      console.log(result)
      if (result && result.status && result.status.code === 200) {
        articles = result.content.articles;
        this.state.isLoading = false;
        let mockData =
          {
            articles: articles,
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
    return (
      <MDBContainer
        fluid
        style={{padding: 0}}
      >
        {/*{this.state.backend.articles.map((article) => (*/}
          {/*<MDBRow key={article.id} style={{margin: '1rem 0rem'}}>*/}
            {/*<ArticleCard article={article}/>*/}
          {/*</MDBRow>*/}
        {/*))}*/}good
      </MDBContainer>
    );
  }
}

ArticleMapper.i18n = [
  {},
  {}
];
