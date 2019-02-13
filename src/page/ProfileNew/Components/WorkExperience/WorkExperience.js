import React from 'react';
import { MDBBtn } from "mdbreact";


import WorkExperienceCard from './WorkExperienceCard/WorkExperienceCard';
import classes from './WorkExperience.module.css';


const MDBButtonStyle = {
    font_family: "IBM Plex Sans",
    font_style: "normal",
    font_weight: "600",
    line_height: "normal",
    font_size: "18px",
    text_align: "center"};

const workExperience = () => {
    return(
        <div className={classes.WorkExperience}>
            <div className={classes.row}>
                <p className={classes.SectionName}>Work Experience</p>
                <button className={classes.CornerButton}>edit</button>
            </div>

            <WorkExperienceCard/>
            <WorkExperienceCard/>
            <WorkExperienceCard/>
            <WorkExperienceCard/>
            
            
            <MDBBtn 
                flat 
                className={classes.MDBButton}
                style={MDBButtonStyle}>
                    + Add Work Experience
            </MDBBtn>
        </div>
    );
};

export default workExperience;