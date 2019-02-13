import React from 'react';

import classes from './CertificationCard.module.css';
import certificationIcon from '../../../../assets/coursera.png';

const certificationCard = () => {
    return(
        <div className={classes.CertificationCard}>
            <img src={certificationIcon} alt="no img"></img>
            <div className={classes.certifiInfo}>
                <p className={classes.Title}>
                    Title
                </p>
                <p className={classes.Institute}>
                    Institute
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

export default certificationCard;