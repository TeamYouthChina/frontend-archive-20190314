import React from 'react';
import {languageHelper} from '../../../../tool/language-helper';
import {MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon, MDBAvatar} from "mdbreact";

import TopBar from '../../../OnlineApplication/Components/TopBar/topBar'
import {BasicInfo} from './basicInfo'

const basicFontStyle = {
  fontFamily: 'IBM Plex Sans',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
}


export class ResumeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: null,
      resumeName: 'Unnamed CV',
    };
    this.text = ResumeForm.i18n[languageHelper()];
  }


  async componentDidMount() {
    // const result = await getAsync(`/question/${this.props.match.params.questionId}`)
    // const result = await getAsync('/question/0100')
    let mockData =
      {
        id: 123,
        resumeTitle: {
          id: '123',
          name: '郭益豪',
          img: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg',
          description: ['美国乔治华盛顿大学,', '数据科学家'],
          work: '张三技术总监',
          counts: 86
        },
        status: {
          code: 2000
        }
      };
    this.setState(() => {
      return {backend: mockData};
    });

  }
  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  render() {
    return (
      <div style={{backgroundColor: '#F4F4F4'}}>
        <MDBRow>
          <TopBar trans={this.text}></TopBar>
        </MDBRow>
        <MDBRow>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="10">
            <MDBRow>
              <MDBCol size="2">
                <MDBInput
                  value={this.state.resumeName}
                  name="resumeName"
                  onChange={this.changeHandler}
                  type="text"
                  id="materialFormRegisterNameEx"
                  label=""
                  required
                >
                  <div className="valid-feedback">you can use this name</div>
                  <div className="invalid-feedback">enter a valid name</div>
                </MDBInput>
              </MDBCol>
              <MDBCol middle size="1">
                <MDBIcon style={{paddingLeft: '-15px', fontSize: '30px'}} icon="edit"/>
              </MDBCol>
              <MDBCol middle size="9">
                <MDBBtn flat style={{
                  float: 'right',
                  padding: '5px',
                  fontSize: '18px',
                  color: '#3E4850', ...basicFontStyle
                }}>从档案库导入</MDBBtn>
              </MDBCol>
            </MDBRow>
            <BasicInfo></BasicInfo>
            <div style={{marginTop:'10px',backgroundColor: '#FFFFFF', boxShadow: '1px 1px 20px rgba(0, 0, 0, 0.08)', padding: '25px 30px'}}>
              <MDBRow>
                <MDBCol size="2"><strong style={{fontSize: '18px', ...basicFontStyle}}>项目经历</strong></MDBCol>
                <MDBCol size="10"><span style={{float: 'right', fontSize: '14px', ...basicFontStyle}}>
                <MDBIcon style={{paddingLeft: '-15px', fontSize: '30px'}} icon="edit"/>
                </span></MDBCol>
              </MDBRow>
              <MDBRow style={{fontSize: '14px', ...basicFontStyle}}>
                <MDBCol size="2" style={{fontSize: '14px',color:'#62686C',...basicFontStyle}}>尚未添加过经历</MDBCol>
              </MDBRow>
            </div>
            <div style={{marginTop:'10px',backgroundColor: '#FFFFFF', boxShadow: '1px 1px 20px rgba(0, 0, 0, 0.08)', padding: '25px 30px'}}>
              <MDBRow>
                <MDBCol size="2"><strong style={{fontSize: '18px', ...basicFontStyle}}>教育经历</strong></MDBCol>
                <MDBCol size="10"><span style={{float: 'right', fontSize: '14px', ...basicFontStyle}}>
                <MDBIcon style={{paddingLeft: '-15px', fontSize: '30px'}} icon="edit"/>
                </span></MDBCol>
              </MDBRow>
              <MDBRow style={{fontSize: '14px', ...basicFontStyle}}>
                <MDBCol size="2" style={{fontSize: '14px',color:'#62686C',...basicFontStyle}}>尚未添加过经历</MDBCol>
              </MDBRow>
            </div>
            <div style={{marginTop:'10px',backgroundColor: '#FFFFFF', boxShadow: '1px 1px 20px rgba(0, 0, 0, 0.08)', padding: '25px 30px'}}>
              <MDBRow>
                <MDBCol size="2"><strong style={{fontSize: '18px', ...basicFontStyle}}>技能</strong></MDBCol>
                <MDBCol size="10"><span style={{float: 'right', fontSize: '14px', ...basicFontStyle}}>
                <MDBIcon style={{paddingLeft: '-15px', fontSize: '30px'}} icon="edit"/>
                </span></MDBCol>
              </MDBRow>
              <MDBRow style={{fontSize: '14px', ...basicFontStyle}}>
                <MDBCol size="2" style={{fontSize: '14px',color:'#62686C',...basicFontStyle}}>尚未添加过经历</MDBCol>
              </MDBRow>
            </div>
            <div style={{marginTop:'10px',padding: '25px 30px',border: '2px dotted #C1C1C1',boxSizing: 'border-box'}}>
              <MDBRow center>
                <div style={{margin:'0px auto'}}>
                  
                  <div style={{margin:'0px 22px 0px 38px'}}>
                    <MDBIcon icon="plus" />
                  </div>
                  <span style={{color:'#62686C',fontSize: '18px', ...basicFontStyle}}>自定义模块</span>
                </div>
                  
              </MDBRow>
            </div>
            <MDBRow style={{margin:'30px 0'}}>
              <div style={{margin:'0px auto'}}>
                <MDBBtn flat style={{
                  background:'#727272',
                  fontSize: '16px',
                  color: '#FFFFFF', ...basicFontStyle
                }}>预览编辑</MDBBtn>
              </div>
            </MDBRow>
              
              
          </MDBCol>
        </MDBRow>

      </div>
    )

  }
}

ResumeForm.i18n = [
  {
    positions: '职位列表',
    positionDetail: '职位详情',
    chooseResume: '新建简历',
  },
  {
    positions: 'position lists',
    positionDetail: 'position details',
    chooseResume: 'create resume',
  },
];
