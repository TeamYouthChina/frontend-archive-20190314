import React from 'react';

import {
  MDBContainer,
  MDBStepper,
  MDBRow,
  MDBCol,
  Row
} from "mdbreact";

export class UserInfo extends React.Component {
  
  render() {
    return (
      <MDBContainer>
        <h1 className="font-weight-lighter font-italic mt-5">
          稍等，您的简历已经在路上了...
        </h1>
        <MDBRow>
          <MDBStepper>
            <li className="step active">
              <div data-step-label="Just add a data-step-label!" className="step-title waves-effect waves-dark">Step 1</div>
              <div className="step-new-content">
                <MDBRow>
                  <div className="md-form col-12 ml-auto">
                    <input id="email-non" type="email" className="form-control validate" required />
                    <label htmlFor="email-non" className="ml-auto">Your e-mail</label>
                  </div>
                </MDBRow>
                <div className="step-actions">
                  <button className="waves-effect waves-dark btn btn-sm btn-primary next-step">CONTINUE</button>
                </div>
              </div>
            </li>
            <li className="step">
              <div className="step-title waves-effect waves-dark">Step 2</div>
              <div className="step-new-content">
                <MDBRow className="row">
                  <div className="md-form col-12 ml-auto">
                    <input id="password-non" type="password" className="form-control validate" required />
                    <label htmlFor="password-non">Your password</label>
                  </div>
                </MDBRow>
                <div className="step-actions">
                  <button className="waves-effect waves-dark btn btn-sm btn-primary next-step">CONTINUE</button>
                  <button className="waves-effect waves-dark btn btn-sm btn-secondary previous-step">BACK</button>
                </div>
              </div>
            </li>
            <li className="step">
              <div className="step-title waves-effect waves-dark">Step 3</div>
              <div className="step-new-content">
                Finish!
                <div className="step-actions">
                  <button className="waves-effect waves-dark btn btn-sm btn-primary m-0 mt-4" type="button">SUBMIT</button>
                </div>
              </div>
            </li>
          </MDBStepper>
        </MDBRow>
      </MDBContainer>
    );
  }
}
