import React from 'react';
import { MDBBtn } from "mdbreact";


import SocialActivityCard from './SocialActivityCard/SocialActivityCard';
import classes from './SocialActivity.module.css';


const MDBButtonStyle = {
    font_family: "IBM Plex Sans",
    font_style: "normal",
    font_weight: "600",
    line_height: "normal",
    font_size: "18px",
    text_align: "center"};

const socialActivity = () => {
    return(
        <div className={classes.SocialActivity}>
            <div className={classes.row}>
                <p className={classes.SectionName}>SocialActivity</p>
                <button className={classes.CornerButton}>edit</button>
            </div>

            <SocialActivityCard/>
            <SocialActivityCard/>
            <SocialActivityCard/>
            <SocialActivityCard/>
            
            
            <MDBBtn 
                flat 
                className={classes.MDBButton}
                style={MDBButtonStyle}>
                    + Add Social Activity
            </MDBBtn>
        </div>
    );
};

export default socialActivity;