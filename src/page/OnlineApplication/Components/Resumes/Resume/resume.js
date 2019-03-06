import React from "react";

import classes from "./resume.module.css";

const resume = props => {
  if (props.inApplicant) {
    return (
      <div className={classes.resumeInApplicant}>
        <div className={classes.underlyingBox}>
          <div className={classes.border}>
            <div className={classes.picStyle}>
              <img src={props.icon} alt="no icon" />
            </div>
            <div className={classes.textBoxStyle}>
              <div className={classes.name}>
                <p>{props.name}</p>
              </div>
              <div className={classes.language}>
                <p>{props.language}</p>
              </div>
              <div className={classes.lastEdit}>
                <p>last edit:&nbsp;&nbsp;{props.lastEdit}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => props.resumeClick(props.id)}
          className={classes.floatingBox}
        />
      </div>
    );
  } else {
    let resumeStyle = classes.resume;
    if (props.selected == props.id) {
      resumeStyle = classes.selectedResume;
    }

    return (
      <div className={resumeStyle}>
        <div
          onClick={() => props.toEditPage(props.id)}
          className={classes.floatingBox}
        />

        <div className={classes.border}>
          <div className={classes.picStyle}>
            <img src={props.icon} alt="no icon" />
          </div>
          <div className={classes.textBoxStyle}>
            <div className={classes.name}>
              <p>{props.name}</p>
            </div>
            <div className={classes.language}>
              <p>{props.language}</p>
            </div>
            <div className={classes.lastEdit}>
              <p>last edit:&nbsp;&nbsp;{props.lastEdit}</p>
            </div>
          </div>
          <div className={classes.actionsStyle}>
            <button id={props.id} onClick={props.selectHandler}>
              Select
            </button>
            <div className={classes.atBottom}>
              <button onClick={props.exportClicked}>Export</button>
              <button onClick={props.deleteClicked}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default resume;
