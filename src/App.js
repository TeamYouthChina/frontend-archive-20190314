import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import {Home} from './page/home';
import {Login} from './page/login';
import {Article} from './page/article';
import {Discovery} from './page/discovery';
import {Job} from './page/job';
import {Company} from './page/company';
import {Profile} from './page/profile';
import {Collection} from './page/collection';
import {QuestionAnswer} from './page/question';
import {QuestionAnswerOne} from './page/question/answer';
import {QuestionCreate} from './page/question/create';
import {QuestionEdit} from './page/question/edit';
import {QuestionAnswerCreate} from './page/question/answer/create';
import {QuestionAnswerEdit} from './page/question/answer/edit';
import {ArticleCreate} from './page/article/create';
import {ArticleEdit} from './page/article/edit';
import {Video} from './page/video';
import {VideoCreate} from './page/video/create';
import {VideoEdit} from './page/video/edit';
import {PageNoFound} from './page/page-no-found';
import {Register} from './page/register';
import {Help} from './page/help';
import {Setting} from './page/setting';
import {BestForYou} from './page/best-for-you';
import {JobForYou} from './page/job-for-you';
import {Application} from './page/application';
import {Message} from './page/message';
import {Notification} from './page/notification';
import OnlineApplication from './page/OnlineApplication/Containers/OnlineApplication';
import ProfileNew from './page/ProfileNew/Containers/ProfileHome/ProfileHome';
import CreateResume from './page/CreateResume/CreateResume';
import {QuestionAnswerMobile} from './page/mobile/question-answer-mobile';
import VideoUploadMobile from './page/mobile/video-upload-mobile';



// Trash
import {DiscoveryBackup} from './page/trash/discovery-backup';
import {Mypage} from './page/trash/mypage';
import {JobDetailx} from './page/trash/job-detailx';
import {Test} from './page/trash/test';
import {MyFavorite} from './page/trash/my-favorite';
import {Recommondation} from './page/trash/recommondation';
import {SearchS1} from './page/trash/s1';
import {SearchS2} from './page/trash/s2';
import {Search} from './page/search';
import {HR} from './page/hr';
import {Employerhome} from './page/hr/employerhome';
import {Recruit} from './page/hr/recruit';
import {MobileTest1} from './page/trash/mobile-test-1';
import {MobileTest2} from './page/trash/mobile-test-2';
import {SearchResume} from './page/hr/searchresume';
import {Mobile} from './page/mobile';
import {Applicant} from "./page/applicant";


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
              path="/applicant/"
              component={routeProps => <Applicant {...routeProps} />}
            />
            <Route
              path="/application/"
              component={routeProps => <Application {...routeProps} />}
            />
            <Route
              path="/article/create"
              component={routeProps => <ArticleCreate {...routeProps} />}
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
              path="/create-resume/:id"
              component={routeProps => <CreateResume {...routeProps} />}
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
              path="/employerhome"
              component={routeProps => <Employerhome {...routeProps} />}
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
              path="/message"
              component={routeProps => <Message {...routeProps} />}
            />
            <Route
              path="/mobile"
              component={routeProps => <Mobile {...routeProps} />}
            />
            <Route
              path="/notification"
              component={routeProps => <Notification {...routeProps} />}
            />
            <Route
              path="/OnlineApplication"
              component={routeProps => <OnlineApplication {...routeProps} />}
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
              path="/ProfileNew/:id"
              component={routeProps => <ProfileNew {...routeProps} />}
            />
            <Route
              path="/question/create"
              component={routeProps => <QuestionCreate {...routeProps} />}
            />
            <Route
              path="/question/:questionId/edit"
              component={routeProps => <QuestionEdit {...routeProps} />}
            />
            <Route
              path="/question/:questionId/answer/create"
              component={routeProps => <QuestionAnswerCreate {...routeProps} />}
            />
            <Route
              path="/question/:questionId/answer/:answerId/edit"
              component={routeProps => <QuestionAnswerEdit {...routeProps} />}
            />
            <Route
              path="/question/:questionId/answer/:answerId"
              component={routeProps => <QuestionAnswerOne {...routeProps} />}
            />
            <Route
              path="/question/:questionId"
              component={routeProps => <QuestionAnswer {...routeProps} />}
            />
            <Route
              path="/recruit"
              component={routeProps => <Recruit {...routeProps} />}
            />
            <Route
              path="/register"
              component={routeProps => <Register {...routeProps} />}
            />
            <Route
              path="/search"
              component={routeProps => <Search {...routeProps} />}
            />
            <Route
              path="/searchresume"
              component={routeProps => <SearchResume {...routeProps} />}
            />
            <Route
              path="/setting"
              component={routeProps => <Setting {...routeProps} />}
            />
            <Route
              path="/video/create"
              component={routeProps => <VideoCreate {...routeProps} />}
            />
            <Route
              path="/video/:id/edit"
              component={routeProps => <VideoEdit {...routeProps} />}
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
            <Route
              path="/searchs1"
              component={routeProps => <SearchS1 {...routeProps} />}
            />
            <Route
              path="/searchs2"
              component={routeProps => <SearchS2 {...routeProps} />}
            />
            <Route
              path="/mobile-test-1"
              component={routeProps => <MobileTest1 {...routeProps} />}
            />
            <Route
              path="/mobile-test-2"
              component={routeProps => <MobileTest2 {...routeProps} />}
            />
            <Route
              path="/hr"
              component={routeProps => <HR {...routeProps} />}
            />
            {/* ====== Trash End ====== */}
            <Redirect to="/page-no-found"/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
