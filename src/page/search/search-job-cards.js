import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBAvatar
} from 'mdbreact';


export class SearchJobCards extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null
    };
    this.text = SearchJobCards.i18n[languageHelper()];
  }

  componentWillMount() {
    let mockData =
      {
        id: 0,
        name: 'New Frontier Data',
        avatarUrl: 'https://s3.amazonaws.com/handshake.production/app/public/assets/institutions/111044/small/hs-emp-logo-data.?1478033500',
        url: 'https://www.google.com',
        scale: '500',
        employNumber: '100',
        type: 'Computer Software', // It would be defined in future.
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
        className="px-3"
        style={{borderRadius: '0px'}}
      >
        <MDBCardBody
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <MDBRow>
            <MDBCol className="pl-0" size="9">
              <MDBRow>
                <MDBCol size="10">
                  <MDBCardTitle
                    style={{
                      fontSize: '1rem'
                    }}
                  >
                    <a href={this.state.backend.url}>{this.state.backend.name}</a>
                  </MDBCardTitle>
                  <MDBCardTitle
                    style={{
                      fontSize: '1rem'
                    }}
                  >
                    {this.state.backend.type}
                  </MDBCardTitle>
                  <MDBCardText
                    style={{
                      fontSize: '0.8rem',
                      marginTop: '5px',
                    }}
                  >
                    {this.text.scale} :
                    {this.state.backend.scale}
                  </MDBCardText>
                  <MDBCardText
                    style={{
                      fontSize: '0.8rem',
                      marginTop: '5px',
                    }}
                  >
                    {this.text.employ} :
                    {this.state.backend.employNumber}
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol size="3">
              <MDBRow>
                <MDBCol className="p-0" size='12'>
                  <MDBAvatar
                    tag="img"
                    src="https://pbs.twimg.com/profile_images/762930018968334336/fePtGWo7_400x400.jpg"
                    className="z-depth-1-half img-fluid"
                    // alt="Sample avatar"
                  />
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    ) : null;
  }
}

SearchJobCards.i18n = [
  {
    scale: '公司规模',
    employ: '招聘职位数量',
  },
  {
    scale: 'Company Scale',
    employ: 'Employ Number',
  },
];
