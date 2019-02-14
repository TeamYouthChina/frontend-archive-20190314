import React from 'react';
import { MDBBtn } from "mdbreact";


import SkillCard from './SkillCard/SkillCard';
import classes from './Skill.module.css';


const MDBButtonStyle = {
    font_family: "IBM Plex Sans",
    font_style: "normal",
    font_weight: "600",
    line_height: "normal",
    font_size: "18px",
    text_align: "center"};

const skill = () => {
    return(
        <div className={classes.Skill}>
            <div className={classes.row}>
                <p className={classes.SectionName}>Skill</p>
                <button className={classes.CornerButton}>edit</button>
            </div>
            <SkillCard/>
            <SkillCard/>
            <SkillCard/>
            
            <MDBBtn 
                flat 
                className={classes.MDBButton}
                style={MDBButtonStyle}>
                    + Add Skill
            </MDBBtn>
        </div>
    );
};

export default skill;