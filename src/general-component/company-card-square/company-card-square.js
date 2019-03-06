import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import classes from './company-card-square.module.css';
import {MDBIcon, MDBCard, MDBAvatar,MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle} from 'mdbreact';
import {getAsync} from '../../tool/api-helper';
import {withRouter} from 'react-router-dom';

export class ComCardSquare1 extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null
    };

    this.text = ComCardSquare1.i18n[languageHelper()];
  }

  async componentDidMount() {
    if (this.props.id) {
      this.setState({
        backend: await getAsync(`/companies/${this.props.id}`,true)
      });
    } else {
      this.setState({
        backend: await getAsync(`/companies/1`,true)
      });
    }
  }

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (

      <div>
        <MDBCard className={`${classes.card} `} onClick={() => {
          //this.props.history.push(`/company/${this.state.backend.content.id}`);
        }}>
          <div
            style={{
              margin:'1.25rem 1.875rem',
            }}
          >
            <div
              className="d-flex flex-row justify-content-between align-items-start mb-1"
            >
              <div style={{height:'4rem'}} onClick={() => {
                this.props.history.push(`/company/${this.state.backend.content.id}`);
              }}>

                <MDBAvatar
                  tag="img"
                  src="http://47.254.46.117:5000/logo/1200px-Ofo_Logo.svg.png"
                  className="img-fluid"
                  alt="Sample avatar"
                  style={{width:'4.4375rem'}}
                />

              </div>
              <div style={{zIndex: '10'}}>
                <MDBDropdown>
                  <MDBDropdownToggle className="p-0"nav >
                    <MDBIcon
                      icon="ellipsis-h"
                      style={{color:'#8D9AAF'}}
                    />
                  </MDBDropdownToggle >
                  <MDBDropdownMenu className="p-0" color="white" basic left>
                    <MDBDropdownItem><MDBIcon far icon="heart mr-2" />收藏</MDBDropdownItem>
                    <MDBDropdownItem><MDBIcon icon="ban mr-2" />不再推荐</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </div>
            </div>
            <div onClick={() => {
              this.props.history.push(`/company/${this.state.backend.content.id}`);
            }}>
              <div className="`${classes.title}` mb-1">
                {this.state.backend.content.name} | 2000人 | 计算机/网络
              </div>
              <div className="`${classes.website}` mb-1">
                <a href={this.state.backend.content.website}>{this.state.backend.content.website}</a>
              </div>
              <div className={classes.location}>
                <MDBIcon
                  icon="map-marker"
                  className="mr-1 "

                  style={{color:'#8D9AAF'}}
                />

                {this.state.backend.content.location}
              </div>
            </div>

          </div>
          
        </MDBCard>

      </div>

    ) : null;
  }
}

ComCardSquare1.i18n = [
  {
    applyBefore: '申请截止'
  },
  {
    applyBefore: 'Apply Before'
  },
];

export const ComCardSquare = withRouter(ComCardSquare1);
