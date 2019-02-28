import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  Col, MDBBtn, MDBCol, MDBIcon, MDBModal, MDBModalBody, MDBRow, Row, MDBAvatar
} from 'mdbreact';

import {languageHelper} from '../tool/language-helper';
import {getAsync} from "../tool/api-helper";


export class JobCardBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backend: null,
      modal15: false,
      tick: false,
      collect: false
    };
    this.text = JobCardBar.i18n[languageHelper()];
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }


  async componentDidMount() {
    if (this.props.id) {
      this.setState({
        backend: await getAsync(`/jobs/${this.props.id}`)
      });
    } else {
      this.setState({
        backend: await getAsync(`/jobs/1`)
      });
    }
  }


  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <MDBCard
        className="px-4 pb-4 pt-4"
        style={{borderRadius: '0px'}}
      >
        <MDBCardBody>
          <MDBRow>

            <MDBCol md="2">
              <MDBRow>
                <MDBCol size='10'>
                  <MDBAvatar
                    tag="img"
                    src={this.state.backend.content.organization.avatarUrl}
                    className="rounded z-depth-1-half img-fluid"
                    alt="Sample avatar"
                  />
                </MDBCol>
              </MDBRow>

            </MDBCol>
            <MDBCol md="7">
              <h5 className="pt-1">
                <strong>
                  {this.state.backend.content.name}
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
                <Col>{this.text.type}: {this.state.backend.content.type}</Col>
                <Col>{this.text.deadline}: {this.state.backend.content.deadLine}</Col>
              </Row>
              <Row>
                <Col>{this.text.location}: {this.state.backend.content.location}</Col>
                <Col>
                  <Row bottom>
                    <Col>
                      {this.text.match}: 90%
                    </Col>
                  </Row>
                </Col>
              </Row>

            </MDBCol>
            <MDBCol md="3">
              <MDBRow>
                <MDBCol>
                  {
                    this.state.tick ? (
                      <Row>
                        <MDBBtn
                          color="mdb-color"
                          style={{borderRadius: '10px'}}
                        >
                          {this.text.applied}
                        </MDBBtn>
                      </Row>
                    ) : (
                      <Row>
                        <MDBBtn
                          color="mdb-color"
                          outline
                          style={{borderRadius: '10px'}}
                          onClick={this.toggle(15)}
                        >
                          {this.text.applicate}
                        </MDBBtn>
                      </Row>
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
                </MDBCol>
                <MDBCol>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill={this.state.collect ? "#45526e" : "none"}
                    stroke="#45526e"
                    strokeWidth="1.0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-bookmark"
                    onClick={
                      () => {
                        this.setState((prev) => (
                          {collect: !prev.collect})
                        );
                      }
                    }
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>

      </MDBCard>
    ) : null;
  }
}

JobCardBar.i18n = [
  {
    type: '工作类型',
    deadline: '申请截止',
    location: '地点',
    match: '匹配度',
    applicate: '申请',
    applied: '已申请',

  },
  {
    type: 'Type',
    deadline: 'Deadline',
    location: 'Location',
    match: 'Match',
    applicate: 'Applicate',
    applied: 'Applied',
  },
];
