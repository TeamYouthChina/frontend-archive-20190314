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

const certification = () => {
    return(
        <div className={classes.Certification}>
            <div className={classes.row}>
                <p className={classes.SectionName}>Certification</p>
                <button className={classes.CornerButton}>edit</button>
            </div>

            <CertificationCard/>
            <CertificationCard/>
            <CertificationCard/>
            <CertificationCard/>
            
            
            <MDBBtn 
                flat 
                className={classes.MDBButton}
                style={MDBButtonStyle}>
                    + Add Certification
            </MDBBtn>
        </div>
    );
};

export default certification;