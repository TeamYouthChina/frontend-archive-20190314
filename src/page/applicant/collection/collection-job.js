import React from 'react';
import {
  MDBCol,
  MDBRow,
} from 'mdbreact';

import {JobCardBar} from "../../../general-component/job-card-bar/job-card-bar";
import {languageHelper} from "../../../tool/language-helper";
import {getAsync} from "../../../tool/api-helper";

export class CollectionJob extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null
    };
    this.text = CollectionJob.i18n[languageHelper()];
  }
  
  
  render() {
    return  (
      <div>
        <JobCardBar id={1}/>
        <JobCardBar id={2}/>
        <JobCardBar id={3}/>
        <JobCardBar id={4}/>
        
      </div>
    ) ;
  }
}

CollectionJob.i18n = [
  {
    applyBefore: '申请截止'
  },
  {
    applyBefore: 'Apply Before'
  },
];
