import React from 'react';

import {
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBRow,
  View,
  Mask,
  MDBContainer
} from 'mdbreact';
import {languageHelper} from '../../tool/language-helper';
import {Header} from '../../general-component/header/header';
import {Footer} from '../../general-component/footer';
import {CoDetail} from './company-detail';
import {JobName} from './job-name';
import {JobDescri} from './job-descri';
import {JobApp} from './job-app-progress';
import {QuestionCard} from '../question/question-card-test';
import {JobCardSquare} from '../../general-component/job-card-square/job-card-square';
import {ReviewCard} from '../../general-component/review-card';
import {QuestionAnswerCard} from "../question/answer/question-answer-card";

const basicCHNFont = {
  fontFamily: 'PingFang SC',
  fontStyle: 'normal',
  fontWeight: 'normal',
  lineHeight: 'normal'
};

export class Job extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backend: null,

    };
    this.text = Job.i18n[languageHelper()];
  }

  render() {

    return (
      <div>
        <Header/>

        <div style={{marginBottom: '-180px', marginTop: '-7px'}}>
          <View>
            <img
              className="d-block w-100 card-background"
              src="http://47.254.46.117:5000/discovery/rawpixel-665368-1.png"
            />
            <Mask className="flex-center  text-white text-center">
            </Mask>
          </View>

        </div>

        <MDBRow style={{backgroundColor: '#F3F5F7'}} center top>
          {/*<MDBCol */}
          {/*md="1" */}
          {/*className="offset-md-1 p-0"*/}
          {/*>*/}

          {/*<MDBCard*/}
          {/*classNmae="p-0"*/}
          {/*style={{*/}
          {/*boxShadow: 'none',*/}
          {/*marginTop:'180px',*/}
          {/*}}*/}
          {/*>*/}
          {/*<MDBCardBody className="px-0">*/}
          {/*<h6*/}
          {/*style={{borderLeft: '4px solid #7C97B8'}}*/}
          {/*className="px-2 pt-2 mx-2"*/}
          {/*>职位详情</h6>*/}
          {/*<h6 className="px-2 pt-2 mx-2">公司详情</h6>*/}
          {/*<h6 className="px-2 pt-2 mx-2">相似职位</h6>*/}
          {/*<h6 className="px-2 pt-2 mx-2">评价</h6>*/}
          {/*<h6 className="px-2 pt-2 mx-2">问答</h6>*/}

          {/*</MDBCardBody>*/}
          {/*</MDBCard>*/}
          {/*</MDBCol>*/}
          <MDBCol size="10" md="8">
            <p>
              <MDBCard className="px-3 pb-3">
                <MDBCardBody>
                  <JobName/>
                  <br/>
                  <JobApp basicCHNFont={basicCHNFont}/>
                  <JobDescri basicCHNFont={basicCHNFont}/>
                </MDBCardBody>
              </MDBCard>
            </p>
            
            <p>
              <MDBCard className="my-5 px-3 pb-3">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol>
                      <CoDetail basicCHNFont={basicCHNFont}/>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </p>
            
            <p id="job">
              <MDBCard className="my-5 px-3 py-3">
                <p style={{...basicCHNFont, color: '#454F69', fontWeight: '500', fontSize: '18px'}}
                   className="mb-1 px-3">
                  相似职位
                </p>
                <MDBContainer className="mt-2">
                  <MDBRow between>
                    <MDBCol>
                      <JobCardSquare style={{boxShadow: 'none'}}/>
                    </MDBCol>
                    <MDBCol>
                      <JobCardSquare/>
                    </MDBCol>
                    <MDBCol>
                      <JobCardSquare/>
                    </MDBCol>
                    <MDBCol>
                      <JobCardSquare/>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow center className="mt-2">
                    <MDBBtn flat block><p 
                      style={{...basicCHNFont, color: '#454F69', fontWeight: '500', fontSize: '16px'}}>
                      查看更多相似职位</p></MDBBtn>
                  </MDBRow>
                </MDBContainer>
              </MDBCard>
            </p>

            <p id="comment">
              <MDBCard className="mt-5 px-3 py-3">
                <p style={{...basicCHNFont, color: '#454F69', fontWeight: '500', fontSize: '18px'}} 
                  className="mb-1 px-3">评论</p>
                <ReviewCard/>
                <ReviewCard/>
              </MDBCard>
              <MDBRow className="px-3 pb-3 mb-4">
              </MDBRow>
            </p>
            
            
            <p id="questionanswer">
              <MDBCard className="mt-5 px-3 py-3">
                <p style={{...basicCHNFont, color: '#454F69', fontWeight: '500', fontSize: '18px'}} 
                  className="mb-1 px-3">
                  问答
                </p>
                <QuestionCard/>
                <MDBRow center className="mt-2">
                  <MDBBtn flat block><p
                    style={{...basicCHNFont, color: '#454F69', fontWeight: '500', fontSize: '16px'}}>
                    查看更多问答</p></MDBBtn>
                </MDBRow>
              </MDBCard>
            </p>
          </MDBCol>

        </MDBRow>

        <Footer/>
      </div>
    );


  }
}

Job.i18n = [
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
