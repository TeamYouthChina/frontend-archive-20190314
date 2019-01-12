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
} from 'mdbreact';

import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';
import {CompanyCard} from '../../general-component/company-card';
import CoDetail from '../../general-component/company-detail';
import RelatedPosition from './related';

import './public/style.css';

export class JobDetail extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null
    };
    this.text = JobDetail.i18n[languageHelper()];
  }

  componentWillMount() {
    let mockData =
      {
        id: 0,
        name: 'New Frontier Data',
        url: 'https://www.google.com',
        scale: '500',
        requirements: ['Good knowledge of mysql', 'skill2', 'skill3', 'skill4'],
        better: ['good1', 'good2','good3','good4',],
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
      <div>
        <Header/>
        <br/>
        <MDBRow>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="10" className="companyCol">
            <CompanyCard></CompanyCard>
            <div>
              <MDBCard
                style={{
                  margin: '10px',
                  boxShadow: 'none'
                }}>
                <MDBRow>
                  <MDBCardBody
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <MDBCardTitle
                      style={{
                        fontSize: '1rem'
                      }}
                    >
                      {this.text.description}
                    </MDBCardTitle>
                    <MDBCardTitle
                      style={{
                        fontSize: '1rem'
                      }}
                    >
                      {this.text.requirements}
                    </MDBCardTitle>
                    <MDBCardText>
                      {this.state.backend.requirements.map((item) => {
                        return (
                          <MDBRow key={item} style={{margin:'3px 5px'}}>
                            -{item}
                          </MDBRow>
                        );
                      })}
                    </MDBCardText>
                    <MDBCardTitle
                      style={{
                        fontSize: '1rem'
                      }}
                    >
                      {this.text.better}
                    </MDBCardTitle>
                    <MDBCardText>
                      {this.state.backend.better.map((item) => {
                        return (
                          <MDBRow key={item} style={{margin:'3px 5px'}}>
                            -{item}
                          </MDBRow>
                        );
                      })}
                    </MDBCardText>
                  </MDBCardBody>
                </MDBRow>
              </MDBCard>

            </div>
          </MDBCol>
          <MDBCol size="1"></MDBCol>
        </MDBRow>
        <MDBRow style={{marginTop: '3rem'}}>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="10" style={{paddingTop:'2rem',boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)'}}>
            <CoDetail></CoDetail>
          </MDBCol>
          <MDBCol size="1"></MDBCol>
        </MDBRow>
        <MDBRow style={{marginTop: '3rem'}}>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="10" style={{paddingTop:'2rem',paddingBottom:'2rem',boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)'}}>
            <RelatedPosition></RelatedPosition>
          </MDBCol>
          <MDBCol size="1"></MDBCol>
        </MDBRow>
        <Footer></Footer>
      </div>

    ) : null;
  }
}

JobDetail.i18n = [
  {
    description: '职位描述',
    requirements: '职位要求',
    better: '加分项'
  },
  {
    description: 'Job Description',
    requirements: 'Candidate Requirements',
    better: 'Good to have'
  },
];
