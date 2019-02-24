import React from 'react';

import {languageHelper} from '../../tool/language-helper';
import {Header} from '../../general-component/header/header';
import {Footer} from '../../general-component/footer';
import {ApplicantHeader} from './applicant-header';
import {JobListHome} from '../home/job-list-home';
import {ApplicantCard} from '../../general-component/applicant-card';

import {
  MDBRow,
  MDBCol,
  MDBContainer,
} from 'mdbreact';

export class BestForYou extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      backend: null,
      // selectedTab: 1
    };

    this.text = BestForYou.i18n[languageHelper()];
  }

  componentWillMount() {
    let mockData = {
      name:['实习推荐', '全职推荐', '人脉推荐']
    };

    this.setState( () =>{
      return {backend: mockData};
    });
  }

  render() {
    return(
      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}
      >
        <Header/>
        <MDBContainer className="mt-5 mb-4">
          <ApplicantHeader/>
        </MDBContainer>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          width: '1224'
        }}>
          <div>
            {this.state.backend.name.map((name, index) => {
              return (
                <JobListHome name={name} key={index}/>
              );
            })}
            <MDBRow>
              <MDBCol>
                <div style={{
                  paddingLeft: '8px'
                }}
                >
                  <h5>话题推荐（临时）</h5>
                  <ApplicantCard/>
                </div>
              </MDBCol>
            </MDBRow>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

BestForYou.i18n = [
  {},
  {}
];
