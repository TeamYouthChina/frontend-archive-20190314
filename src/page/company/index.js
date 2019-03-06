import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  Mask,
  View,
  MDBAvatar
} from 'mdbreact';
import {Header} from '../../general-component/header/header';
import {Footer} from '../../general-component/footer';
import {CompanyCard} from "./companyinfo/company-card";
import {CoDetail} from "./company-detail";
import {JobCardSquare} from "../../general-component/job-card-square/job-card-square";
import {Photo} from "./photo";

import {ApplicantCard} from "../../general-component/applicant-card/applicant-card";
import {ReviewCard} from "../../general-component/review-card";
import {QuestionCard} from "../question/question-card-test";
import {ReplyCard} from "../question/reply-card";
import {ReviewCardSquareFull} from '../choice/review-card-small';
import {data} from '../discovery/question-data';
import classes from '../../general-component/applicant-card/applicant-card.module.css';


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
      <div style={{background: ' #F2F2F2'}}>
        <Header/>
        <div style={{marginBottom: '-86px', marginTop: '-7px'}}>
          <View>
            <img
              className="d-block w-100 card-background"
              src="http://47.254.46.117:5000/discovery/rawpixel-665368-1.png"
            />
            <Mask className="flex-center  text-white text-center">
            </Mask>
          </View>
        </div>
        <MDBRow center style={{marginBottom: '20px'}}>
          <MDBCol
            md="10"
          >
            <CompanyCard id={this.props.match.params.id}/>
            <MDBCard
              className="px-3 pb-3 white my-4"
              style={{boxShadow: 'none', borderRadius: '0px'}}
            >
              <MDBCardBody>
                <MDBRow>
                  <MDBCol>
                    <CoDetail id={this.props.match.params.id}/>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            <div>
              <h4 className="font-weight-bold mb-1 px-3">
                <strong>
                  发表的职位
                </strong>
              </h4>
            </div>
            <MDBRow center>
              <MDBCol>
                <JobCardSquare/> {/*缺后端*/}
              </MDBCol>
              <MDBCol>
                <JobCardSquare/> {/*缺后端*/}
              </MDBCol>
              <MDBCol>
                <JobCardSquare/> {/*缺后端*/}
              </MDBCol>
            </MDBRow>
            <MDBRow center className="mt-2">
              <MDBBtn flat block>查看全部相似职位</MDBBtn>
            </MDBRow>
            <div>
              <h4 className="font-weight-bold mb-3 px-3">
                <strong>
                  评论
                </strong>
              </h4>
              <MDBRow className="px-3 pb-3 mb-4">

                <MDBRow>
                  <MDBCol>
                    <ReviewCardSquareFull fulltext="1"/>
                  </MDBCol>
                  <MDBCol>
                    <ReviewCardSquareFull fulltext="1"/>
                  </MDBCol>
                  <MDBCol>
                    <ReviewCardSquareFull fulltext="1"/>
                  </MDBCol>
                </MDBRow>

              </MDBRow>
            </div>
            <div>
              <h4 className="font-weight-bold mb-3 px-3">
                <strong>
                  问答
                </strong>
              </h4>

              <QuestionCard question={data.content.users[1]}/>
            </div>
            <div id="photo">
              <h4 className="font-weight-bold mb-3 px-3">
                <strong>
                  公司照片
                </strong>
              </h4>

            </div>
            <MDBCard className="p-3 pb-3 mb-4" style={{boxShadow: 'none'}}>


              <MDBCardBody>
                <Photo/>
              </MDBCardBody>
            </MDBCard>
            <div>
              <h4 className="font-weight-bold mb-3 px-3 ">
                <strong>
                  在此实习学生
                </strong>
              </h4>
            </div>
            <MDBRow between>
              <MDBCol>
                <MDBCard className={classes.card}>
                  <div className={classes.avatar}>
                    <MDBAvatar
                      tag="img"
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                      className="rounded-circle z-depth-1 img-fluid"
                      alt="Sample avatar"
                      style={{width: '104px', height: '104px'}}
                    />
                  </div>
                  <div className={classes.name}>齐昊</div>
                  <div className={classes.position}>职道负责人</div>
                  <div className={classes.diploma}>
                    乔治华盛顿大学
                  </div>
                  <div className={classes.friend}>
                    2位共同好友
                  </div>
                  <div className={classes.btn}>
                    <MDBBtn flat className={classes.btn_flat}>
                      <p className={classes.btn_font}>加为好友</p>
                    </MDBBtn>
                  </div>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className={classes.card}>
                  <div className={classes.avatar}>
                    <MDBAvatar
                      tag="img"
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                      className="rounded-circle z-depth-1 img-fluid"
                      alt="Sample avatar"
                      style={{width: '104px', height: '104px'}}
                    />
                  </div>
                  <div className={classes.name}>齐昊</div>
                  <div className={classes.position}>职道负责人</div>
                  <div className={classes.diploma}>
                    乔治华盛顿大学
                  </div>
                  <div className={classes.friend}>
                    2位共同好友
                  </div>
                  <div className={classes.btn}>
                    <MDBBtn flat className={classes.btn_flat}>
                      <p className={classes.btn_font}>加为好友</p>
                    </MDBBtn>
                  </div>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className={classes.card}>
                  <div className={classes.avatar}>
                    <MDBAvatar
                      tag="img"
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                      className="rounded-circle z-depth-1 img-fluid"
                      alt="Sample avatar"
                      style={{width: '104px', height: '104px'}}
                    />
                  </div>
                  <div className={classes.name}>齐昊</div>
                  <div className={classes.position}>职道负责人</div>
                  <div className={classes.diploma}>
                    乔治华盛顿大学
                  </div>
                  <div className={classes.friend}>
                    2位共同好友
                  </div>
                  <div className={classes.btn}>
                    <MDBBtn flat className={classes.btn_flat}>
                      <p className={classes.btn_font}>加为好友</p>
                    </MDBBtn>
                  </div>
                </MDBCard>
              </MDBCol>
            </MDBRow>
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
    answer: '回答',
    benefit: '公司福利',
    condition: '工作环境',
    live: '公司live',
    picture: '公司照片',
    student: '在此公司实习过的学生'
  },
  {
    detail: 'Company detail',
    jobList: 'Jobs in list',
    comments: 'Comments',
    answer: 'Reply',
    benefit: 'Company Reward',
    condition: 'Working Condition',
    live: 'Company live',
    picture: 'Company photo',
    student: 'Students worked in here'
  },
];
