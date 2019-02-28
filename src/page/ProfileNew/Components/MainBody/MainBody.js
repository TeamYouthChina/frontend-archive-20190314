import React, {Component} from 'react'

import classes from './MainBody.module.css';
import ResumeButtons from '../ResumeButtons/ResumeButtons';
import BasicInfo from '../BasicInfo/BasicInfo';
import Education from '../Education/Education';
import WorkExperience from '../WorkExperience/WorkExperience';
import Certifications from '../Certification/Certification';
import SocialActivicies from '../SocialActivity/SocialActivity';
import Projects from '../Project/Project';
import Skills from '../Skill/Skill';
// import {getAsync} from '../../../../tool/api-helper';


class MainBody extends Component {

  constructor(props){
    super(props);
    this.state = {
      requestID: this.props.requestID,
      requestedData: this.props.data
    }
  }

  async componentDidMount(){
      // ideally only get /applicants/id/basicinfo
      // let data = await getAsync('/applicants/'+this.state.requestID);
      // console.log(data)
      // this.setState({requestedData: data});
  }

  render(){
    
    let dataForBasicInfo = {
      name: this.state.requestedData.name ? this.state.requestedData.name : "no name given",
      DOB: this.state.requestedData.DOB ? this.state.requestedData.DOB : "no DOB given",
      gender: this.state.requestedDatander ? this.state.requestedData.gender : "no gender given",
      email: this.state.requestedData.contacts.email ? this.state.requestedData.contacts.email : "no email given",
      phone: this.state.requestedData.contacts.phonenumbers ? this.state.requestedData.contacts.phonenumbers : "no phone given"
    };
      
    let toShow = <div className={classes.MainBody}>
        <BasicInfo data={dataForBasicInfo}/>
        <Education requestID={this.state.requestID} />
        <WorkExperience requestID={this.state.requestID}/>
        <Certifications requestID={this.state.requestID}/>
        <SocialActivicies requestID={this.state.requestID}/>
        <Projects requestID={this.state.requestID}/>
        <Skills requestID={this.state.requestID}/>
      </div>
  
    return toShow;
  }
};

export default MainBody;
