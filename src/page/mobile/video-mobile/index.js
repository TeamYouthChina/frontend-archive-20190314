import React from 'react';
import {languageHelper} from '../../../tool/language-helper';

import {MDBContainer, MDBCol, MDBRow} from 'mdbreact';
import {VideoCard} from '../../../general-component/video-card';

export class VideoMobile extends React.Component {
  constructor(props) {
    super(props);
    this.text = VideoMobile.i18n[languageHelper()];
  }

  render() {
    return (
      <MDBContainer
        fluid
        style={{padding: 0}}
      >
        <MDBRow center>
          <MDBCol size="11">
            <VideoCard/>
          </MDBCol>
          <MDBCol size="11">
            <VideoCard/>
          </MDBCol>
          <MDBCol size="11">
            <VideoCard/>
          </MDBCol>
          <MDBCol size="11">
            <VideoCard/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

VideoMobile.i18n = [
  {},
  {}
];
