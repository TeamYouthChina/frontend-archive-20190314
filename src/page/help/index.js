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
                        新手
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#" className={this.state.activeItemVerticalPills === "2" ? "active" : ""}
                                  onClick={this.toggleVerticalPills("2")}>
                        注册
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#" className={this.state.activeItemVerticalPills === "3" ? "active" : ""}
                                  onClick={this.toggleVerticalPills("3")}>
                        简历
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#" className={this.state.activeItemVerticalPills === "4" ? "active" : ""}
                                  onClick={this.toggleVerticalPills("4")}>
                        职位
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#" className={this.state.activeItemVerticalPills === "5" ? "active" : ""}
                                  onClick={this.toggleVerticalPills("5")}>
                        客服
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#" className={this.state.activeItemVerticalPills === "6" ? "active" : ""}
                                  onClick={this.toggleVerticalPills("6")}>
                        青年
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#" className={this.state.activeItemVerticalPills === "7" ? "active" : ""}
                                  onClick={this.toggleVerticalPills("7")}>
                        影响
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#" className={this.state.activeItemVerticalPills === "8" ? "active" : ""}
                                  onClick={this.toggleVerticalPills("8")}>
                        隐私
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#" className={this.state.activeItemVerticalPills === "9" ? "active" : ""}
                                  onClick={this.toggleVerticalPills("9")}>
                        其他
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
                            发表的文章如何删除？
                            <i
                              className={collapseID === "collapse1" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down"}/>
                          </MDBCollapseHeader>
                          <MDBCollapse id="collapse1" isOpen={collapseID}>
                            <MDBCardBody>
                              点击文章右下角的小齿轮
                            </MDBCardBody>
                          </MDBCollapse>
                        </MDBCard>

                        <MDBCard>
                          <MDBCollapseHeader onClick={this.toggleCollapse("collapse2")}>
                            如何把问题和回答按时间排序？
                            <i
                              className={collapseID === "collapse2" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down"}/>
                          </MDBCollapseHeader>
                          <MDBCollapse id="collapse2" isOpen={collapseID}>
                            <MDBCardBody>
                              网页版，鼠标放到第一个回答上方，右侧，默认排序，就会看到有按时间排序的选项。
                            </MDBCardBody>
                          </MDBCollapse>
                        </MDBCard>

                        <MDBCard>
                          <MDBCollapseHeader onClick={this.toggleCollapse("collapse3")}>
                            如何不收到“你关注的问题有了新的回答"的消息？
                            <i
                              className={collapseID === "collapse3" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down"}/>
                          </MDBCollapseHeader>
                          <MDBCollapse id="collapse3" isOpen={collapseID}>
                            <MDBCardBody>
                              鼠标放在右上角自己的头像上，点小齿轮图标的“设置”。
                              在“消息和邮件”中，调整成“只接受关注人的”，就可以大幅度减少这类通知。
                            </MDBCardBody>
                          </MDBCollapse>
                        </MDBCard>
                      </div>
                    </MDBTabPane>
                    <MDBTabPane tabId="2">
                      <div className="md-accordion mt-5">
                        <MDBCard className="mt-3">
                          <MDBCollapseHeader onClick={this.toggleCollapse("collapse1")}>
                            如何选择账号类型？
                            <i
                              className={collapseID === "collapse1" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down"}/>
                          </MDBCollapseHeader>
                          <MDBCollapse id="collapse1" isOpen={collapseID}>
                            <MDBCardBody>
                              针对不同类型主体的功能需求，这里提供了 5 种入驻类型供选择，包括“个人”、“媒体”、 “群媒体”、“政府”、“企业/机构/其他组织”。您可根据实际情况，选择合适的类型入驻。
                            </MDBCardBody>
                          </MDBCollapse>
                        </MDBCard>

                        <MDBCard>
                          <MDBCollapseHeader onClick={this.toggleCollapse("collapse2")}>
                            所需材料应该怎样填写？
                            <i
                              className={collapseID === "collapse2" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down"}/>
                          </MDBCollapseHeader>
                          <MDBCollapse id="collapse2" isOpen={collapseID}>
                            <MDBCardBody>
                              您好，为了方便您填写材料，平台在注册页面的材料填写框旁，都附加了填写说明，您可参照填写。
                            </MDBCardBody>
                          </MDBCollapse>
                        </MDBCard>

                        <MDBCard>
                          <MDBCollapseHeader onClick={this.toggleCollapse("collapse3")}>
                            个人类型账号，辅助材料应如何填写？
                            <i
                              className={collapseID === "collapse3" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down"}/>
                          </MDBCollapseHeader>
                          <MDBCollapse id="collapse3" isOpen={collapseID}>
                            <MDBCardBody>
                              如果您有其他平台的账号（如：微信公众号、知乎专栏、一点资讯号等），为核实是您本人申请入驻，请使用其他平台的账号发表一篇文末含有“特定署名信息”的文章，然后将此篇文章链接放入辅助材料内即可。
                            </MDBCardBody>
                          </MDBCollapse>
                        </MDBCard>
                      </div>
                    </MDBTabPane>
                    <MDBTabPane tabId="3">
                      <div className="md-accordion mt-5">
                        <MDBCard className="mt-3">
                          <MDBCollapseHeader onClick={this.toggleCollapse("collapse1")}>
                            简历该如何布局？
                            <i
                              className={collapseID === "collapse1" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down"}/>
                          </MDBCollapseHeader>
                          <MDBCollapse id="collapse1" isOpen={collapseID}>
                            <MDBCardBody>
                              学校是招聘者筛人的第一个标准。因此，应该先写院校背景。别人首先会看你的学校，其次看你在这个学校有多优秀。
                            </MDBCardBody>
                          </MDBCollapse>
                        </MDBCard>

                        <MDBCard>
                          <MDBCollapseHeader onClick={this.toggleCollapse("collapse2")}>
                            该如何呈现你的在校成绩、奖项、获得的证书？
                            <i
                              className={collapseID === "collapse2" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down"}/>
                          </MDBCollapseHeader>
                          <MDBCollapse id="collapse2" isOpen={collapseID}>
                            <MDBCardBody>
                              不同时期的成就放在对应时期（学历）的位置，招聘者能很清楚看到你在本科、硕士期间所取得的成就。
                            </MDBCardBody>
                          </MDBCollapse>
                        </MDBCard>

                      </div>
                    </MDBTabPane>
                  </MDBTabContent>
                </MDBCol>
              </MDBRow>
            </MDBContainer>

          </MDBCol>
        </MDBRow>

        <br/>
        <Footer/>
      </MDBContainer>
    );
  }
}

Help.i18n = [
  {},
  {}
];
