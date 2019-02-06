import React from 'react';

import {
  Col,
  MDBAvatar,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardUp,
  MDBCol,
  MDBIcon,
  MDBMask,
  MDBRow,
  MDBView,
  Progress,
  Row,
  View,
  Mask,
} from 'mdbreact';
import {languageHelper} from "../../tool/language-helper";
import {Header} from '../../general-component/header';
import {Footer} from "../../general-component/footer";
import CoDetail from './company-detail';
import {JobName} from './job-name'
import {JobDescri} from "./job-descri";
import {QuestionAnswer} from "../company/question-answer";
import {JobApp} from "./job-app-progress";
import {Comment} from "../company/comment";
import {JobCardSquare} from "../../general-component/job-card-square";


export class Job extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backend: null,

    };
    this.text = Job.i18n[languageHelper()];
  }

  componentWillMount() {
    let mockData =
      {
        id: 0,
        name: 'New Frontier Data',
        url: 'https://www.google.com',
        jobname: '数据分析实习(2019 Summer), GE 通用电气',
        jobtype: '实习（3月-6月）',
        scale: '02/01/2019',
        location: '上海',
        requirements: ['Good knowledge of mysql', 'Good knowledge of programming lanuguage(C++, Java).', 'Purus sodales ultricies', 'skill4'],
        better: ['Good knowledge of programming lanuguage(C++, Java).', 'Purus sodales ultricies.', 'Vestibulum laoreet porttitor sem', 'Ac tristique libero volutpat at'],
        employNumber: '100',
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

        <div style={{marginBottom: '-300px', marginTop: '-7px'}}>
          <View>
            <img
              className="d-block w-100 card-background"
              src="https://i.postimg.cc/gjFqt1dN/photo-1531497865144-0464ef8fb9a9.png"
            />
            <Mask className="flex-center  text-white text-center">
            </Mask>
          </View>

        </div>

        <Row top>
          <Col md="8" className="offset-md-1">
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
          </Col>
          <Col md="2">
            <p>
              <MDBCard testimonial className="my-5">
                <MDBCardUp gradient="blue"/>
                <MDBAvatar className="mx-auto white">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                    alt=""
                    className="rounded-circle img-fluid"
                  />
                </MDBAvatar>
                <MDBCardBody>
                  <h6 className="font-weight-bold mb-4">HR：Anna Aston</h6>
                  <ul className="list-inline">
                    <li className="list-inline-item"><MDBBtn color="primary" size="sm" rounded>
                      <MDBIcon icon="heart" className="mr-1"/>关注</MDBBtn></li>
                    <li className="list-inline-item"><MDBBtn color="primary" size="sm" rounded>
                      <MDBIcon icon="envelope" className="mr-1"/>沟通</MDBBtn></li>
                  </ul>
                  <hr/>
                  <p>
                    简历产看率：45%
                  </p>
                  <p>
                    简历查看用时：20min
                  </p>
                </MDBCardBody>
              </MDBCard>
            </p>
            <MDBCard
              style={{boxShadow: 'none'}}
            >
              <MDBCardBody>
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
          </Col>
        </Row>

        <Footer/>
      </div>
    ) : null;


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
