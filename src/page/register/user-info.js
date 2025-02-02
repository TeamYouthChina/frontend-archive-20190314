import React from 'react';

import {
  MDBContainer,
  MDBStepper,
  MDBStep,
  MDBRow,
  MDBBtn,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
} from 'mdbreact';

export class UserInfo extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      formActivePanel1: 1,
      formActivePanel1Changed: false,
      jobTypeRadio: 1,
      jobIntentionRadio: 1
    };
  }

  swapFormActive = (a) => (param) => (e) => {
    this.setState({
      ['formActivePanel' + a]: param,
      ['formActivePanel' + a + 'Changed']: true
    });
  };

  handleNextPrevClick = (a) => (param) => (e) => {
    this.setState({
      ['formActivePanel' + a]: param,
      ['formActivePanel' + a + 'Changed']: true
    });
  };

  calculateAutofocus = (a) => {
    if (this.state['formActivePanel' + a + 'Changed']) {
      return true
    }
  };

  handleJobTypeRadioButton = (nr) => () => {
    this.setState({
      jobTypeRadio: nr
    });
  };

  handleJobIntentionRadioButton = (nr) => () => {
    this.setState({
      jobIntentionRadio: nr
    });
  };

  render() {
    return (
      <MDBContainer>
        <h3 className="font-weight-lighter font-italic mt-5 ml-5">
          稍等，您的简历已经在路上了<strong> . . .</strong>
        </h3>
        <MDBRow center>
          {/*<form>*/}
          <MDBCol xl="6" lg="7" md="10">
            <MDBCard className="my-5">
              <MDBCardBody>
                <h3 className="font-weight-lighter text-left pl-3 pt-4 pb-5">
                  创建我的简历:
                </h3>
                <MDBStepper form>
                  <MDBStep form>
                    <a onClick={this.swapFormActive(1)(1)}>
                      <MDBBtn color={ this.state.formActivePanel1===1 ? "indigo" : "default" } circle>
                        1
                      </MDBBtn>
                    </a>
                    <p>Step 1</p>
                  </MDBStep>
                  <MDBStep form>
                    <a onClick={this.swapFormActive(1)(2)}>
                      <MDBBtn color={ this.state.formActivePanel1===2 ? "indigo" : "default" } circle>
                        2
                      </MDBBtn>
                    </a>
                    <p>Step 2</p>
                  </MDBStep>
                  <MDBStep form>
                    <a onClick={this.swapFormActive(1)(3)}>
                      <MDBBtn color={ this.state.formActivePanel1===3 ? "indigo" : "default" } circle>
                        3
                      </MDBBtn>
                    </a>
                    <p>Step 3</p>
                  </MDBStep>
                </MDBStepper>

                <form onSubmit={this.props.handleSubmit}>
                  <MDBRow>
                    {this.state.formActivePanel1 === 1 && (
                      <MDBCol md="12">
                        <MDBContainer style={{
                          fontWeight: '300'
                        }}>
                          <MDBInput label="First Name" className="my-3" autoFocus={this.calculateAutofocus(1)} />
                          <MDBInput label="Last Name" className="my-3" />
                          <MDBInput label="Tel" className="my-3" />
                          <MDBInput label="Date of birth" className="my-3" />
                          <MDBInput label="City" className="my-3" />
                        </MDBContainer>
                        <MDBBtn color="indigo" rounded className="float-right" onClick={this.handleNextPrevClick(1)(2)}>
                          next
                        </MDBBtn>
                      </MDBCol>
                    )}
                    {this.state.formActivePanel1 === 2 && (
                      <MDBCol md="12">
                        <MDBContainer className="mt-3" style={{
                          fontWeight: '300'
                        }}>
                          求职意向:
                          <MDBInput gap onClick={this.handleJobTypeRadioButton(1)} checked={this.state.jobTypeRadio===1 ? true : false} label="实习" type="radio"
                                    id="radio1" />
                          <MDBInput gap onClick={this.handleJobTypeRadioButton(2)} checked={this.state.jobTypeRadio===2 ? true : false} label="兼职" type="radio"
                                    id="radio2" />
                          <MDBInput gap onClick={this.handleJobTypeRadioButton(3)} checked={this.state.jobTypeRadio===3 ? true : false} label="全职" type="radio"
                                    id="radio3" />
                        </MDBContainer>
                        <MDBContainer className="mt-3" style={{
                          fontWeight: '300'
                        }}>
                          职业状态:
                          <MDBInput gap onClick={this.handleJobIntentionRadioButton(1)} checked={this.state.jobIntentionRadio===1 ? true : false} label="求职" type="radio"
                                    id="radio4" />
                          <MDBInput gap onClick={this.handleJobIntentionRadioButton(2)} checked={this.state.jobIntentionRadio===2 ? true : false} label="在职" type="radio"
                                    id="radio5" />
                          <MDBInput gap onClick={this.handleJobIntentionRadioButton(3)} checked={this.state.jobIntentionRadio===3 ? true : false} label="随便逛逛" type="radio"
                                    id="radio6" />
                        </MDBContainer>
                        <MDBBtn color="indigo" rounded className="float-left" onClick={this.handleNextPrevClick(1)(1)}>
                          previous
                        </MDBBtn>
                        <MDBBtn color="indigo" rounded className="float-right" onClick={this.handleNextPrevClick(1)(3)}>
                          next
                        </MDBBtn>
                      </MDBCol>
                    )}
                    {this.state.formActivePanel1 === 3 && (
                      <MDBCol md="12">
                        <MDBContainer style={{
                          fontWeight: '300'
                        }}>
                          <MDBInput label="预计到岗时间" className="my-3" />
                          <MDBInput label="期待工作行业" className="my-3" />
                          <MDBInput label="期待工作城市" className="my-3" />
                        </MDBContainer>
                        <MDBBtn color="indigo" rounded className="float-left" onClick={this.handleNextPrevClick(1)(2)}
                                autoFocus={this.calculateAutofocus(1)}>
                          previous
                        </MDBBtn>
                        <MDBBtn color="default" rounded className="float-right" href="/" type='submit'>
                          submit
                        </MDBBtn>
                      </MDBCol>
                    )}
                  </MDBRow>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          {/*</form>*/}
        </MDBRow>
      </MDBContainer>
    );
  }
}
