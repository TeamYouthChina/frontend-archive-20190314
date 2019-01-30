import React from 'react';
import {Redirect} from 'react-router-dom';

import {
  MDBCol,
  MDBRow,
} from 'mdbreact';

import {Header} from '../../../general-component/header';
import {Footer} from '../../../general-component/footer';
import {languageHelper} from '../../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../../tool/remove-url-slash-suffix';
import {SJobCompamy} from './search-jobcompany';

export class SearchS1 extends React.Component {
  constructor(props) {
    super(props);
    this.text = SearchS1.i18n[languageHelper()];
  }

  render() {
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    if (pathname) {
      return (<Redirect to={pathname}/>);
    }
    return (
      <div>
        <Header/>
        <MDBRow center>
          <MDBCol size="10">
            <SJobCompamy/>
          </MDBCol>
        </MDBRow>
        <Footer/>
      </div>
    );
  }
}

SearchS1.i18n = [
  {},
  {}
];
