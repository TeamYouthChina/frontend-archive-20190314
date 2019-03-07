import React, { Component } from "react";
import { MDBBtn } from "mdbreact";
import {withRouter} from 'react-router-dom'

import classes from "./MainBody.module.css";
import BasicInfo from "../BasicInfo/BasicInfo";
import Education from "../Education/Education";
import WorkExperience from "../WorkExperience/WorkExperience";
import Certifications from "../Certification/Certification";
import SocialActivicies from "../SocialActivity/SocialActivity";
import Projects from "../Project/Project";
import Skills from "../Skill/Skill";
import Topbar from "../../OnlineApplication/Components/TopBar/topBar"


class MainBody extends Component {
  bRef = React.createRef();
  eRef = React.createRef();
  wRef = React.createRef();
  cRef = React.createRef();
  sRef = React.createRef();
  pRef = React.createRef();
  skillsRef = React.createRef();
  // dataForBasicInfo = {
  //   name: this.props.data.name ? this.props.data.name : "no name given",
  //   DOB: this.props.data.DOB ? this.props.data.DOB : "no DOB given",
  //   gender: this.props.data.gender ? this.props.data.gender : "no gender given",
  //   email: this.props.data.contacts.email
  //     ? this.props.data.contacts.email
  //     : "no email given",
  //   phone: this.props.data.contacts.phonenumbers
  //     ? this.props.data.contacts.phonenumbers
  //     : "no phone given",
  // };

  state = {};

  submitResumeHandler = () => {
    let resume = "";
    // resume = resume.concat(
    //   "<p>" +
    //     this.dataForBasicInfo.name +
    //     "<br/>" +
    //     this.dataForBasicInfo.DOB +
    //     "<br/>" +
    //     this.dataForBasicInfo.gender +
    //     "<br/>" +
    //     this.dataForBasicInfo.email +
    //     "<br/>" +
    //     this.dataForBasicInfo.phone +
    //     "</p>"
    // );
    // resume =
    //   this.wRef.current.state.editorState.toHTML() == "<p></p>"
    //     ? resume
    //     : resume.concat(this.wRef.current.state.editorState.toHTML());
    // resume =
    //   this.cRef.current.state.editorState.toHTML() == "<p></p>"
    //     ? resume
    //     : resume.concat(this.cRef.current.state.editorState.toHTML());
    // resume =
    //   this.sRef.current.state.editorState.toHTML() == "<p></p>"
    //     ? resume
    //     : resume.concat(this.sRef.current.state.editorState.toHTML());
    // resume =
    //   this.eRef.current.state.editorState.toHTML() == "<p></p>"
    //     ? resume
    //     : resume.concat(this.eRef.current.state.editorState.toHTML());
    // resume =
    //   this.pRef.current.state.editorState.toHTML() == "<p></p>"
    //     ? resume
    //     : resume.concat(this.pRef.current.state.editorState.toHTML());
    // resume =
    //   this.skillsRef.current.state.editorState.toHTML() == "<p></p>"
    //     ? resume
    //     : resume.concat(this.skillsRef.current.state.editorState.toHTML());
    // console.log(resume);
    // post this resume to server
    this.props.history.goBack();
  };

  render() {
    console.log(this.props.text.editResume, this.props.text.saveOnProfile)
    return (
      <div className={classes.MainBody}>
        <h1 className={classes.Title}>{this.props.text.editResume}</h1>
        <div className={classes.Buttons}>
          <MDBBtn color="indigo" onClick={this.submitResumeHandler}>
            {this.props.text.saveOnProfile}
          </MDBBtn>
          {/* <MDBBtn color="indigo" onClick={this.submitResumeHandler}>
            Create PDF
          </MDBBtn> */}
        </div>
        <BasicInfo requestID={this.props.requestID} ref={this.bRef} />
        <Education requestID={this.props.requestID} ref={this.eRef} />
        <WorkExperience requestID={this.props.requestID} ref={this.wRef} />
        <Certifications requestID={this.props.requestID} ref={this.cRef} />
        <SocialActivicies requestID={this.props.requestID} ref={this.sRef} />
        {/* <Projects requestID={this.props.requestID} ref={this.pRef} /> */}
        <Skills requestID={this.props.requestID} ref={this.skillsRef} />
      </div>
    );
  }
}

export default withRouter(MainBody);
