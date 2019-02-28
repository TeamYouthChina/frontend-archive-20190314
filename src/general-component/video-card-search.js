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


export class VideoCardSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backend: null,
      modal15: false,
      tick: false
    };
    this.text = VideoCardSearch.i18n[languageHelper()];
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
        <MDBRow center>
          <MDBCol md="3">
            <div className="embed-responsive embed-responsive-16by9" style={{width: "400px"}}>
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM"
                      allowFullScreen></iframe>

            </div>
          </MDBCol>
          <MDBCol size="6" style={{marginLeft: "4rem"}}>
            <MDBCardBody>
              <div className="social-meta">
                <p className="font-weight-light" style={{fontSize: "1.5rem"}}>
                  Heading is just a seven-letter word, a seven-letter word. I'm just filling the blank.
                </p>
                <p style={{fontSize: "15px"}}>
                  999 views
                  &middot;
                  1 hour ago
                </p>
                <p style={{fontSize: "15px"}}>
                  According to Cedric, Tracy now spends his days eating caviar on Ritz Crackers and driving his Bugatti around the block.
                </p>
               
                

              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    ) : null;
  }
}

VideoCardSearch.i18n = [
  {},
  {},
];

