import React from 'react';
import {ArticleMapper} from '../mapper/article-mapper';
import {WithLoading} from '../higher-order-component/with-loading';
import {getAsync} from "../../../tool/api-helper";

const ArticleWithLoading = WithLoading(ArticleMapper);

export class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: null,
      isLoading: this.props.isLoading
    }
  }

  async componentDidMount() {
    this.setState({isLoading: true});
    let result = await getAsync(`/discovery/articles`, true)
    let articles
    console.log('fetching')
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
    }
  }

  render() {
    return (
      <ArticleWithLoading
        isLoading={this.state.isLoading}
      />
    );
  }
}
