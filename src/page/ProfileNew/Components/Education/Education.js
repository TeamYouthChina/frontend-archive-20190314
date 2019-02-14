import React from 'react';
import { MDBBtn } from "mdbreact";


import EducationCard from './EducationCard/EducationCard';
import classes from './Education.module.css';


const MDBButtonStyle = {
    font_family: "IBM Plex Sans",
    font_style: "normal",
    font_weight: "600",
    line_height: "normal",
    font_size: "18px",
    text_align: "center"};

const education = () => {
    return(
        <div className={classes.Education}>
            <div className={classes.row}>
                <p className={classes.SectionName}>Education</p>
                <button className={classes.CornerButton}>edit</button>
            </div>
            <EducationCard/>
            <EducationCard/>
            <EducationCard/>
            
            <MDBBtn 
                flat 
                className={classes.MDBButton}
                style={MDBButtonStyle}>
                    + Add Education
            </MDBBtn>
        </div>
    );
};

export default education;