import React from 'react';

import {
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBBtn
} from 'mdbreact';

import {JobCardSquare} from '../../general-component/job-card-square/job-card-square';

export class JobListHome extends React.Component {

  constructor(props) {
    super(props);
    /*
    * */
    this.state = {};
  }

  componentWillMount() {
    let mockData =
      {
        content: {
          name: '金融',
          jobIdList: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
          ],
          searchRequestBody: null,
          url:[
            'http://47.254.46.117:5000/logo/1200px-Ofo_Logo.svg.png',
            'http://47.254.46.117:5000/logo/15165886089623274.jpg',
            'http://47.254.46.117:5000/logo/800px-Tencent_Logo.svg.png',
            'http://47.254.46.117:5000/logo/bd_logo1.png',
            'http://47.254.46.117:5000/logo/download.png',
            'http://47.254.46.117:5000/logo/png.png',
          ],
          url1:'http://47.254.46.117:5000/logo/1200px-Ofo_Logo.svg.png',
          url2:'http://47.254.46.117:5000/logo/15165886089623274.jpg',
          url3:'http://47.254.46.117:5000/logo/800px-Tencent_Logo.svg.png',
          url4:'http://47.254.46.117:5000/logo/bd_logo1.png',
          url5:'http://47.254.46.117:5000/logo/download.png',
          url6:'http://47.254.46.117:5000/logo/png.png',
        },
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
      
      <div
        style={{
          padding: '24px 16px'
        }}
      >
        <MDBContainer>
          <div
            style={{
              marginBottom: '16px'
            }}
          >
            <span style={{
              fontSize: '18px',
              color: '#454F69'
            }}>
              {this.state.backend.content.name}
            </span>
          </div>

          <MDBRow center>
            {
              this.state.backend.content.url.map(
                (item, index) =>
                  
                  <MDBCol
                    key={index}
                    className="my-3 px-4 py-1"
                    size="12"
                    md="6"
                    xl="4"
                  >
                    <JobCardSquare url={item}/>
                    
                  </MDBCol>
                
              )
            }
          </MDBRow>
          <div className="text-center">
            <MDBBtn
              rounded
              color="rgba-grey-strong"
              href="/job-for-you"
              style={{
                boxShadow: 'none',
                fontSize: '16px',
                marginTop: '8px',
                display: 'inline-block',
                fontWeight: '300',
                color: '#454F69',
                background: '#E3E9EE'
              }}
            >
              显示全部
            </MDBBtn>
          </div>
        </MDBContainer>
      </div>
    ) : null;
  }
}
