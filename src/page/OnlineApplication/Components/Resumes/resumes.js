import React, { Component } from "react";

import classes from "./resumes.module.css";
import Resume from "./Resume/resume";

class resumes extends Component {
  render() {
    let arrayOfResumes = Array();
    arrayOfResumes = this.props.resumes.map((one, index) => {
      return (
        <div key={index} className={classes.resumeWrapper}>
          <Resume
            key={index}
            id={index}
            exportClicked={this.props.exportClicked}
            deleteClicked={this.props.deleteClicked}
            icon={one.icon}
            name={one.name}
            language={one.language}
            lastEdit={one.lastEdit}
            selectHandler={this.props.selectHandler}
            selected={this.props.selected}
          />
        </div>
      );
    });

    if (this.props.addingResume) {
      arrayOfResumes.push(
        <div
          key={arrayOfResumes.length}
          className={[classes.resumeWrapper, classes.dotted].join(" ")}
        >
          <div className={classes.centerButton}>
            <button
              className={classes.halfButton}
              onClick={this.props.typeResumeHander}
            >
              Type Resume
            </button>
            <button
              className={classes.halfButton}
              onClick={this.props.uploadResuemHandler}
            >
              Upload From Device
            </button>
          </div>
        </div>
      );
    } else {
      arrayOfResumes.push(
        <div key={arrayOfResumes.length} className={classes.resumeWrapper}>
          <button
            key={arrayOfResumes.length}
            className={classes.addResume}
            onClick={this.props.addResumeClicked}
          >
            + Add Resume
          </button>
        </div>
      );
    }
    return <div className={classes.resumes}>{arrayOfResumes}</div>;
  }
}

export default resumes;