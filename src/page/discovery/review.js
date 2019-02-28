import React from 'react';
import {languageHelper} from '../../tool/language-helper';


import {MDBContainer, MDBRow, MDBCol} from 'mdbreact';

import {getAsync} from "../../tool/api-helper";
import {VideoCard} from '../../general-component/video-card';

export class Review extends React.Component {
  constructor(props) {
    super(props);
    this.text = Review.i18n[languageHelper()];
    this.state = {};
  }

  async componentDidMount() {
    const result = await getAsync(`/discovery/review`)
    console.log(result)
    if (result && result.status && result.status.code === 2000) {
      let mockData =
        {
          status: {
            code: result.status.code
          }
        };
      this.setState(() => {
        return {backend: mockData};
      });
    } else {
      let mockData = {
        status: result.status
      }
      this.setState(() => {
        return {backend: mockData};
      });
    }
  }

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
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
    ) : null;
  }
}

Review.i18n = [
  {},
  {}
];
