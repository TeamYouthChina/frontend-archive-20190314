import React from 'react';

import classes from './topBar.module.css';

const topBar = (props) => {
    return (
        <div className={classes.topBar}>
            <div className={classes.vertical_center}>
                <p className={classes.firstLine}>{props.trans.positions}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.trans.positionDetail}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.trans.chooseResume}</p>
            </div>
        </div>
    );
}

export default topBar;