import React from 'react';
import {
  MDBCol,
  MDBRow,
} from 'mdbreact';
import {CompanyCard} from "../../../general-component/company-card/company-card";
import {languageHelper} from "../../../tool/language-helper";
export class CollectionCompany extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null
    };
    this.text = CollectionCompany.i18n[languageHelper()];
  }
  
  render() {
    return  (
      <div style={{width:'100%'}}>
        <CompanyCard id={1}/>
        <CompanyCard id={2}/>
        <CompanyCard id={3}/>
        <CompanyCard id={4}/>
      </div>
    ) ;
  }
}

CollectionCompany.i18n = [
  {
    applyBefore: '申请截止'
  },
  {
    applyBefore: 'Apply Before'
  },
];
