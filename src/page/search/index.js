import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink
} from 'mdbreact';

import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';
import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.text = Search.i18n[languageHelper()];
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

  render() {
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    if (pathname) {
      return (<Redirect to={pathname}/>);
    }
    return (
      <MDBContainer
        fluid
        style={{padding: 0}}
      >
        <Header/>
        <MDBRow center>
          <MDBCol md="12" lg="10" xl="8">
            <img
              alt="aligment"
              className="rounded mx-auto d-block"
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            />
            <MDBInput label={this.text.search}/>
            <MDBContainer>
              <div className="classic-tabs">
                <MDBNav classicTabs color="cyan">
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={this.state.activeItemClassicTabs1 === "1" ? "active" : ""}
                      onClick={this.toggleClassicTabs1("1")}>
                      Profile
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={this.state.activeItemClassicTabs1 === "2" ? "active" : ""}
                      onClick={this.toggleClassicTabs1("2")}>
                      Follow
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#"
                      className={this.state.activeItemClassicTabs1 === "3" ? "active" : ""}
                      onClick={this.toggleClassicTabs1("3")}>
                      Contact
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#" className={this.state.activeItemClassicTabs1 === "4" ? "active" : ""}
                      onClick={this.toggleClassicTabs1("4")}>
                      Be Awesome
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent className="card" activeItem={this.state.activeItemClassicTabs1}>
                  <MDBTabPane tabId="1">
                    <p>
                      Quisquam aperiam, pariatur. Tempora, placeat ratione
                      porro voluptate odit minima. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Nihil odit magnam minima,
                      soluta doloribus reiciendis molestiae placeat unde eos
                      molestias.
                    </p>
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
          </MDBCol>
        </MDBRow>

        <Footer/>
      </MDBContainer>
    );
  }
}

Search.i18n = [
  {},
  {}
];

