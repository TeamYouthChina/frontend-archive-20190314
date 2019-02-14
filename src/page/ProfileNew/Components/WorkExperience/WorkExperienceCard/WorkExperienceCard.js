import React from 'react';

import classes from './WorkExperienceCard.module.css';
import workIcon from '../../../../assets/google.jpg';

const workExperienceCard = (props) => {
    return(
        <div className={classes.WorkExperienceCard}>
            <img src={workIcon} alt="no img"></img>
            <div className={classes.WorkInfo}>
                <p className={classes.Position}>
                    {props.data.position}
                </p>
                <p className={classes.Company}>
                    {props.data.employer}
                </p>
                <p className={classes.Time}>
                    {props.data.duration.begin+"-"+props.data.duration.end}
                </p>
                <p className={classes.Description}>
                    {props.data.note}
                </p>
            </div>
        </div>
    );
};

export default workExperienceCard;