import React from 'react';
import Cookies from 'js-cookie';
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
import classes from './job-card-bar.module.css';
import {IfCollect} from "../if-collect";
import {withRouter} from "react-router-dom";


export class JobCardBar1 extends React.Component {
  constructor(props) {
    super(props);
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
          backend: await getAsync(`/jobs/${this.props.id}`,true)
        });
      } else {
        this.setState({
          backend: await getAsync(`/jobs/1`,true)
        });
      }
    }
  }


  render() {
    console.log(this.state.backend)
    
    return (this.state.backend && this.state.backend.status && (this.state.backend.status.code === 200 || this.state.backend.status.code === 2000)) ? (
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
        <div className="d-flex" style={{margin: '1.25rem 3.125rem', width: '57.3125rem',}}>
          <div   onClick={() => {
            this.props.history.push(`/job/${this.state.backend.content.id}`);
          }}>
            <MDBAvatar
              tag="img"
              src="http://47.254.46.117:5000/tencent/icon.png"
              className="rounded img-fluid"
              alt="Sample avatar"
              style={{width: '8.25rem'}}
            />
            
          </div>

          <div className="ml-5 mr-5" style={{width:'450px'}}   
               onClick={() => {
            this.props.history.push(`/job/${this.state.backend.content.id}`);
          }}>
            <div className={classes.title}>{this.state.backend.content.name}</div>
            <div className={classes.company}>{this.state.backend.content.organization.name}</div>
            <div className="d-flex mt-2 justify-content-between pr-5 mr-5">
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
          <div>
           
            <div className="d-flex justify-content-center">
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
            </div>
            <div
              style={{
                flexGrow: 1,
                marginTop: '45px'

              }}
              
            >
              <IfCollect/>
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
