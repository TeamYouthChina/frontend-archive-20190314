import React from 'react';

import classes from './EducationCard.module.css';
import schoolIcon from '../../../../assets/schoolIcon.jpg';

const educationCard = () => {
    return(
        <div className={classes.EducationCard}>
            <img src={schoolIcon} alt="no img"></img>
            <div className={classes.SchoolInfo}>
                <h1>
                    Georege Washington University
                </h1>
                <p>
                    2018-2020
                </p>
                <p>
                    Master of Science
                </p>
            </div>
        </div>
    );
};

export default educationCard;