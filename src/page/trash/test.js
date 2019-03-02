import React from 'react';
import {Redirect} from 'react-router-dom';
import {
  MDBContainer,
  Row,
  Col
} from 'mdbreact';

import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';
import {Header} from '../../general-component/header/header';
import {Footer} from '../../general-component/footer';
import {JobCardBar} from "../../general-component/job-card-bar/job-card-bar";
import {Propagation} from "../propagation";

export class Test extends React.Component {
  constructor(props) {
    super(props);
    this.text = Test.i18n[languageHelper()];
  }

  render() {
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    if (pathname) {
      return (<Redirect to={pathname}/>);
    }
    return (
      <div
        fluid
        style={{padding: 0}}
      >
        <Header/>

        <Footer/>
      </div>
    );
  }
}

Test.i18n = [
  {},
  {}
];

