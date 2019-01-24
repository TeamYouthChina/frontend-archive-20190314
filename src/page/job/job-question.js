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
  MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBPopover, MDBPopoverBody,
  MDBPopoverHeader, MDBTooltip
} from 'mdbreact';
import {languageHelper} from "../../tool/language-helper";
import {Header} from '../../general-component/header';
import {Footer} from "../../general-component/footer";

import CoDetail from '../../general-component/company-detail';
import {JobName} from './job-name'
import {JobDescri} from "./job-descri";

export class JobQuestion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backend: null,
      modal15:false
    };
    this.text = JobQuestion.i18n[languageHelper()];
  }
  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }


  componentWillMount() {
    let mockData =
      {
        
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
        
      </div>
    ): null;


  }
}
JobQuestion.i18n = [
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
