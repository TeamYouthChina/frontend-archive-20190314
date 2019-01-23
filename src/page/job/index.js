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
  Mask
} from 'mdbreact';
import {languageHelper} from "../../tool/language-helper";
import {Header} from '../../general-component/header';
import {Footer} from "../../general-component/footer";
import {MDBCardText} from "./index-1";
import CoDetail from '../../general-component/company-detail';

export class JobDetail extends React.Component {
  constructor(props) {
    super(props)
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
        jobname:'数据分析实习(2019 Summer), GE 通用电气',
        jobtype:'实习（3月-6月）',
        scale: '02/01/2019',
        location:'上海',
        requirements: ['Good knowledge of mysql', 'Good knowledge of programming lanuguage(C++, Java).', 'Purus sodales ultricies', 'skill4'],
        better: ['Good knowledge of programming lanuguage(C++, Java).', 'Purus sodales ultricies.','Vestibulum laoreet porttitor sem','Ac tristique libero volutpat at'],
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

        <div style={{marginBottom: '-300px' ,marginTop:'-7px'}}>
          <View>
            <img 
              className="d-block w-100 card-background" src="https://i.postimg.cc/gjFqt1dN/photo-1531497865144-0464ef8fb9a9.png"
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
                  <MDBRow>
                    
                    <MDBCol md="2">

                      <img
                        className="img-fluid rounded z-depth-1-half mb-3"
                        src="https://ws1.sinaimg.cn/large/94365dd2ly1fyhhfjkhk7j2069069glh.jpg"
                        alt=""
                        style={{width: '100px', height: '100px'}}
                      />


                    </MDBCol>
                    <MDBCol md="8">
                      <h5 className="font-weight-bold mb-3 p-0">
                        <strong>
                          {this.state.backend.jobname}
                        </strong>
                        <MDBIcon icon="bookmark-o" size="1x" className="amber-text px-3"/>
                      </h5>
                      <br/>
                      <Row>
                        <Col>工作类型：{this.state.backend.jobtype}</Col>
                        <Col>申请截止：{this.state.backend.scale}</Col>
                      </Row>
                      <Row>
                        <Col>地点：{this.state.backend.location}</Col>
                        <Col>
                          <Row bottom>
                            <Col md="5">
                              匹配度：
                            </Col>
                            <Col md="7">
                              <Progress material value={90} height="10px" style={{paddingTop: '20px'}}>
                                90%
                              </Progress>
                            </Col>
                          </Row>
                        </Col>
                      </Row>

                    </MDBCol>
                    <MDBCol md="2">
                      <ul className="list-inline">
                        <li className="list-inline-item"><MDBBtn color="primary" size="sm" outline rounded>在线申请</MDBBtn>
                        </li>
                      </ul>
                    </MDBCol>
                  </MDBRow>
                  <br/>
                  <MDBRow>
                    <MDBCol>

                      <h4>
                        <strong>职位描述</strong>
                      </h4>
                      <h5>
                        <strong>Candidate requirements</strong>
                      </h5>
                      <p>
                        <ul>
                          {this.state.backend.requirements.map((item) => {
                            return (
                              <li key={item}>
                                {item}
                              </li>
                            );
                          })}
                        </ul>
                      </p>
                      <h5>
                        <strong>Good to have</strong>
                      </h5>
                      <p>
                        <ul>
                          {this.state.backend.better.map((item) => {
                            return (
                              <li key={item}>
                                {item}
                              </li>
                            );
                          })}
                        </ul>
                      </p>
                    </MDBCol>
                  </MDBRow>
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
            <MDBCard
              className="my-5 px-3 pt-4"
            >

              <MDBCardBody className="py-0">
                <h4>
                  <strong>问答</strong>
                </h4>
                <div>

                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon">
                        <i className="fa fa-pencil prefix"></i>
                      </span>
                    </div>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                  </div>
                  <br/>
                  <Row end>
                    <Col md="2">
                      <MDBBtn color="indigo">提问</MDBBtn>
                    </Col>
                  </Row>

                </div>
                <hr/>
                <h5>
                  <strong>问题1： Our global teams are constantly iterating, solving problems, and working together to
                    empower people around the world to build community and connect in meaningful ways.</strong>
                </h5>


                <MDBRow className="px-3 pt-4">
                  <div className="mdb-feed">
                    <div className="news">
                      <div className="label">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg"
                          alt=""
                          className="rounded-circle z-depth-1-half"
                        />
                      </div>
                      <div className="excerpt">
                        <div className="brief">

                          John Doe
                          <div className="date">1 hour ago</div>
                          <p>问题的答案，J回答了这个问题</p>
                        </div>
                        <div className="feed-footer">
                          <a href="#!" className="like">
                            <MDBIcon icon="heart"/>
                            <span>5 likes</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="news">
                      <div className="label">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9)-mini.jpg"
                          alt=""
                          className="rounded-circle z-depth-1-half"
                        />
                      </div>
                      <div className="excerpt">
                        <div className="brief">
                          Danny Moore
                          <div href="#!" className="date">
                            7 hours ago
                          </div>
                          <p>内容</p>
                        </div>
                        <div className="feed-footer">
                          <a href="#!" className="like">
                            <MDBIcon icon="heart"/>
                            <span>11 likes</span>
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </MDBRow>

              </MDBCardBody>
            </MDBCard>
            <p>

            </p>
          </Col>
          <Col md="2">
            <p>
              <MDBCard className="my-5">
                <MDBView hover>
                  <MDBCardImage
                    top
                    src="https://ws1.sinaimg.cn/large/94365dd2ly1fyhp3r29jvj206c03vaak.jpg"
                    alt="MDBCard image cap"
                    style={{height: '200px'}}
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight"/>
                  </a>
                </MDBView>
                <MDBCardBody>
                  <a href="#!">
                    <h4>企业名称</h4>
                  </a>
                  <p>行业：XXX</p>
                  <p>公司规模：XXX</p>
                  <p>地址：XXX</p>
                  <hr/>

                  <span>
                    <MDBIcon icon="user"/>
                    83位同学实习过
                  </span>


                </MDBCardBody>
              </MDBCard>
            </p>
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
                    简历产看率：
                  </p>
                  <p>
                    简历查看用时：
                  </p>
                </MDBCardBody>
              </MDBCard>
            </p>
          </Col>
        </Row>
        <Footer/>
      </div>
    ): null;
    
    
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
