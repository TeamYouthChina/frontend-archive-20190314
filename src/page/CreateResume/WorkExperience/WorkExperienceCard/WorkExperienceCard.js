import React, { Component } from "react";
import BraftEditor from "braft-editor";

import classes from "./WorkExperienceCard.module.css";
import workIcon from "../../../assets/google.jpg";
import Dropdown from "../../Dropdown/Dropdown";

class WorkExperienceCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: this.props.data ? false : true,
      workData: this.props.data
        ? {
            position: this.props.data.position,
            employer: this.props.data.employer,
            duration: {
              begin: this.props.data.duration.begin,
              end: this.props.data.duration.end,
            },
            note: this.props.data.note,
          }
        : {
            position: "",
            employer: "",
            duration: {
              begin: "",
              end: "",
            },
            note: "",
          },
      editorState: BraftEditor.createEditorState(this.props.data.note),
    };

    this.posRef = React.createRef();
    this.employerRef = React.createRef();
    this.beginRef = React.createRef();
    this.endRef = React.createRef();
    this.noteRef = React.createRef();
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
        workData: {
          position: this.posRef.current.value,
          employer: this.employerRef.current.value,
          duration: {
            begin: this.beginRef.current.value,
            end: this.endRef.current.value,
          },
          note: this.noteRef.current.value,
        },
      },
      () => {
        this.props.saveHandler(this.state.workData, this.props.id);
      }
    );
  };

  render() {
    let toShow = (
      <div className={classes.WorkExperienceCard}>
        <div
          onClick={event => this.props.toggle(this.props.id, event)}
          style={{
            position: "absolute",
            zIndex: "1",
            height: "100%",
            width: "100%",
          }}
        />
        <img src={workIcon} alt="no img" />
        <div className={classes.WorkInfo}>
          <input
            disabled
            type="text"
            defaultValue={this.state.workData.position}
            ref={this.posRef}
          />
          <input
            disabled
            type="text"
            defaultValue={this.state.workData.employer}
            ref={this.employerRef}
          />
          <div className={classes.twoP}>
            <p>
              {this.state.workData.duration.begin} -{" "}
              {this.state.workData.duration.end}
            </p>
          </div>
          <input
            style={{ margin: "15px 0px 3px 0px" }}
            disabled
            type="text"
            defaultValue={this.state.workData.note}
            ref={this.noteRef}
          />
        </div>
      </div>
    );

    return toShow;
  }
}

export default WorkExperienceCard;
