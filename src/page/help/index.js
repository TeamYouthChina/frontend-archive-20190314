import React from 'react';
import {Redirect} from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBCollapse,
  MDBCollapseHeader,
  MDBContainer,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBRow,
  MDBTabContent,
  MDBTabPane
} from 'mdbreact';

import BraftEditor from 'braft-editor'

import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';
import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';

import {getAsync} from '../../tool/api-helper';

export class Help extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftSelector: '0',
      rightSelector: '0'
    };
    this.text = Help.i18n[languageHelper()];
  }

  async componentDidMount() {
    this.setState({
      backend: await getAsync('/help')
    });
  }


  render() {
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    if (pathname) {
      return (<Redirect to={pathname}/>);
    }
    return (this.state.backend && this.state.backend.content) ? (
      <MDBContainer
        fluid
        style={{padding: 0}}
      >
        <Header/>
        <MDBRow center>
          <MDBCol md="10" lg="12" xl="8" className="pt-3">
            <MDBRow center>
              <MDBCol size="3">
                <MDBNav pills color="primary" className="flex-column" style={{paddingTop: '2rem'}}>
                  {
                    this.state.backend.content.categoryList ? this.state.backend.content.categoryList.map((item, index) => {
                      return (
                        <MDBNavItem key={index}>
                          <MDBNavLink
                            className={this.state.leftSelector === index.toString() ? 'active' : ''}
                            onClick={() => {
                              this.setState((prevState) => {
                                if (prevState.leftSelector !== index) {
                                  return {
                                    leftSelector: index.toString(),
                                    rightSelector: '0'
                                  };
                                }
                              });
                            }}
                            to="#"
                          >
                            {item.name}
                          </MDBNavLink>
                        </MDBNavItem>
                      );
                    }) : null
                  }
                </MDBNav>
              </MDBCol>
              <MDBCol size="9" className="align-top">
                <MDBTabContent
                  style={{paddingTop: '0px', marginTop: '0px'}}
                  activeItem={this.state.leftSelector}
                >
                  {
                    this.state.backend.content.categoryList ? this.state.backend.content.categoryList.map((item, index) => {
                      return (
                        <MDBTabPane tabId={index.toString()} key={index}>
                          <div className="md-accordion mt-5">
                            {
                              item.faqList ? item.faqList.map((item, index) => {
                                return (
                                  <MDBCard className="mt-3" key={index}>
                                    <MDBCollapseHeader
                                      onClick={() => {
                                        this.setState((prevState) => ({
                                          rightSelector: prevState.rightSelector !== index.toString() ? index.toString() : ""
                                        }));
                                      }}
                                    >
                                      {item.question}
                                      <i
                                        className={this.state.rightSelector === index.toString() ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down"}
                                      />
                                    </MDBCollapseHeader>
                                    <MDBCollapse
                                      id={index.toString()}
                                      isOpen={this.state.rightSelector}
                                    >
                                      <MDBCardBody>
                                        <div className="output-content"
                                             dangerouslySetInnerHTML={{ __html: BraftEditor.createEditorState(item.answer.richText).toHTML()}}>
                                        </div>
                                        
                                      </MDBCardBody>
                                    </MDBCollapse>
                                  </MDBCard>
                                );
                              }) : null
                            }
                          </div>
                        </MDBTabPane>
                      );
                    }) : null
                  }
                </MDBTabContent>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <Footer/>
      </MDBContainer>
    ) : null;
  }
}

Help.i18n = [
  {},
  {}
];
