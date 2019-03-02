import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import {
  MDBNavItem,
  MDBNavLink,
  MDBRow,
  MDBCol,
  MDBNav,
  MDBJumbotron,
  MDBView,
  MDBMask,
  MDBBtn,
  MDBIcon
} from 'mdbreact';

import {languageHelper} from '../../tool/language-helper';
import {Header} from '../../general-component/header/header';
import {Footer} from '../../general-component/footer';
//import images from assets directory
import img1 from './assets/image1.png';
import img2 from './assets/image2.png';
import img3 from './assets/image3.png';
import img4 from './assets/image4.png';
import img5 from './assets/image5.png';

// import './public/style.css';

const basicCHNFont = {
  fontFamily: 'PingFang SC',
  fontStyle: 'normal',
  fontWeight: 'normal',
  lineHeight: 'normal',
  color: '#31394D'
};

export class Propagation extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.text = Propagation.i18n[languageHelper()];
  }

  render() {
    const btnColor = '#4F65E1';

    return (
      <div>
        <Header/>

        {/*section 1 */}
        <div className="d-md-block m-0 p-0">
          <MDBRow className="m-0 p-0">
            <MDBCol className="p-0">
              <MDBView>
                <img src={img1} style={{
                  height: '700px',
                  width: '1440px'
                }} className="img-fluid" alt=""/>
                <MDBMask className="d-flex align-items-center">
                  <MDBRow className="w-100">
                    <MDBCol size="5" className="mx-5">
                      <MDBRow>
                        <MDBCol>
                          <MDBCol size="12" style={{...basicCHNFont, fontSize: '28px', fontWeight: '500'}}>
                            <MDBIcon icon="quote-left" size="1x" pull="left"/>来到到来,</MDBCol>
                          <MDBCol size="6" className="offset-md-3"
                                  style={{...basicCHNFont, fontSize: '28px', fontWeight: '500'}}>
                            职场未来 <MDBIcon icon="quote-right" size="1x"/>
                          </MDBCol>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol size="6" className="offset-md-2">
                          <br/>
                          <br/>
                          <p style={{...basicCHNFont, fontSize: '64px'}}><strong>到 来</strong></p>
                          <p style={{...basicCHNFont, fontSize: '18px'}}>精准定制的全栈式智慧招聘平台</p>
                          <p style={{fontSize: '16px', textAlign: 'start'}}>
                            <MDBBtn rounded className="py-2 px-4" color={btnColor}
                                    style={{backgroundColor: '#4F65E1'}}>开启求职之旅</MDBBtn></p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                </MDBMask>
              </MDBView>
            </MDBCol>
          </MDBRow>

          {/*section 2*/}
          <MDBRow className="m-0 p-0">
            <MDBCol className="p-0">
              <MDBView>
                <div style={{height: '615px', width: '1440px'}}>
                  <img src={img2} style={{position: 'absolute', left: '0', top: '0'}} className="img-fluid"
                       alt=""/></div>
                <MDBMask className="d-flex align-items-center">
                  <MDBRow className="w-100">
                    <MDBCol size="5" className="offset-md-7">
                      <MDBRow>
                        <MDBCol>
                          <MDBCol size="12" style={{...basicCHNFont, fontSize: '18px', fontWeight: '400'}}>
                            <span style={{fontSize: '36px', paddingRight: '10px'}}>职场深度社交</span>重新定义人脉圈</MDBCol>
                          <br/>
                          <MDBCol size="10" style={{...basicCHNFont, fontSize: '18px', lineHeight: '2rem'}}>
                            告别粗糙/浮躁的社交时代，致力于打造有效链接人脉， 全面展示形象和高效获取精华内容的职场深度社交App
                          </MDBCol>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol size="6" className="ml-2">
                          <br/>
                          <p style={{fontSize: '16px', textAlign: 'start'}}>
                            <MDBBtn rounded className="py-2 px-4" color={btnColor}
                                    style={{backgroundColor: '#4F65E1'}}>下载App客户端</MDBBtn></p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                </MDBMask>
              </MDBView>
            </MDBCol>
          </MDBRow>

          {/*section 3*/}
          <MDBRow className="m-0 p-0">
            <MDBCol className="p-0">
              <MDBView>
                <div style={{height: '700px', width: '1440px', backgroundColor: '#F0F3FA'}}>
                  <img src={img3} style={{position: 'absolute', left: '700px', top: '140px'}} className="img-fluid"
                       alt=""/></div>
                <MDBMask className="d-flex align-items-center">
                  <MDBRow className="w-100">
                    <MDBCol size="5" className="offset-md-1">
                      <MDBRow>
                        <MDBCol>
                          <MDBCol size="12" style={{...basicCHNFont, fontSize: '18px', fontWeight: '400'}}>
                            <span style={{fontSize: '36px', paddingRight: '10px'}}>智慧招聘</span>行业解决方案</MDBCol>
                          <br/>
                          <MDBCol size="10" style={{...basicCHNFont, fontSize: '18px', lineHeight: '2rem'}}>
                            利用AI技术，大数据及人才洞察打造行业顶尖的智慧招聘系统；同时基于To C产品，为企业提供集雇主品牌推广，职位发布等功能的全栈式解决方案
                          </MDBCol>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol size="6" className="ml-2">
                          <br/>
                          <p style={{fontSize: '16px', textAlign: 'start'}}>
                            <MDBBtn rounded className="py-2 px-4" color={btnColor}
                                    style={{backgroundColor: '#4F65E1'}}>企业入口</MDBBtn></p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                </MDBMask>
              </MDBView>
            </MDBCol>
          </MDBRow>

          {/*section 4*/}
          <MDBRow className="m-0 p-0">
            <MDBCol className="p-0">
              <MDBView>
                <div style={{height: '700px', width: '1440px'}}>
                  <img src={img4} style={{position: 'absolute', left: '129px', top: '65px'}} className="img-fluid"
                       alt=""/></div>
                <MDBMask className="d-flex align-items-center">
                  <MDBRow className="w-100">
                    <MDBCol size="5" className="pl-5 offset-md-6">
                      <MDBRow>
                        <MDBCol>
                          <MDBCol size="12" style={{...basicCHNFont, fontSize: '18px', fontWeight: '400'}}>
                            <span style={{fontSize: '36px', paddingRight: '10px'}}>智慧招聘</span>个人解决方案</MDBCol>
                          <br/>
                          <MDBCol size="10" style={{...basicCHNFont, fontSize: '18px', lineHeight: '2rem'}}>
                            极速匹配岗位，精准竞争力分析，全面个人档案展示与公司各个维度鲜活介绍，为求职者提供高效精准的“人-岗位-企业”的匹配
                          </MDBCol>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol size="6" className="ml-2">
                          <br/>
                          <p style={{fontSize: '16px', textAlign: 'start'}}>
                            <MDBBtn rounded className="py-2 px-4" color={btnColor}
                                    style={{backgroundColor: '#4F65E1'}}>个人入口</MDBBtn></p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                </MDBMask>
              </MDBView>
            </MDBCol>
          </MDBRow>
        </div>
        <Footer/>
      </div>
    );
  }
}

Propagation.i18n = [
  {},
  {},
];
