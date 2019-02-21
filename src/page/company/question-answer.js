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
import {getAsync} from "../../tool/api-helper";

export class QuestionAnswer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backend: null,
      modal15: false
    };
    this.text = QuestionAnswer.i18n[languageHelper()];
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
        backend: await getAsync(`/answers/${this.props.id}`)
      });
    } else {
      this.setState({
        backend: await getAsync(`/answers/1`)
      });
    }
  }

  render() {

    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        <p
          style={{fontFamily:'PingFang SC',fontSize:'18px'}}
        >
          {this.state.backend.content.question.title}
        </p>
        <p
          style={{fontFamily:'PingFang SC',fontSize:'14px',color:'#8D9AAF'}}
        >
          预计阅读时间：10分钟
        </p>
        <p>
          <div className="mdb-feed">
            <div className="news">
              <div className="label">
                <img
                  src={this.state.backend.content.creator.avatar_url}
                  alt=""
                  className="rounded-circle z-depth-1-half"
                />
              </div>
              <div className="excerpt">
                <div className="brief">
                  <div>
                    <a>{this.state.backend.content.creator.username}</a>
                    <div className="date">1 hour ago</div>
                    <p
                      style={{
                        fontFamily:'PingFang SC',fontSize:'12px',color:'#8D9AAF'
                      }}
                    >
                      {this.state.backend.content.creator.role}/影响力分值 &nbsp;&nbsp; 79
                    </p>
                  </div>
                  
                </div>
                <p style={{
                  fontFamily:'PingFang SC',fontSize:'14px',
                }}>
                  answer
                </p>

                <div className="feed-footer">
                  <a href="#!" className="like mx-3">
                    <MDBIcon icon="comment"/>
                    <span>5 comments</span>
                  </a>
                  <a href="#!" className="like mx-3">
                    <MDBIcon icon="heart"/>
                    <span>5 likes</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </p>
        
        

      </div>
    ) : null;


  }
}

QuestionAnswer.i18n = [
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
