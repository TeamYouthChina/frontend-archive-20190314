import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  Col, MDBBtn, MDBCol, MDBIcon, MDBModal, MDBModalBody, MDBRow, Row, MDBAvatar,
  MDBSelect, MDBSelectInput, MDBSelectOption, MDBSelectOptions
} from 'mdbreact';

import {languageHelper} from '../tool/language-helper';

export class MultipleSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backend: null,
      modal15: false,
      tick: false
    };
    this.text = MultipleSelect.i18n[languageHelper()];
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }


  componentWillMount() {
    let mockData =
      {
        name: 'Name',
        defaultoption: 'Default Option',
        option1: 'Option 1',
        option2: 'Option 2',
        option3: 'Option 3',
        jobname: '数据分析实习(2019 Summer), GE 通用电气',
        jobtype: '实习（3月-6月）',
        scale: '02/01/2019',
        location: '上海',
        status: {
          code: 2000
        }
      };
    this.setState(() => {
      return {backend: mockData};
    });
  }

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        <span style={{marginTop: "7px", marginLeft: "0.5rem", marginRight: "0.5rem"}}>
          {this.state.backend.name}
        </span>
        <MDBSelect multiple
                   style={{marginTop: "0rem", marginBottom: "0rem", marginLeft: "0.5rem", marginRight: "0.5rem"}}>
          <MDBSelectInput selected="Null"/>
          <MDBSelectOptions>
            <MDBSelectOption disabled>{this.state.backend.defaultoption}</MDBSelectOption>
            <MDBSelectOption value="1">{this.state.backend.option1}</MDBSelectOption>
            <MDBSelectOption value="2">{this.state.backend.option2}</MDBSelectOption>
            <MDBSelectOption value="3">{this.state.backend.option3}</MDBSelectOption>
          </MDBSelectOptions>
        </MDBSelect>
      </div>
    ) : null;
  }
}

MultipleSelect.i18n = [
  {},
  {},
];
