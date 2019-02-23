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

import {getAsync} from '../../tool/api-helper';

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

  async componentDidMount() {
    
    if(this.props.id === 1) {
      this.setState({
        backend: await getAsync(`/jobs/${this.props.id}`)
      });
    } else {
      this.setState({
        backend: await getAsync(`jobs/1`)
      });
    }
    
    // let mockData =
    //   {
    //     id: 0,
    //     name: 'New Frontier Data',
    //     avatarUrl: 'https://s3.amazonaws.com/handshake.production/app/public/assets/institutions/111044/small/hs-emp-logo-data.?1478033500',
    //     url: 'https://www.google.com',
    //     scale: '500',
    //     employNumber: '100',
    //     type: 'Computer Software', // It would be defined in future.
    //     status: {
    //       code: 2000
    //     }
    //   };
    // this.setState(() => {
    //   return {backend: mockData};
    // });
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
                      fontSize: '1.125rem'
                    }}
                  >
                    <a href="#" style={{
                      color: '#7C97B8'
                    }}
                    >
                      {this.state.backend.content.jobName}
                    </a>
                  </MDBCardTitle>
                  <MDBCardTitle
                    style={{
                      fontSize: '1rem'
                    }}
                  >
                    {this.state.backend.content.location}
                  </MDBCardTitle>
                  <MDBCardText
                    style={{
                      fontSize: '0.8rem',
                      marginTop: '5px',
                    }}
                  >
                    {this.text.type}
                    {this.state.backend.content.type}
                  </MDBCardText>
                  <MDBCardText
                    style={{
                      fontSize: '0.8rem',
                      marginTop: '5px',
                    }}
                  >
                    {this.text.deadline}
                    {this.state.backend.content.deadLine}
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol size="3">
              <MDBRow>
                <MDBCol className="p-0" size='12'>
                  <MDBAvatar
                    tag="img"
                    src={this.state.backend.content.companyLogo}
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
    type: '工作类型: ',
    deadline: '截止日期: ',
  },
  {
    type: 'jobType: ',
    deadline: 'deadline: ',
  },
];
