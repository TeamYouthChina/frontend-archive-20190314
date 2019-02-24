import React from 'react';
import {
  MDBCard,
  MDBIcon,
  MDBRow

} from 'mdbreact';

import {languageHelper} from '../tool/language-helper';
import {getAsync} from "../tool/api-helper";

export class QuestionAnswerCard extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null
    };
    this.text = QuestionAnswerCard.i18n[languageHelper()];
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
      <MDBCard>
        <div>
          <p
            style={{fontFamily:'PingFang SC',fontSize:'18px'}}
          >
            {this.state.backend.content.question.title}
          </p>
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
                    <div>
                      <a>John Doe</a>
                      <div className="date">1 hour ago</div>
                      <div
                        style={{
                          fontSize: '0.7rem'
                        }}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;{this.state.backend.companyname}/{this.state.backend.schoolname} &nbsp;&nbsp; {this.state.backend.rank}
                      </div>
                    </div>

                    <p
                      style={{
                        fontSize: '0.9rem'
                      }}
                    >
                      {this.state.backend.comment}
                    </p>
                  </div>
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
          </MDBRow>
        </div>
      </MDBCard>
    ) : null;
  }
}

QuestionAnswerCard.i18n = [
  {},
  {},
];
