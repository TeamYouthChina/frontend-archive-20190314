import React from 'react';

import classes from './SocialActivityCard.module.css';
import socialActivityIcon from '../../../../assets/activity-icon.png';

const socialActivityCard = () => {
    return(
        <div className={classes.SocialActivityCard}>
            <img src={socialActivityIcon} alt="no img"></img>
            <div className={classes.ActivityInfo}>
                <p className={classes.Title}>
                    Volunteer
                </p>
                <p className={classes.Institute}>
                    What Institute?
                </p>
                <p className={classes.Time}>
                    2018
                </p>
                <p className={classes.Description}>
                Comfort reached gay perhaps chamber his six detract besides add. Moonlight newspaper up he it enjoyment agreeable depending. 
                </p>
            </div>
        </div>
    );
};

export default socialActivityCard;