import React from 'react';

import {languageHelper} from '../../tool/language-helper';
import {
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdbreact';

import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';

/* route: '/login' */

export class Discovery extends React.Component {
  constructor(props) {
    super(props);
    this.text = Discovery.i18n[languageHelper()];
  }


  render() {
    return (
      <MDBContainer fluid>
        <Header/>
        <MDBRow center>
          <MDBCol md="8" lg="7">

          </MDBCol>

          <MDBCol md="4" lg="3">

          </MDBCol>
        </MDBRow>
        <Footer/>
      </MDBContainer>
    );
  }
}

Discovery.i18n = [
  {
    article: '文章',
    questionAnswer: '问答',
    video: '视频',
    connection: '人脉'
  },
  {
    article: 'Article',
    questionAnswer: 'Question & Answer',
    video: 'Video',
    connection: 'Connection'
  }
];
