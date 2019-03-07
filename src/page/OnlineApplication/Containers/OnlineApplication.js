import React, { Component } from "react";
import { MDBBtn } from "mdbreact";

import { languageHelper } from "../../../tool/language-helper";
import TopBar from "../Components/TopBar/topBar";
import Prompts from "../Components/Prompts/prompts";
import Resumes from "../Components/Resumes/resumes";
import { Header } from "../../../general-component/header/header";
import { Footer } from "../../../general-component/footer";
import Submit from "../Components/Submit/submit";

import classes from "./OnlineApplication.module.css";

// dummy resume icon
// problem: cannot access resourses outside of src folder
import resumeIcon from "../../assets/icons8-overview-50.png";

const translation = [
  {
    positions: "职位列表",
    positionDetail: "职位详情",
    chooseResume: "选择简历",
    pleaseChooseYourResume: "请选择你的简历",
    importantToHaveGoodResume: "选择一份合适的简历是至关重要的",
    addResume: "添加简历",
    subSuc: "简历投递成功",
    backJobDes: "返回工作详情",
    exploreM: "探索更多"
  },
  {
    positions: "Positions",
    positionDetail: "Position Detail",
    chooseResume: "Choose your resume",
    pleaseChooseYourResume: "Please choose your resume",
    importantToHaveGoodResume:
      "It is very important to select a fitting resuem",
    addResume: "Add Resume",
    subSuc: "Sumbit Was Successful",
    backJobDes: "GO BACK TO JOB DESCRIPTION",
    exploreM: "EXPLORE MORE"
  },
];

class OnlineApplication extends Component {
  constructor(props) {
    super(props);
    this.text = translation[languageHelper()];
    this.state = {
      selected: -1, // record which resume is selected
      addingResume: false, // if adding a resume?
      requestID: null,
      submitSucceed: false,
    };
  }

  componentWillMount = () => {
    this.setState({ requestID: this.props.match.params.id });
  };

  componentDidMount = () => {
    // api get resumes
  };

  componentDidUpdate = () => {
    // update resumes, and update databases
    console.log(
      "selected has been updated which is now " + this.state.selected + " !"
    );
  };

  exportHandler = () => {
    // TODO
    console.log("export clicked");
  };

  deleteHandler = () => {
    // TODO
    console.log("delete clicked");
  };

  addResumeHandler = () => {
    // TODO
    console.log("adding resume");
    this.setState({ addingResume: true, selected: -1 });
  };

  submitHandler = () => {
    // TODO
    // this.props.history.goBack();
    this.setState({ ...this.state, submitSucceed: true });
  };

  selectHandler = event => {
    this.setState({ selected: event.target.id, addingResume: false });
    console.log("selecting " + event.target.id + " !");
  };

  typeResumeHander = () => {
    console.log("typing resume");
  };

  uploadResuemHandler = () => {
    console.log("uploading resume");
  };

  render() {
    let active = this.state.selected >= 0 ? true : false;
    let toShow = null;
    if (this.state.submitSucceed) {
      toShow = (
        <div className={classes.main}>
          <Header className={classes.Header} />
          <div className={classes.ToGrow}>
            <div className={classes.OneHTwoB}>
              <h1>{this.text.subSuc}</h1>
              <MDBBtn
                color="primary"
                onClick={() => {
                  this.props.history.goBack();
                }}
              >
                {this.text.backJobDes}
              </MDBBtn>
              <MDBBtn
                color="primary"
                onClick={() => {
                  this.props.history.push("/choice");
                }}
              >
                {this.text.exploreM}
              </MDBBtn>
            </div>
          </div>
          <Footer className={classes.Footer} />
        </div>
      );
    } else {
      toShow = (
        <div className={classes.main}>
          <Header className={classes.Header} />
          <div className={classes.ToGrow}>
            <TopBar
              text={[
                this.text.positions,
                this.text.positionDetail,
                this.text.chooseResume,
              ]}
            />
            <Prompts trans={this.text} />
            <div className={classes.ResumesDiv}>
              <Resumes
                trans={this.text}
                exportClicked={this.exportHandler}
                deleteClicked={this.deleteHandler}
                addResumeClicked={this.addResumeHandler}
                selectHandler={this.selectHandler}
                selected={this.state.selected}
                addingResume={this.state.addingResume}
                typeResumeHander={this.typeResumeHander}
                uploadResuemHandler={this.uploadResuemHandler}
                requestID={this.state.requestID}
              />
            </div>

            <Submit active={active} clicked={this.submitHandler} />
          </div>
          <Footer className={classes.Footer} />
        </div>
      );
    }

    return toShow;
  }
}

export default OnlineApplication;
