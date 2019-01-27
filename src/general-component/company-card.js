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
  MDBIcon,
  MDBAvatar
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
      <MDBCard className="px-3 py-4">
        <MDBCardBody
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <MDBRow>
            <MDBCol size="2">
              <MDBRow>
                <MDBCol size='9'>
                  <MDBAvatar
                    tag="img"
                    src="https://s2.ax1x.com/2019/01/27/kuUMYq.jpg"
                    className="rounded z-depth-1-half img-fluid"
                    alt="Sample avatar"
                  />
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol size="9">
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
                <MDBCol>
                  <MDBIcon
                    icon="bookmark-o"
                    size="3x"
                    className="pt-1 p-0"
                    style={{color:'#45526e'}}
                  />
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
          <br/>
          <MDBRow>
            <MDBCol>
              <p>滴滴出行（www.didiglobal.com）是全球领先的一站式移动出行平台</p>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
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
