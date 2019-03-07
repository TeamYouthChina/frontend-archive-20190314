// this page is not using nwo

import React from "react";
import { Redirect } from "react-router-dom";

import { Header } from "../../general-component/header/header";
import { Footer } from "../../general-component/footer";
import { languageHelper } from "../../tool/language-helper";
import { removeUrlSlashSuffix } from "../../tool/remove-url-slash-suffix";
import Resumes from "../OnlineApplication/Components/Resumes/resumes";
import classes from "./index.module.css";

export class MyResume extends React.Component {
  constructor(props) {
    super(props);
    this.text = MyResume.i18n[languageHelper()];
    this.state = {
      modal: {
        show: false,
        content: null,
      },
    };
  }

  async componentDidMount() {}

  toggleModal = id => {
    this.setState((prevState,props)=>({
      ...prevState,
      modal: {
        show: !prevState.modal.show,
        content: id,
      },
    }));
  };

  render() {
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    if (pathname) {
      return <Redirect to={pathname} />;
    }
    console.log(this.state.modal)
    return (
      <div>
        <Header />
        {this.state.modal.show ? (
          <div className={classes.Modal} />
        ) : (
          <div />
        )}
        <div className={classes.MainBox}>
          <div className={classes.ResumeBox}>
            <Resumes toggleModal={this.toggleModal} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

MyResume.i18n = [{}, {}];
