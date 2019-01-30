import React, {Component} from "react";
import {Redirect} from 'react-router-dom';

import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBContainer,
  MDBScrollspyBox, MDBScrollspyText,
  MDBListGroup, MDBListGroupItem,
  MDBTooltip, MDBSwitch,
  MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,
  MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption
} from 'mdbreact';

import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';
import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';

export class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.text = Setting.i18n[languageHelper()];
    this.state = {
      active: 0,
      sections: [],
      switch1: false,
      switch2: false,
      activeItemPills: "1"
    };

    this.scrollSpyText = React.createRef();
  }
  
  togglePills = tab => () => {
    if (this.state.activePills !== tab) {
      this.setState({
        activeItemPills: tab
      });
    }
  }
  
  componentDidMount() {
    let sections = this.scrollSpyText.current.getElementsByTagName("h4");
    this.setState({sections});
  }

  handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const sections = this.state.sections;
    const lastIndex = sections.length - 1;

    for (let i = 0; i < lastIndex; i++) {
      if ((scrollTop > sections[i].offsetTop - 20) && (scrollTop < sections[i +
      1].offsetTop - 20)) {
        this.setState({active: i});
      }
    }
    ;
    if (scrollTop > sections[lastIndex].offsetTop - 20)
      this.setState({active: lastIndex});
  }

  handleSwitchChange = nr => () => {
    let switchNumber = `switch${nr}`;
    this.setState({
      [switchNumber]: !this.state[switchNumber]
    });
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
        <MDBRow>
          <MDBCol md="10" className="offset-md-1 pt-3">
            <MDBScrollspyBox>
              <MDBRow>
                <MDBCol md="3">
                  <MDBListGroup>
                    <MDBListGroupItem href="#section1" active={this.state.active === 0}>简历隐私设置</MDBListGroupItem>
                    <MDBListGroupItem href="#section2" active={this.state.active === 1}>邮件隐私设置</MDBListGroupItem>
                    <MDBListGroupItem href="#section3" active={this.state.active === 2}>人脉隐私设置</MDBListGroupItem>
                    <MDBListGroupItem href="#section4" active={this.state.active === 3}>好友印象设置</MDBListGroupItem>
                    <MDBListGroupItem href="#section5" active={this.state.active === 4}>动态隐私设置</MDBListGroupItem>
                    <MDBListGroupItem href="#section6" active={this.state.active === 5}>状态隐私设置</MDBListGroupItem>
                    <MDBListGroupItem href="#section7" active={this.state.active === 6}>沟通隐私设置</MDBListGroupItem>
                    <MDBListGroupItem href="#section8" active={this.state.active === 7}>添加好友设置</MDBListGroupItem>
                    <MDBListGroupItem href="#section9" active={this.state.active === 8}>关注隐私设置</MDBListGroupItem>
                    <MDBListGroupItem href="#section10" active={this.state.active === 9}>黑名单</MDBListGroupItem>
                  </MDBListGroup>
                </MDBCol>
                <MDBCol>
                  <MDBScrollspyText onScroll={this.handleScroll} scrollSpyRef={this.scrollSpyText}
                                    style={{height: '100%', width: '100%'}}>
                    <h4 id="section1">简历隐私设置</h4>
                    <MDBRow between>
                      <MDBCol md="8">
                        <p>
                          简历屏蔽
                          <br/>
                        <small>
                          希望简历不被谁看到/简历查看限制：全部HR，特定公司HR，非好友，特定好友，三度人脉以外不可见
                        </small></p>
                      </MDBCol>
                      <MDBCol md="2">
                        <MDBSwitch checked={this.state.switch1} onChange={this.handleSwitchChange(1)}/>
                      </MDBCol>
                    </MDBRow>
                    <hr/>
                    <MDBRow between>
                      <MDBCol md="8">
                        <p>
                          简历修改提示
                          <br/>
                          <small>
                            简历修改是否告知好友：是/否
                          </small></p>
                      </MDBCol>
                      <MDBCol md="2">
                        <MDBSwitch checked={this.state.switch2} onChange={this.handleSwitchChange(2)}/>
                      </MDBCol>
                    </MDBRow>
                    <hr/>
                    <MDBRow between>
                      <MDBCol md="8">
                        <p>
                          企业屏蔽
                          <br/>
                          <small>
                            不希望被某些企业搜索到
                          </small></p>
                      </MDBCol>
                      <MDBCol md="2">
                        <MDBSwitch checked={this.state.switch2} onChange={this.handleSwitchChange(2)}/>
                      </MDBCol>
                    </MDBRow>
                    <hr/>

                    <h4 id="section2">邮件隐私设置</h4>
                    <MDBRow between>
                      <MDBCol md="8">
                        <p>
                          邀请应聘邮件
                          <br/>
                          <small>
                            是否仅接受认证名企（Top 500等）/邀请应聘行业分类/邀请应聘职能分类
                          </small></p>
                      </MDBCol>
                      <MDBCol md="2">
                        <MDBSwitch checked={this.state.switch1} onChange={this.handleSwitchChange(1)}/>
                      </MDBCol>
                    </MDBRow>
                    <hr/>
                    <MDBRow between>
                      <MDBCol md="8">
                        <p>
                          推荐岗位邮件
                          <br/>
                          <small>
                            是否仅接受认证名企（Top 500等）
                          </small></p>
                      </MDBCol>
                      <MDBCol md="2">
                        <MDBSwitch checked={this.state.switch2} onChange={this.handleSwitchChange(2)}/>
                      </MDBCol>
                    </MDBRow>
                    <hr/>
                      
                    <h4 id="section3">人脉隐私设置</h4>
                    <MDBRow between>
                      <MDBCol md="8">
                        <p>
                          通过推荐找到我
                          <br/>
                          <small>
                            允许/禁止
                          </small></p>
                      </MDBCol>
                      <MDBCol md="2">
                        <MDBSwitch checked={this.state.switch1} onChange={this.handleSwitchChange(1)}/>
                      </MDBCol>
                    </MDBRow>
                    <hr/>
                    <MDBRow between>
                      <MDBCol md="8">
                        <p>
                          通过搜索找到我
                          <br/>
                          <small>
                            允许/禁止
                          </small></p>
                      </MDBCol>
                      <MDBCol md="2">
                        <MDBSwitch checked={this.state.switch2} onChange={this.handleSwitchChange(2)}/>
                      </MDBCol>
                    </MDBRow>
                    <hr/>
                    
                    <h4 id="section4">好友印象设置</h4>
                    <hr/>
                    
                    <h4 id="section5">动态隐私设置</h4>
                    <MDBRow between >
                      <MDBCol md="5">
                        <p>
                          希望谁能看到你的动态
                          <br/>
                          <small>
                            仅限好友/所有人/无人
                          </small></p>
                      </MDBCol>
                      <MDBCol md="2">
                        <MDBSelect>
                          <MDBSelectInput selected="没有人" />
                          <MDBSelectOptions>
                            <MDBSelectOption value="1">没有人</MDBSelectOption>
                            <MDBSelectOption value="2">好友</MDBSelectOption>
                            <MDBSelectOption value="3">所有人</MDBSelectOption>
                          </MDBSelectOptions>
                        </MDBSelect>
                      </MDBCol>
                    </MDBRow>
                    
                    <hr/>
                    <MDBRow between>
                      <MDBCol md="8">
                        <p>
                          能否被提及
                          <br/>
                          <small>
                            允许/禁止
                          </small></p>
                      </MDBCol>
                      <MDBCol md="2">
                        <MDBSwitch checked={this.state.switch2} onChange={this.handleSwitchChange(2)}/>
                      </MDBCol>
                    </MDBRow>
                    <hr/>
                    <MDBRow between>
                      <MDBCol md="8">
                        <p>
                          是否接收关注公司职位发布动态的通知
                          <br/>
                          <small>
                            允许/禁止
                          </small></p>
                      </MDBCol>
                      <MDBCol md="2">
                        <MDBSwitch checked={this.state.switch2} onChange={this.handleSwitchChange(2)}/>
                      </MDBCol>
                    </MDBRow>
                    <hr/>

                    <h4 id="section6">状态隐私设置</h4>
                    <MDBRow between>
                      <MDBCol md="8">
                        <p>
                          是否显示
                          <br/>
                          <small>
                            允许/禁止
                          </small></p>
                      </MDBCol>
                      <MDBCol md="2">
                        <MDBSwitch checked={this.state.switch2} onChange={this.handleSwitchChange(2)}/>
                      </MDBCol>
                    </MDBRow>
                    <hr/>
             
                    <h4 id="section7">沟通隐私设置</h4>
                    <MDBRow between>
                      <MDBCol md="8">
                        <p>
                          是否显示已读
                          <br/>
                          <small>
                            允许/禁止
                          </small></p>
                      </MDBCol>
                      <MDBCol md="2">
                        <MDBSwitch checked={this.state.switch2} onChange={this.handleSwitchChange(2)}/>
                      </MDBCol>
                    </MDBRow>
                    <hr/>
                    <MDBRow between>
                      <MDBCol md="8">
                        <p>
                          是否显示正在输入
                          <br/>
                          <small>
                            允许/禁止
                          </small></p>
                      </MDBCol>
                      <MDBCol md="2">
                        <MDBSwitch checked={this.state.switch2} onChange={this.handleSwitchChange(2)}/>
                      </MDBCol>
                    </MDBRow>
                    <hr/>
                    
                    <h4 id="section8">添加好友设置</h4>
                    <MDBRow between>
                      <MDBCol md="8">
                        <p>
                          是否允许被申请添加为好友
                          <br/>
                          <small>
                            允许/禁止
                          </small></p>
                      </MDBCol>
                      <MDBCol md="2">
                        <MDBSwitch checked={this.state.switch2} onChange={this.handleSwitchChange(2)}/>
                      </MDBCol>
                    </MDBRow>
                    <hr/>
                    
                    <h4 id="section9">关注隐私设置</h4>
                    <MDBRow between>
                      <MDBCol md="8">
                        <p>
                          是否允许被关注
                          <br/>
                          <small>
                            允许/禁止
                          </small></p>
                      </MDBCol>
                      <MDBCol md="2">
                        <MDBSwitch checked={this.state.switch2} onChange={this.handleSwitchChange(2)}/>
                      </MDBCol>
                    </MDBRow>
                    <hr/>
                    
                    <h4 id="section10">黑名单</h4>
                    <p>
                    </p>
                  </MDBScrollspyText>
                </MDBCol>
              </MDBRow>
            </MDBScrollspyBox>
          </MDBCol>
        </MDBRow>
        <Footer/>
      </MDBContainer>
    );
  }
}

Setting.i18n = [
  {},
  {}
];




