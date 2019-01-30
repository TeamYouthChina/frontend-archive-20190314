import React from 'react';
import {
  Col,
  MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage,
  Select,
  Fa,
  Row, Progress,
  SelectInput, SelectOptions, SelectOption,
  MDBCollapse,
  Input, MDBInput,
  Iframe,
  MDBContainer,
  MDBTabPane, MDBTabContent,
  MDBRow, MDBCol, MDBMask, MDBBtn, MDBIcon, MDBView,
  MDBChip,
  MDBListGroup, MDBListGroupItem,
  MDBNav, MDBNavItem, MDBNavLink,
} from 'mdbreact';

import {languageHelper} from '../tool/language-helper';


export class VideoCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backend: null,
      modal15: false,
      tick: false
    };
    this.text = VideoCard.i18n[languageHelper()];
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }


  componentWillMount() {
    let mockData =
      {
        heading: 'Heading',
        username: 'Username',
        numberofviews: 'Number of Views',
        timeofpublication: 'Time of Publication',
        content: 'Roboto has a dual nature. It has a mechanical skeleton and the forms are largely geometric. At the same time, the font features friendly and open curves. While some grotesques distort their letterforms to force a rigid rhythm, Roboto doesn’t compromise, allowing letters to be settled into their natural width. This makes for a more natural reading rhythm more commonly found in humanist and serif types.',
        status: {
          code: 2000
        }
      };
    this.setState(() => {
      return {backend: mockData};
    });
  }

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <MDBCard>
        <MDBRow>
          <MDBCol md="3">
            <MDBCardImage className="img-fluid"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"/>
          </MDBCol>
          <MDBCol md="9">
            <h3 className="h3-responsive">
              {this.state.backend.heading}
            </h3>
            <p>
              {this.state.backend.username}
              &nbsp;
              &nbsp;
              <MDBIcon icon="user"/>
              &nbsp;
              &nbsp;
              {this.state.backend.numberofviews}
              &nbsp;
              &middot;
              &nbsp;
              {this.state.backend.timeofpublication}
            </p>
            <p style={{fontSize: "large"}}>
              {this.state.backend.content}
            </p>

          </MDBCol>
        </MDBRow>
      </MDBCard>
    ) : null;
  }
}

VideoCard.i18n = [
  {},
  {},
];
