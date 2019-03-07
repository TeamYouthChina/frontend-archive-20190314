import React, { Component } from "react";
import { MDBBtn } from "mdbreact";

import EducationCard from "./EducationCard/EducationCard";
import classes from "./Education.module.css";
import { getAsync } from "../../../tool/api-helper";
import ModalPage from "../Modal/Modal";
import BraftEditor from "braft-editor";
import Dropdown from "../Dropdown/Dropdown";
import { ContentUtils } from "braft-utils";
import { languageHelper } from "../../../tool/language-helper";

const translation = [
  {
    education: "教育",
    addEducation: "+ 添加教育经历",
    noEducation: "无教育信息",
  },
  {
    education: "Education",
    addEducation: "+ Add Education",
    noEducation: "No Education",
  },
];

const text = translation[languageHelper()];

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: Array(),
      cardsToModal: [],
      editorState: BraftEditor.createEditorState(),
      showEditor: false,
    };
    this.date = null;
  }

  // get educations data set requestedData and cards in state
  async componentDidMount() {
    let data = await getAsync(
      "/applicants/" + this.props.requestID + "/educations",
      true
    );
    console.log(data)
    let temp1 =
      data &&
      data.content &&
      data.content.educations &&
      data.status.code === 2000
        ? data.content.educations.map(e => {
            return (
              <EducationCard
                key={e.id}
                id={e.id}
                data={e}
                deleteHandler={this.deleteHandler}
                saveHandler={this.saveHandler}
              />
            );
          })
        : Array();

    let temp2 =
      data &&
      data.content &&
      data.content.educations &&
      data.status.code === 2000
        ? data.content.educations.map(e => {
            return (
              <EducationCard
                key={e.id}
                id={e.id}
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

  // save data locally and send back to server
  saveHandler = () => {
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

  addHandler = id => {
    let copy;
    this.state.cards.forEach((e, i) => {
      if (e.props.id == id) {
        copy = e;
      }
    });
    // const plainText = JSON.stringify(copy.props.data);
    const u = copy.props.data.university;
    const m = copy.props.data.major;
    const d = copy.props.data.degree;
    const b = copy.props.data.duration.begin;
    const e = copy.props.data.duration.end;
    const l = copy.props.data.location;
    const n = copy.props.data.note;
    const manullyParsed =
      u + " " + m + "\n" + d + "\n" + b + " " + e + "\n" + l + "\n" + n + "\n";

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
        <div className={classes.Education}>
          <div className={classes.row}>
            <p className={classes.SectionName}>{text.education}</p>
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
              buttonName={text.addEducation}
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
      // console.log(plainText);
      toShow = (
        <div className={classes.Education}>
          <div className={classes.row}>
            <p className={classes.SectionName}>{text.education}</p>
            <Dropdown edit={this.editHandler} delete={this.deleteHandler} />
          </div>
          <div style={{ width: "90%" }}>{dangerousText}</div>
          <div>
            <ModalPage
              buttonName={text.addEducation}
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

export default Education;
