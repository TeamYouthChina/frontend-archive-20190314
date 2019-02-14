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

const education = (props) => {
    let toShow = 
        <div className={classes.Education}>
            <div className={classes.row}>
                <p className={classes.SectionName}>Education</p>
                <button className={classes.CornerButton}>edit</button>
            </div>
            
            <p>no education </p>
            
            <MDBBtn 
                flat 
                className={classes.MDBButton}
                style={MDBButtonStyle}>
                    + Add Education
            </MDBBtn>
        </div>;

    let cards;
    if(props.data){
        cards = props.data.map((e,i)=>(
            <EducationCard key={i} data={e}/>
        ));
        toShow =
            <div className={classes.Education}>
                <div className={classes.row}>
                    <p className={classes.SectionName}>Education</p>
                    <button className={classes.CornerButton}>edit</button>
                </div>
                {cards}
                
                <MDBBtn 
                    flat 
                    className={classes.MDBButton}
                    style={MDBButtonStyle}>
                        + Add Education
                </MDBBtn>
            </div>;
    }
    return(
        toShow
    );
};

export default education;