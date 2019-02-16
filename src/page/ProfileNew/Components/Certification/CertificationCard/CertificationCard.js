import React from 'react';

import classes from './CertificationCard.module.css';
import certificationIcon from '../../../../assets/coursera.png';
import Dropdown from '../../Dropdown/Dropdown';

const certificationCard = (props) => {
    return(
        <div className={classes.CertificationCard}>
            <img src={certificationIcon} alt="no img"></img>
            <div className={classes.certifiInfo}>
                <p className={classes.Title}>
                    {props.data.name}
                </p>
                <p className={classes.Institute}>
                    {props.data.authority}
                </p>
                <p className={classes.Time}>
                    {props.data.duration.begin+"-"+props.data.duration.end}
                </p>
                <p className={classes.Description}>
                    {props.data.note}
                </p>
            </div>
            <Dropdown/>
        </div>
    );
};

export default certificationCard;