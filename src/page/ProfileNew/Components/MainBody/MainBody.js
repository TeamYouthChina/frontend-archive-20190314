import React from 'react';

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
    console.log(props.data);
    
    let dataForBasicInfo = {
        name: props.data.name ? props.data.name : "no name given",
        DOB: props.data.DOB ? props.data.DOB : "no DOB given",
        gender: props.data.gender ? props.data.gender : "no gender given",
        email: props.data.contacts.email ? props.data.contacts.email : "no email given",
        phone: props.data.contacts.phonenumbers ? props.data.contacts.phonenumbers : "no phone given"
    };

    let dataForEducation = {
        educations: props.data.educations
    };
    let dataForWorkExperience = {};

    let dataForCertifications = {};
    
    let dataForSocialActivicies = {};

    let dataForProjects = {};

    let dataForSkills = {};

    return(
        <div className={classes.MainBody}>
            <ResumeButtons/>
            <BasicInfo data={dataForBasicInfo}/>
            <Education data={props.data.educations}/>
            <WorkExperience data={props.data.works}/>
            <Certifications data={props.data.certifications}/>
            <SocialActivicies data={props.data.extracurriculars}/>
            <Projects data={props.data.projects}/>
            <Skills data={props.data.skills}/>
        </div>
    );
};

export default mainBody;