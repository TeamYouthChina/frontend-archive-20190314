import React from 'react';
import {languageHelper} from '../tool/language-helper';
import {
  MDBContainer,
  MDBRow, MDBCol, MDBCard,
  MDBCardUp, MDBAvatar, MDBCardBody, MDBIcon,MDBProgress
} from "mdbreact";

// data={
//   img:'照片URL',
//   name:'姓名',
//   description:[称谓1，称谓2],
//   work:'一个工作',
//   influence:68,
// }

export class ResumeTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: null,
      firstTime: 1,
      selectType: 1,
      influence:68,
      description:['1','2'],
      resumeTitle:{
        id:'123',
        name:'郭益豪',
        img:'https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg',
        description:['美国乔治华盛顿大学,','数据科学家'],
        work:'张三技术总监',
        counts:86
      },
    };
    this.text = ResumeTitle.i18n[languageHelper()];
  }


  render() {
    const {img, name, description, work,influence} = this.props.data || this.state.resumeTitle
    const basicFontStyle={
      fontFamily:'IBM Plex Sans',
      fontStyle:'normal',
      fontWeight:'normal',
      lineHeight:'normal',
      color:'#3F3F3F'}
    return (
      <MDBRow style={{width: '100%',background: '#F4F4F4',}}>

        <MDBRow style={{width: '100%',}}>
          <MDBCol size="2"></MDBCol>
          <MDBCol size="1">
            <MDBAvatar style={{marginTop: '20px', marginBottom: '20px'}}>
              <img
                style={{width: '106px', background: '#F4F4F4'}}
                src={img}
                alt="没有图片"
                className="rounded-circle"
              />
            </MDBAvatar>
          </MDBCol>
          <MDBCol size="4">
            <div style={{marginTop: '20px', marginBottom: '20px'}}>
              <p style={{fontSize:'18px',...basicFontStyle}} className="font-weight-bold">{name}</p>
              {description !== null ? (

                description.map((item) => (
                  <span style={{fontSize:'16px',...basicFontStyle}} key={item}>{item} </span>
                ))
              ) : (
                // console.log(this.state.descrption,2)
                this.state.description.map((item,index) => (
                  <span style={{fontSize:'16px',...basicFontStyle}} key={index}>{item} </span>
                ))
              )}
              <br/>
              {work}

            </div>
          </MDBCol>
          <MDBCol size="4">
            <div className="resumeProgress" style={{paddingTop:'28px'}}>
              <span style={{fontSize:'16px',...basicFontStyle}}>影响力分值  </span>
              <span style={{fontSize:'24px',...basicFontStyle}}>{influence || 'fake'}</span>
              <br/>
              <MDBProgress style={{paddingTop:'10px',borderRadius:'20px'}} height="22px" material value={68} animated />
            </div>
          </MDBCol>
          <MDBCol size="1"></MDBCol>
        </MDBRow>

      </MDBRow>

    );

  }
}

ResumeTitle.i18n = [
  {
    applyBefore: '申请截止'
  },
  {
    applyBefore: 'Apply Before'
  },
];
