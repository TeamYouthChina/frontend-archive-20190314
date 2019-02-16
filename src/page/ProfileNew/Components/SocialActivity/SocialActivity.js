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

const socialActivity = (props) => {
    let toShow = 
        <div className={classes.SocialActivity}>
            <div className={classes.row}>
                <p className={classes.SectionName}>Social Activity</p>
            </div>

            <p>no social activity</p>
            
            <MDBBtn 
                flat 
                className={classes.MDBButton}
                style={MDBButtonStyle}>
                    + Add Social Activity
            </MDBBtn>
        </div>

    let cards;
    if(props.data){
        cards = props.data.map((e,i)=>(
            <SocialActivityCard key={i} data={e}/>
        ));
        toShow = 
            <div className={classes.SocialActivity}>
                <div className={classes.row}>
                    <p className={classes.SectionName}>Social Activity</p>
                </div>

                {cards}
                
                
                <MDBBtn 
                    flat 
                    className={classes.MDBButton}
                    style={MDBButtonStyle}>
                        + Add Social Activity
                </MDBBtn>
            </div>
    }
    return(
        toShow
    );
};

export default socialActivity;