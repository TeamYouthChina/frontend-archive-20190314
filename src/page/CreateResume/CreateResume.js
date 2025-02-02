import React, { Component } from "react";

import { Header } from "../../general-component/header/header";
import MainBody from "./MainBody/MainBody";
import { getAsync } from "../../tool/api-helper";
import classes from "./CreateResume.module.css";
import Topbar from "../OnlineApplication/Components/TopBar/topBar";
import { languageHelper } from "../../tool/language-helper";

const translation = [
  {
    saveOnProfile: "保存简历",
    editResume: "编辑简历",
    myResume: "我的简历",
  },
  {
    saveOnProfile: "SAVE RESUME",
    editResume: "Edit Your Resume",
    myResume: "My Resumes",
  },
];

const transText = translation[languageHelper()];

class CreateResume extends Component {
  state = {
    requestID: null,
  };

  componentWillMount() {
    this.setState({ requestID: this.props.match.params.id }, () => {
      console.log(
        `the id i got from the url is ${
          this.state.requestID
        }, there would be an error if the id in the url is 1 because 1 is the admin and has no data on the server, I should get anything other than 1`
      );
    });
  }

  componentDidMount() {}

  render() {
    let toShow = (
      <div className={classes.ProfileHome}>
        <Header />
        <p>no such data</p>
      </div>
    );

    toShow = (
      <div className={classes.ProfileHome}>
        <Header />
        <Topbar text={[transText.myResume, transText.editResume]} />
        <MainBody text={transText} requestID={this.state.requestID} />
      </div>
    );

    return toShow;
  }
}

export default CreateResume;
