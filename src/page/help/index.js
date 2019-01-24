import React from 'react';
import {Redirect} from 'react-router-dom';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard, MDBCardBody, MDBCardTitle, MDBCardText,
  MDBTabPane, MDBTabContent,
  MDBNav, MDBNavItem, MDBNavLink, MDBIcon,
  MDBCollapse, MDBCollapseHeader
} from 'mdbreact';

import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';
import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';

export class Help extends React.Component {
  constructor(props) {
    super(props);
    this.text = Help.i18n[languageHelper()];
  }

  state = {
    activeItemVerticalPills: "1",
    collapseID: "collapse3"
  }

  toggleVerticalPills = tab => () => {
    if (this.state.activeItem3 !== tab) {
      this.setState({
        activeItemVerticalPills: tab
      });
    }
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    const {collapseID} = this.state;
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
        <MDBRow>
          <MDBCol md="7" className="offset-md-2 pt-3">
            <MDBContainer>
              <MDBRow>
                <MDBCol md="3">
                  <MDBNav pills color="primary" className="flex-column" style={{paddingTop: '2rem'}}>
                    <MDBNavItem>
                      <MDBNavLink to="#" className={this.state.activeItemVerticalPills === "1" ? "active" : ""}
                                  onClick={this.toggleVerticalPills("1")}>
                        Downloads
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#" className={this.state.activeItemVerticalPills === "2" ? "active" : ""}
                                  onClick={this.toggleVerticalPills("2")}>
                        Orders & invoices
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#" className={this.state.activeItemVerticalPills === "3" ? "active" : ""}
                                  onClick={this.toggleVerticalPills("3")}>
                        Billing Details
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNav>
                </MDBCol>
                <MDBCol md="9" className="align-top" >
                  <MDBTabContent style={{paddingTop: '0px' ,marginTop:'0px'}} activeItem={this.state.activeItemVerticalPills}>
                    <MDBTabPane tabId="1">
                      <div className="md-accordion mt-5">
                        <MDBCard className="mt-3">
                          <MDBCollapseHeader onClick={this.toggleCollapse("collapse1")}>
                            Collapsible Group Item #1
                            <i
                              className={collapseID === "collapse1" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down"}/>
                          </MDBCollapseHeader>
                          <MDBCollapse id="collapse1" isOpen={collapseID}>
                            <MDBCardBody>
                              Pariatur cliche reprehenderit, enim eiusmod high life accusamus
                              terry richardson ad squid. 3 wolf moon officia aute, non
                              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a
                              bird on it squid single-origin coffee nulla assumenda shoreditch
                              et. Nihil anim keffiyeh helvetica, craft beer labore wes
                              anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                              butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                              raw denim aesthetic synth nesciunt you probably haven&apos;t
                              heard of them accusamus labore sustainable VHS.
                            </MDBCardBody>
                          </MDBCollapse>
                        </MDBCard>

                        <MDBCard>
                          <MDBCollapseHeader onClick={this.toggleCollapse("collapse2")}>
                            Collapsible Group Item #2
                            <i
                              className={collapseID === "collapse2" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down"}/>
                          </MDBCollapseHeader>
                          <MDBCollapse id="collapse2" isOpen={collapseID}>
                            <MDBCardBody>
                              Anim pariatur cliche reprehenderit, enim eiusmod high life
                              accusamus terry richardson ad squid. 3 wolf moon officia aute,
                              non cupidatat skateboard dolor brunch. Food truck quinoa
                              nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla assumenda
                              shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                              wes anderson cred nesciunt sapiente ea proident. Ad vegan
                              excepteur butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt you probably
                              haven&apos;t heard of them accusamus labore sustainable VHS.
                            </MDBCardBody>
                          </MDBCollapse>
                        </MDBCard>

                        <MDBCard>
                          <MDBCollapseHeader onClick={this.toggleCollapse("collapse3")}>
                            Collapsible Group Item #3
                            <i
                              className={collapseID === "collapse3" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down"}/>
                          </MDBCollapseHeader>
                          <MDBCollapse id="collapse3" isOpen={collapseID}>
                            <MDBCardBody>
                              Anim pariatur cliche reprehenderit, enim eiusmod high life
                              accusamus terry richardson ad squid. 3 wolf moon officia aute,
                              non cupidatat skateboard dolor brunch. Food truck quinoa
                              nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla assumenda
                              shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                              wes anderson cred nesciunt sapiente ea proident. Ad vegan
                              excepteur butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt you probably
                              haven&apos;t heard of them accusamus labore sustainable VHS.
                            </MDBCardBody>
                          </MDBCollapse>
                        </MDBCard>
                      </div>
                    </MDBTabPane>
                    <MDBTabPane tabId="2">
                      <MDBCardBody>
                        <MDBCardTitle>Orders & Invoices</MDBCardTitle>
                        <MDBCardText>
                          "Hello? Is it me you're looking for?"
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBTabPane>
                    <MDBTabPane tabId="3">
                      <MDBCardBody>
                        <MDBCardTitle>Billing Details</MDBCardTitle>
                        <MDBCardText>
                          Time to pay
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBTabPane>
                  </MDBTabContent>
                </MDBCol>
              </MDBRow>
            </MDBContainer>

          </MDBCol>
        </MDBRow>

        <Footer/>
      </MDBContainer>
    );
  }
}

Help.i18n = [
  {},
  {}
];
