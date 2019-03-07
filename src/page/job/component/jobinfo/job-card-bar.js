import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  Col, MDBBtn, MDBCol, MDBIcon, MDBModal, MDBModalBody, MDBRow, Row, MDBAvatar
} from 'mdbreact';
import {languageHelper} from "../../../../tool/language-helper";
import {getAsync} from "../../../../tool/api-helper";
import {IfCollect} from "../../../../general-component/if-collect";
import classes from './job-card-bar.module.css'
import {withRouter} from 'react-router-dom';
import Cookies from "js-cookie";

export class JobCardBar1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backend: null,
      modal15: false,
      tick: false,
      collect: false
    };
    this.text = JobCardBar1.i18n[languageHelper()];
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
        backend: await getAsync(`/jobs/${this.props.id}`, true)
      });
    } else {
      this.setState({
        backend: await getAsync(`/jobs/1`, true)
      });
    }
  }


  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <MDBCard
        style={{
          borderRadius: '0px',
          display: 'flex',
          flexDirection: 'row',
          height: '13rem',
          width: '57.3125rem',
          background: '#FFFFFF',
          boxShadow: 'none'

        }}
      >
        <div className="d-flex mx-2 mb-3 align-items-end justify-content-between">
          <div
            className="flex-grow-3 mr-3 "
            style={{

              width: '35.3125rem',


            }}
          >
            <div className="mb-3 ">
              <MDBAvatar
                tag="img"
                src="http://47.254.46.117:5000/tencent/icon.png"
                className="rounded img-fluid"
                alt="Sample avatar"
                style={{height: '4.5rem'}}
              />
            </div>

            <div className={classes.title}>{this.state.backend.content.name}</div>
            <div className={classes.date}>一天前发布</div>
            <div
              className={classes.text}>{this.state.backend.content.organization.name}| {this.state.backend.content.location} |
              100rmb日薪 |一周五天 |实习四个月 |提供转正机会
            </div>
          </div>
          <div className="d-flex flex-grow-1 align-items-end">
            <div>
              <MDBBtn
                color="indigo accent-3"
                className={classes.btn}
                style={{borderRadius: '2px'}}
                onClick={() => {
                  this.props.history.push(`/onlineapplication/${Cookies.get("id")}`);
                }}
              >
                {this.text.applicate}
              </MDBBtn>
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
                            style={{borderRadius: '5px', width: '250px'}}>上传简历文件</MDBBtn>
                  </MDBRow>
                  <MDBRow center>
                    <MDBBtn color="blue-grey" size="lg" style={{borderRadius: '5px', width: '250px'}}>从 YouthChina
                      导入</MDBBtn>
                  </MDBRow>
                  <MDBRow center>
                    <MDBBtn color="mdb-color" size="lg" style={{borderRadius: '5px', width: '250px'}}>从 LinkedIn
                      导入</MDBBtn>
                  </MDBRow>
                </MDBModalBody>
              </MDBModal>

            </div>
            <div
              className="ml-3 align-self-center"
            >
              <IfCollect/>
            </div>

          </div>

        </div>


      </MDBCard>
    ) : null;
  }
}

JobCardBar1.i18n = [
  {
    type: '工作类型',
    deadline: '申请截止',
    location: '地点',
    match: '匹配度',
    applicate: '立即申请',
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

export const JobCardBar = withRouter(JobCardBar1);
