import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  Col, MDBBtn, MDBCol, MDBIcon, MDBModal, MDBModalBody, MDBRow, Row, MDBAvatar
} from 'mdbreact';
import {languageHelper} from "../../../../tool/language-helper";
import {getAsync} from "../../../../tool/api-helper";

import classes from './job-card-bar.module.css'

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
        style={{
          borderRadius: '0px',
          display: 'flex',
          flexDirection: 'row',
          height: '16rem',
          width: '57.3125rem',
          background: '#FFFFFF',
          boxShadow:'none'
         
        }}
      >
        <div className="d-flex mx-2 my-3">
          <div className="flex-grow-3">
            <div className="mb-3">
              <MDBAvatar
                tag="img"
                src="http://47.254.46.117:5000/tencent/icon.png"
                className="rounded img-fluid"
                alt="Sample avatar"
                style={{height:'4.5rem'}}
              />
            </div>
            <div className={classes.title}>{this.state.backend.content.name}</div>
            <div className={classes.date}>一天前发布</div>
            <div className={classes.text}>{this.state.backend.content.organization.name}| {this.state.backend.content.location} | 100rmb日薪</div>
          </div>
          <div className="flex-grow-1">
            
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
    applicate: '申 请',
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
