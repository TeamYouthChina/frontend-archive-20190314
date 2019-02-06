import React from 'react';
import {languageHelper} from '../../tool/language-helper';

import {MDBContainer, MDBRow} from 'mdbreact';
import {VideoCard} from "../../general-component/video-card";

export class Video extends React.Component {
  constructor(props) {
    super(props);
    this.text = Video.i18n[languageHelper()];
  }

  render() {
    return (
      <MDBContainer
        fluid
        style={{padding: 0}}
      >
        <MDBRow style={{margin: '1rem 0rem'}}>
          <VideoCard/>
        </MDBRow>
        <MDBRow style={{margin: '1rem 0rem'}}>
          <VideoCard/>
        </MDBRow>
        <MDBRow style={{margin: '1rem 0rem'}}>
          <VideoCard/>
        </MDBRow>
      </MDBContainer>
    );
  }
}

Video.i18n = [
  {},
  {}
];
