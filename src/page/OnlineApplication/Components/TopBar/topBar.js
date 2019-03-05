import React from "react";

import classes from "./topBar.module.css";

const topBar = props => {
  let output = props.text.reduce((acc, next) => {
    const spaces = '\xa0\xa0\xa0\xa0\xa0>\xa0\xa0\xa0\xa0\xa0';
    return acc + spaces + next;
  });
  return (
    <div className={classes.topBar}>
      <div className={classes.vertical_center}>
        <p className={classes.firstLine}>{output}</p>
      </div>
    </div>
  );
};

export default topBar;
