import React, { Component } from "react";

import classes from "./BasicInfo.module.css";
import { getAsync } from "../../../tool/api-helper";
import { languageHelper } from "../../../tool/language-helper";

const translation = [
  {
    basicInfo: "基本信息",
    name: "姓名",
    dob: "生日",
    gender: "性别",
    email: "邮箱",
    phone: "电话",
  },
  {
    basicInfo: "Basic Info",
    name: "Name",
    dob: "Date of Birth",
    gender: "Gender",
    email: "Email",
    phone: "Phone Number",
  },
];

const text = translation[languageHelper()];
// this section has not api yet
class BasicInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {
        name: this.props.data.name,
        DOB: this.props.data.DOB,
        gender: this.props.data.gender,
        email: this.props.data.email,
        phone: this.props.data.phone,
      },
    };
    this.nameRef = React.createRef();
    this.DOBRef = React.createRef();
    this.genderRef = React.createRef();
    this.emailRef = React.createRef();
    this.phoneRef = React.createRef();
  }

  editHandler = e => {};

  saveHandler = () => {
    this.setState({
      ...this.state,
      personalInfo: {
        name: this.nameRef.current.value,
        DOB: this.DOBRef.current.value,
        gender: this.genderRef.current.value,
        email: this.emailRef.current.value,
        phone: this.phoneRef.current.value,
      },
    });
  };

  render() {
    let toShow = (
      <div className={classes.BasicInfo}>
        <div className={classes.Headline}>
          <p className={classes.SectionName}>{text.basicInfo}</p>
        </div>
        <div className={classes.row}>
          <p className={classes.AttributeName}>{text.name}</p>
          <input
            disabled
            type="text"
            defaultValue={this.props.data.name}
            ref={this.nameRef}
          />
        </div>
        <div className={classes.row}>
          <p className={classes.AttributeName}>{text.dob}</p>
          <input
            disabled
            type="text"
            defaultValue={this.props.data.DOB}
            ref={this.DOBRef}
          />
        </div>
        <div className={classes.row}>
          <p className={classes.AttributeName}>{text.gender}</p>
          <input
            disabled
            type="text"
            defaultValue={this.props.data.gender}
            ref={this.genderRef}
          />
        </div>
        <div className={classes.row}>
          <p className={classes.AttributeName}>{text.email}</p>
          <input
            disabled
            type="text"
            defaultValue={this.props.data.email}
            ref={this.emailRef}
          />
        </div>
        <div className={classes.row}>
          <p className={classes.AttributeName}>{text.phone}</p>
          <input
            disabled
            type="text"
            defaultValue={this.props.data.phone}
            ref={this.phoneRef}
          />
        </div>
      </div>
    );
    return toShow;
  }
}

export default BasicInfo;
