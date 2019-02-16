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



const project = (props) => {
    let toShow = 
        <div className={classes.Project}>
            <div className={classes.row}>
                <p className={classes.SectionName}>Project</p>
                <button className={classes.CornerButton}>edit</button>

            </div>
            <div className={classes.Container}>
                
                <p>no project</p>
                
                <MDBBtn 
                    outline
                    className={classes.MDBButton}
                    style={MDBButtonStyle}
                    color="blue-grey">
                        + Add Certification
                </MDBBtn>
            </div>
        </div>;
    let cards;
    if(props.data){
        cards = props.data.map((e,i)=>(
            <ProjectCard key={i} data={e}/>
        ));
        toShow = 
            <div className={classes.Project}>
                <div className={classes.row}>
                    <p className={classes.SectionName}>Project</p>
                    <button className={classes.CornerButton}>edit</button>

                </div>
                <div className={classes.Container}>
                    {cards}
                    
                    <MDBBtn 
                        outline
                        className={classes.MDBButton}
                        style={MDBButtonStyle}
                        color="blue-grey">
                            + Add Certification
                    </MDBBtn>
                </div>
            </div>; 
    }
    return(
        toShow
    );
};

export default project;