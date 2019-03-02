import React from 'react';
import {languageHelper} from '../../../tool/language-helper';
import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBAvatar
} from 'mdbreact';
import {AnswerEditInit} from '../answerEditInit';
// import './public/style.css';
import {Header} from '../../../general-component/header/header';
import {Footer} from '../../../general-component/footer';
const basicFont = {
  fontFamily: 'IBM Plex Sans',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: 'normal',
}
export class ReviewCreate extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null,
      showPic: true,
      title:'原来的标题'
    };
    this.text = ReviewCreate.i18n[languageHelper()];
    this.handleInputClick = this.handleInputClick.bind(this);

  }

  componentWillMount() {
    let result = {}
    let mockData =
      {
        id: 1 || result.id,
        content: {
          title: '如何成为一个合格的天文爱好者？' || result.content.title,
          descrption: '小的时候有个梦想，长大了要当个天文学家。\n时光荏苒，自己一天天长大，慢慢也淡忘了小时候常做的梦。\n前段时间，偶尔在豆瓣上看到了天文小组，突然记起自己小时候也有，梦想，原来一直未曾忘却。\n虽然也会苦笑自己的幼稚，但心底的热浪不能轻易抹掉。\n所以有了这个苦恼，只是如何成为一个合格的天文爱好者？\n也关注了几个天文论坛，买了本书《大众天文学》，暂时还没有入观星设备。\n但还是很感觉入不了门，一头雾水，希望大家能指点、分享。\n这就是我的故事。' || result.content.body
        },
        // user:userInfor.content === null ? '齐昊' : userInfor.content.username,
        // img:userInfor.content === null ? 'https://s3.amazonaws.com/youthchina/WechatIMG29.jpeg' : userInfor.content.avatarUrl,
        user:'齐昊',
        img:'https://s3.amazonaws.com/youthchina/WechatIMG29.jpeg',
        status: {
          // code: result.status.code,
          code:2000
        }
      };
    this.setState(() => {
      return {backend: mockData};
    });
  }


  handleInputClick() {
    //todo,通过refs调用的方法
    this.answerText.submitContent();
    // this.refs.answerText.submitContent();
  }



  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        <Header/>
        <MDBRow style={{margin: '47px 0px'}}>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="10" style={{height: '100%'}}>
            <MDBRow style={{margin: '22px 0px'}}>
              <MDBCol size="4">
              </MDBCol>
              <MDBCol size="4" style={{fontSize: '18px', textAlign: 'center', verticalAlign: 'middle', ...basicFont}}>
                {this.text.write}
              </MDBCol>
              <MDBCol size="4" style={{paddingRight: '0px'}}>
                <MDBBtn color="indigo" style={{
                  fontSize: '14px',
                  padding: '10px 34px',
                  margin: '-5px 0px',
                  float: 'right', ...basicFont
                }}>发布
                </MDBBtn>
              </MDBCol>

            </MDBRow>
            <br/>
            <div style={{height:'100%',margin:'20px 0px 0px 0px',boxShadow: '1px 1px 20px rgba(0, 0, 0, 0.08)'}}>
              <MDBRow>
                <MDBCol size="1">
                  <MDBAvatar style={{margin: '20px 5px 0px 20px'}}>
                    <img
                      style={{width: '32px', background: '#F4F4F4'}}
                      src={this.state.backend.img}
                      alt=""
                      className="rounded-circle"
                    />
                  </MDBAvatar>
                </MDBCol>
                <MDBCol size="8" style={{paddingTop:'23px'}}>
                  <MDBRow style={{paddingLeft:'5px'}}>{this.state.backend.user}</MDBRow>
                  {/*<MDBRow>*/}
                  {/*<MDBBtn flat style={{padding: '0px',}}>*/}
                  {/*<MDBIcon style={{marginRight: '5px'}} far icon="edit"/>添加备用内容*/}
                  {/*</MDBBtn>*/}
                  {/*</MDBRow>*/}
                </MDBCol>
                <MDBCol size="2"></MDBCol>
              </MDBRow>
              <MDBRow style={{height:'100%',margin:'0px',minHeight:'400px'}}>
                <AnswerEditInit ref={(answerText) => this.answerText = answerText}></AnswerEditInit>
              </MDBRow>
              {/*<MDBRow>*/}
              {/*<MDBCol size="10"></MDBCol>*/}
              {/*<MDBCol size="2">*/}
              {/*<MDBBtn flat style={{float:'right',padding: '5px 10px',zIndex:10}}>*/}
              {/*提交回答*/}
              {/*</MDBBtn>*/}
              {/*</MDBCol>*/}


              {/*</MDBRow>*/}
            </div>
          </MDBCol>
          <MDBCol size="1">

          </MDBCol>
        </MDBRow>
        <Footer/>
      </div>

    ) : null;
  }
}

ReviewCreate.i18n = [
  {
    title: '用户原来的标题',
    submitBtn: '提交回答',
    write:'写短评'
  },
  {
    title: 'Title',
    submitBtn: 'submit article',
    write:'edit article'
  },
];
