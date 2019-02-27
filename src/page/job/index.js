import React from 'react';

import {
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBRow,
  View,
  Mask,
} from 'mdbreact';
import {languageHelper} from "../../tool/language-helper";
import {Header} from '../../general-component/header/header';
import {Footer} from "../../general-component/footer";
import {CoDetail} from "../company/company-detail";
import {JobName} from './job-name';
import {JobDescri} from "./job-descri";
import {JobApp} from "./job-app-progress";
import {QuestionCard} from "../question/question-card";
import {JobCardSquare} from "../../general-component/job-card-square";
import {ReviewCard} from "../question/review-card";


export class Job extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backend: null,

    };
    this.text = Job.i18n[languageHelper()];
  }

  render() {

    return  (
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

        <MDBRow top>
          <MDBCol 
            md="1" 
            className="offset-md-1 p-0"
          >
           
            <MDBCard
              classNmae="p-0"
              style={{
                boxShadow: 'none',
                marginTop:'180px',
              }}
            >
              <MDBCardBody className="px-0">
                <h6
                  style={{borderLeft: '4px solid #7C97B8'}}
                  className="px-2 pt-2 mx-2"
                >职位详情</h6>
                <h6 className="px-2 pt-2 mx-2">公司详情</h6>
                <h6 className="px-2 pt-2 mx-2">相似职位</h6>
                <h6 className="px-2 pt-2 mx-2">评价</h6>
                <h6 className="px-2 pt-2 mx-2">问答</h6>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="9">
            <p>
              <MDBCard className="my-5 px-3 pb-3">
                <br/>
                <MDBCardBody>
                  <JobName/>
                  <br/>
                  <JobApp/>
                  <JobDescri/>
                </MDBCardBody>
              </MDBCard>
            </p>
            <p>
              <MDBCard className="my-5 px-3 pb-3">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol>
                      <CoDetail></CoDetail>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </p>
            <p id="job">
              <h4 className="font-weight-bold mb-1 px-3">
                <strong>
                  相似职位
                </strong>
              </h4>
            </p>
            <p>
              <MDBRow between>
                <MDBCol>
                  <JobCardSquare/>
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
                <MDBBtn flat block>查看全部相似职位</MDBBtn>
              </MDBRow>
            </p>
            <p id="comment">
              <h4 className="font-weight-bold mb-3 px-3">
                <strong>
                  评论
                </strong>
              </h4>
              <MDBRow className="px-3 pb-3 mb-4">
                <p>
                  <ReviewCard/>
                </p>
                <p>
                  <ReviewCard/>
                </p>
                <p>
                  <ReviewCard/>
                </p>
              </MDBRow>
            </p>
            <p id="questionanswer">
              <h4 className="font-weight-bold mb-3 px-3">
                <strong>
                  问答
                </strong>
              </h4>
              <MDBRow className="px-3 pb-3 mb-4">
                <p>
                  <QuestionCard/>
                </p>

                <p>
                  <QuestionCard/>
                </p> 
                <p>
                  <QuestionCard/>
                </p>
                <MDBBtn flat block> See More</MDBBtn>
                
              </MDBRow>
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
