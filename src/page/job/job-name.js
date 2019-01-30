import React from 'react';

import {
  Col,
  MDBAvatar,
  MDBBtn,
  MDBCol,
  MDBIcon,
  MDBRow,
  MDBView,
  Progress,
  Row,
  View,
  Mask,
  MDBModal,
  MDBModalBody,
} from 'mdbreact';
import {languageHelper} from "../../tool/language-helper";

export class JobName extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backend: null,
      modal15: false,
      tick: false
    };
    this.text = JobName.i18n[languageHelper()];
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }


  componentDidMount() {
    let mockData =
      {
        jobname: '数据分析实习(2019 Summer), GE 通用电气',
        jobtype: '实习（3月-6月）',
        scale: '02/01/2019',
        location: '上海',
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
        <MDBRow>

          <MDBCol md="2">
            <MDBRow>
              <MDBCol size='10'>
                <MDBAvatar
                  tag="img"
                  src="https://s2.ax1x.com/2019/01/27/kuUMYq.jpg"
                  className="rounded z-depth-1-half img-fluid"
                  alt="Sample avatar"
                />
              </MDBCol>
            </MDBRow>

          </MDBCol>
          <MDBCol md="8">
            <h5 className="font-weight-bold mb-3 p-0">
              <strong>
                {this.state.backend.jobname}
              </strong>
              <MDBIcon
                icon="bookmark-o"
                size="1x"
                className="amber-text px-3"
                onClick={
                  () => {
                    this.setState((prev) => (
                        {tick: !prev.tick}
                      )
                    );
                  }
                }
              />
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
                  <Col>
                    匹配度：90%
                  </Col>
                </Row>
              </Col>
            </Row>

          </MDBCol>
          <MDBCol md="2">
            <ul className="list-inline">
              <li className="list-inline-item">
                {
                  this.state.tick ? (
                    <MDBBtn
                      color="mdb-color"
                      style={{borderRadius: '10px'}}
                    >
                      已投递
                    </MDBBtn>
                  ) : (
                    <MDBBtn
                      color="mdb-color"

                      outline
                      style={{borderRadius: '10px'}}
                      onClick={this.toggle(15)}
                    >
                      在线申请
                    </MDBBtn>
                  )
                }
                <MDBModal
                  centered
                  isOpen={this.state.modal15}
                  toggle={this.toggle(15)}
                >
                  <MDBModalBody>
                    <h3 style={{textAlign: 'center'}}>
                      导入简历
                    </h3>
                    <hr/>
                    <MDBRow center>
                      <MDBBtn outline color="mdb-color" size="lg"
                              style={{borderRadius: '10px', width: '250px'}}>上传简历文件</MDBBtn>
                    </MDBRow>
                    <MDBRow center>
                      <MDBBtn color="blue-grey" size="lg" style={{borderRadius: '10px', width: '250px'}}>从 YouthChina
                        导入</MDBBtn>
                    </MDBRow>
                    <MDBRow center>
                      <MDBBtn color="mdb-color" size="lg" style={{borderRadius: '10px', width: '250px'}}>从 LinkedIn
                        导入</MDBBtn>
                    </MDBRow>
                  </MDBModalBody>
                </MDBModal>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>


      </div>
    ) : null;


  }
}

JobName.i18n = [
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
