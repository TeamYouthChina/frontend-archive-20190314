import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';

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
      <div>
        
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
