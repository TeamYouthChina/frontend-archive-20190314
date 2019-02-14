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
    return(
        <div className={classes.MainBody}>
            <ResumeButtons/>
            <BasicInfo/>
            <Education/>
            <WorkExperience/>
            <Certifications/>
            <SocialActivicies/>
            <Projects/>
            <Skills/>
        </div>
    );
};

export default mainBody;