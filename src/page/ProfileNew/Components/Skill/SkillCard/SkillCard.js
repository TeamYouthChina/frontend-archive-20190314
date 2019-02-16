import React from 'react';

import classes from './SkillCard.module.css';
import SkillIcon from '../../../../assets/javascript.png';

const skillCard = (props) => {
    return(
        <div className={classes.SkillCard}>
            <img src={SkillIcon} alt="no img"></img>
            <p>
                {props.data.name}
            </p>
        </div>
    );
};

export default skillCard;