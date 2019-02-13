import React from 'react';

import classes from './MainBody.module.css';
import ResumeButtons from '../ResumeButtons/ResumeButtons';
import BasicInfo from '../BasicInfo/BasicInfo';


const mainBody = (props) => {
    return(
        <div className={classes.MainBody}>
            <ResumeButtons/>
            <BasicInfo/>
            {/* <Education/>
            <ReleventExperience/>
            <Certifications/>
            <SocialActivicies/>
            <Projects/>
            <Skills/> */}
        </div>
    );
};

export default mainBody;