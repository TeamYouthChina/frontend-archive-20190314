import React from 'react';
import {languageHelper} from '../tool/language-helper';
import {
  MDBAvatar, 
  MDBCard, 
  MDBCardBody, 
  MDBCardText, 
  MDBCardTitle, 
  MDBCol, 
  MDBBtn, 
  MDBRow
} from 'mdbreact';


export class ApplicantHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: null
    }
    this.text = ApplicantHeader.i18n[languageHelper()];
  }

  componentWillMount() {
    let mockData =
      {
        id: 0,
        name: 'GYH',
        avatarUrl: 'http://p3.pstatp.com/origin/1dbb0000b3da77e887d7',
        score: '90',
        membership: 'IEEE',
        status: {
          code: 2000
        }
      };
    this.setState(() => {
      return {backend: mockData};
    });
  }

  render() {
    return (
      <div>
        <MDBCard className="px-3 py-4">
          <MDBCardBody
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <MDBRow>
              <MDBCol size="3">
                <MDBRow>
                  <MDBCol size='9'>
                    <MDBAvatar
                      tag="img"
                      src={this.state.backend.avatarUrl}
                      className="rounded z-depth-1-half img-fluid"
                      alt="Sample avatar"
                    />
                  </MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol size="9">
                <MDBRow>
                  <MDBCol size="9">
                    <MDBCardTitle
                      style={{
                        fontSize: '1rem'
                      }}
                    >
                      <h4>你好，{this.state.backend.name}同学</h4>
                    </MDBCardTitle>
                    <MDBCardText
                      style={{
                        fontSize: '1.2rem',
                        marginTop: '5px',
                      }}
                    >
                      影响力分值:{this.state.backend.score}分
                      <br/>
                      {this.state.backend.membership}会员
                    </MDBCardText>
                  </MDBCol>
                  <MDBCol size="3">
                    <MDBBtn outline color="mdb-color lighten-4" size="sm" href="/profile">
                      个人中心
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}

ApplicantHeader.i18n = [
  {},
  {}
];
