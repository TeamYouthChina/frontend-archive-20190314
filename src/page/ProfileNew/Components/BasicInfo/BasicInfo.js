import React from 'react';

import classes from './BasicInfo.module.css';

const basicInfo = (props) => {
    return(
        <div className={classes.BasicInfo}>
            <div className={classes.Headline}>
                <p className={classes.SectionName}>
                    Basic Info
                </p>
                <button className={classes.CornerButton}>
                    edit
                </button>
            </div>
            <div className={classes.row}>
                <p className={classes.AttributeName}>
                    Name
                </p>
                <p className={classes.Value}>
                    {props.data.name}
                </p>
            </div>
            <div className={classes.row}>
                <p className={classes.AttributeName}>
                    Date of Birth
                </p>
                <p className={classes.Value}>
                    {props.data.DOB}
                </p>
            </div>
            <div className={classes.row}>
                <p className={classes.AttributeName}>
                    Gender
                </p>
                <p className={classes.Value}>
                    {props.data.gender}
                </p>
            </div>
            <div className={classes.row}>
                <p className={classes.AttributeName}>
                    Email
                </p>
                <p className={classes.Value}>
                    {props.data.email}
                </p>
            </div>
            <div className={classes.row}>
                <p className={classes.AttributeName}>
                    Phone Number
                </p>
                <p className={classes.Value}>
                    {props.data.phone}
                </p>
            </div>
        </div>
    );
};

export default basicInfo;