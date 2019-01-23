import React from 'react';
import {Redirect} from 'react-router-dom';

import {
  MDBContainer
} from 'mdbreact';

import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';
import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';

export class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.text = Setting.i18n[languageHelper()];
  }

  render() {
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    if (pathname) {
      return (<Redirect to={pathname}/>);
    }
    return (
      <MDBContainer
        fluid
        style={{padding: 0}}
      >
        <Header/>

        <Footer/>
      </MDBContainer>
    );
  }
}

Setting.i18n = [
  {},
  {}
];
