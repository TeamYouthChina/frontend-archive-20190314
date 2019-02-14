import React from 'react';

import classes from './SkillCard.module.css';
import SkillIcon from '../../../../assets/javascript.png';

const skillCard = () => {
    return(
        <div className={classes.SkillCard}>
            <img src={SkillIcon} alt="no img"></img>
            <p>
                Javascript
            </p>
        </div>
    );
};

export default skillCard;