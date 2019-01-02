import React from 'react';
import {Redirect} from 'react-router-dom';

import {Header} from '../../../general-component/header';
import {Footer} from '../../../general-component/footer';
import {languageHelper} from '../../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../../tool/remove-url-slash-suffix';
import {SAVU} from './search-avu';

export class SearchS2 extends React.Component {
  constructor(props) {
    super(props);
    this.text = SearchS2.i18n[languageHelper()];
  }

  render() {
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    if (pathname) {
      return (<Redirect to={pathname}/>);
    }
    return (
      <div>
        <Header/>
        <SAVU/>
        <Footer/>
      </div>
    );
  }
}

SearchS2.i18n = [
  {},
  {}
];
