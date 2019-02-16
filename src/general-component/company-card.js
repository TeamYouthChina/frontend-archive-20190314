import React from 'react';
import {languageHelper} from '../tool/language-helper';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBAvatar
} from 'mdbreact';
import {getAsync} from "../tool/api-helper";


export class CompanyCard extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null
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
                <MDBCol>
                  <MDBIcon
                    icon="bookmark-o"
                    size="3x"
                    className="pt-1 p-0"
                    style={{color:'#45526e'}}
                  />
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
