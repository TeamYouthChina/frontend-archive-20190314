import React from 'react';
import {languageHelper} from '../tool/language-helper';
import {
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBAvatar,
  MDBIcon
} from 'mdbreact';
import {getAsync} from "../tool/api-helper";


export class ApplicantCard extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null
    };
    this.text = ApplicantCard.i18n[languageHelper()];
  }
  async componentDidMount() {
    console.log(this.props.id)
    if (this.props.id !== null) {
      console.log("id provided")
      this.setState({
        backend: await getAsync(`/applicants/${this.props.id}`)
      });
    } else {
      console.log("id not provided")

      this.setState({
        backend: await getAsync(`/applicants/1`)
      });
    }
  } 
 
  

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <MDBCard>
        <MDBCardBody
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <MDBRow>
            <MDBCol>
              <p style={{textAlign:'center'}}>
                <MDBAvatar
                  tag="img"
                  src={this.state.backend.content.avatarUrl}
                  className="rounded-circle z-depth-1 img-fluid"
                  alt="Sample avatar"
                  style={{width:'104px',height:'104px'}}
                />
                <h5 className="font-weight-bold mt-4 mb-3">{this.state.backend.content.name}</h5>
                <p className="text-uppercase blue-text">{this.state.backend.content.works[0].position}</p>
                <p className="grey-text">
                  {this.state.backend.content.educations[0].university}
                </p>
                <p>
                  影响力分值：
                </p>
                <br/>
                <p>
                  2位共同好友
                </p>
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow center>
            <MDBBtn flat block>
              加为好友
            </MDBBtn>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    ) : null;
  }
}

ApplicantCard.i18n = [
  {
    friends: '位共同好友',
    influence: '影响力'
  },
  {
    applyBefore: 'common friends',
    influence: 'power?'
  },
];
