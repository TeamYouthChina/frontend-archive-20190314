import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {ArticleCardSquareFull} from './article-card-small';
import {QuestionCardSquareFull} from './question-card-small';
import {ReviewCardSquareFull} from './review-card-small';

import {
  MDBRow,
  MDBCol
} from 'mdbreact';

import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';
import {Header} from '../../general-component/header/header';
import {Footer} from '../../general-component/footer';
import {JobCardSquare} from '../../general-component/job-card-square/job-card-square';

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
        <Header/>
        <div
          className="row justify-content-center"
          style={{
            backgroundColor: 'rgb(49, 57, 77)',
            padding: '4rem 0rem',
            margin: '-2rem 0rem'
          }}
        >
          <div className="col-md-12 col-lg-10 col-xl-8">
            <div className="row">
              <div className="col-2" style={{marginBottom: '1rem'}}>
                <img src="https://s2.ax1x.com/2019/01/27/kuUMYq.jpg" width="100"/>
              </div>
              <div className="col-md-12 col-lg-10 col-xl-8">
                <h2 style={{color: 'white'}}>欢迎来到 WeYouth，郭益豪。</h2>
                <h5><a href="/profile" style={{color: 'white'}}>View Profile -></a></h5>
              </div>
            </div>

          </div>
        </div>
        <div
          className="row justify-content-center"
          style={{
            backgroundColor: '#f7f7f7',
            padding: '1rem 0rem'
          }}
        >
          <div className="col-md-12 col-lg-10 col-xl-8">
            <div style={{marginBottom: '1rem'}}>
              <h2>根据专业为你选择的工作</h2>
            </div>
            <div className="row">
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquare/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquare/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquare/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquare/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquare/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquare/>
              </div>
            </div>
            <div>
              <h6><a href="/search">查看更多 -></a></h6>
            </div>
          </div>
        </div>
        <div
          className="row justify-content-center"
          style={{
            padding: '1rem 0rem'
          }}
        >
          <div className="col-md-12 col-lg-10 col-xl-8">
            <div style={{marginBottom: '1rem'}}>
              <h2>根据你的兴趣为你选择的工作</h2>
            </div>
            <div className="row">
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquare/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquare/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquare/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquare/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquare/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquare/>
              </div>
            </div>
            <div>
              <h6><a href="/search">查看更多 -></a></h6>
            </div>
          </div>
        </div>
        <div
          className="row justify-content-center"
          style={{
            backgroundColor: '#f7f7f7',
            padding: '1rem 0rem'
          }}
        >
          <div className="col-md-12 col-lg-10 col-xl-8">
            <div style={{marginBottom: '1rem'}}>
              <h2>这几家企业非常热门</h2>
            </div>
            <div className="row">
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquare/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquare/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquare/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquare/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquare/>
              </div>
            </div>
            <div>
              <h6><a href="/search">查看更多 -></a></h6>
            </div>
          </div>
        </div>
        <div
          className="row justify-content-center"
          style={{
            padding: '1rem 0rem'
          }}
        >
          <div className="col-md-12 col-lg-10 col-xl-8">
            <div style={{marginBottom: '1rem'}}>
              <h2>为你精选的文章</h2>
            </div>
            <div className="row">
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <ArticleCardSquareFull fulltext="1"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <ArticleCardSquareFull fulltext="1"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <ArticleCardSquareFull fulltext="1"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <ArticleCardSquareFull fulltext="1"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <ArticleCardSquareFull fulltext="1"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <ArticleCardSquareFull fulltext="1"/>
              </div>
            </div>
            <div>
              <h6><a href="/search">查看更多 -></a></h6>
            </div>
          </div>
        </div>
        <div
          className="row justify-content-center"
          style={{
            backgroundColor: '#f7f7f7',
            padding: '1rem 0rem'
          }}
        >
          <div className="col-md-12 col-lg-10 col-xl-8">
            <div style={{marginBottom: '1rem'}}>
              <h2>为你精选的问题</h2>
            </div>
            <div className="row">
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <QuestionCardSquareFull fulltext="1"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <QuestionCardSquareFull fulltext="1"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <QuestionCardSquareFull fulltext="1"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <QuestionCardSquareFull fulltext="1"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <QuestionCardSquareFull fulltext="1"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <QuestionCardSquareFull fulltext="1"/>
              </div>
            </div>
            <div>
              <h6><a href="/search">查看更多 -></a></h6>
            </div>
          </div>
        </div>
        <div
          className="row justify-content-center"
          style={{
            padding: '1rem 0rem'
          }}
        >
          <div className="col-md-12 col-lg-10 col-xl-8">
            <div style={{marginBottom: '1rem'}}>
              <h2>为你精选的短则</h2>
            </div>
            <div className="row">
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <ReviewCardSquareFull fulltext="1"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <ReviewCardSquareFull fulltext="1"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <ReviewCardSquareFull fulltext="1"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <ReviewCardSquareFull fulltext="1"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <ReviewCardSquareFull fulltext="1"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <ReviewCardSquareFull fulltext="1"/>
              </div>
            </div>
            <div>
              <h6><a href="/search">查看更多 -></a></h6>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

Choice.i18n = [
  {},
  {},
];
