import React from 'react';

import classes from './WorkExperienceCard.module.css';
import workIcon from '../../../../assets/google.jpg';

const workExperienceCard = () => {
    return(
        <div className={classes.WorkExperienceCard}>
            <img src={workIcon} alt="no img"></img>
            <div className={classes.WorkInfo}>
                <p className={classes.Position}>
                    Position
                </p>
                <p className={classes.Company}>
                    Company
                </p>
                <p className={classes.Time}>
                    2018-2020
                </p>
                <p className={classes.Description}>
                Comfort reached gay perhaps chamber his six detract besides add. Moonlight newspaper up he it enjoyment agreeable depending. 
                </p>
            </div>
        </div>
    );
};

export default workExperienceCard;