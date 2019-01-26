import React from 'react';
import {languageHelper} from '../tool/language-helper';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBBtn,
} from 'mdbreact';

export class CareerCard extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null,
      cardColor: '#747373'
    };
    this.text = CareerCard.i18n[languageHelper()];
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
        user: {
          id: 0,
          type: 'Unpaid Part-Time Internship',
        },
        location: 'Washington, D.C, U.S.A', // It would be "1-200" in future.
        type: 'Unpaid Part-Time Internship', // It would be defined in future.
        deadLine: 1546300800,
        ifMatched: true,
        status: {
          code: 2000
        }
      };
    mockData.ifMatched = mockData.user.type === mockData.type
    let color = '#747373';
    if (mockData.ifMatched) {
      color = '#00bcd4';
    }
    // 需要检查时间是否符合
    // mockData.ifMatched = (mockData.user.type === mockData.type) && (new Date() <= mockData.deadLine)
    this.setState(() => {
      return {backend: mockData, cardColor: color};
    });
  }

  render() {
    let matchIcon = null
    const idNum = '/job/' + this.props.idNum
    if (this.state.backend.ifMatched) {
      matchIcon = <MDBIcon icon="check-circle" className="cyan-text" style={{paddingRight: '6px'}}/>;
    } else {
      matchIcon = <MDBIcon icon="ban" style={{paddingRight: '6px'}}/>;
    }
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        <MDBCard
          style={{
            height: '16rem',
            margin: '10px',
            boxShadow: 'none'
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
                  <MDBCol size="8">
                    <MDBCardTitle
                      style={{
                        fontSize: '1rem'
                      }}
                    >
                      {this.state.backend.name}
                    </MDBCardTitle>
                    <MDBCardTitle
                      style={{
                        fontSize: '1rem'
                      }}
                    >
                      {this.state.backend.organization.name}
                    </MDBCardTitle>
                  </MDBCol>
                  <MDBCol size="4">
                    {/*todo,不符合要求的不能点击*/}
                    <MDBBtn 
                      size="sm" 
                      outline 
                      style={{borderRadius: '5px'}}><a href={idNum} style={{color: '#747373'}}>{this.text.apply}
                      </a>
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol>
                    <MDBCardText
                      style={{
                        fontSize: '0.8rem',
                        marginBottom: '5px',
                      }}
                    >
                      <MDBIcon icon="briefcase" style={{marginRight: '5px'}}/>
                      {this.state.backend.type}


                    </MDBCardText>
                  </MDBCol>
                  <MDBCol>
                    <MDBCardText
                      style={{
                        fontSize: '0.8rem',
                        marginBottom: '5px',
                      }}
                    >
                      <MDBIcon icon="calendar-times-o" style={{marginRight: '5px'}}/>
                      {this.text.applyBefore}
                      {
                        ((unixTimeStamp) => {
                          let d = new Date(unixTimeStamp * 1000);
                          return d.toUTCString();
                        })(this.state.backend.deadLine)
                      }
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <MDBCardText
                      style={{
                        fontSize: '0.8rem',
                        marginTop: '5px',
                      }}
                    >

                      <MDBIcon icon="location-arrow" style={{marginRight: '5px'}}/>
                      {this.state.backend.location}
                    </MDBCardText>
                  </MDBCol>
                  <MDBCol>
                    <MDBCardText
                      style={{
                        fontSize: '0.8rem',
                        marginTop: '5px',
                      }}
                    >
                      
                      <span style={{color: this.state.cardColor}}>
                        {matchIcon}
                        {(this.state.backend.ifMatched) ? this.text.matched : this.text.unmatched}
                      </span>
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>

              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
        {/*<CompanyCard></CompanyCard>*/}
        {/*<UserCard></UserCard>*/}
        {/*<ArticleCard></ArticleCard>*/}
      </div>
    ) : null;
  }
}

CareerCard.i18n = [
  {
    applyBefore: '申请截止',
    matched: '全部符合',
    unmatched: '不符合条件',
    apply: '立即申请',
  },
  {
    applyBefore: 'Apply Before',
    matched: 'All Employers Preference Matched',
    unmatched: 'Some Employers Preference not Matched',
    apply: 'apply now'
  },
];
