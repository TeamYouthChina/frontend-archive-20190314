import React from "react";
import { MDBBtn } from "mdbreact";

import classes from "./submit.module.css";
import { languageHelper } from "../../../../tool/language-helper";

const translation = [
  {
    submit: "提交",
  },
  {
    submit: "SUBMIT",
  },
];

const text = translation[languageHelper()];

const submit = props => {
  let button = (
    // <button disabled className={classes.submitButton} onClick={props.clicked}>
    //   {text.submit}
    // </button>
    <MDBBtn
      disabled
      color="indigo"
      onClick={props.clicked}
      className={classes.submitButton}
    >
      {text.submit}
    </MDBBtn>
  );
  if (props.active) {
    button = (
      // <button className={classes.submitButton} onClick={props.clicked}>
      //   {text.submit}
      // </button>
      <MDBBtn
        color="indigo"
        onClick={props.clicked}
        className={classes.submitButton}
      >
        {text.submit}
      </MDBBtn>
    );
  }

  return <div className={classes.control}>{button}</div>;
};

export default submit;
