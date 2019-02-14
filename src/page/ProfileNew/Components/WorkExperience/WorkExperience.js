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

const workExperience = (props) => {
    let toShow = 
        <div className={classes.WorkExperience}>
            <div className={classes.row}>
                <p className={classes.SectionName}>Work Experience</p>
                <button className={classes.CornerButton}>edit</button>
            </div>

            <p>no work experience</p>
            
            <MDBBtn 
                flat 
                className={classes.MDBButton}
                style={MDBButtonStyle}>
                    + Add Work Experience
            </MDBBtn>
        </div>;

    let cards;
    if(props.data){
        cards = props.data.map((e,i)=>(
            <WorkExperienceCard key={i} data={e}/>
        ));
        toShow = 
            <div className={classes.WorkExperience}>
                <div className={classes.row}>
                    <p className={classes.SectionName}>Work Experience</p>
                    <button className={classes.CornerButton}>edit</button>
                </div>

                {cards}
                
                
                <MDBBtn 
                    flat 
                    className={classes.MDBButton}
                    style={MDBButtonStyle}>
                        + Add Work Experience
                </MDBBtn>
            </div>;
    }
    return(
        toShow
    );
};

export default workExperience;