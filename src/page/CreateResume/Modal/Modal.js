import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import BraftEditor from "braft-editor";

import { languageHelper } from "../../../tool/language-helper";

const translation = [
    {
      title: "选择一项加入你的简历",
      cancel: "取消"
    },
    {
      title: "Choose To Add In Your Resume",
      cancel: "Cancel"
    },
  ];
  const text = translation[languageHelper()];

class ModalPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      editorState: BraftEditor.createEditorState(null),
      newCards: [],
      selected: -1,
    };
  }

  componentDidMount() {
    // this changed cards in education
    let temp = this.props.cards.map((e, i) =>
      React.cloneElement(e, { toggle: this.toggle })
    );
    this.setState({ ...this.state, newCards: temp }, () => {});
  }

  componentDidUpdate() {}

  toggle = (id, event) => {
    this.setState(
      {
        modal: !this.state.modal,
        selected: id,
      },
      () => {
        if (!isNaN(id)) {
          this.props.addHandler(id);
        }
      }
    );
  };

  render() {
    let temp = this.props.cards.map((e, i) =>
      React.cloneElement(e, { toggle: this.toggle, modal: true })
    );
    return (
      <MDBContainer>
        <MDBRow center>
          <MDBBtn flat onClick={this.toggle}>
            {this.props.buttonName}
          </MDBBtn>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="lg">
            <MDBModalHeader toggle={this.toggle}>
              {text.title}
            </MDBModalHeader>
            <MDBModalBody>{temp}</MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.toggle}>
                {text.cancel}
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default ModalPage;
