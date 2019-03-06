import React, { Component } from "react";

import classes from "./MainBody.module.css";
import ResumeButtons from "../ResumeButtons/ResumeButtons";
import BasicInfo from "../BasicInfo/BasicInfo";
import Education from "../Education/Education";
import WorkExperience from "../WorkExperience/WorkExperience";
import Certifications from "../Certification/Certification";
import SocialActivicies from "../SocialActivity/SocialActivity";
import Projects from "../Project/Project";
import Skills from "../Skill/Skill";
import { getAsync } from "../../../../tool/api-helper";

class MainBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestID: this.props.requestID,
      requestedData: this.props.data,
    };
  }

  componentWillMount() {
    this.setState({ requestID: this.props.match.params.id });
  }

  async componentDidMount() {
    // using mock if no second argument
    // let data = await getAsync("/applicants/" + this.state.requestID, true);
    // console.log(data);
    // this.setState({ requestedData: data });
  }

  render() {
    let toShow = (
      <div>
        <p>no such data</p>
      </div>
    );

    // let dataForBasicInfo = null;
    // if (
    //   this.state.requestedData &&
    //   this.state.requestedData.content &&
    //   this.state.requestedData.status.code === 2000
    // ) {
    //   dataForBasicInfo = {
    //     name: this.state.requestedData.content.name
    //       ? this.state.requestedData.content.name
    //       : "no name given",
    //     DOB: this.state.requestedData.content.DOB
    //       ? this.state.requestedData.content.DOB
    //       : "no DOB given",
    //     gender: this.state.requestedData.content.gender
    //       ? this.state.requestedData.content.gender
    //       : "no gender given",
    //     email: this.state.requestedData.content.contacts.email
    //       ? this.state.requestedData.content.contacts.email
    //       : "no email given",
    //     phone: this.state.requestedData.content.contacts.phonenumbers
    //       ? this.state.requestedData.content.contacts.phonenumbers
    //       : "no phone given",
    //   };

    //   toShow = (
    //     <div className={classes.MainBody}>
    //       {/* <ResumeButtons/> */}
    //       <BasicInfo data={dataForBasicInfo} />
    //       <Education requestID={this.state.requestID} />
    //       <WorkExperience requestID={this.state.requestID} />
    //       <Certifications requestID={this.state.requestID} />
    //       <SocialActivicies requestID={this.state.requestID} />
    //       <Projects requestID={this.state.requestID} />
    //       <Skills requestID={this.state.requestID} />
    //     </div>
    //   );
    // }

    toShow = (
      <div className={classes.MainBody}>
        {/* <ResumeButtons/> */}
        <BasicInfo requestID={this.state.requestID} />
        <Education requestID={this.state.requestID} />
        <WorkExperience requestID={this.state.requestID} />
        <Certifications requestID={this.state.requestID} />
        <SocialActivicies requestID={this.state.requestID} />
        <Projects requestID={this.state.requestID} />
        <Skills requestID={this.state.requestID} />
      </div>
    );
    return toShow;
  }
}

export default MainBody;
