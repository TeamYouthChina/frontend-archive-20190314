import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import classes from './applicant-card.module.css'
import {
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBAvatar,
  MDBIcon
} from 'mdbreact';
import {getAsync} from "../../tool/api-helper";


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
    if (this.props.id) {
      this.setState({
        backend: await getAsync(`/applicants/${this.props.id}`)
      });
    } else {
      this.setState({
        backend: await getAsync(`/applicants/1`)
      });
    }
  }


  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <MDBCard className={classes.card}>

        <div className={classes.avatar}>
          <MDBAvatar
            tag="img"
            src={this.state.backend.content.avatarUrl}
            className="rounded-circle z-depth-1 img-fluid"
            alt="Sample avatar"
            style={{width: '104px', height: '104px'}}
          />
        </div>
        <div className={classes.name}>{this.state.backend.content.name}</div>
        <div className={classes.position}>{this.state.backend.content.works[0].position}</div>
        <div className={classes.diploma}>
          {this.state.backend.content.educations[0].university}
        </div>

        <div className={classes.friend}>
          2位共同好友
        </div>
        <div className={classes.btn}>
          <MDBBtn flat className={classes.btn_flat}>
            <p className={classes.btn_font}>加为好友</p>
          </MDBBtn>
        </div>
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
