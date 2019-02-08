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
import {JobCardBar} from "../../general-component/job-card-bar";

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
        id: 0,
        name: '数据分析实习(2019 Summer), GE 通用电气',
        organization: {
          id: 0,
          name: "string",
          avatarUrl: "string"
        },
        location: '上海',
        type: '实习（3月-6月）',
        deadLine: '02/01/2019',
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
                {this.state.backend.name}
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
              <Col>{this.text.type}: {this.state.backend.type}</Col>
              <Col>{this.text.deadline}: {this.state.backend.deadLine}</Col>
            </Row>
            <Row>
              <Col>{this.text.location}: {this.state.backend.location}</Col>
              <Col>
                <Row bottom>
                  <Col>
                    {this.text.match}: 90%
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
                      {this.text.applied}
                    </MDBBtn>
                  ) : (
                    <MDBBtn
                      color="mdb-color"

                      outline
                      style={{borderRadius: '10px'}}
                      onClick={this.toggle(15)}
                    >
                      {this.text.applicate}
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
                      {this.text.import}
                    </h3>
                    <hr/>
                    <MDBRow center>
                      <MDBBtn outline color="mdb-color" size="lg"
                              style={{borderRadius: '10px', width: '250px'}}>{this.text.upload}</MDBBtn>
                    </MDBRow>
                    <MDBRow center>
                      <MDBBtn color="blue-grey" size="lg" style={{borderRadius: '10px', width: '250px'}}>{this.text.youthchina}</MDBBtn>
                    </MDBRow>
                    <MDBRow center>
                      <MDBBtn color="mdb-color" size="lg" style={{borderRadius: '10px', width: '250px'}}>{this.text.linkedin}</MDBBtn>
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
    type:'工作类型',
    deadline:'申请截止',
    location:'地点',
    match:'匹配度',
    applicate:'申请',
    applied:'已申请',
    import:'导入简历',
    upload:'上传简历文件',
    youthchina:"从YouthChina导入",
    linkedin:'从LinkedIn导入',
  },
  {
    type:'Type',
    deadline:'Deadline',
    location:'Location',
    match:'Match',
    applicate:'Applicate',
    applied:'Applied',
    import:'Import Resume',
    upload:'Upload Resume File',
    youthchina:"Import from YouthChina",
    linkedin:'Import from LinkedIn',
  },
];
