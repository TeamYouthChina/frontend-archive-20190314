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
        type: 'Intership',
        location: 'Shanghai, China',
        area: 'Computer Software', // It would be defined in future.
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
        className="px-3 py-4"
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
                    {this.state.backend.area}
                  </MDBCardTitle>
                  <MDBCardText
                    style={{
                      fontSize: '0.8rem',
                      marginTop: '5px',
                    }}
                  >
                    <span className="mr-1">{this.text.type} </span>
                    <span>{this.state.backend.type}</span>
                  </MDBCardText>
                  <MDBCardText
                    style={{
                      fontSize: '0.8rem',
                      marginTop: '5px',
                    }}
                  >
                    <span className="mr-1">{this.text.location} </span>
                    <span>{this.state.backend.location}</span>
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
    type: '类型',
    location: '工作地点',
  },
  {
    type: 'Type',
    location: 'Location',
  },
];
