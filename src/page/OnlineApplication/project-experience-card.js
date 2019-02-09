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
  MDBAvatar,
  MDBCollapse
} from 'mdbreact';

export class ProjExpCard extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      backend: null,
    };
    
    this.text = ProjExpCard.i18n[languageHelper()];
  }
  
  componentDidMount() {
    let mockData =
      {
        id: 0,
        jobTitle: '技术总监',
        company: '谷歌',
        companyUrl: 'https://www.google.com',
        time: '2018-2019, 一年',
        detail: 'Mainly supported market research, user research, hi-fi user interface designing, quick prototyping, ' +
          'usability testing results analysis and workshop facilitation. ' +
          'Co-worked with my colleagues through an agile development methodology.',
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
            <MDBCol>
              <MDBRow >
                {this.props.url ? <MDBAvatar
                  tag="img"
                  src={this.props.url}
                  className="z-depth-1-half img-fluid rounded-circle"
                  style={{
                    height: '100px'
                  }}
                /> : null}
                <MDBCol>
                  <MDBCardTitle
                    style={{
                      fontSize: '1rem'
                    }}
                  >
                    <div>
                      <span style={{
                        fontWeight: '700',
                        color: '#62686C',
                        marginRight: '10px'
                      }}>{this.state.backend.jobTitle}</span>
                      <a href={this.state.backend.companyUrl}>{this.state.backend.company}</a>
                    </div>
                  </MDBCardTitle>
                  <MDBCardTitle
                    style={{
                      fontSize: '1rem'
                    }}
                  >
                    {this.state.backend.time}
                  </MDBCardTitle>
                  <MDBCardText
                    style={{
                      fontSize: '14px',
                      marginTop: '5px',
                      height: '6rem',
                      lineHeight: '1.5rem',
                      overflow: 'hidden',
                    }}
                  >
                    {this.state.backend.detail}
                  </MDBCardText>
                </MDBCol>
                {this.props.url ? 
                  <MDBRow bottom>
                    <a className="mr-2" href="#!">删除</a>
                  </MDBRow> : null}
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    ) : null;
  }
}

ProjExpCard.i18n = [
  {},
  {},
];
