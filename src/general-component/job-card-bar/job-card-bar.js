import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  Col,
  MDBBtn,
  MDBCol,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBRow,
  Row,
  MDBAvatar
} from 'mdbreact';

import {languageHelper} from '../../tool/language-helper';
import {getAsync} from '../../tool/api-helper';
import classes from './job-card-bar.module.css'

export class JobCardBar extends React.Component {
  constructor(props) {
    super(props);
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
    if (this.props.fulltext) {
      this.setState({
          backend: {
            content: this.props.fulltext,
            status: {
              code: 200
            }
          }
        }
      );
    } else {
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
  }


  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 200) ? (
      <MDBCard
        style={{
          borderRadius: '0px',
          display: 'flex',
          flexDirection: 'row',
          height: '10.125rem',
          width: '57.3125rem',
          background: '#FFFFFF',


        }}
      >
        <div className="d-flex " style={{margin: '1.25rem 3.125rem'}}>
          <div className="flex-grow-1">
            <MDBAvatar
              tag="img"
              src="http://47.254.46.117:5000/tencent/icon.png"
              className="rounded img-fluid"
              alt="Sample avatar"
              style={{width: '8.25rem'}}
            />
          </div>

          <div className="ml-5 flex-grow-6">
            <div className={classes.title}>{this.state.backend.content.name}</div>
            <div className={classes.company}>{this.state.backend.content.organization.name}</div>
            <div className="d-flex mt-2 justify-content-between">
              <div>
                <div className={classes.text} style={{marginBottom: '0.5rem'}}>
                  <MDBIcon icon="map-marker"
                           className="mr-1"/>{this.state.backend.content.location}
                </div>
                <div className={classes.text}>
                  <MDBIcon icon="briefcase"
                           className="mr-1"/>{this.state.backend.content.type}</div>

              </div>
              <div style={{marginLeft: '9.375rem'}}>
                <div className={classes.text} style={{marginBottom: '0.5rem'}}>
                  <MDBIcon far icon="calendar "
                           className="mr-1"/>{this.state.backend.content.deadLine}
                </div>
                <div className={classes.text}><MDBIcon icon="align-left"/>3-5个月</div>
              </div>
            </div>

          </div>
          <div className="flex-grow-1 " style={{marginLeft: '9.375rem'}}>
            <div>
              <MDBBtn
                color="indigo accent-3"
                className={classes.btn}
                style={{borderRadius: '2px'}}
                onClick={this.toggle(15)}
              >
                {this.text.applicate}
              </MDBBtn>
            </div>
            <div
              style={{
                flexGrow: 1,
                fontFamily: 'PingFang SC',
                lineHeight: 'normal',
                fontSize: '0.875rem',
                color: '#8D9AAF',
                marginTop: '45px'

              }}
              className="ml-3"
            >
              <MDBIcon far icon="heart" className="mr-2"/>
              收藏
            </div>
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
                          style={{borderRadius: '2px', width: '250px'}}>上传简历文件</MDBBtn>
                </MDBRow>
                <MDBRow center>
                  <MDBBtn color="blue-grey" size="lg" style={{borderRadius: '2px', width: '250px'}}>从 YouthChina
                    导入</MDBBtn>
                </MDBRow>
                <MDBRow center>
                  <MDBBtn color="mdb-color" size="lg" style={{borderRadius: '2px', width: '250px'}}>从 LinkedIn
                    导入</MDBBtn>
                </MDBRow>
              </MDBModalBody>
            </MDBModal>
          </div>

        </div>


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
