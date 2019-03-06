import React, { Component } from "react";
import BraftEditor from "braft-editor";

import classes from "./EducationCard.module.css";
import schoolIcon from "../../../assets/schoolIcon.jpg";
// import Dropdown from "../../Dropdown/Dropdown";

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
      editorState: BraftEditor.createEditorState(null),
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
    this.setState(
      {
        editing: false,
        educationData: {
          university: this.uniRef.current.value,
          duration: {
            begin: this.beginRef.current.value,
            end: this.endRef.current.value,
          },
          degree: this.degreeRef.current.value,
        },
      },
      () => {
        this.props.saveHandler(this.state.educationData, this.props.id);
      }
    );
  };

  render() {
    let toShow = (
      <div className={classes.EducationCard}>
        <div
          onClick={event => this.props.toggle(this.props.id, event)}
          style={{
            position: "absolute",
            zIndex: "1",
            height: "100%",
            width: "100%",
          }}
        />
        <img src={schoolIcon} alt="no img" />
        <div className={classes.SchoolInfo}>
          <input
            disabled
            type="text"
            defaultValue={this.state.educationData.university}
            ref={this.uniRef}
          />
          {/* <div>
            <input
              disabled
              type="text"
              defaultValue={this.state.educationData.duration.begin}
              ref={this.beginRef}
            />
            <p> - </p>
            <input
              disabled
              type="text"
              defaultValue={this.state.educationData.duration.end}
              ref={this.endRef}
            />
          </div> */}

          <div className={classes.twoP}>
            <p>
              {this.state.educationData.duration.begin} -{" "}
              {this.state.educationData.duration.end}
            </p>
          </div>

          <input
            disabled
            type="text"
            defaultValue={this.state.educationData.degree}
            ref={this.degreeRef}
          />
        </div>
        {/* <Dropdown delete={this.deleteHandler} edit={this.editHandler} /> */}
      </div>
    );
    return toShow;
  }
}

export default EducationCard;
