import React from 'react';
import {languageHelper} from '../tool/language-helper';
import {
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBAvatar, MDBCol, MDBRow
} from 'mdbreact';
import {getAsync} from '../tool/api-helper';



export class JobCardSquare extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null
    };
    
    this.text = JobCardSquare.i18n[languageHelper()];
  }
  
  async componentDidMount() {
    if (this.props.id) {
      this.setState({
        backend: await getAsync(`/job/${this.props.id}`)
      });
    } else {
      this.setState({
        backend: await getAsync(`/job/1`)
      });
    }
  }

  render() {
    
    const applicationBtnUrl = `job/${this.props.id}`;
    
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (

      <MDBCard>
        <MDBCardBody  style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          
          <MDBRow>
            <MDBCol>
              <p style={{textAlign:'center'}}>
                <MDBAvatar
                  tag="img"
                  src={this.state.backend.content.organization.avatarUrl}
                  className="z-depth-1 img-fluid"
                
                  style={{width:'104px',height:'104px'}}
                />
              </p>
              <p
                style={{
                  fontSize: '1rem'
                }}
              >
                {this.state.backend.content.name}
              </p>
              <p
                style={{
                  fontSize: '0.8rem'
                }}
              >
                {this.state.backend.content.organization.name}
                <br/>
                {this.state.backend.content.location}
              </p>
              <p
                style={{
                  fontSize: '0.8rem'
                }}
              >
                {this.text.applyBefore}
                <br/>
                {
                  ((unixTimeStamp) => {
                    let d = new Date(unixTimeStamp * 1000);
                    return d.toUTCString();
                  })(this.state.backend.content.deadLine)
                }
              </p>
              <p>
                <MDBBtn  block flat href="job/1" className="indigo-text">立即申请</MDBBtn>
              </p>
            </MDBCol>
          </MDBRow>

          
        </MDBCardBody>


      </MDBCard>
    ) : null;
  }
}

JobCardSquare.i18n = [
  {
    applyBefore: '申请截止'
  },
  {
    applyBefore: 'Apply Before'
  },
];
