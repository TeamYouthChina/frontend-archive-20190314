import React from 'react';

import classes from './submit.module.css'

const submit = (props) => {
    return (
        <div className={classes.control}>
            <button 
                className={classes.submitButton}
                onClick={props.submitHandler}>
                Submit
            </button>
        </div>
    );
};

export default submit;