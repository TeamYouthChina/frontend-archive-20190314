import React from 'react';

import classes from './submit.module.css'

const submit = (props) => {
    let button = 
        <button 
            disabled
            className={classes.submitButton}
            onClick={props.clicked}>
                Submit
        </button>;
    if(props.active){
        button=
            <button 
                className={classes.submitButton}
                onClick={props.clicked}>
                    Submit
            </button>;
    }
   
   
    return (
        <div className={classes.control}>
        {button}
        </div>
    );
};

export default submit;