import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import {
  MDBRow,
  MDBCol,
  View,
  MDBCard, 
  MDBCardBody,
  MDBBtn
} from 'mdbreact';
import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';
import {CompanyCard} from '../../general-component/company-card';
import CoDetail from './company-detail';
import {JobCardSquare} from "../../general-component/job-card-square";
import {Comment} from "./comment";
import {Photo} from "./photo";
import {ApplicantCard} from "../../general-component/applicant-card";
import {QuestionAnswer} from "./question-answer";


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

  componentWillMount() {
    let mockData =
      {
        id: 0,
        jobs:['1','2','3','5','6'],
        status: {
          code: 2000
        }
      };
    this.setState(() => {
      return {
        backend: mockData,
      };
    });
  }
  

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        <Header/>
        <div style={{marginBottom: '-150px' ,marginTop:'-7px'}}>
          <View>
            <img
              className="d-block w-100 card-background img-fluid" src="https://i.postimg.cc/gjFqt1dN/photo-1531497865144-0464ef8fb9a9.png"
            />
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
                marginTop:'150px',
              }}
            >
              <MDBCardBody className="px-0">
                <h5
                  style={{borderLeft: '4px solid #7C97B8'}}
                  className="px-2 pt-2"
                >职位详情</h5>
                <h5 className="px-2 pt-2">公司详情</h5>
                <h5 className="px-2 pt-2">相似职位</h5>
                <h5 className="px-2 pt-2">评价</h5>
                <h5 className="px-2 pt-2">问答</h5>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="9" >
            <p><CompanyCard/></p>
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
              <MDBCard className="px-3 pb-3 mb-4">
                <MDBCardBody>
                  <Comment/>
                  <hr/>
                  <Comment/>
                  <MDBRow center>
                    <MDBBtn flat block> See More</MDBBtn>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </p>
            <p id="questionanswer">
              <h4 className="font-weight-bold mb-3 px-3">
                <strong>
                  问答
                </strong>
              </h4>
              <MDBCard className="px-3 pb-3 mb-4">
                <MDBCardBody>
                  <QuestionAnswer/>
                  <hr/>
                  <QuestionAnswer/>
                  <MDBRow center>
                    <MDBBtn flat block> See More</MDBBtn>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
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

    ) : null;
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
