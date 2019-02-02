import React from 'react';
import {languageHelper} from '../../tool/language-helper';

import {MDBContainer, MDBRow} from 'mdbreact';
import {ReviewCard} from '../../general-component/review-card';

export class Review extends React.Component {
  constructor(props) {
    super(props);
    this.text = Review.i18n[languageHelper()];
  }

  render() {
    return (
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
    );
  }
}

Review.i18n = [
  {},
  {}
];
