import React from 'react';
import { MDBBtn } from "mdbreact";


import ProjectCard from './ProjectCard/ProjectCard';
import classes from './Project.module.css';

const MDBButtonStyle = {
    font_family: "IBM Plex Sans",
    font_style: "normal",
    font_weight: "600",
    line_height: "normal",
    font_size: "18px",
    text_align: "center"};



const project = () => {
    return(
        <div className={classes.Project}>
            <div className={classes.row}>
                <p className={classes.SectionName}>Project</p>
            </div>
            <div className={classes.Container}>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                
                <MDBBtn 
                    outline
                    className={classes.MDBButton}
                    style={MDBButtonStyle}
                    color="blue-grey">
                        + Add Certification
                </MDBBtn>
            </div>
        </div>
    );
};

export default project;