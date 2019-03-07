import React from 'react';
import classes from './index.module.css';
import {Redirect, Route, Switch} from 'react-router-dom';

import {ArticleCardSquareFull} from './article-card-small';
import {QuestionCardSquareFull} from './question-card-small';
import {ReviewCardSquareFull} from './review-card-small';
import {JobCardSquare} from '../../general-component/job-card-square/job-card-square';
import {ComCardSquare} from '../../general-component/company-card-square/company-card-square';
import {Header} from '../../general-component/header/header';
import {Footer} from '../../general-component/footer';
import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';

import {
  MDBRow,
  MDBCol
} from 'mdbreact';

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
                <h2 style={{color: 'white'}}>欢迎来到职道，郭益豪。</h2>
                <h5><a href="/profile" style={{color: 'white'}}>个人档案 —></a></h5>
              </div>
            </div>

          </div>
        </div>
        <div
          className="row justify-content-center"
          style={{
            backgroundColor: '#f7f7f7',
            padding: '2rem 0rem'
          }}
        >
          <div className="col-md-12 col-lg-10 col-xl-8">
            <div style={{marginBottom: '1rem'}}>
              <h3>根据专业为你选择的工作</h3>
            </div>
            <div className="row">
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquare id="1"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquare id="2"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquare id="3"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquare id="4"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquare id="5"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquare id="6"/>
              </div>
            </div>
            <div>
              <h6><a href="/search/search-job-result">查看更多 -></a></h6>
            </div>
          </div>
        </div>
        <div
          className={`row justify-content-center ${classes.a1}`}
          style={{
            padding: '2rem 0rem'
          }}
        >
          <div className="col-md-12 col-lg-10 col-xl-8">
            <div style={{marginBottom: '1rem'}}>
              <h3>根据你的兴趣为你选择的工作</h3>
            </div>
            <div className="row">
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquare id="7"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquare id="8"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquare id="9"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquare id="10"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquare id="11"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <JobCardSquare id="12"/>
              </div>
            </div>
            <div>
              <h6><a href="/search/search-job-result">查看更多 -></a></h6>
            </div>
          </div>
        </div>
        <div
          className="row justify-content-center"
          style={{
            backgroundColor: '#f7f7f7',
            padding: '2rem 0rem'
          }}
        >
          <div className="col-md-12 col-lg-10 col-xl-8">
            <div style={{marginBottom: '1rem'}}>
              <h3>这几家企业非常热门</h3>
            </div>
            <div className="row">
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <ComCardSquare id="1"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <ComCardSquare id="2"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <ComCardSquare id="3"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <ComCardSquare id="4"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <ComCardSquare id="5"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <ComCardSquare id="6"/>
              </div>
            </div>
            <div>
              <h6><a href="/search/search-company-result">查看更多 -></a></h6>
            </div>
          </div>
        </div>
        <div
          className="row justify-content-center"
          style={{
            backgroundImage: 'url(http://47.254.46.117:5000/choice/yellow.png)',
            padding: '2rem 0rem'
          }}
        >
          <div className="col-md-12 col-lg-10 col-xl-8">
            <div style={{marginBottom: '1rem'}}>
              <h3>为你精选的文章</h3>
            </div>
            <div className="row">
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <ArticleCardSquareFull fulltext="3"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <ArticleCardSquareFull fulltext="2"/>
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
                <ArticleCardSquareFull fulltext="2"/>
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
                <ArticleCardSquareFull fulltext="3"/>
              </div>
            </div>
            <div>
              <h6><a href="/search/search-community-result">查看更多 -></a></h6>
            </div>
          </div>
        </div>
        <div
          className="row justify-content-center"
          style={{
            backgroundColor: '#f7f7f7',
            padding: '2rem 0rem'
          }}
        >
          <div className="col-md-12 col-lg-10 col-xl-8">
            <div style={{marginBottom: '1rem'}}>
              <h3>为你精选的问题</h3>
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
                <QuestionCardSquareFull fulltext="2"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <QuestionCardSquareFull fulltext="3"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <QuestionCardSquareFull fulltext="4"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <QuestionCardSquareFull fulltext="5"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <QuestionCardSquareFull fulltext="6"/>
              </div>
            </div>
            <div>
              <h6><a href="/search/search-community-result">查看更多 -></a></h6>
            </div>
          </div>
        </div>
        <div
          className="row justify-content-center"
          style={{
            backgroundImage: 'url(http://47.254.46.117:5000/choice/purple.png)',
            padding: '2rem 0rem'
          }}
        >
          <div className="col-md-12 col-lg-10 col-xl-8">
            <div style={{marginBottom: '1rem'}}>
              <h3>为你精选的短则</h3>
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
                <ReviewCardSquareFull fulltext="2"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <ReviewCardSquareFull fulltext="3"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <ReviewCardSquareFull fulltext="4"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <ReviewCardSquareFull fulltext="5"/>
              </div>
              <div
                className="col-4"
                style={{marginBottom: '1rem'}}
              >
                <ReviewCardSquareFull fulltext="6"/>
              </div>
            </div>
            <div>
              <h6><a href="/search/search-community-result">查看更多 -></a></h6>
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
