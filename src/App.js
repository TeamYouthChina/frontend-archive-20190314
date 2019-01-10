import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import {Home} from './page';
import {Login} from './page/login';
import {SearchS1} from './page/search/s1';
import {SearchS2} from './page/search/s2';
import {CareerCard} from './general-component/career-card';
import {Article} from './page/article';
import {ArticleEditor} from './page/article/article-editor';
<<<<<<< HEAD
import {JobDetail} from './page/job/index';
import {Discover} from './page/discover';
=======
import {JobDetail} from './page/job';
import {Recommondation} from './page/recommondation';
import {Company} from './page/company';
import {MyFavorite} from './page/myFavorite';
>>>>>>> ftd

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
              path="/careercard"
              component={routeProps => <CareerCard {...routeProps} />}
            />
            <Route
              path="/article" exact
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
              path="/discover"
              component={routeProps => <Discover {...routeProps} />}
            />
            <Route
              path="/company"
              component={routeProps => <Company {...routeProps} />}
            />
            <Route
              path="/myfavorite"
              component={routeProps => <MyFavorite {...routeProps} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
