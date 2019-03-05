import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import classes from './job-card-square-full.module.css';
import {MDBIcon, MDBCard, MDBAvatar} from 'mdbreact';
import {getAsync} from '../../tool/api-helper';
import {withRouter} from 'react-router-dom';

class JobCardSquareFull1 extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.text = JobCardSquareFull1.i18n[languageHelper()];
  }

  render() {
    return (this.props.fulltext) ? (

      <div>
        <MDBCard className={classes.card} onClick={() => {
          this.props.history.push(`/job/${this.props.fulltext.id}`);
        }}>

          <div className={classes.logo}>
            <MDBAvatar
              tag="img"
              src="http://47.254.46.117:5000/tencent/icon.png"
              className="img-fluid"
              alt="Sample avatar"
            /></div>
          <div className={classes.more}><MDBIcon icon="ellipsis-h"/></div>
          <div className={classes.title}>{this.props.fulltext.name}</div>
          <div className={classes.subtitle}>{this.props.fulltext.organization.name}</div>
          <div className={classes.location}>{this.props.fulltext.organization.location}</div>
          <div className={classes.date}>1天前</div>
        </MDBCard>

      </div>

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
