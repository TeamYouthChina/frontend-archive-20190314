import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBView,
  MDBIcon,
  MDBMask,
  MDBRow,
  MDBCol
} from 'mdbreact';
import {JobCardSquare} from '../../general-component/job-card-square';
import {HomeHeader} from '../home-header';
import {Footer} from '../../general-component/footer';

export class Recommondation extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null
    };
    this.text = Recommondation.i18n[languageHelper()];
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
      <div>
        <HomeHeader></HomeHeader>
        <br/>
        <MDBRow>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="10">
            <MDBCard personal className="mb-md-0 mb-4">
              <MDBView hover>
                <MDBRow>
                  <MDBCol size="1"></MDBCol>
                  <MDBCol size="2" style={{paddingTop: '26px'}}>
                    <MDBCardImage
                      top
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
                      alt="MDBCard image cap"
                    />
                    <a href="#!">
                      <MDBMask overlay="white-slight"/>
                    </a>
                  </MDBCol>
                  <MDBCol size="8">
                    <MDBCardBody>
                      <a href="#!">
                        <MDBCardTitle>Anna</MDBCardTitle>
                      </a>
                      <a href="#!" className="card-meta">
                        Friends
                      </a>
                      <MDBCardText>
                        Anna is a web designer living in New York.
                      </MDBCardText>
                      <hr/>
                      <a href="#!" className="card-meta">
                      <span>
                        <MDBIcon icon="user"/>
                          83 Friends
                        </span>
                      </a>
                      <p className="card-meta float-right">Joined in 2012</p>
                    </MDBCardBody>
                  </MDBCol>
                  <MDBCol size="1"></MDBCol>
                </MDBRow>
              </MDBView>
            </MDBCard>
          </MDBCol>
          <MDBCol size="1"></MDBCol>
        </MDBRow>
        <MDBRow style={{marginTop: '3rem'}}>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="10">
            <h5>实习推荐</h5>
          </MDBCol>
          <MDBCol size="1"></MDBCol>
        </MDBRow>
        <MDBRow style={{marginTop: '3rem'}}>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="10" style={{
            paddingTop: '2rem',
            paddingBottom: '2rem',
            boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)'
          }}>
            <JobCardSquare></JobCardSquare>
          </MDBCol>
          <MDBCol size="1"></MDBCol>
        </MDBRow>
        <MDBRow style={{marginTop: '3rem'}}>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="10">
            <h5>全职推荐</h5>
          </MDBCol>
          <MDBCol size="1"></MDBCol>
        </MDBRow>
        <MDBRow style={{marginTop: '3rem'}}>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="10" style={{
            paddingTop: '2rem',
            paddingBottom: '2rem',
            boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)'
          }}>
            <JobCardSquare></JobCardSquare>
          </MDBCol>
          <MDBCol size="1"></MDBCol>
        </MDBRow>
        <MDBRow style={{marginTop: '3rem'}}>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="10">
            <h5>人脉推荐</h5>
          </MDBCol>
          <MDBCol size="1"></MDBCol>
        </MDBRow>
        <MDBRow style={{marginTop: '3rem'}}>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="10" style={{
            paddingTop: '2rem',
            paddingBottom: '2rem',
            boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)'
          }}>
            <JobCardSquare></JobCardSquare>
          </MDBCol>
          <MDBCol size="1"></MDBCol>
        </MDBRow>
        <MDBRow style={{marginTop: '3rem'}}>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="10">
            <h5>话题推荐</h5>
          </MDBCol>
          <MDBCol size="1"></MDBCol>
        </MDBRow>
        <MDBRow style={{marginTop: '3rem'}}>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="10" style={{
            paddingTop: '2rem',
            paddingBottom: '2rem',
            boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)'
          }}>
            <JobCardSquare></JobCardSquare>
          </MDBCol>
          <MDBCol size="1"></MDBCol>
        </MDBRow>
        <Footer></Footer>
      </div>
    ) : null;
  }
}

Recommondation.i18n = [
  {
    applyBefore: '申请截止'
  },
  {
    applyBefore: 'Apply Before'
  },
];
