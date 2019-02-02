import React from 'react';
import {
  MDBCard,
  MDBIcon,
  MDBRow

} from 'mdbreact';

import {languageHelper} from '../tool/language-helper';

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
      <MDBCard>
        <div>
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
