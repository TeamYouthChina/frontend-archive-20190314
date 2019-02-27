import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import {
  MDBRow,
  MDBCol,
  MDBCard, 
  MDBCardBody,
  MDBBtn,
  Mask,
  View
} from 'mdbreact';
import {Header} from '../../general-component/header/header';
import {Footer} from '../../general-component/footer';
import {CompanyCard} from '../../general-component/company-card';
import {CoDetail} from "./company-detail";
import {JobCardSquare} from "../../general-component/job-card-square/job-card-square";
import {Photo} from "./photo";
import {ApplicantCard} from "../../general-component/applicant-card";
import {ReviewCard} from "../../general-component/review-card";
import {QuestionCard} from "../../general-component/question-card";

export class Company extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null,
     
    };
    this.text = Company.i18n[languageHelper()];
    
  }
  
  

  render() {
    return (
      <div style={{background:' #F2F2F2'}}>
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
            md="10"
            className="offset-md-1"
          >
            <p><CompanyCard/></p>
          </MDBCol>
        </MDBRow>
        <MDBRow top>
          <MDBCol
            md="1"
            className="offset-md-1"
          >

            <MDBCard className="my-2" style={{height:'375px'}}>
              <MDBCardBody className="px-0 ">
                <h6
                  style={{borderLeft: '4px solid #7C97B8'}}
                  className="px-2 pt-2 mx-2"
                >概况</h6>
                <h6 className="px-2 pt-2 mx-2">在招职位</h6>
                <h6 className="px-2 pt-2 mx-2">评价</h6>
                <h6 className="px-2 pt-2 mx-2">问答</h6>
                <h6 className="px-2 pt-2 mx-2">图片</h6>
                <h6 className="px-2 pt-2 mx-2">视频</h6>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="9" >
           
            <p>
              <MDBCard className="my-2 px-3 pb-3">
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
                  发表的职位
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
               

              </MDBRow>
            </p>
            <p id="photo">
              <h4 className="font-weight-bold mb-3 px-3">
                <strong>
                  公司照片
                </strong>
              </h4>
              <MDBCard className="px-3 pb-3 mb-4">
               
                <MDBCardBody>
                  <Photo/>
                </MDBCardBody>
              </MDBCard>
            </p>

            <p id="applicant">
              <h4 className="font-weight-bold mb-3 px-3 ">
                <strong>
                  在此实习学生
                </strong>
              </h4>
              <MDBRow>
                <MDBCol>
                  <ApplicantCard/>
                </MDBCol>
                <MDBCol>
                  <ApplicantCard/>
                </MDBCol>
                <MDBCol>
                  <ApplicantCard/>
                </MDBCol>


              </MDBRow>
            </p>
          </MDBCol>
        </MDBRow>
        
        <Footer/>
      </div>

    );
  }
}

Company.i18n = [
  {
    detail: '公司详情',
    jobList: '查看发表的职位',
    comments: '评论      ',
    answer:'回答',
    benefit:'公司福利',
    condition:'工作环境',
    live:'公司live',
    picture:'公司照片',
    student:'在此公司实习过的学生'
  },
  {
    detail: 'Company detail',
    jobList: 'Jobs in list',
    comments: 'Comments',
    answer:'Reply',
    benefit:'Company Reward',
    condition:'Working Condition',
    live:'Company live',
    picture:'Company photo',
    student:'Students worked in here'
  },
];
