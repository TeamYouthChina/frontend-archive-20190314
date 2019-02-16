import React from 'react';

import classes from './Dropdown.module.css';

const dropdown = () => {
    return(
        <div className={classes.dropdown}>
                <button className={classes.dropbtn}>...</button>
                <div className={classes.dropdown_content}>
                    <div>
                        <button>
                            Edit
                        </button>
                    </div>
                    <div>
                        <button>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
    );
}

export default dropdown;