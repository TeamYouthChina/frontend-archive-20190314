import React from 'react';


import classes from './EducationCard.module.css';
import schoolIcon from '../../../../assets/schoolIcon.jpg';
import Dropdown from '../../Dropdown/Dropdown';

const educationCard = (props) => {
    return(
        <div className={classes.EducationCard}>
            <img src={schoolIcon} alt="no img"></img>
            <div className={classes.SchoolInfo}>
                <h1>
                    {props.data.university}
                </h1>
                <p>
                    {props.data.duration.begin+"-"+props.data.duration.end}
                </p>
                <p>
                    {props.data.degree}
                </p>
            </div>
            <Dropdown/>
        </div>
    );
};

export default educationCard;