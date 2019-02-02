import React from 'react';
import {languageHelper} from '../../tool/language-helper';

import {MDBContainer} from 'mdbreact';
import {VideoCard} from "../../general-component/video-card";

export class Video extends React.Component {
  constructor(props) {
    super(props);
    this.text = Video.i18n[languageHelper()];
  }

  render() {
    return (
      <MDBContainer fluid>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        
      </MDBContainer>
    );
  }
}

Video.i18n = [
  {},
  {}
];
