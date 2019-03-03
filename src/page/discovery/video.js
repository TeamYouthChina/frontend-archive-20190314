import React from 'react';
import {languageHelper} from '../../tool/language-helper';

import {
  MDBContainer, 
  MDBCol, 
  MDBRow,
  MDBSpinner
} from 'mdbreact';
import {VideoCard} from "../../general-component/video-card";
import {VideoCardSearch} from '../../general-component/video-card-search';
import {getAsync} from "../../tool/api-helper";

export class Video extends React.Component {
  constructor(props) {
    super(props);
    this.text = Video.i18n[languageHelper()];
    this.state = {};
  }

  async componentDidMount() {
    const result = await getAsync(`/discovery/video`)
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
      <div>
        <MDBContainer
          fluid
          style={{padding: 0}}
        >
          <MDBRow>
            <MDBCol style={{marginLeft: '1rem', marginRight: '1rem'}}>
              <VideoCardSearch/>
            </MDBCol>
            <MDBCol style={{marginLeft: '1rem', marginRight: '1rem'}}>
              <VideoCardSearch/>
            </MDBCol>
            <MDBCol style={{marginLeft: '1rem', marginRight: '1rem'}}>
              <VideoCardSearch/>
            </MDBCol>
            <MDBCol style={{marginLeft: '1rem', marginRight: '1rem'}}>
              <VideoCardSearch/>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    ) :
      // a spinner displayed when data is loading
      <div className="my-5 text-center">
        <MDBSpinner/>
      </div>;
  }
}

Video.i18n = [
  {},
  {}
];
