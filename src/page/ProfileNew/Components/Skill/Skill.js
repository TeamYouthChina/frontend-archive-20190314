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

const skill = (props) => {
    let toShow = 
        <div className={classes.Skill}>
            <div className={classes.row}>
                <p className={classes.SectionName}>Skill</p>
            </div>
            
            <p>no skill</p>
            
            <MDBBtn 
                flat 
                className={classes.MDBButton}
                style={MDBButtonStyle}>
                    + Add Skill
            </MDBBtn>
        </div>;
    
    let cards;
    if(props.data){
        cards = props.data.map((e,i)=>(
            <SkillCard key={i} data={e}/>
        ));
        toShow = 
            <div className={classes.Skill}>
                <div className={classes.row}>
                    <p className={classes.SectionName}>Skill</p>
                </div>
                
                {cards}
                
                <MDBBtn 
                    flat 
                    className={classes.MDBButton}
                    style={MDBButtonStyle}>
                        + Add Skill
                </MDBBtn>
            </div>;
    }
    
    return(
        toShow
    );
};

export default skill;