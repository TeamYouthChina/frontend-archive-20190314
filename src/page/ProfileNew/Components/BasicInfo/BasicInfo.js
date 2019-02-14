import React from 'react';

import classes from './BasicInfo.module.css';

const basicInfo = () => {
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
                    xzp
                </p>
            </div>
            <div className={classes.row}>
                <p className={classes.AttributeName}>
                    Date of Birth
                </p>
                <p className={classes.Value}>
                    06/17/1995
                </p>
            </div>
            <div className={classes.row}>
                <p className={classes.AttributeName}>
                    Gender
                </p>
                <p className={classes.Value}>
                    Male
                </p>
            </div>
            <div className={classes.row}>
                <p className={classes.AttributeName}>
                    Email
                </p>
                <p className={classes.Value}>
                    xuzepei19950617@gmail.com
                </p>
            </div>
            <div className={classes.row}>
                <p className={classes.AttributeName}>
                    Phone Number
                </p>
                <p className={classes.Value}>
                    8587668067
                </p>
            </div>
        </div>
    );
};

export default basicInfo;