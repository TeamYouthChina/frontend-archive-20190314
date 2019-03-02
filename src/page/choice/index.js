import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';
//import {ComCardSquare} from "../../general-component/company-card-square/company-card-square";
import {JobCardBar} from "../../general-component/job-card-bar/job-card-bar";

export class Choice extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.text = Choice.i18n[languageHelper()];
  }

  render() {
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    if (pathname) {
      return (<Redirect to={pathname}/>);
    }
    return (
      <div
        style={{
          background:'#F2F2F2',
          width:'100rem',
          height:'100rem'
        }}
      >
        <JobCardBar/>
      </div>
    );
  }
}

Choice.i18n = [
  {
    
  },
  {
    
  },
];
