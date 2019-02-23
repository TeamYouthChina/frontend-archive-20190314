import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import {QuestionAnswerMobile} from './question-answer-mobile';
import {VideoMobile} from './video-mobile';
import VideoUploadMobile from './video-upload-mobile';

export class Mobile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route
          path={`${this.props.match.url}/article/create`}
          component={routeProps => null}
        />
        <Route
          path={`${this.props.match.url}/article/:id/edit`}
          component={routeProps => null}
        />
        <Route
          path={`${this.props.match.url}/article/:id`}
          component={routeProps => null}
        />
        <Route
          path={`${this.props.match.url}/question/create`}
          component={routeProps => null}
        />
        <Route
          path={`${this.props.match.url}/question/:questionId/edit`}
          component={routeProps => null}
        />
        <Route
          path={`${this.props.match.url}/question/:questionId/answer/create`}
          component={routeProps => null}
        />
        <Route
          path={`${this.props.match.url}/question/:questionId/answer/:answerId/edit`}
          component={routeProps => null}
        />
        <Route
          path={`${this.props.match.url}/question/:questionId/answer/:answerId`}
          component={routeProps => <QuestionAnswerMobile {...routeProps} />}
        />
        <Route
          path={`${this.props.match.url}/question/:questionId`}
          component={routeProps => <QuestionAnswerMobile {...routeProps} />}
        />
        <Route
          path={`${this.props.match.url}/video/create`}
          component={routeProps => <VideoUploadMobile/>}
        />
        <Route
          path={`${this.props.match.url}/video/:id/edit`}
          component={routeProps => null}
        />
        <Route
          path={`${this.props.match.url}/video/:id`}
          component={routeProps => <VideoMobile {...routeProps} />}
        />
        <Redirect to="page-no-found"/>
      </Switch>
    );
  }
}
