import React from 'react';
import {Redirect} from 'react-router-dom';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBBadge,
  MDBIcon,
  MDBRotatingCard,
  MDBCard,
} from 'mdbreact';

import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';
import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';
import {RensentInfo} from './resentinfo';

export class Message extends React.Component {
  handlClick = () => {
    this.setState({});
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.text = Message.i18n[languageHelper()];
  }

  render() {
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    const btnColor = '#7C97B8';
    
    if (pathname) {
      return (<Redirect to={pathname}/>);
    }
    return (
      <div>
        <Header/>
        <MDBContainer>
          <MDBRow>
            <MDBCol size="0"></MDBCol>
            <MDBCol size='12'>
              <MDBRow>
                <MDBCol size="9">
                  <MDBRow>
                    <a href="http://localhost:3000/message">
                      <MDBBtn 
                        color={btnColor}
                        style={{
                          padding: '5px 10px', 
                          backgroundColor: '#7c97b8'}}>
                        <MDBIcon style={{marginRight: '10px'}} far icon="comments"/>消息
                      </MDBBtn>
                    </a>
                    <a href="http://localhost:3000/message/back-fild">
                      <MDBBtn color="primary" style={{padding: '5px 10px',}}>
                        <MDBIcon style={{marginRight: '10px'}} far icon="bell"/>通知
                      </MDBBtn>
                    </a>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <RensentInfo></RensentInfo>
              </MDBRow>
            </MDBCol>
            <MDBCol size="0"></MDBCol>
          </MDBRow>
        </MDBContainer>
        <Footer/>
      </div>
    );
  }
}

Message.i18n = [
  {},
  {}
];
