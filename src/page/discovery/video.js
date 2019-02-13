import React from 'react';
import {languageHelper} from '../../tool/language-helper';

import {MDBContainer, MDBCol, MDBRow} from 'mdbreact';
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
        <MDBRow>
          <MDBCol style={{marginLeft: '1rem', marginRight: '1rem'}}>
            <VideoCard/>
          </MDBCol>
          <MDBCol style={{marginLeft: '1rem', marginRight: '1rem'}}>
            <VideoCard/>
          </MDBCol>
          <MDBCol style={{marginLeft: '1rem', marginRight: '1rem'}}>
            <VideoCard/>
          </MDBCol>
          <MDBCol style={{marginLeft: '1rem', marginRight: '1rem'}}>
            <VideoCard/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

Video.i18n = [
  {},
  {}
];
