import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import {  MDBRow,  MDBCard, MDBCardBody,  MDBIcon,MDBBtn,Col,Row} from 'mdbreact';


export class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.text = Comment.i18n[languageHelper()];
  }


  componentWillMount() {
    let mockData =
      {
        companyname: 'Google',
        schoolname: 'Columbia Collage',
        rank: '影响力分值',
        comment: '问题的答案，J回答了这个问题问题的答案，J回答了这个问题问题的答案，J回答了这个问题问题的答案，J回答了这个问题问题的答案，J回答了这个问题问问题的答案，J回答了这个问题问题的答案，J回答了这个问题问题的答案，J回答了这个问题问题的答案，J回答了这个问题问题的答案，J回答了这个问题问问题的答案，J回答了这个问题问题的答案，J回答了这个问题问题的答案，J回答了这个问题问题的答案，J回答了这个问题问题的答案，J回答了这个问题问问题的答案，J回答了这个问题问题的答案，J回答了这个问题问题的答案，J回答了这个问题问题的答案，J回答了这个问题问题的答案，J回答了这个问题问问题的答案，J回答了这个问题问题的答案，J回答了这个问题问题的答案，J回答了这个问题问题的答案，J回答了这个问题问题的答案，J回答了这个问题问',
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
                    <MDBIcon icon="comment" />
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
    ):null;
  }
}

Comment.i18n = [
  {},
  {}
];
