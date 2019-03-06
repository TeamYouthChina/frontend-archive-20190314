import React, { Component } from "react";
import { MDBBtn } from "mdbreact";
import { ContentUtils } from "braft-utils";
import BraftEditor from "braft-editor";

import SkillCard from "./SkillCard/SkillCard";
import classes from "./Skill.module.css";
import { getAsync } from "../../../tool/api-helper";
import ModalPage from "../Modal/Modal";
import Dropdown from "../Dropdown/Dropdown";
import { languageHelper } from "../../../tool/language-helper";

const translation = [
  {
    skill: "技能",
    addSkill: "+ 添加技能",
    noSkill: "无技能",
  },
  {
    skill: "Skill",
    addSkill: "+ Add Skill",
    noSkill: "No Skill",
  },
];

const text = translation[languageHelper()];
class skill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: Array(),
      requestedData: null,
      cardsToModal: [],
      editorState: BraftEditor.createEditorState(),
      showEditor: false,
    };
    this.date = null;
  }

  // get work data set requestedData and cards in state
  async componentDidMount() {
    // this api is now currently unavailable
    let data = await getAsync(
      "/applicants/" + this.props.requestID + "/skills",
      true
    );
    console.log(data)
    let temp1 =
      data &&
      data.content &&
      data.status.code === 2000
        ? data.content.map((e,i) => {
            return (
              <SkillCard
                key={i}
                id={i}
                data={e}
                deleteHandler={this.deleteHandler}
                saveHandler={this.saveHandler}
              />
            );
          })
        : [];

    let temp2 =
      data &&
      data.content &&
      data.status.code === 2000
        ? data.content.map((e,i) => {
            return (
              <SkillCard
                key={i}
                id={i}
                data={e}
                deleteHandler={this.deleteHandler}
                saveHandler={this.saveHandler}
              />
            );
          })
        : [];

    this.setState({
      ...this.state,
      cards: temp1,
      cardsToModal: temp2,
    });
  }

  async componentDidUpdate() {}

  deleteHandler = () => {
    this.setState({
      ...this.state,
      showEditor: false,
      editorState: ContentUtils.clear(this.state.editorState),
    });
  };

  saveHandler = (newSkill, id) => {
    this.setState({
      ...this.state,
      showEditor: false,
    });
  };

  editHandler = () => {
    this.setState({
      ...this.state,
      showEditor: true,
    });
  };

  // addhandler only create a empty cards in state.cards
  // update the data in server and local happens in saveHandler
  addHandler = id => {
    let copy;
    this.state.cards.forEach((e, i) => {
      if (e.props.id == id) {
        copy = e;
      }
    });
    // const plainText = JSON.stringify(copy.props.data);
    const n = copy.props.data.name;
    const manullyParsed = n + "\n";

    // const parsed = plainText.replace(/{/g, '\b').replace(/}/g, '').replace(/"/g, ' ').replace(/,/g, '\n');
    // console.log(manullyParsed);
    // console.log(plainText)
    const newState = ContentUtils.insertText(
      this.state.editorState,
      manullyParsed
    );
    this.setState({
      ...this.state,
      showEditor: true,
      editorState: newState,
    });
  };

  handleEditorChange = editorState => {
    this.setState({ editorState });
  };

  render() {
    let toShow;
    if (this.state.showEditor) {
      toShow = (
        <div className={classes.Skill}>
          <div className={classes.row}>
            <p className={classes.SectionName}>{text.skill}</p>
            <Dropdown
              save={this.saveHandler}
              delete={this.deleteHandler}
              editing
            />
          </div>
          <BraftEditor
            contentClassName={classes.editorContent}
            className={classes.editor}
            value={this.state.editorState}
            onChange={this.handleEditorChange}
          />
          <div>
            <ModalPage
              buttonName={text.addSkill}
              requestID={this.props.requestID}
              cards={this.state.cardsToModal}
              addHandler={this.addHandler}
            />
          </div>
        </div>
      );
    } else {
      const plainText = this.state.editorState.toHTML();
      const dangerousText = (
        <div dangerouslySetInnerHTML={{ __html: plainText }} />
      );
      toShow = (
        <div className={classes.Skill}>
          <div className={classes.row}>
            <p className={classes.SectionName}>{text.skill}</p>
            <Dropdown edit={this.editHandler} delete={this.deleteHandler} />
          </div>
          <div style={{ width: "90%" }}>{dangerousText}</div>
          <div>
            <ModalPage
              buttonName={text.addSkill}
              requestID={this.props.requestID}
              cards={this.state.cardsToModal}
              addHandler={this.addHandler}
            />
          </div>
        </div>
      );
    }
    return toShow;
  }
}

export default skill;
