import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import {Home} from './page';
import {Login} from './page/login';
import {SearchS1} from './page/search/s1';
import {SearchS2} from './page/search/s2';
import {Article} from './page/article';
import {ArticleEditor} from './page/article/article-editor';
import {Discovery} from './page/discovery/index.backup';
import {JobDetail} from './page/job';
import {Company} from './page/company';
import {MyFavorite} from './page/myFavorite';
import {People} from './page/people';
import {Collection} from './page/collection';
import {Question} from './page/question';
import {store} from './global-data/store';
import * as actionJs from './global-data/action';
import {JobDetailx} from './page/job/index-1';
import {AnswerText} from './page/article/answerText';
import {Test} from './page/test';
import {VideoView} from './page/video';
import {Error404} from './page/page-no-found';
import {Register} from './page/register';
import {Mypage} from './page/mypage';

store.dispatch(actionJs.creator(
  actionJs.type.id,
  undefined
));

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route
              path="/"
              exact component={routeProps => <Home {...routeProps} />}
            />
            <Route
              path="/login"
              component={routeProps => <Login {...routeProps} />}
            />
            <Route
              path="/search/s1"
              component={routeProps => <SearchS1 {...routeProps} />}
            />
            <Route
              path="/search/s2"
              component={routeProps => <SearchS2 {...routeProps} />}
            />
            <Route
              path="/article/:id" exact
              component={routeProps => <Article {...routeProps} />}
            />
            <Route
              path="/article/:id/editor"
              component={routeProps => <ArticleEditor {...routeProps} />}
            />
            <Route
              path="/job/:id"
              component={routeProps => <JobDetail {...routeProps} />}
            />
            <Route
              path="/discovery"
              component={routeProps => <Discovery {...routeProps} />}
            />
            <Route
              path="/company/:id"
              component={routeProps => <Company {...routeProps} />}
            />
            <Route
              path="/myfavorite"
              component={routeProps => <MyFavorite {...routeProps} />}
            />
            <Route
              path="/people/:id"
              component={routeProps => <People {...routeProps} />}
            />
            <Route
              path="/job-old"
              component={routeProps => <JobDetailx {...routeProps} />}
            />
            <Route
              path="/test"
              component={routeProps => <Test {...routeProps} />}
            />
            <Route
              path="/register"
              component={routeProps => <Register {...routeProps} />}
            />
            <Route
              path="/mypage"
              component={routeProps => <Mypage {...routeProps} />}
            />
            <Route
              path="/collection" exact
              component={routeProps => <Collection {...routeProps} />}
            />
            <Route
              path="/question/create"
              component={routeProps => <Question {...routeProps} />}
            />
            <Route
              path="/question/:id/edit"
              component={routeProps => <Question {...routeProps} />}
            />
            <Route
              path="/question/:id/answer/:id"
              component={routeProps => <Question {...routeProps} />}
            />
            <Route
              path="/ans"
              component={routeProps => <AnswerText {...routeProps} />}
            />
            
            <Route
              path="/video/:id"
              component={routeProps => <VideoView {...routeProps} />}
            />
            <Route
              component={routeProps => <Error404 {...routeProps} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
