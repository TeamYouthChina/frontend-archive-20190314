import React from 'react';

import {
  MDBCol,
  MDBRow,
  MDBStepper, 
  MDBStep,
  MDBBtn
} from 'mdbreact';
import {languageHelper} from '../../tool/language-helper';


export class JobApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backend: null,
      modal15:false,
      tickID:1
    };
    this.text = JobApp.i18n[languageHelper()];
  }

  componentWillMount() {
    let mockData =
      {
        requirements: ['Good knowledge of mysql', 'Good knowledge of programming lanuguage(C++, Java).', 'Purus sodales ultricies', 'skill4'],
        better: ['Good knowledge of programming lanuguage(C++, Java).', 'Purus sodales ultricies.','Vestibulum laoreet porttitor sem','Ac tristique libero volutpat at'],
        employNumber: '100',
        status: {
          code: 2000
        }
      };
    this.setState(() => {
      return {backend: mockData};
    });
  }
  render() {

    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        <MDBRow>
          <MDBCol>
            <h4>
              <strong style={{...this.props.basicCHNFont, color: '#454F69', fontWeight: '500', fontSize: '18px'}}>
                申请进度</strong>
            </h4>
            <br/>
            <MDBStepper form>
              <MDBStep form>
                <a>
                  <MDBBtn
                    color="mdb-color" circle>
                  </MDBBtn>
                </a>
                <p className="h6" style={{...this.props.basicCHNFont, color:'#7C97B8'}}>已投递</p>
              </MDBStep>
              <MDBStep form>
                <a >
                  <MDBBtn
                    color="#7C97B8" circle
                    style={{border: '2px solid #7C97B8'}}
                  >
                    
                  </MDBBtn>
                </a>
                <p className="h6" style={{color:'#7C97B8'}}>已查阅</p>
              </MDBStep>
              <MDBStep form>
                <a>
                  <MDBBtn
                    color="#7C97B8" circle
                    style={{border: '2px solid #7C97B8'}}
                  >
                  </MDBBtn>
                </a>
                <p className="h6" style={{color:'#7C97B8'}}>面试</p>
              </MDBStep>
              <MDBStep form>
                <a>
                  <MDBBtn
                    color="#7C97B8" circle
                    style={{border: '2px solid #7C97B8'}}
                  >
                  </MDBBtn>
                </a>
                <p className="h6" style={{color:'#7C97B8'}}>Offer</p>
              </MDBStep>
            </MDBStepper>
            <br/>
          
          </MDBCol>
        </MDBRow>
      </div>
    ): null;


  }
}
JobApp.i18n = [
  {
    
  },
  {
    
  },
];
