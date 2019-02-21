åimport React from 'react';

import classes from './MainBody.module.css';
import ResumeButtons from '../ResumeButtons/ResumeButtons';
import BasicInfo from '../BasicInfo/BasicInfo';
import Education from '../Education/Education';
import WorkExperience from '../WorkExperience/WorkExperience';
import Certifications from '../Certification/Certification';
import SocialActivicies from '../SocialActivity/SocialActivity';
import Projects from '../Project/Project';
import Skills from '../Skill/Skill';


const mainBody = (props) => {
  // console.log(props.data);

  let dataForBasicInfo = {
    name: props.data.name ? props.data.name : "no name given",
    DOB: props.data.DOB ? props.data.DOB : "no DOB given",
    gender: props.data.gender ? props.data.gender : "no gender given",
    email: props.data.contacts.email ? props.data.contacts.email : "no email given",
    phone: props.data.contacts.phonenumbers ? props.data.contacts.phonenumbers : "no phone given"
  };

  return(
    <div className={classes.MainBody}>
      <ResumeButtons/>
      <BasicInfo data={dataForBasicInfo}/>
      <Education requestID={props.requestID} />
      <WorkExperience requestID={props.requestID}/>
      <Certifications requestID={props.requestID}/>
      <SocialActivicies requestID={props.requestID}/>
      <Projects requestID={props.requestID}/>
      <Skills requestID={props.requestID}/>
    </div>
  );
};

export default mainBody;
