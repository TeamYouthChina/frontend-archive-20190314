import React from 'react';
import {Redirect} from 'react-router-dom';
import {
  MDBContainer,
  Row,
  Col
} from 'mdbreact';

import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';
import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';
import {JobCardBar} from "../../general-component/job-card-bar";

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
      <MDBContainer
        fluid
        style={{padding: 0}}
      >
        <Header/>
        <Row center>
          <Col size='8'> <JobCardBar/></Col>
        </Row>
       
        <Footer/>
      </MDBContainer>
    );
  }
}

Test.i18n = [
  {},
  {}
];

