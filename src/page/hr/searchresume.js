import React from 'react';

import {
  Col, MDBCol, Row, MDBRow,
  MDBAvatar,
  MDBBtn,
  MDBCard, MDBCardBody, MDBCardImage, MDBCardUp, MDBCardTitle, MDBCardText,
  MDBIcon, MDBMask, MDBView, View, Mask,
  Input, MDBInput,
  Progress,
  MDBContainer,
  MDBTabPane, MDBTabContent,
  MDBNav, MDBNavItem, MDBNavLink,
  MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption,
} from 'mdbreact';
import {languageHelper} from "../../tool/language-helper";
import {Header} from '../../general-component/header/header';
import {Footer} from "../../general-component/footer";
import {MultipleSelect} from "../../general-component/multiple-select";

export class SearchResume extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backend: null,

    };
    this.text = SearchResume.i18n[languageHelper()];
  }

  componentWillMount() {
    let mockData =
      {
        position: 'Position',
        age: 'Age',

        id: 0,
        name: 'New Frontier Data',
        url: 'https://www.google.com',
        tabname: ['新应聘简历', '待处理的推荐简历', '意向沟通', '猎头服务'],
        jobname: '数据分析实习(2019 Summer), GE 通用电气',
        jobtype: '实习（3月-6月）',
        scale: '02/01/2019',
        location: '上海',
        requirements: ['Good knowledge of mysql', 'Good knowledge of programming lanuguage(C++, Java).', 'Purus sodales ultricies', 'skill4'],
        better: ['Good knowledge of programming lanuguage(C++, Java).', 'Purus sodales ultricies.', 'Vestibulum laoreet porttitor sem', 'Ac tristique libero volutpat at'],
        employNumber: '100',
        description: 'Through our family of apps and services, we are building a different kind of company that\n' +
          '                        connects billions of people around the world, gives them ways to share what matters most to\n' +
          '                        them, and helps bring people closer together. Whether we\'re creating new products or helping a\n' +
          '                        small business expand its reach, people at Facebook are builders at heart. Our global teams are\n' +
          '                        constantly iterating, solving problems, and working together to empower people around the world\n' +
          '                        to build community and connect in meaningful ways.',
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
        <Header/>

        <MDBContainer>
          <MDBRow center>
            <MDBCol>
              <form className="form-inline mt-4 mb-4">
                <div style={{width: '700px', marginRight: '1.5rem'}}>
                  <input className="form-control form-control-sm ml-3 w-100" type="text" placeholder="Search"
                         aria-label="Search"/>
                </div>
                <MDBBtn color="primary" style={{padding: '8px', fontSize: '11px'}}>Primary</MDBBtn>
                <MDBBtn outline color="primary"
                        style={{padding: '8px', fontSize: '11px', marginRight: '1.5rem'}}>Primary</MDBBtn>
                <MDBInput label="Option" type="checkbox" id="checkbox1"
                          style={{marginTop: "1rem", marginLeft: "0.5rem", marginRight: "0.5rem"}}/>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer>
          <MDBRow style={{marginBottom: "1rem", marginLeft: "1.5rem"}}>
            <MDBCol md='1' style={{marginTop: "0.5rem"}}>
              Name :
            </MDBCol>
            <MDBCol style={{paddingLeft: "0px"}}>
              <MDBBtn color="primary" rounded style={{
                marginTop: "0rem",
                marginBottom: "0rem",
                marginLeft: "0.5rem",
                marginRight: "0.5rem"
              }}>Primary</MDBBtn>
              <MDBBtn color="primary" rounded style={{
                marginTop: "0rem",
                marginBottom: "0rem",
                marginLeft: "0.5rem",
                marginRight: "0.5rem"
              }}>Primary</MDBBtn>
              <MDBBtn color="primary" rounded style={{
                marginTop: "0rem",
                marginBottom: "0rem",
                marginLeft: "0.5rem",
                marginRight: "0.5rem"
              }}>Primary</MDBBtn>

            </MDBCol>
          </MDBRow>

          <MDBRow style={{marginBottom: "1rem", marginLeft: "1.5rem"}}>
            <MDBCol md='1' style={{marginTop: "0.5rem"}}>
              Name :
            </MDBCol>
            <MDBCol style={{paddingLeft: "0px"}}>
              <MDBBtn color="primary" rounded style={{
                marginTop: "0rem",
                marginBottom: "0rem",
                marginLeft: "0.5rem",
                marginRight: "0.5rem"
              }}>Primary</MDBBtn>
              <MDBBtn color="primary" rounded style={{
                marginTop: "0rem",
                marginBottom: "0rem",
                marginLeft: "0.5rem",
                marginRight: "0.5rem"
              }}>Primary</MDBBtn>
              <MDBBtn color="primary" rounded style={{
                marginTop: "0rem",
                marginBottom: "0rem",
                marginLeft: "0.5rem",
                marginRight: "0.5rem"
              }}>Primary</MDBBtn>

            </MDBCol>
          </MDBRow>
          <MDBRow style={{marginBottom: "1rem", marginLeft: "1.5rem"}}>
            <MDBCol md='1' style={{marginTop: "0.5rem"}}>
              Name :
            </MDBCol>
            <MDBCol style={{paddingLeft: "0px"}}>
              <MDBBtn color="primary" rounded style={{
                marginTop: "0rem",
                marginBottom: "0rem",
                marginLeft: "0.5rem",
                marginRight: "0.5rem"
              }}>Primary</MDBBtn>
              <MDBBtn color="primary" rounded style={{
                marginTop: "0rem",
                marginBottom: "0rem",
                marginLeft: "0.5rem",
                marginRight: "0.5rem"
              }}>Primary</MDBBtn>
              <MDBBtn color="primary" rounded style={{
                marginTop: "0rem",
                marginBottom: "0rem",
                marginLeft: "0.5rem",
                marginRight: "0.5rem"
              }}>Primary</MDBBtn>

            </MDBCol>
          </MDBRow>
          <MDBRow style={{marginBottom: "1rem", marginLeft: "1.5rem"}}>
            <MDBCol md='1' style={{marginTop: "0.5rem"}}>
              Name :
            </MDBCol>
            <MDBCol style={{paddingLeft: "0px"}}>
              <MDBRow>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  style={{
                    width: "300px",
                    height: "30px",
                    marginTop: "0.5rem",
                    marginBottom: "0rem",
                    marginLeft: "0.5rem",
                    marginRight: "0.5rem"
                  }}
                />
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  style={{
                    width: "300px",
                    height: "30px",
                    marginTop: "0.5rem",
                    marginBottom: "0rem",
                    marginLeft: "0.5rem",
                    marginRight: "0.5rem"
                  }}
                />
              </MDBRow>
            </MDBCol>
          </MDBRow>

          <MDBRow style={{marginBottom: "1rem", marginLeft: "1.5rem"}}>
            <MDBCol md='1' style={{marginTop: "0.5rem"}}>
              Name :
            </MDBCol>
            <MDBCol style={{paddingLeft: "0px"}}>
              <MDBRow>
                <MDBSelect color="primary"
                           style={{
                             marginTop: "0rem",
                             marginBottom: "0rem",
                             marginLeft: "0.5rem",
                             marginRight: "0.5rem"
                           }}>
                  <MDBSelectInput selected="Choose your option"/>
                  <MDBSelectOptions>
                    <MDBSelectOption disabled>Choose your option</MDBSelectOption>
                    <MDBSelectOption value="1">Option nr 1</MDBSelectOption>
                    <MDBSelectOption value="2">Option nr 2</MDBSelectOption>
                    <MDBSelectOption value="3">Option nr 3</MDBSelectOption>
                    <MDBSelectOption value="4">Option nr 4</MDBSelectOption>
                    <MDBSelectOption value="5">Option nr 5</MDBSelectOption>
                  </MDBSelectOptions>
                </MDBSelect>
                <MDBSelect color="primary"
                           style={{
                             marginTop: "0rem",
                             marginBottom: "0rem",
                             marginLeft: "0.5rem",
                             marginRight: "0.5rem"
                           }}>
                  <MDBSelectInput selected="Choose your option"/>
                  <MDBSelectOptions>
                    <MDBSelectOption disabled>Choose your option</MDBSelectOption>
                    <MDBSelectOption value="1">Option nr 1</MDBSelectOption>
                    <MDBSelectOption value="2">Option nr 2</MDBSelectOption>
                    <MDBSelectOption value="3">Option nr 3</MDBSelectOption>
                    <MDBSelectOption value="4">Option nr 4</MDBSelectOption>
                    <MDBSelectOption value="5">Option nr 5</MDBSelectOption>
                  </MDBSelectOptions>
                </MDBSelect>
              </MDBRow>
            </MDBCol>
          </MDBRow>

        </MDBContainer>

        <Footer/>

      </div>
    ) : null;
  }
}

SearchResume.i18n = [
  {
    description: '职位描述',
    requirements: '职位要求',
    better: '加分项'
  },
  {
    description: 'Job Description',
    requirements: 'Candidate Requirements',
    better: 'Good to have'
  },
];


