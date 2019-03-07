import React, { Component } from "react";

import classes from "./SocialActivityCard.module.css";
import socialActivityIcon from "../../../assets/activity-icon.png";
import Dropdown from "../../Dropdown/Dropdown";

class SocialActivityCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: this.props.data ? false : true,
      socialData: this.props.data
        ? {
            name: this.props.data.name,
            organization: this.props.data.organization,
            duration: {
              begin: this.props.data.duration.begin.substring(0,10),
              end: this.props.data.duration.end.substring(0,10),
            },
            note: this.props.data.note,
          }
        : {
            name: "",
            organization: "",
            duration: {
              begin: "",
              end: "",
            },
            note: "",
          },
    };
    this.nameRef = React.createRef();
    this.orgRef = React.createRef();
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
        socialData: {
          name: this.nameRef.current.value,
          organization: this.orgRef.current.value,
          duration: {
            begin: this.beginRef.current.value,
            end: this.endRef.current.value,
          },
          note: this.noteRef.current.value,
        },
      },
      () => {
        this.props.saveHandler(this.state.socialData, this.props.id);
      }
    );
  };

  render() {
    let toShow = (
      <div className={classes.SocialActivityCard}>
        <div
          onClick={event => this.props.toggle(this.props.id, event)}
          style={{
            position: "absolute",
            zIndex: "1",
            height: "100%",
            width: "100%",
          }}
        />
        <img src={socialActivityIcon} alt="no img" />
        <div className={classes.ActivityInfo}>
          <input
            disabled
            type="text"
            defaultValue={this.state.socialData.name}
            ref={this.nameRef}
          />
          <input
            disabled
            type="text"
            defaultValue={this.state.socialData.organization}
            ref={this.orgRef}
          />
          <div  className={classes.twoP}>
            <p>
              {this.state.socialData.duration.begin} -{" "}
              {this.state.socialData.duration.end}
            </p>
          </div>
          <input
            style={{ margin: "15px 0px 3px 0px" }}
            disabled
            type="text"
            defaultValue={this.state.socialData.note}
            ref={this.noteRef}
          />
        </div>
      </div>
    );

    return toShow;
  }
}

export default SocialActivityCard;
