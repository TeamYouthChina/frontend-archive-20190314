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
import CoDetail from '../../general-component/company-detail';
import {JobName} from './job-name'
import {JobDescri} from "./job-descri";
import {JobQuestion} from "./job-question";
import {JobApp} from "./job-app-progress";

export class JobDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backend: null,
      
    };
    this.text = JobDetail.i18n[languageHelper()];
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
            <p>
              <JobQuestion/>
            </p>
            
          </Col>
          <Col md="2">
            <p>
              <MDBCard className="my-5">
                <MDBView hover>
                  <div
                    style={{width:'200px',height:'200px' }}
                  >此处有图</div>
                 
                </MDBView>
                <MDBCardBody>
                  <a href="#!">
                    <h4 style={{color:'#7C97B8'}}>企业名称</h4>
                  </a>
                  <p>行业：IT</p>
                  <p>公司规模：股份有限公司</p>
                  <p>地址：文化路13号</p>
                  <hr/>

                  <span>
                    <MDBIcon icon="user" style={{marginRight:'5px'}}/>
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
                    简历产看率：45%
                  </p>
                  <p>
                    简历查看用时：20min
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
