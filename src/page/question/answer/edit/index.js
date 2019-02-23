import React from 'react';
import {languageHelper} from '../../../../tool/language-helper';
import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon, MDBMask, MDBView
} from 'mdbreact';
import {AnswerEditInit} from '../answerEditInit';
// import './public/style.css';
import {Header} from '../../../../general-component/header';
import {Footer} from '../../../../general-component/footer';
import {AnswerQShort} from "../answerQShort";
const basicFont = {
  fontFamily: 'IBM Plex Sans',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: 'normal',
}
export class QuestionAnswerEdit extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null,
      showPic: true,
      title:'原来的标题'
    };
    this.text = QuestionAnswerEdit.i18n[languageHelper()];
    this.handleInputClick = this.handleInputClick.bind(this);
    
    this.handleSetInput = this.handleSetInput.bind(this);
  }

  componentWillMount() {
    let result = {}
    let mockData =
      {
        id: 1 || result.id,
        name: 'Summer 2019 Tech Internship',
        tags: ['tag1', 'tag2', 'tag3', 'tag4'] || result.content.tags  ,
        content: {
          title: '如何成为一个合格的天文爱好者？' || result.content.title,
          descrption: '小的时候有个梦想，长大了要当个天文学家。\n时光荏苒，自己一天天长大，慢慢也淡忘了小时候常做的梦。\n前段时间，偶尔在豆瓣上看到了天文小组，突然记起自己小时候也有，梦想，原来一直未曾忘却。\n虽然也会苦笑自己的幼稚，但心底的热浪不能轻易抹掉。\n所以有了这个苦恼，只是如何成为一个合格的天文爱好者？\n也关注了几个天文论坛，买了本书《大众天文学》，暂时还没有入观星设备。\n但还是很感觉入不了门，一头雾水，希望大家能指点、分享。\n这就是我的故事。' || result.content.body
        },
        author: 'title' || result.content.author,
        editTime: 'title' || result.content.editTime,
        answerList: [1,2,]||result.content.answerList,
        focus: 123 || result.content.focus,
        reading: 123 || result.content.reading,
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
  

  handleSetInput(e){
    let value = e.target.value
    setTimeout(()=>(
      this.setState({
        title:value
      })
    ),100)
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
                }}>确认修改
                </MDBBtn>
              </MDBCol>

            </MDBRow>
            <MDBRow>
              <AnswerQShort
                tags={this.state.backend.tags}
                content={this.state.backend.content}
                focus={this.state.backend.focus}
                reading={this.state.backend.reading}
                questionId={1}>
              </AnswerQShort>
            </MDBRow>
            <MDBRow style={{marginTop:'20px'}}>
              <MDBCol middle>
                <input onChange={(e)=>this.handleSetInput(e)} className="form-control" placeholder={this.text.title}/>
              </MDBCol>
            </MDBRow>
            <br/>
            <AnswerEditInit inputData={this.state.title} ref={(answerText) => this.answerText = answerText}></AnswerEditInit>
          </MDBCol>
          <MDBCol size="1"></MDBCol>
        </MDBRow>
        <Footer/>
      </div>

    ) : null;
  }
}

QuestionAnswerEdit.i18n = [
  {
    title: '用户原来的标题',
    submitBtn: '提交回答',
    write:'编辑回答'
  },
  {
    title: 'Title',
    submitBtn: 'submit article',
    write:'edit article'
  },
];
