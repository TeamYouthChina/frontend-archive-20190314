import React from 'react';
import {languageHelper} from '../tool/language-helper';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText
} from 'mdbreact';


export class JobCardSquare extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null
    };
    this.text = JobCardSquare.i18n[languageHelper()];
  }

  componentWillMount() {
    let mockData =
      {
        id: 0,
        name: 'Summer 2019 Tech Internship',
        organization: {
          id: 0,
          name: 'New Frontier Data',
          avatarUrl: 'https://s3.amazonaws.com/handshake.production/app/public/assets/institutions/111044/small/hs-emp-logo-data.?1478033500'
        },
        location: 'Washington, D.C, U.S.A', // It would be "1-200" in future.
        type: 'Unpaid Part-Time Internship', // It would be defined in future.
        deadLine: 1546300800,
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
      <MDBCard
        style={{
          width: '16rem',
          height: '16rem'
        }}>
        <MDBCardImage
          className="img-fluid"
          src="https://s3.amazonaws.com/handshake.production/app/public/assets/institutions/111044/original/hs-emp-branding-image-data.?1522348756"
        />
        <MDBCardBody
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <MDBCardTitle
              style={{
                fontSize: '1rem'
              }}
            >
              {this.state.backend.name}
            </MDBCardTitle>
            <MDBCardText
              style={{
                fontSize: '0.8rem'
              }}
            >
              {this.state.backend.organization.name}
              <br/>
              {this.state.backend.location}
            </MDBCardText>
          </div>
          <MDBCardText
            style={{
              fontSize: '0.8rem'
            }}
          >
            {this.text.applyBefore}
            <br/>
            {
              ((unixTimeStamp) => {
                let d = new Date(unixTimeStamp * 1000);
                return d.toUTCString();
              })(this.state.backend.deadLine)
            }
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    ) : null;
  }
}

JobCardSquare.i18n = [
  {
    applyBefore: '申请截止'
  },
  {
    applyBefore: 'Apply Before'
  },
];
