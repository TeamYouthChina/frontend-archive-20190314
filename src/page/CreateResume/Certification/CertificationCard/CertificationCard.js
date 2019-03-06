import React, { Component } from "react";

import classes from "./CertificationCard.module.css";
import certificationIcon from "../../../assets/coursera.png";
import Dropdown from "../../Dropdown/Dropdown";

class CertificationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: this.props.data ? false : true,
      certiData: this.props.data
        ? {
            name: this.props.data.name,
            auth: this.props.data.authority,
            duration: {
              begin: this.props.data.duration.begin,
              end: this.props.data.duration.end,
            },
            note: this.props.data.note,
          }
        : {
            name: "",
            auth: "",
            duration: {
              begin: "",
              end: "",
            },
            note: "",
          },
    };
    this.nameRef = React.createRef();
    this.authRef = React.createRef();
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
        certiData: {
          name: this.nameRef.current.value,
          auth: this.authRef.current.value,
          duration: {
            begin: this.beginRef.current.value,
            end: this.endRef.current.value,
          },
          note: this.noteRef.current.value,
        },
      },
      () => {
        this.props.saveHandler(this.state.certiData, this.props.id);
      }
    );
  };

  render() {
    let toShow = (
      <div className={classes.CertificationCard}>
        <div
          onClick={event => this.props.toggle(this.props.id, event)}
          style={{
            position: "absolute",
            zIndex: "1",
            height: "100%",
            width: "100%",
          }}
        />
        <img src={certificationIcon} alt="no img" />
        <div className={classes.certifiInfo}>
          <input
            disabled
            type="text"
            defaultValue={this.state.certiData.name}
            ref={this.nameRef}
          />
          <input
            disabled
            type="text"
            defaultValue={this.state.certiData.auth}
            ref={this.authRef}
          />
          <div className={classes.twoP}>
            <p>
              {this.state.certiData.duration.begin} -{" "}
              {this.state.certiData.duration.end}
            </p>
          </div>
          <input
            style={{ margin: "15px 0px 3px 0px" }}
            disabled
            type="text"
            defaultValue={this.state.certiData.note}
            ref={this.noteRef}
          />
        </div>
      </div>
    );

    return toShow;
  }
}

export default CertificationCard;
