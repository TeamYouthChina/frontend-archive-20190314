import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import classes from "./resumes.module.css";
import Resume from "./Resume/resume";
import { languageHelper } from "../../../../tool/language-helper";

// dummy resume icon
// problem: cannot access resourses outside of src folder
import resumeIcon from "../../../assets/icons8-overview-50.png";

const translation = [
  {
    name: "齐昊",
    english: "英语",
    chinese: "中文",
    lastEdit: "最近编辑",
    select: "选择",
    submit: "提交",
    dedi: "的第",
    fenjianli: "份简历",
    addResume: "+ 添加简历",
    typeResume: "手动添加简历",
    upload: "从设备上传"
  },
  {
    name: "Hao Qi",
    english: "English",
    chinese: "Chinese",
    lastEdit: "Last Edit",
    select: "Select",
    submit: "Submit",
    dedi: "'s",
    fenjianli: "resume",
    addResume: "+ Add Resume",
    typeResume: "Type Resume",
    upload: "Upload From Device"
  },
];

const text = translation[languageHelper()];

// dummy resumes, should get resumes through api in reality
const dummyResumes = [
  {
    name: text.name,
    icon: resumeIcon,
    language: "",
    lastEdit: "2019-02-06 16:45",
  },
  {
    name: text.name,
    icon: resumeIcon,
    language: "",
    lastEdit: "2019-02-06 16:45",
  },
  {
    name: text.name,
    icon: resumeIcon,
    language: "",
    lastEdit: "2019-02-06 16:45",
  },
  {
    name: text.name,
    icon: resumeIcon,
    language: "",
    lastEdit: "2019-02-06 16:45",
  },
  {
    name: text.name,
    icon: resumeIcon,
    language: "",
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

  resumeClickHandler = id => {
    // this.props.history.push('/create-resume/1');
    // console.log(`${id} clicked`)
    // this.props.toggleModal(id)
  };

  toEditPage = id => {
    console.log(`direct ${id} to edit page`);
    console.log(this.props.requestID);
    this.props.history.push(`/create-resume/${this.props.requestID}`);
  };



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
            name={`${one.name}${text.dedi}${index+1}${text.fenjianli}`}
            language={one.language}
            lastEdit={one.lastEdit}
            selectHandler={this.props.selectHandler}
            selected={this.props.selected}
            resumeClick={this.resumeClickHandler}
            inApplicant
            text={text}
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
            name={`${one.name}${text.dedi}${index+1}${text.fenjianli}`}
            language={one.language}
            lastEdit={one.lastEdit}
            selectHandler={this.props.selectHandler}
            selected={this.props.selected}
            toEditPage={this.toEditPage}
            text={text}
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
                {text.typeResume}
              </button>
              <button
                className={classes.halfButton}
                onClick={this.props.uploadResuemHandler}
              >
                {text.upload}
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
              // onClick={this.props.addResumeClicked}
              onClick={this.toEditPage}
            >
              {text.addResume}
            </button>
          </div>
        );
      }
      return <div className={classes.resumes}>{arrayOfResumes}</div>;
    }
  }
}

export default withRouter(resumes);
