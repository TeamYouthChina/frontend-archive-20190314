import React from 'react';
import {languageHelper} from '../../tool/language-helper';

import {MDBContainer, MDBRow} from 'mdbreact';
import {ArticleCard} from '../article/article-card';
import {getAsync} from '../../tool/api-helper';

export class Article extends React.Component {
  constructor(props) {
    super(props);
    this.text = Article.i18n[languageHelper()];
    this.state = {};
  }

  async componentDidMount() {
    const result = await getAsync(`/disconvery/articles`)
    console.log(result)
    if (result && result.status && result.status.code === 2000) {
      let mockData =
        {
          id: result.id,
          name: 'Summer 2019 Tech Internship',
          content: {
            title: result.content.title,
            descrption: result.content.body
          },
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
  }

  render() {
    let articles = [];
    // map data to articles
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
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
    ) : null;
  }
}

Article.i18n = [
  {},
  {}
];
