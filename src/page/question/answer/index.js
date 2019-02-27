import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {languageHelper} from '../../../tool/language-helper';
import {
  MDBNavLink,
  MDBBtn,
  MDBCol,
  MDBRow,
} from 'mdbreact';

import {Header} from '../../../general-component/header/header';
import {Footer} from '../../../general-component/footer';
import {QuestionDes} from '../question-description'
import {getAsync} from '../../../tool/api-helper'
import {QuestionCard} from '../../../general-component/question-card'

const basicFont = {
  fontFamily: 'IBM Plex Sans',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: 'normal',
}


export class QuestionAnswerOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: null,
      firstTime: 1,
      selectType: 1
    };
    this.text = QuestionAnswerOne.i18n[languageHelper()];
  }

  async componentDidMount() {
    const result = await getAsync(`/questions/${this.props.match.params.questionId}`)
    // console.log(result)
    if (result && result.status && result.status.code === 2000) {
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
          answerList: result.content.answerList || [{id:1},{id:2}],
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
    } else {
      let mockData = {
        // status: result.status,
        status:2000
      }
      this.setState(() => {
        return {backend: mockData};
      });
    }
  }


  render() {
    return (this.state.backend && this.state.backend.status) ? (
      <div>
        {/*有状态码且为2000时候才渲染*/}
        {this.state.backend.status.code && this.state.backend.status.code !== 2000 ? (
          <div>
            <Redirect to="/404"></Redirect>
          </div>
        ) : (
          <div>
            <Header></Header>

            <MDBRow style={{marginTop:'10px'}}>
              <MDBCol size="1"></MDBCol>
              <MDBCol size="10">
                <QuestionDes
                  tags={this.state.backend.tags}
                  content={this.state.backend.content}
                  focus={this.state.backend.focus}
                  reading={this.state.backend.reading}
                  questionId={1}>
                </QuestionDes>
              </MDBCol>
            </MDBRow>
            <br/>
            <MDBRow>
              <MDBCol size="1"></MDBCol>
              <MDBCol size="10">
                <MDBRow style={{
                  textAlign:'center',
                  background: '#FFFFFF',
                  padding:'10px 0px',
                  boxShadow: '1px 1px 20px rgba(0, 0, 0, 0.08)', 
                  margin: '20px 0px'}}>
                  <MDBCol middle>
                    <MDBBtn flat style={{padding: '5px 0', marginLeft: '15px'}}>
                      <Link 
                        to={`/question/${this.state.backend.id}`} 
                        style={{color: '#3E4850', fontSize: '15px', ...basicFont}}>
                        查看全部回答
                        </Link>
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
                {this.state.backend.answerList.map((item)=>(
                  <QuestionCard 
                    type={1} 
                    questionId={item.id} 
                    key={item.id}></QuestionCard>
                ))}
                <MDBRow style={{
                  textAlign:'center',
                  background: '#FFFFFF',
                  padding:'10px 0px',
                  boxShadow: '1px 1px 20px rgba(0, 0, 0, 0.08)',
                  margin: '20px 0px',}}>
                  <MDBCol middle>
                    <MDBBtn flat style={{padding: '5px 0', marginLeft: '15px'}}>
                      <Link
                        to={`/question/${this.state.backend.id}`}
                        style={{color: '#3E4850', fontSize: '15px', ...basicFont}}>
                        查看全部回答
                      </Link>
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
            <Footer></Footer>
          </div>
        )}
      </div>
    ) : null;
  }
}

QuestionAnswerOne.i18n = [
  {
    applyBefore: '申请截止'
  },
  {
    applyBefore: 'Apply Before'
  },
];
