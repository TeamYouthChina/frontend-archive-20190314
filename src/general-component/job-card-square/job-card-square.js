import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import classes from './job-card-square.module.css';

import {getAsync} from '../../tool/api-helper';


export class JobCardSquare extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null
    };

    this.text = JobCardSquare.i18n[languageHelper()];
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

      <div>
        <div className={classes.card}>
          <div className={classes.logo}></div>
          <div className={classes.title}>{this.state.backend.content.name}</div>
          <div className={classes.subtitle}>{this.state.backend.content.organization.name}</div>
          <div className={classes.location}>{this.state.backend.content.organization.location}</div>
          <div className={classes.date}>1天前</div>
        </div>
          
      </div>
      
    ) : null;
  }
}

JobCardSquare.i18n = [
  {
    applyBefore: '申请截止'
  },
  {
    applyBefore: 'Apply Before'
  },
];
