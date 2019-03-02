import React from 'react';
import Cookies from 'js-cookie';
import {languageHelper} from '../../../tool/language-helper';
import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBAvatar,
  MDBInput
} from 'mdbreact';
import {AnswerText} from "../answerText";
import {getAsync} from "../../../tool/api-helper";
import './questionCreate.css';
import {Header} from '../../../general-component/header/header';
import {Footer} from '../../../general-component/footer';

const basicFont = {
  fontFamily: 'PingFang SC',
  lineHeight: 'normal',
}

export class QuestionEdit extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null,
      showPic: false,
      title: '空标题'
    };
    this.text = QuestionEdit.i18n[languageHelper()];
    this.handleInputClick = this.handleInputClick.bind(this);
  }

  async componentDidMount() {
    // const id = Cookies.get('id')
    // const userInfor = await getAsync(`/users/${id}`)
    const result = {}
    let mockData =
      {
        id: result.id || 1,
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

  // todo,富文本提交
  handleInputClick() {
    //todo,通过refs调用的方法
    this.answerText.submitContent();
    // this.refs.answerText.submitContent();
  }



  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div style={{background:'#F3F5F7'}}>
        <Header/>
        <MDBRow style={{margin: '47px 0px'}}>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="10" style={{height: '100%'}}>
            <MDBRow style={{margin: '16px 0px'}}>
              <MDBCol style={{fontSize: '24px', textAlign: 'center', color:'#31394D', ...basicFont}}>
                {this.text.write}
              </MDBCol>


            </MDBRow>
            <div style={{minHeight:'384px',minWidth:'930px',height:'100%',background:'#FFFFFF',margin:'20px 0px 0px 0px',boxShadow: '1px 1px 20px rgba(0, 0, 0, 0.08)'}}>
              <MDBRow style={{margin: '0px 33px',paddingTop:'30px', display: 'flex'}}>
                <MDBAvatar style={{height: '100%', margin: '6px 11px 6px 0px', flexGrow: '0'}}>
                  <img
                    style={{width: '32px', background: '#F4F4F4'}}
                    src={this.state.backend.img}
                    alt=""
                    className="rounded-circle"
                  />
                </MDBAvatar>
                <div style={{marginTop:'5px',flexGrow: '1',}}>
                  <input style={{
                    width:'100%',
                    background: '#FFFFFF',
                    border: '1px solid #DBE5F7',
                    boxSizing: 'border-box',
                    borderRadius: '2px',
                    padding:'8px 0px 8px 20px',
                    fontSize:'14px',
                    color:'#31394D',
                    height:'37px',
                    ...basicFont,
                  }} ref={(input) => (this.input = input)} placeholder='问题的标题'/>

                </div>

              </MDBRow>
              <MDBRow style={{
                height:'100%',
                margin:'15px 33px',
                border: '1px solid #DBE5F7',
                boxSizing: 'border-box',
                borderRadius: '2px'}}>
                {/*todo,没有改，默认1的时候传入数据*/}
                <AnswerText richText={1} ref={(answerText) => this.answerText = answerText}></AnswerText>
              </MDBRow>
              {/*居中和水平对齐的方式*/}
              <div style={{
                width:'88px',
                height:'28px',
                marginLeft:'33px',
                background: '#F0F3FA',
                borderRadius: '20px',
                justifyContent: 'center',
                display:'flex',
                alignItems:'center',
                fontSize: '14px',
                color:'#4F65E1',
                ...basicFont}}>
                标签1
              </div>
              <div className="FTDquestion" style={{margin:'0px',marginLeft:'33px'}}>
                <MDBInput style={{paddingLeft:'0px'}} label="匿名提问" type="checkbox" id="checkbox1" />

              </div>
              {/*<MDBRow>*/}
              {/*<MDBCol size="10"></MDBCol>*/}
              {/*<MDBCol size="2">*/}
              {/*<MDBBtn flat style={{float:'right',padding: '5px 10px',zIndex:10}}>*/}
              {/*提交回答*/}
              {/*</MDBBtn>*/}
              {/*</MDBCol>*/}
              {/*</MDBRow>*/}
            </div>

            <MDBRow center style={{paddingRight: '0px'}}>
              <MDBBtn color="indigo" style={{
                fontSize: '16px',
                padding: '9px 21.52px',
                margin: '30px 0px',
                ...basicFont
              }}>发布
              </MDBBtn>
            </MDBRow>
          </MDBCol>
        </MDBRow>


        <Footer/>
      </div>

    ) : null;
  }
}

QuestionEdit.i18n = [
  {
    title: '标题',
    submitBtn: '提交文章',
    write: '编辑问题'
  },
  {
    title: 'Title',
    submitBtn: 'submit article',
    write: 'write question'
  },
];
