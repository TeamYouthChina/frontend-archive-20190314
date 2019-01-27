import React from 'react';
import {MDBCol, MDBContainer, MDBRow, MDBFooter} from 'mdbreact';

export class Footer extends React.Component {
  render() {
    return (
      <MDBFooter 
        
        className="font-small pt-4 mt-4"
        style={{background:'#7C97B8'}}
      >
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">YouthChina</h5>
              <p>
                快速一站式服务
              </p>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">More</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">Privacy</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Terms</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Q&A</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">ContactUs</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{' '}
            <a href=""> YouthChina.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}
