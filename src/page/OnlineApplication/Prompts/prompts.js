import React from 'react';

import classes from './prompts.module.css'

const propmts = (props) => {
    return (
        <div className={classes.prompts}>
            <p className={classes.firstLine}>{props.trans.pleaseChooseYourResume}</p>
            <p className={classes.secondLine}>{props.trans.importantToHaveGoodResume}</p>
        </div>
    );
}

export default propmts;