import React from 'react';
import {languageHelper} from "../../../tool/language-helper";
import {
  MDBCard,
  MDBAvatar,
  MDBIcon
} from 'mdbreact';
import {getAsync} from "../../../tool/api-helper";


import {withRouter} from 'react-router-dom';
import classes from './company-card.module.css'


export class CompanyCard1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backend: null,
      collect: false,
    };
    this.text = CompanyCard1.i18n[languageHelper()];
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
      <div>
        <MDBCard
          style={{
            borderRadius: '0px',
            display: 'flex',
            flexDirection: 'row',
            height: '10.75rem',
            background: '#FFFFFF',
            boxShadow:'none'
          }}
          onClick={() => {
            this.props.history.push(`/company/${this.state.backend.content.id}`);
          }}
          
        >
          <div
            style={{
              alignItems:'center',
              marginLeft: '2.5rem',
              marginTop: '1.25rem',
              width:'8.25rem',
              height:'auto',
            }}
          >

            <MDBAvatar
              tag="img"
              src="http://47.254.46.117:5000/tencent/icon.png"
              className="img-fluid"
              style={{
                alignItems:'center',
                width:'8.25rem',
                height:'auto',

              }}
            />

          </div>
          <div
            style={{
              flexGrow: 4,
              marginLeft:'1.875rem',
              marginTop:'3.125rem',
            }}>
            <div
              style={{
                flexDirection: 'row',
                display: 'flex',
                alignItems:'flex-end',
              }}
            >
              <div
                style={{
                  fontFamily: 'PingFang SC',
                  lineHeight: 'normal',
                  fontSize: '1.5rem',
                  color: '#454F69'
                }}
              >
                {this.state.backend.content.name}
              </div>
              <div
                style={{
                  fontFamily: 'PingFang SC',
                  lineHeight: 'normal',
                  fontSize: '0.875rem',
                  marginLeft:'0.625rem',
                  color: '#8D9AAF'
                }}
              > {this.state.backend.content.location} | 2000人 | 计算机/网络</div>
            </div>
            <div
              style={{
                flexDirection: 'row',
                display: 'flex',
                alignItems:'flex-end',
                marginTop:'0.5rem'
              }}
            >
              <div
                style={{
                  flexGrow: 3,
                  fontFamily: 'PingFang SC',
                  lineHeight: 'normal',
                  fontSize: '1rem',
                  color: '#454F69',
                 
                }}
              >
                <a href={this.state.backend.content.website}>{this.state.backend.content.website}</a>
              </div>
              <div
                style={{
                  flexGrow: 1,
                  fontFamily: 'PingFang SC',
                  lineHeight: 'normal',
                  fontSize: '0.875rem',
                  color: '#8D9AAF',
                }}
              >
                <MDBIcon far icon="heart" className="mr-2"/>
                收藏
              </div>
            </div>
           
          </div>
        </MDBCard>
      </div>
    ) : null;
  }
}

CompanyCard1.i18n = [
  {
    type: '类型',
    location: '工作地点',
  },
  {
    type: 'Type',
    location: 'Location',
  },
];

export const CompanyCard = withRouter(CompanyCard1)
