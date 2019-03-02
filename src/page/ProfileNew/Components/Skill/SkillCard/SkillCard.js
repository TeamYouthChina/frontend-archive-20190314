import React, { Component } from "react";

import classes from "./SkillCard.module.css";
import SkillIcon from "../../../../assets/javascript.png";
import Dropdown from "../../Dropdown/Dropdown";
import { languageHelper } from "../../../../../tool/language-helper";

const translation = [
  {
    name: "名称",
  },
  {
    name: "Name",
  },
];
const text = translation[languageHelper()];
class skillCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: this.props.data ? false : true,
      skillData: this.props.data
        ? {
            name: this.props.data.name,
          }
        : {
            name: "",
          },
    };
    this.nameRef = React.createRef();
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
    this.setState({
      ...this.state,
      editing: false,
    });
    this.props.saveHandler(this.state.skillData, this.props.id);
  };

  inputOnChange = () => {
    this.setState({
      ...this.state,
      skillData: {
        name: this.nameRef.current.value,
      },
    });
  };

  render() {
    let toShow = (
      <div className={classes.SkillCard}>
        <img src={SkillIcon} alt="no img" />
        <div className={classes.SkillInfo}>
          <div style={{ margin: "3px 0px" }} className={classes.oneP}>
            <p>{this.state.skillData.name}</p>
          </div>
        </div>
        <Dropdown delete={this.deleteHandler} edit={this.editHandler} />
      </div>
    );

    if (this.state.editing) {
      toShow = (
        <div className={classes.SkillCard}>
          <img src={SkillIcon} alt="no img" />
          <div className={classes.SkillInfo}>
            <input
              style={{ margin: "3px 0px" }}
              type="text"
              value={this.state.skillData.name}
              ref={this.nameRef}
              placeholder={text.name}
              onChange={this.inputOnChange}
            />
          </div>
          <Dropdown
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

export default skillCard;
