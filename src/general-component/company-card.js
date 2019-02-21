import React from 'react';
import {languageHelper} from '../tool/language-helper';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBAvatar
} from 'mdbreact';
import {getAsync} from "../tool/api-helper";
import {MDBBtn, Row} from "./job-card-bar";


export class CompanyCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backend: null,
      collect: false,
    };
    this.text = CompanyCard.i18n[languageHelper()];
  }

  async componentDidMount() {
    if (this.props.id) {
      this.setState({
        backend: await getAsync(`/companies/${this.props.id}`)
      });
    } else {
      this.setState({
        backend: await getAsync(`/companies/1`)
      });
    }
  }


  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <MDBCard
        className="px-3 py-4"
        style={{borderRadius: '0px'}}
      >
        <MDBCardBody
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <MDBRow>
            <MDBCol size="2">
              <MDBRow>
                <MDBCol size='9'>
                  <MDBAvatar
                    tag="img"
                    src={this.state.backend.content.avatarUrl}
                    className="rounded z-depth-1-half img-fluid"
                    alt="Sample avatar"
                  />
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol size="9">
              <MDBRow>
                <MDBCol size="10">
                  <MDBCardTitle
                    style={{
                      fontSize: '1rem'
                    }}
                  >
                    <a href={this.state.backend.content.website}>{this.state.backend.content.name}</a>
                  </MDBCardTitle>
                  <MDBCardTitle
                    style={{
                      fontSize: '1rem'
                    }}
                  >
                    {this.state.backend.content.nation}
                  </MDBCardTitle>
                  <MDBCardText
                    style={{
                      fontSize: '0.8rem',
                      marginTop: '5px',
                    }}
                  >
                    <span className="mr-1">{this.text.type} </span>
                    <span>{this.state.backend.content.name}</span>
                  </MDBCardText>
                  <MDBCardText
                    style={{
                      fontSize: '0.8rem',
                      marginTop: '5px',
                    }}
                  >
                    <span className="mr-1">{this.text.location} </span>
                    <span>{this.state.backend.content.location}</span>
                  </MDBCardText>
                </MDBCol>
                <MDBCol 
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill={this.state.collect ? "#45526e" : "none"}
                    stroke="#45526e"
                    strokeWidth="1.0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-bookmark"
                    onClick={
                      () => {
                        this.setState((prev) => (
                          {collect: !prev.collect})
                        );
                      }
                    }
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
          <br/>
          <MDBRow>
            <MDBCol>
              <p>{this.state.backend.content.note}</p>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    ) : null;
  }
}

CompanyCard.i18n = [
  {
    type: '类型',
    location: '工作地点',
  },
  {
    type: 'Type',
    location: 'Location',
  },
];
