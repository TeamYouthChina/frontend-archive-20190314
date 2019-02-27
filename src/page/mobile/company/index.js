import React from 'react';
import {languageHelper} from '../../../tool/language-helper';
import {MDBRow, MDBCol} from 'mdbreact';


export class CompanyMobile extends React.Component {
  constructor(props) {
    super(props);
    this.text = CompanyMobile.i18n[languageHelper()];
  }

  render() {
    
  }
}

CompanyMobile.i18n = [
  {},
  {}
];
