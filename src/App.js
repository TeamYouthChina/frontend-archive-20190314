import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import {Home} from './page/home';
import {Login} from './page/login';
import {Article} from './page/article';
import {ArticleEdit} from './page/article/edit';
import {Discovery} from './page/discovery';
import {Job} from './page/job';
import {Company} from './page/company';
import {Profile} from './page/profile';
import {Collection} from './page/collection';
import {QuestionAnswer} from './page/question';
import {AnswerEdit} from './page/question/answer/edit';
import {Video} from './page/video';
import {PageNoFound} from './page/page-no-found';
import {Register} from './page/register';
import {Help} from './page/help';
import {Setting} from './page/setting';
import {JobAppManage} from './page/application/job-manage';
import {BestForYou} from './page/best-for-you';
import {JobForYou} from './page/job-for-you';

// Trash
import {DiscoveryBackup} from './page/trash/discovery-backup';
import {Mypage} from './page/trash/mypage';
import {JobDetailx} from './page/trash/job-detailx';
import {Test} from './page/trash/test';
import {MyFavorite} from './page/trash/my-favorite';
import {Recommondation} from './page/trash/recommondation';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route
              path="/"
              exact
              component={() => <Redirect to="/home"/>}
            />
            <Route
              path="/application/job/:id"
              component={routeProps => <JobAppManage {...routeProps} />}
            />
            <Route
              path="/article/create"
              component={routeProps => <ArticleEdit {...routeProps} />}
            />
            <Route
              path="/article/:id/edit"
              component={routeProps => <ArticleEdit {...routeProps} />}
            />
            <Route
              path="/article/:id"
              component={routeProps => <Article {...routeProps} />}
            />
            <Route
              path="/best-for-you"
              component={routeProps => <BestForYou {...routeProps} />}
            />
            <Route
              path="/collection"
              component={routeProps => <Collection {...routeProps} />}
            />
            <Route
              path="/company/:id"
              component={routeProps => <Company {...routeProps} />}
            />
            <Route
              path="/discovery"
              component={routeProps => <Discovery {...routeProps} />}
            />
            <Route
              path="/help"
              component={routeProps => <Help {...routeProps} />}
            />
            <Route
              path="/home"
              component={routeProps => <Home {...routeProps} />}
            />
            <Route
              path="/job-for-you"
              component={routeProps => <JobForYou {...routeProps} />}
            />
            <Route
              path="/job/:id"
              component={routeProps => <Job {...routeProps} />}
            />
            <Route
              path="/login"
              component={routeProps => <Login {...routeProps} />}
            />
            <Route
              path="/page-no-found"
              component={routeProps => <PageNoFound {...routeProps} />}
            />
            <Route
              path="/profile"
              component={routeProps => <Profile {...routeProps} />}
            />
            <Route
              path="/question/create"
              component={routeProps => null}
            />
            <Route
              path="/question/:questionId/edit"
              component={routeProps => null}
            />
            <Route
              path="/question/:questionId"
              component={routeProps => <QuestionAnswer {...routeProps} />}
            />
            <Route
              path="/question/:questionId"
              component={routeProps => null}
            />
            <Route
              path="/question/:questionId/answer/create"
              component={routeProps => <AnswerEdit {...routeProps} />}
            />
            <Route
              path="/question/:questionId/answer/:answerId/edit"
              component={routeProps => <AnswerEdit {...routeProps} />}
            />
            <Route
              path="/register"
              component={routeProps => <Register {...routeProps} />}
            />
            <Route
              path="/search"
              component={routeProps => null}
            />
            <Route
              path="/setting"
              component={routeProps => <Setting {...routeProps} />}
            />
            <Route
              path="/video/create"
              component={routeProps => null}
            />
            <Route
              path="/video/:id/edit"
              component={routeProps => null}
            />
            <Route
              path="/video/:id"
              component={routeProps => <Video {...routeProps} />}
            />
            {/* ====== Trash Begin ====== */}
            <Route
              path="/discoverybackup"
              component={routeProps => <DiscoveryBackup {...routeProps} />}
            />
            <Route
              path="/job-old"
              component={routeProps => <JobDetailx {...routeProps} />}
            />
            <Route
              path="/myfavorite"
              component={routeProps => <MyFavorite {...routeProps} />}
            />
            <Route
              path="/mypage"
              component={routeProps => <Mypage {...routeProps} />}
            />
            <Route
              path="/recommondation"
              component={routeProps => <Recommondation {...routeProps} />}
            />
            <Route
              path="/test"
              component={routeProps => <Test {...routeProps} />}
            />
            {/* ====== Trash End ====== */}
            <Redirect to="/page-no-found"/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
