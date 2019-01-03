import React from 'react';
import {languageHelper} from '../tool/language-helper';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from 'mdbreact';


export class UserCard extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null
    };
    this.text = UserCard.i18n[languageHelper()];
  }

  componentWillMount() {
    let mockData =
      {
        id: 0,
        name: 'Xiao Ming',
        type: 'student',
        influence: '100',
        friends: '100',
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
          height: '16rem',
          margin: '10px'
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
          <MDBRow>
            <MDBCol size="6">
              <MDBCardText
                style={{
                  fontSize: '0.8rem'
                }}
              >
                {this.state.backend.name}
              </MDBCardText>
            </MDBCol>
            <MDBCol size="6">
              <MDBCardText
                style={{
                  fontSize: '0.8rem'
                }}
              >
                {this.state.backend.influence}
                {this.text.influence}
              </MDBCardText>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCardText
              style={{
                fontSize: '0.8rem'
              }}
            >
              {this.state.backend.type}
            </MDBCardText>
          </MDBRow>
          <MDBRow>
            <MDBCardText
              style={{
                fontSize: '0.8rem'
              }}
            >
              {this.state.backend.friends}
              {this.text.friends}
            </MDBCardText>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    ) : null;
  }
}

UserCard.i18n = [
  {
    friends: '位共同好友',
    influence: '影响力'
  },
  {
    applyBefore: 'common friends',
    influence: 'power?'
  },
];
