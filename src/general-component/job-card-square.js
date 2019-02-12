import React from 'react';
import {languageHelper} from '../tool/language-helper';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdbreact';
import {getAsync} from "../tool/api-helper";


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
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <MDBCard
        style={{
          width: '16rem',
          height: '16rem'
        }}
        
      >
        <MDBCardImage
          className="img-fluid"
          src="https://s3.amazonaws.com/handshake.production/app/public/assets/institutions/111044/original/hs-emp-branding-image-data.?1522348756"
        />
        <MDBCardBody
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <MDBCardTitle
              style={{
                fontSize: '1rem'
              }}
            >
              {this.state.backend.content.name}
            </MDBCardTitle>
            <MDBCardText
              style={{
                fontSize: '0.8rem'
              }}
            >
              {this.state.backend.content.organization.name}
              <br/>
              {this.state.backend.content.location}
            </MDBCardText>
          </div>
          <MDBCardText
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
          </MDBCardText>
        </MDBCardBody>
        <MDBBtn  flat href="job/1" className="indigo-text">立即申请</MDBBtn>
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
