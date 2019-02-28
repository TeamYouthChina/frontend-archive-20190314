import React from 'react';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBBadge,
  MDBIcon,
  MDBRotatingCard,
  MDBCard,
} from 'mdbreact';

import {languageHelper} from '../../../tool/language-helper';
import {RensentInfo} from './resentinfo';

export class Message extends React.Component {
  handlClick = () => {
    this.setState({});
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.text = Message.i18n[languageHelper()];
  }

  render() {
    const btnColor = '#7C97B8';
    return (
      <div>
        <MDBContainer>
          <MDBRow>
            <MDBCol size="0"></MDBCol>
            <MDBCol size='12'>
              <MDBRow>
                <MDBCol size="9">
                  <MDBRow>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <RensentInfo></RensentInfo>
              </MDBRow>
            </MDBCol>
            <MDBCol size="0"></MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

Message.i18n = [
  {},
  {}
];
