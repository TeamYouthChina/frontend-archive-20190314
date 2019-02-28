import React from 'react';
import {languageHelper} from "../../../tool/language-helper";
import {
  MDBCard,
  MDBAvatar
 
} from "mdbreact";
import classes from './apptitle.module.css'
export class AppTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: null,
      firstTime: 1,
      selectType: 1,
      influence:68,
      description:['1','2'],
      resumeTitle:{
        id:'123',
        name:'Alice',
        img:'https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg',
        description:['美国乔治华盛顿大学,','数据科学家'],
        work:'张三技术总监',
        counts:86,
        location:'华盛顿，美国'

      },
    };
    this.text = AppTitle.i18n[languageHelper()];
  }


  render() {
    const {img, name, description, work,influence} = this.props.data || this.state.resumeTitle
  
    return (
      <MDBCard className={classes.all} style={{borderRadius: '0px',boxShadow: 'none',}}>
        <MDBCard className={classes.people} style={{borderRadius: '0px',boxShadow: 'none',}}>
          
        </MDBCard>
        <div className={classes.avatar}>
          <MDBAvatar
            tag="img"
            src='https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg'
            className="rounded-circle img-fluid"
            alt="Sample avatar"
          />
        </div>
        <div className={classes.name}>
          {name}
        </div>
        <div className={classes.position}>
          {work}
        </div>
        <div className={classes.icon}>
          <div className={classes.location_font}>
            {this.state.resumeTitle.location}
          </div>
        </div>
        <MDBCard className={classes.rank} style={{borderRadius: '0px',boxShadow: 'none',}}>

        </MDBCard>
        <div className={classes.influence}>影响力 1909</div>
        <div className={classes.level}>
          <div className={classes.level_font}>Lv. 6</div>
        </div>
        <div className={classes.bar}>
          <div className="progress">
            <div
              className="progress-bar w-75"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              color="white"
              
            >
            </div>
          </div>
        </div>

      </MDBCard>

    );

  }
}

AppTitle.i18n = [
  {
    applyBefore: '申请截止'
  },
  {
    applyBefore: 'Apply Before'
  },
];
