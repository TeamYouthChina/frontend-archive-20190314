import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import classes from './job-card-square.module.css';
import {MDBIcon, MDBCard, MDBAvatar,MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle} from 'mdbreact';
import {getAsync} from '../../tool/api-helper';
import {withRouter} from 'react-router-dom';
class JobCardSquare1 extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null
    };

    this.text = JobCardSquare1.i18n[languageHelper()];
  }

  async componentDidMount() {
    if (this.props.id) {
      this.setState({
        backend: await getAsync(`/jobs/${this.props.id}`)
      });
    } else {
      this.setState({
        backend: await getAsync(`/jobs/1`)
      });
    }
  }

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (

      <div>
        <MDBCard className={classes.card} onClick={() => {
          //this.props.history.push(`/job/${this.state.backend.content.id}`);
        }}>
          <div
            style={{
              margin:'1.25rem 1.875rem',
            }}
          >
            <div
              className="d-flex flex-row justify-content-between align-items-start mb-2"
            >
              <div style={{height:'4rem'}} onClick={() => {
                this.props.history.push(`/job/${this.state.backend.content.id}`);
              }}>

                <MDBAvatar
                  tag="img"
                  src="http://47.254.46.117:5000/logo/800px-Tencent_Logo.svg.png"
                  className="img-fluid"
                  alt="Sample avatar"
                  style={{width:'8.4375rem'}}
                />
              </div>
              <div>
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
              this.props.history.push(`/job/${this.state.backend.content.id}`);
            }}>
              <div className="`${classes.title}` mb-1">
                {this.state.backend.content.name}
              </div>
              <div className="`${classes.subtitle}` mb-1">
                {this.state.backend.content.organization.name}
              </div>
              <div className={classes.location}>
                <MDBIcon
                  icon="map-marker"
                  className="mr-1 "

                  style={{color:'#8D9AAF'}}
                />
                {this.state.backend.content.organization.location}
              </div>
            </div>
          </div>





        </MDBCard>

      </div>

    ) : null;
  }
}

JobCardSquare1.i18n = [
  {
    applyBefore: '申请截止'
  },
  {
    applyBefore: 'Apply Before'
  },
];

export const JobCardSquare = withRouter(JobCardSquare1)
