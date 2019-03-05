import React, { Component } from "react";

import classes from "./EducationCard.module.css";
import schoolIcon from "../../../../assets/schoolIcon.jpg";
import Dropdown from "../../Dropdown/Dropdown";
import { languageHelper } from "../../../../../tool/language-helper";

const translation = [
  {
    uName: "学校名称",
    begin: "开始日期",
    end: "结束日期",
    degree: "学位",
  },
  {
    uName: "University",
    begin: "Begin",
    end: "End",
    degree: "degree",
  },
];
const text = translation[languageHelper()];

class EducationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: this.props.data ? false : true,
      educationData: this.props.data
        ? {
            university: this.props.data.university,
            duration: {
              begin: this.props.data.duration.begin,
              end: this.props.data.duration.end,
            },
            degree: this.props.data.degree,
          }
        : {
            university: "",
            duration: {
              begin: "",
              end: "",
            },
            degree: "",
          },
    };
    this.uniRef = React.createRef();
    this.beginRef = React.createRef();
    this.endRef = React.createRef();
    this.degreeRef = React.createRef();
  }

  // this method only toggle 'editing'
  editHandler = () => {
    this.setState({ editing: true });
  };

  // tell parent the id of the current card
  deleteHandler = () => {
    this.props.deleteHandler(this.props.id);
  };

  // packup new data for this card and send to parent
  saveHandler = () => {
    this.setState({
      ...this.state,
      editing: false,
    });
    this.props.saveHandler(this.state.educationData, this.props.id);
  };

  inputOnChange = () => {
    this.setState({
      ...this.state,
      educationData: {
        university: this.uniRef.current.value,
        duration: {
          begin: this.beginRef.current.value,
          end: this.endRef.current.value,
        },
        degree: this.degreeRef.current.value,
      },
    });
  };

  render() {
    let toShow = (
      <div className={classes.EducationCard}>
        <img src={schoolIcon} alt="no img" />
        <div className={classes.SchoolInfo}>
          <input
            style={{ margin: "3px 0px" }}
            disabled
            type="text"
            value={this.state.educationData.university}
            onChange={this.inputOnChange}
          />
          <div style={{ margin: "3px 0px" }} className={classes.twoP}>
            <p>
              {this.state.educationData.duration.begin} -{" "}
              {this.state.educationData.duration.end}
            </p>
          </div>
          <input
            style={{ margin: "3px 0px" }}
            disabled
            type="text"
            value={this.state.educationData.degree}
            onChange={this.inputOnChange}
          />
        </div>
        <Dropdown
          className={classes.Dropdown}
          delete={this.deleteHandler}
          edit={this.editHandler}
        />
      </div>
    );

    if (this.state.editing) {
      toShow = (
        <div className={classes.EducationCard}>
          <img src={schoolIcon} alt="no img" />
          <div className={classes.SchoolInfo}>
            <input
              style={{ margin: "3px 0px" }}
              type="text"
              value={this.state.educationData.university}
              ref={this.uniRef}
              placeholder={text.uName}
              onChange={this.inputOnChange}
            />
            <input
              style={{ margin: "3px 0px" }}
              type="text"
              value={this.state.educationData.duration.begin}
              ref={this.beginRef}
              placeholder={text.begin}
              onChange={this.inputOnChange}
            />
            <input
              style={{ margin: "3px 0px" }}
              type="text"
              value={this.state.educationData.duration.end}
              ref={this.endRef}
              placeholder={text.end}
              onChange={this.inputOnChange}
            />
            <input
              style={{ margin: "3px 0px" }}
              type="text"
              value={this.state.educationData.degree}
              ref={this.degreeRef}
              placeholder={text.degree}
              onChange={this.inputOnChange}
            />
          </div>
          <Dropdown
            className={classes.Dropdown}
            delete={this.deleteHandler}
            edit={this.editHandler}
            editing
            save={this.saveHandler}
          />
        </div>
      );
    }
    return toShow;
  }
}

export default EducationCard;
