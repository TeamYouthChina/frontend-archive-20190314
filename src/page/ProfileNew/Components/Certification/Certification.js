import React from 'react';
import { MDBBtn } from "mdbreact";


import CertificationCard from './CertificationCard/CertificationCard';
import classes from './Certification.module.css';


const MDBButtonStyle = {
    font_family: "IBM Plex Sans",
    font_style: "normal",
    font_weight: "600",
    line_height: "normal",
    font_size: "18px",
    text_align: "center"};

const certification = (props) => {
    let toShow = 
        <div className={classes.Certification}>
            <div className={classes.row}>
                <p className={classes.SectionName}>Certification</p>
            </div>

            <p>no certification</p>
            
            
            <MDBBtn 
                flat 
                className={classes.MDBButton}
                style={MDBButtonStyle}>
                    + Add Certification
            </MDBBtn>
        </div>;
    
    let cards;
    if(props.data){
        cards = props.data.map((e,i)=>(
            <CertificationCard key={i} data={e}/>
        ));
        toShow = 
            <div className={classes.Certification}>
                <div className={classes.row}>
                    <p className={classes.SectionName}>Certification</p>
                </div>

                {cards}
                
                
                <MDBBtn 
                    flat 
                    className={classes.MDBButton}
                    style={MDBButtonStyle}>
                        + Add Certification
                </MDBBtn>
            </div>
    }
    return(
        toShow
    );
};

export default certification;