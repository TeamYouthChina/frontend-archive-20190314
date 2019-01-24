import React from 'react';

import {
  MDBCol,
  MDBRow,
  MDBCard, 
  MDBCardBody,
  MDBBtn
} from 'mdbreact';
import {languageHelper} from "../../tool/language-helper";
import {Header} from '../../general-component/header';
import {Footer} from "../../general-component/footer";
import {JobManageCard} from "./job-manage-card";

export class JobAppManage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backend: null,
      isOpen: false
    };
    this.text = JobAppManage.i18n[languageHelper()];
  }
  




  componentWillMount() {
    let mockData =
      {
        id: 0,
        name: 'New Frontier Data',
        url: 'https://www.google.com',

        description: 'Through our family of apps and services, we are building a different kind of company that\n' +
          '                        connects billions of people around the world, gives them ways to share what matters most to\n' +
          '                        them, and helps bring people closer together. Whether we\'re creating new products or helping a\n' +
          '                        small business expand its reach, people at Facebook are builders at heart. Our global teams are\n' +
          '                        constantly iterating, solving problems, and working together to empower people around the world\n' +
          '                        to build community and connect in meaningful ways.',
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

        <MDBRow top>
          <MDBCol md="10" className="offset-md-1">
            <MDBCard className="my-5 px-3 pb-3">
              <br/>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol style={{textAlign: 'center'}} size="2">
                    <p>
                      <div
                        style={{width: '100px', height: '100px', background: '#C1C0C0',borderRadius: '50px',textAlign: 'center'}}
                      ></div>
                    </p>
                    <p>
                      <MDBBtn flat>已投递 6</MDBBtn>
                    </p>
                    <p>
                      <MDBBtn flat>已查阅 3</MDBBtn>
                    </p>
                    <p>
                      <MDBBtn flat>拟面试 1</MDBBtn>
                    </p>
                    <p>
                      <MDBBtn flat>已面试 2</MDBBtn>
                    </p>
                    <p>
                      <MDBBtn flat>offer 1</MDBBtn>
                    </p>
                   
                  </MDBCol>
                  <MDBCol size="10">
                    <JobManageCard/>
                  </MDBCol>
                </MDBRow>
                
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <Footer/>
      </div>
    ): null;


  }
}
JobAppManage.i18n = [
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
