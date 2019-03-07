import React, { Component } from "react";

import classes from "./ProjectCard.module.css";
import Dropdown from "../../Dropdown/Dropdown";

class projectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: this.props.data ? false : true,
      proData: this.props.data
        ? {
            name: this.props.data.name,
            duration: {
              begin: this.props.data.duration.substring(0,10),
              end: this.props.data.duration.end.substring(0,10),
            },
            note: this.props.data.note,
          }
        : {
            name: "",
            duration: {
              begin: "",
              end: "",
            },
            note: "",
          },
    };
    this.nameRef = React.createRef();
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

  saveHandler = () => {
    this.setState(
      {
        editing: false,
        proData: {
          name: this.nameRef.current.value,
          duration: {
            begin: this.beginRef.current.value,
            end: this.endRef.current.value,
          },
          note: this.noteRef.current.value,
        },
      },
      () => {
        this.props.saveHandler(this.state.proData, this.props.id);
      }
    );
  };

  render() {
    let toShow = (
      <div className={classes.ProjectCard}>
        <div
          onClick={event => this.props.toggle(this.props.id, event)}
          style={{
            position: "absolute",
            zIndex: "1",
            height: "100%",
            width: "100%",
          }}
        />
        <input
          disabled
          type="text"
          defaultValue={this.state.proData.name}
          ref={this.nameRef}
        />
        <div  className={classes.twoP}>
          <p>
            {this.state.proData.duration.begin} -{" "}
            {this.state.proData.duration.end}
          </p>
        </div>
        <input
          disabled
          type="text"
          defaultValue={this.state.proData.note}
          ref={this.noteRef}
        />
      </div>
    );

    return toShow;
  }
}

export default projectCard;
