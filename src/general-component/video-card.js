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
      <MDBCard news className="my-5" style={{boxShadow: 'none'}}>
        <div className="embed-responsive embed-responsive-16by9" style={{width: "400px"}}>
          <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM"
                  allowFullScreen></iframe>

        </div>
        <MDBCardBody>
          <div className="social-meta">
            <p className="h3">
              Heading
            </p>
            <div className="content" style={{marginTop: "2rem"}}>
              <div className="right-side-meta">2 h ago</div>
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
                alt=""
                className="rounded-circle avatar-img z-depth-1-half"
              />
              Tony
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    ) : null;
  }
}

VideoCard.i18n = [
  {},
  {},
];

