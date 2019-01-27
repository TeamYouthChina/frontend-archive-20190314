import React from 'react';
import {Redirect} from 'react-router-dom';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, Col } from 'mdbreact';
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    MDBRow,
    MDBCol,
    MDBInput, 
    MDBFormInline,
} from 'mdbreact';

import {Header} from '../../../general-component/header';
import {Footer} from '../../../general-component/footer';
import {languageHelper} from '../../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../../tool/remove-url-slash-suffix';
import './style.css';
import RelatedPosition from './related';
export class Mypage extends React.Component {
  constructor(props) {
    super(props);
    this.text = Mypage.i18n[languageHelper()];
  }

  render() {
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    if (pathname) {
      return (<Redirect to={pathname}/>);
    }
    return (
      <div>
        <Header/>
        <br/>
        <MDBRow>
        <MDBCol size="1"></MDBCol>
        <MDBCol size="10" className="companyCol">
        <MDBRow>
        <MDBCol>
        <div>
        <MDBCard
                style={{
                  margin: '10px',
                  boxShadow: 'none',
                  
                }}>
            <MDBRow>
               <MDBCol sm="9">
                    <MDBCard 
                    style={{
                        width: "20rem"
                    }}
                    >
                    <MDBRow>
                    <MDBCol>
                    <MDBCardImage
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                    waves
                    />
                    </MDBCol>
                    <MDBCol>
                    <MDBCardBody>
                      <MDBRow> <CardText>姓名</CardText></MDBRow>  
                      <MDBRow> <CardText>邮箱</CardText></MDBRow>  
                      <MDBRow> <CardText>手机</CardText></MDBRow>  
                      <MDBRow> <CardText>照片</CardText></MDBRow>
                      <MDBRow> <CardText>所在地</CardText></MDBRow>     
                    </MDBCardBody>
                    </MDBCol>
                    </MDBRow>
                    </MDBCard>
                </MDBCol>    
              
                <MDBCol sm="3">
                <MDBCard
                    style={{
                        width: "10rem"
                    }}
                    >
                    <MDBCardBody>
                       <MDBRow> <MDBBtn color="indigo">好友列表 </MDBBtn></MDBRow>
                       <MDBRow> <MDBBtn color="indigo">好友印象  </MDBBtn></MDBRow>
                       <MDBRow> <MDBBtn color="indigo">影响力分值</MDBBtn></MDBRow>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
              
            <MDBRow>
              <MDBCol>
            <div>
                <MDBRow>
                    <MDBCol > <MDBBtn color="indigo">整体</MDBBtn></MDBCol>
                    <MDBCol ><MDBBtn color="indigo">导入简历</MDBBtn></MDBCol>
                    <MDBCol ><MDBBtn color="indigo" >编辑英文简历</MDBBtn></MDBCol>
                </MDBRow>
            </div>
            </MDBCol>
            <MDBCol size='3'>
            </MDBCol>
            </MDBRow>
        </MDBCard>
        </div>
        </MDBCol>
        <MDBCol size="1"></MDBCol>
        </MDBRow> 
        <MDBRow style={{marginTop: '3rem'}}>
        <MDBCol size="1"></MDBCol>
        <MDBCol size='10' className="companyCol">
        <div>
        <MDBCard
                style={{
                  margin: '10px',
                  boxShadow: 'none',  
                }}>
        <MDBCardBody>
          <MDBCardTitle>教育经历</MDBCardTitle>
          <MDBCardText>
            
              <MDBRow>
                学历
              </MDBRow>
              <MDBRow>
                学校名称
              </MDBRow>
              <MDBRow>
                专业
              </MDBRow>
              <MDBRow>
                学院（选填）
              </MDBRow>
              <MDBRow>
                所在地
              </MDBRow>
              <MDBRow>
                入学时间、毕业时间
              </MDBRow>
              <MDBRow>
                相关课程信息、GPA、荣誉/获奖
              </MDBRow>
          </MDBCardText>
          <MDBCardTitle style={{marginTop: '3rem'}}>实习工作经历</MDBCardTitle>
          <MDBCardText>
              <MDBRow>
                公司名称
              </MDBRow>
              <MDBRow>
                所在城市
              </MDBRow>
              <MDBRow>
                你的职位
              </MDBRow>
              <MDBRow>
                所在部门（选填）
              </MDBRow>
              <MDBRow>
                起始时间-结束时间
              </MDBRow>
              <MDBRow>
               工作内容
              </MDBRow>
              <MDBRow>
               评论此公司/岗位（选填）:公司政策/福利
              </MDBRow>
              <MDBRow>
              公司经历：推荐/中等/不推荐
              </MDBRow>
              <MDBRow>
              内推：询问该岗位是否可以内推
              </MDBRow>
          </MDBCardText>
          <MDBCardTitle style={{marginTop: '3rem'}}>社团和组织经历</MDBCardTitle>
          <MDBCardText>
              <MDBRow>
                组织/活动名称
              </MDBRow>
              <MDBRow>
                所在城市
              </MDBRow>
              <MDBRow>
                你的角色
              </MDBRow>
              <MDBRow>
                所在部门（选填）
              </MDBRow>
              <MDBRow>
                起始时间-结束时间
              </MDBRow>
              <MDBRow>
               活动内容
              </MDBRow>
          </MDBCardText>
          <MDBCardTitle style={{marginTop: '3rem'}}>技能/证书</MDBCardTitle>
          <MDBCardText>
              <MDBRow>
                技能
              </MDBRow>
              <MDBRow>
                语言
              </MDBRow>
              <MDBRow>
                证书/执照
              </MDBRow>
              <MDBRow>
                兴趣爱好
              </MDBRow>
              <MDBRow>
                活动
              </MDBRow>
          </MDBCardText>
          <MDBCardTitle style={{marginTop: '3rem'}}>项目研究经历</MDBCardTitle>
          <MDBCardText>
              <MDBRow>
               项目/研究名称
              </MDBRow>
              <MDBRow>
                所在城市
              </MDBRow>
              <MDBRow>
                你的角色
              </MDBRow>
              <MDBRow>
                起始时间-结束时间
              </MDBRow>
              <MDBRow>
               研究成果/内容
              </MDBRow>
          </MDBCardText>
        </MDBCardBody>
         </MDBCard>
         <MDBCard  style={{
                  margin: '10px',
                  boxShadow: 'none',
                  
                }}>
          <MDBCardBody>
            <MDBRow>
            <MDBCardText>
            面试经历（选填）
            </MDBCardText>
            </MDBRow>
         <MDBRow>
         <MDBFormInline>
        <MDBInput label="推荐" type="checkbox" id="checkbox1" />
        <MDBInput label="中等" type="checkbox" id="checkbox2" />
        <MDBInput label="不推荐" type="checkbox" id="checkbox3" />
        </MDBFormInline>
         </MDBRow>
         <MDBRow>
            <MDBCardText>
            OFFER:
            </MDBCardText>
            </MDBRow>
         <MDBRow>
         <MDBFormInline>
        <MDBInput label="收到offer" type="checkbox" id="checkbox4" />
        <MDBInput label="没有offer" type="checkbox" id="checkbox5" />
        <MDBInput label="拒绝offer" type="checkbox" id="checkbox6" />
        </MDBFormInline>
         </MDBRow>
         <MDBRow>
            <MDBCardText>
            EXPERIENCE:
            </MDBCardText>
            </MDBRow>
         <MDBRow>
         <MDBFormInline>
        <MDBInput label="很好的经历" type="checkbox" id="checkbox7" />
        <MDBInput label="中等的经历" type="checkbox" id="checkbox8" />
        <MDBInput label="较差的经历" type="checkbox" id="checkbox9" />
        </MDBFormInline>
         </MDBRow>
         <MDBRow>
            <MDBCardText>
            INTERVIEW:
            </MDBCardText>
            </MDBRow>
         <MDBRow>
         <MDBFormInline>
        <MDBInput label="较简单的面试" type="checkbox" id="checkbox10" />
        <MDBInput label="中等的面试" type="checkbox" id="checkbox11" />
        <MDBInput label="较难的面试" type="checkbox" id="checkbox12" />
        </MDBFormInline>
         </MDBRow>
         </MDBCardBody>
         </MDBCard>
        </div>
        </MDBCol>
        </MDBRow>
        <MDBRow style={{marginTop: '3rem'}}>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="10" style={{paddingTop:'2rem',paddingBottom:'2rem',boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)'}}>
            <RelatedPosition></RelatedPosition>
          </MDBCol>
          <MDBCol size="1"></MDBCol>
        </MDBRow>
        </MDBCol>
        <MDBCol size="1"></MDBCol>
        </MDBRow>
        <Footer/>
      </div>
    );
  }
}

Mypage.i18n = [
  {},
  {}
];
