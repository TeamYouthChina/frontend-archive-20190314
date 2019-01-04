import React from 'react';
import {languageHelper} from '../tool/language-helper';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBRow,
  MDBCol,
} from 'mdbreact';

export class CompanyCard extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null
    };
    this.text = CompanyCard.i18n[languageHelper()];
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
        style={{
          margin: '10px',
          
        }}>
        <MDBRow>
          <MDBCol size="3">
            <MDBCardImage
              className="img-fluid"
              src="https://s3.amazonaws.com/handshake.production/app/public/assets/institutions/111044/original/hs-emp-branding-image-data.?1522348756"
            />
          </MDBCol>
          <MDBCol size="9">
            <MDBCardBody
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <MDBRow>
                <MDBCol>
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
                <MDBCol>
                  <MDBBtn outline style={{borderRadius: '5px'}}>Follow</MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    ) : null;
  }
}

CompanyCard.i18n = [
  {
    scale: '公司规模',
    employ: '招聘职位数量',
  },
  {
    scale: 'Company Scale',
    employ: 'Employ Number',
  },
];
