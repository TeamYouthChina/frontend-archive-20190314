import React from 'react';
import {languageHelper} from '../tool/language-helper';
import {
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBAvatar, MDBCol, MDBRow
} from 'mdbreact';
import {getAsync} from '../tool/api-helper';
import {withRouter} from 'react-router-dom';
import {JobCardSquare1} from './job-card-square/job-card-square';

export class JobCardSquareFull1 extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.text = JobCardSquareFull1.i18n[languageHelper()];
  }

  render() {
    return (this.props.fulltext) ? (
      <MDBCard
        onClick={()=>{
          this.props.history.push(`/job/${this.state.backend.content.id}`);
        }}
      >
        <MDBCardBody style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>

          <MDBRow>
            <MDBCol>
              <p style={{textAlign: 'center'}}>
                <MDBAvatar
                  tag="img"
                  src={this.props.fulltext.organization.avatarUrl}
                  className="z-depth-1 img-fluid"

                  style={{width: '104px', height: '104px'}}
                />
              </p>
              <p
                style={{
                  fontSize: '1rem'
                }}
              >
                {this.props.fulltext.name}
              </p>
              <p
                style={{
                  fontSize: '0.8rem'
                }}
              >
                {this.props.fulltext.organization.name}
                <br/>
                {this.props.fulltext.location}
              </p>
              <p
                style={{
                  fontSize: '0.8rem'
                }}
              >
                {this.text.applyBefore}
                <br/>
                {
                  ((unixTimeStamp) => {
                    let d = new Date(unixTimeStamp * 1000);
                    return d.toUTCString();
                  })(this.props.fulltext.deadLine)
                }
              </p>
              <p>
                <MDBBtn block flat href={`/job/${this.props.fulltext.id}`} className="indigo-text">
                  立即申请
                </MDBBtn>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    ) : null;
  }
}

JobCardSquareFull1.i18n = [
  {
    applyBefore: '申请截止'
  },
  {
    applyBefore: 'Apply Before'
  },
];

export const JobCardSquareFull = withRouter(JobCardSquareFull1)
