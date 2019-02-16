import React from 'react';

import classes from './SocialActivityCard.module.css';
import socialActivityIcon from '../../../../assets/activity-icon.png';

const socialActivityCard = (props) => {
    return(
        <div className={classes.SocialActivityCard}>
            <img src={socialActivityIcon} alt="no img"></img>
            <div className={classes.ActivityInfo}>
                <p className={classes.Title}>
                    {props.data.name}
                </p>
                <p className={classes.Institute}>
                    {props.data.organization}
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

export default socialActivityCard;