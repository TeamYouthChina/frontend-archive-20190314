import React from 'react';

import {
  Col, MDBCol, Row,
  MDBAvatar,
  MDBBtn,
  MDBCard, MDBCardBody, MDBCardImage, MDBCardUp,
  MDBIcon,
  MDBMask,
  MDBRow,
  MDBView,
  Progress,
  View,
  Mask,
  MDBContainer,
  MDBTabPane, MDBTabContent,
  MDBNav, MDBNavItem, MDBNavLink,
  MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption
} from 'mdbreact';
import {languageHelper} from "../../tool/language-helper";
import {Header} from '../../general-component/header';
import {Footer} from "../../general-component/footer";

export class HR extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backend: null,

    };
    this.text = HR.i18n[languageHelper()];
  }

  state = {
    activeItemClassicTabs1: "1",
  }

  toggleClassicTabs1 = tab => () => {
    if (this.state.activeItemClassicTabs1 !== tab) {
      this.setState({
        activeItemClassicTabs1: tab
      });
    }
  }

  componentWillMount() {
    let mockData =
      {
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
                  Profile
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#" className={this.state.activeItemClassicTabs1 === "2" ? "active" : ""}
                            onClick={this.toggleClassicTabs1("2")}>
                  Follow
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#" className={this.state.activeItemClassicTabs1 === "3" ? "active" : ""}
                            onClick={this.toggleClassicTabs1("3")}>
                  Contact
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#" className={this.state.activeItemClassicTabs1 === "4" ? "active" : ""}
                            onClick={this.toggleClassicTabs1("4")}>
                  Be Awesome
                </MDBNavLink>
              </MDBNavItem>
            </MDBNav>
            <MDBTabContent className="card" activeItem={this.state.activeItemClassicTabs1}>
              <MDBTabPane tabId="1">
                <MDBRow>
                  <span style={{marginTop: "7px", marginLeft: "0.5rem", marginRight: "0.5rem"}}>
                    Job
                  </span>
                  <MDBSelect multiple style={{marginTop: "0rem", marginBottom: "0rem", marginLeft: "0.5rem", marginRight: "0.5rem"}}>
                    <MDBSelectInput selected="Null"/>
                    <MDBSelectOptions>
                      <MDBSelectOption disabled>Default</MDBSelectOption>
                      <MDBSelectOption value="1">Option nr 1</MDBSelectOption>
                      <MDBSelectOption value="2">Option nr 2</MDBSelectOption>
                      <MDBSelectOption value="3">Option nr 3</MDBSelectOption>
                    </MDBSelectOptions>
                  </MDBSelect>

                  <span style={{marginTop: "7px", marginLeft: "0.5rem", marginRight: "0.5rem"}}>
                    Job
                  </span>
                  <MDBSelect multiple style={{marginTop: "0rem", marginBottom: "0rem", marginLeft: "0.5rem", marginRight: "0.5rem"}}>
                    <MDBSelectInput selected="Null"/>
                    <MDBSelectOptions>
                      <MDBSelectOption disabled>Default</MDBSelectOption>
                      <MDBSelectOption value="1">Option nr 1</MDBSelectOption>
                      <MDBSelectOption value="2">Option nr 2</MDBSelectOption>
                      <MDBSelectOption value="3">Option nr 3</MDBSelectOption>
                    </MDBSelectOptions>
                  </MDBSelect>
                  
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

HR.i18n = [
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


