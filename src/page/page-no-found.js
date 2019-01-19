import React from 'react';
import {Redirect} from 'react-router-dom';

import {Header} from '../general-component/header';
import {Footer} from '../general-component/footer';
import {languageHelper} from '../tool/language-helper';
import {removeUrlSlashSuffix} from '../tool/remove-url-slash-suffix';

export class Error404 extends React.Component {
  constructor(props) {
    super(props);
    this.text = Error404.i18n[languageHelper()];
  }

  render() {
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    if (pathname) {
      return (<Redirect to={pathname}/>);
    }
    return (
      <div>
        <Header/>
        Page no found
        <Footer/>
      </div>
    );
  }
}

Error404.i18n = [
  {},
  {}
];
