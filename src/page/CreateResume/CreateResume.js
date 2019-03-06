import React, { Component } from "react";

import { Header } from "../../general-component/header/header";
import MainBody from "./MainBody/MainBody";
import { getAsync } from "../../tool/api-helper";
import classes from "./CreateResume.module.css";
import Topbar from "../OnlineApplication/Components/TopBar/topBar";

class CreateResume extends Component {
  state = {
    requestID: null,
  };

  componentWillMount() {
    this.setState({ requestID: this.props.match.params.id });
    console.log(this.state.requestID);
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
        <Topbar text={["My Resumes", "Edit Resume"]} />
        <MainBody requestID={this.state.requestID} />
      </div>
    );

    return toShow;
  }
}

export default CreateResume;
