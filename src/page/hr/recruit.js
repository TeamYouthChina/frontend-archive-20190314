import React from 'react';

import {
  Col, MDBCol, Row, MDBRow,
  MDBAvatar,
  MDBBtn,
  MDBCard, MDBCardBody, MDBCardImage, MDBCardUp,
  MDBIcon, MDBMask, MDBView, View, Mask,
  Input, MDBInput,
  Progress,
  MDBContainer,
  MDBTabPane, MDBTabContent,
  MDBFormInline,
  MDBNav, MDBNavItem, MDBNavLink,
  MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption,
} from 'mdbreact';
import {languageHelper} from "../../tool/language-helper";
import {Header} from '../../general-component/header';
import {Footer} from "../../general-component/footer";
import {MultipleSelect} from "../../general-component/multiple-select";

export class Recruit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backend: null,

    };
    this.text = Recruit.i18n[languageHelper()];
  }

  state = {
    activeItemClassicTabs1: "1",
    activeItemPills: "1",
  }

  toggleClassicTabs1 = tab => () => {
    if (this.state.activeItemClassicTabs1 !== tab) {
      this.setState({
        activeItemClassicTabs1: tab,
      });
    }
  }

  togglePills = tab => () => {
    if (this.state.activePills !== tab) {
      this.setState({
        activeItemPills: tab
      });
    }
  }

  componentWillMount() {
    let mockData =
      {
        position: 'Position',
        age: 'Age',

        tabname: ['社会招聘', '校园招聘', '海外人才招聘', '猎头职位'],
        innertabname: ['职位模板', '草稿职位'],
        heading: ['快速导入', '职位基本信息'],
        id: 0,
        name: 'New Frontier Data',
        url: 'https://www.google.com',
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
          <div className="classic-tabs">
            <MDBNav classicTabs color="cyan">
              <MDBNavItem>
                <MDBNavLink to="#" className={this.state.activeItemClassicTabs1 === "1" ? "active" : ""}
                            onClick={this.toggleClassicTabs1("1")}>
                  {this.state.backend.tabname[0]}
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#" className={this.state.activeItemClassicTabs1 === "2" ? "active" : ""}
                            onClick={this.toggleClassicTabs1("2")}>
                  {this.state.backend.tabname[1]}
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#" className={this.state.activeItemClassicTabs1 === "3" ? "active" : ""}
                            onClick={this.toggleClassicTabs1("3")}>
                  {this.state.backend.tabname[2]}
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#" className={this.state.activeItemClassicTabs1 === "4" ? "active" : ""}
                            onClick={this.toggleClassicTabs1("4")}>
                  {this.state.backend.tabname[3]}
                </MDBNavLink>
              </MDBNavItem>
            </MDBNav>
            <MDBTabContent className="card" activeItem={this.state.activeItemClassicTabs1}>
              <MDBTabPane tabId="1">

                <blockquote className="blockquote bq-primary"
                            style={{paddingTop: "0rem", paddingBottom: "0rem", margin: "0rem"}}>
                  <p className="bq-title">
                    {this.state.backend.heading[0]}
                  </p>
                </blockquote>

                <MDBRow>
                  <MDBContainer>
                    <MDBNav pills>
                      <MDBNavItem>
                        <MDBNavLink style={{color: "green"}} to="#"
                                    className={this.state.activeItemPills === "1" ? "active" : ""}
                                    onClick={this.togglePills("1")}>
                          {this.state.backend.innertabname[0]}
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink style={{color: "green"}} to="#"
                                    className={this.state.activeItemPills === "2" ? "active" : ""}
                                    onClick={this.togglePills("2")}>
                          {this.state.backend.innertabname[1]}
                        </MDBNavLink>
                      </MDBNavItem>
                    </MDBNav>
                    <MDBTabContent activeItem={this.state.activeItemPills}>
                      <MDBTabPane tabId="1">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Nihil odit magnam minima, soluta doloribus reiciendis
                          molestiae placeat unde eos molestias. Quisquam aperiam,
                          pariatur. Tempora, placeat ratione porro voluptate odit
                          minima.
                        </p>
                      </MDBTabPane>
                      <MDBTabPane tabId="2">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Nihil odit magnam minima, soluta doloribus reiciendis
                          molestiae placeat unde eos molestias. Quisquam aperiam,
                          pariatur. Tempora, placeat ratione porro voluptate odit
                          minima.
                        </p>
                      </MDBTabPane>
                    </MDBTabContent>
                  </MDBContainer>
                </MDBRow>
                <hr/>

                <blockquote className="blockquote bq-primary"
                            style={{paddingTop: "0rem", paddingBottom: "0rem", margin: "0rem"}}>
                  <p className="bq-title">
                    {this.state.backend.heading[1]}
                  </p>
                </blockquote>

                <MDBRow center className="offset-md-1 pt-3" style={{margin: "10px"}}>
                  <span style={{marginTop: "7px", marginLeft: "0.5rem", marginRight: "0.5rem"}}>
                    Name
                  </span>
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

                <MDBRow center className="offset-md-1 pt-3" style={{margin: "10px"}}>
                  <span style={{marginTop: "7px", marginLeft: "0.5rem", marginRight: "0.5rem"}}>
                    Name
                  </span>
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
                
              </MDBTabPane>
              <MDBTabPane tabId="2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Nihil odit magnam minima, soluta doloribus
                  reiciendis molestiae placeat unde eos molestias.
                  Quisquam aperiam, pariatur. Tempora, placeat ratione
                  porro voluptate odit minima.
                </p>
              </MDBTabPane>
              <MDBTabPane tabId="3">
                <p>
                  Quisquam aperiam, pariatur. Tempora, placeat ratione
                  porro voluptate odit minima. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Nihil odit magnam minima,
                  soluta doloribus reiciendis molestiae placeat unde eos
                  molestias.
                </p>
              </MDBTabPane>
              <MDBTabPane tabId="4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Nihil odit magnam minima, soluta doloribus
                  reiciendis molestiae placeat unde eos molestias.
                  Quisquam aperiam, pariatur. Tempora, placeat ratione
                  porro voluptate odit minima.
                </p>
              </MDBTabPane>
            </MDBTabContent>
          </div>
        </MDBContainer>

        <Footer/>
      </div>
    ) : null;
  }
}

Recruit.i18n = [
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


