import React, { Component } from "react";

import classes from "./resumes.module.css";
import Resume from "./Resume/resume";
// dummy resume icon
// problem: cannot access resourses outside of src folder
import resumeIcon from "../../../assets/icons8-overview-50.png";
// dummy resumes, should get resumes through api in reality

const dummyResumes = [
  {
    name: "my first resume",
    icon: resumeIcon,
    language: "English",
    lastEdit: "2019-02-06 16:45",
  },
  {
    name: "my first resume",
    icon: resumeIcon,
    language: "English",
    lastEdit: "2019-02-06 16:45",
  },
  {
    name: "my first resume",
    icon: resumeIcon,
    language: "English",
    lastEdit: "2019-02-06 16:45",
  },
  {
    name: "my first resume",
    icon: resumeIcon,
    language: "English",
    lastEdit: "2019-02-06 16:45",
  },
  {
    name: "my first resume",
    icon: resumeIcon,
    language: "English",
    lastEdit: "2019-02-06 16:45",
  },
];
class resumes extends Component {
  state = {
    resumes: dummyResumes,
  };

  componentDidMount = () => {
    // api get resumes
  };

  resumeClickHandler = (id) => {
    this.props.history.push('/create-resume/1');
  }

  render() {
    let arrayOfResumes = [];
    if (this.props.inApplicant) {
      arrayOfResumes = this.state.resumes.map((one, index) => {
        return (
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
              resumeClick={this.resumeClickHandler}
              inApplicant 
            />
        );
      });
      return <div className={classes.resumes}>{arrayOfResumes}</div>;
    } else {
      arrayOfResumes = this.state.resumes.map((one, index) => {
        return (
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
}

export default resumes;
