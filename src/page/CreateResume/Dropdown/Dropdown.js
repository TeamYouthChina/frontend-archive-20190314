import React from 'react';

import classes from './Dropdown.module.css';

const dropdown = (props) => {
    let toShow = 
        <div className={classes.dropdown}>
            <button className={classes.dropbtn}>...</button>
            <div className={classes.dropdown_content}>
                <div>
                    <button onClick={props.edit}>
                        Edit
                    </button>
                </div>
                <div>
                    <button onClick={props.delete}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    if(props.editing){
        toShow = 
            <div className={classes.dropdown}>
                <button className={classes.dropbtn}>...</button>
                <div className={classes.dropdown_content}>
                    <div>
                        <button onClick={props.save}>
                            Save
                        </button>
                    </div>
                    <div>
                        <button onClick={props.delete}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
    }
    return(
        toShow
    );
}

export default dropdown;