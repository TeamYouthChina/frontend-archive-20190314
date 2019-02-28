import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import {
  MDBCard,
  MDBAvatar,
  MDBIcon
} from 'mdbreact';
import {getAsync} from "../../tool/api-helper";

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
            flexDirection: 'row'
          }}
          onClick={() => {
            this.props.history.push(`/company/${this.state.backend.content.id}`);
          }}
          className={classes.card}
        >
          <div
            className={classes.logo}
            style={{
              flexGrow: 1
            }}
          >
            <MDBAvatar
              tag="img"
              src="http://47.254.46.117:5000/tencent/icon.png"
              className="img-fluid"
              alt="Sample avatar"
            />
          </div>
          <div
            style={{
              flexGrow: 4
            }}>
            <div className={classes.title}>
              {this.state.backend.content.name}
            </div>
            <div className={classes.font}> {this.state.backend.content.location} | 2000人 | 计算机/网络</div>
            <div className={classes.website}>
              <a href={this.state.backend.content.website}>{this.state.backend.content.website}</a>
            </div>
          </div>
          <div className={classes.btn}
               style={{
                 flexGrow: 1
               }}
          >
            <MDBIcon far icon="heart" className="mr-2"/>
            收藏
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
