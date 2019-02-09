import React, {Component} from "react";
import {Redirect} from 'react-router-dom';

import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';
import BraftEditor from 'braft-editor';

export class MobileTest2 extends React.Component {
  constructor(props) {
    super(props);
    this.text = MobileTest2.i18n[languageHelper()];
    this.state = {};
  }

  render() {
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    if (pathname) {
      return (<Redirect to={pathname}/>);
    }
    return <BraftEditor/>;
  }
}

MobileTest2.i18n = [
  {},
  {}
];
