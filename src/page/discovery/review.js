import React from 'react';
import {languageHelper} from '../../tool/language-helper';

import {MDBContainer, MDBRow} from 'mdbreact';
import {ReviewCard} from '../question/review-card';
import {getAsync} from "../../tool/api-helper";
import {Redirect} from "react-router-dom";

export class Review extends React.Component {
  constructor(props) {
    super(props);
    this.text = Review.i18n[languageHelper()];
  }

  async componentDidMount() {
    const result = await getAsync(`/discovery/review`)
    // console.log(result)
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
        {/*有状态码且为2000时候才渲染*/}
        {this.state.backend.status.code && this.state.backend.status.code !== 2000 ? (
          <div>
            <Redirect to="/404"></Redirect>
          </div>
        ) : (
          <MDBContainer
            fluid
            style={{padding: 0}}
          >
            <MDBRow style={{margin: '1rem 0rem'}}>
              <ReviewCard/>
            </MDBRow>
            <MDBRow style={{margin: '1rem 0rem'}}>
              <ReviewCard/>
            </MDBRow>
            <MDBRow style={{margin: '1rem 0rem'}}>
              <ReviewCard/>
            </MDBRow>
          </MDBContainer>
        )}
      </div>
    ) : null;
  }
}

Review.i18n = [
  {},
  {}
];
