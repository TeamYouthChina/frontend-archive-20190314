import React from 'react';
import {Redirect} from 'react-router-dom';

import {languageHelper} from '../../tool/language-helper';
import {
  MDBCol,
  MDBRow,
} from 'mdbreact';

import {env,urlPrefix,generateHeaders,getAsync} from './api-test/api-test'

import Loading from './loading'
// import {getAsync} from '../../tool/api-helper'

import {Header} from '../../general-component/header/header';
import {Footer} from '../../general-component/footer';
import {QuestionDes} from './question-description';
import {ArticleCard} from '../article/article-card'
// import {QuestionBar} from './question-side-bar'
import {QuestionCard} from './question-card-test'

export class QuestionAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: null,
      loading: true,
      firstTime: 1,
      selectType: 1
    };
    this.text = QuestionAnswer.i18n[languageHelper()];
  }

  async componentDidMount() {
    if (env === 'production') {
      try {
        const result = await getAsync(`/questions/${this.props.match.params.questionId}`)
        if (result.status.code === 2000) {
          let mockData =
            {
              id: result.content.id,
              tags: result.content.tags || ['大学生', '求职', '分享', '经验'],
              content: {
                title: result.content.title,
                descrption: result.content.body || '123'
                // descrption: result.content.richTextDTO
              },
              create_at: result.content.create_at,
              modified_at: result.content.modified_at,
              creator: {
                user: result.content.username,
                avatarUrl: result.content.avatarUrl,
              },
              answerList: result.content.commonLists,
              focus: result.content.focus || 123,
              reading: result.content.reading || 123,
              status: {
                code: result.status.code,
                // code:2000
              }
            };
          this.setState({
            backend: mockData,
            loading: false
          })
        } else {
          // console.log(result.status.code)
          // this.props.history.push('/404')
          let mockData =
            {
              id: '1',
              tags: ['互联网', '金融', '求职', '大学生'],
              content: {
                title: '标题',
                descrption: '123'
              },
              creator: {
                user: '齐昊',
                avatarUrl: 'https://s3.amazonaws.com/youthchina/WechatIMG29.jpeg',
              },
              create_at: '2019-1-1',
              modified_at: '2019-1-2',
              answerList: [{
                id: 1,
                body: '123',
                creator: {
                  user: '齐昊',
                  avatarUrl: 'https://s3.amazonaws.com/youthchina/WechatIMG29.jpeg',
                },
                modified_at: '2019-01-01 00:00:00.0',
                create_at: '2019-01-01 00:00:00.0',
              }, {
                id: 2,
                body: '123',
                creator: {
                  user: '齐昊',
                  avatarUrl: 'https://s3.amazonaws.com/youthchina/WechatIMG29.jpeg',
                },
                modified_at: '2019-01-01 00:00:00.0',
                create_at: '2019-01-01 00:00:00.0',
              }],
              focus: 123,
              reading: 123,
              status: {
                // code: result.status.code,
                code: 2000
              }
            };
          this.setState(() => {
            return {
              backend: mockData,
            };
          });
        }
      } catch (e) {
        // todo,出错，先用loading代替，之后改成报错图片
        console.log(e)
        const result = {
          status: e.status
        }
        this.setState({
          backend: result,
        })
      }
    } else {
      let mockData =
        {
          id: '1',
          tags: ['互联网', '金融', '求职', '大学生'],
          content: {
            title: '标题',
            descrption: '123'
          },
          creator: {
            user: '齐昊',
            avatarUrl: 'https://s3.amazonaws.com/youthchina/WechatIMG29.jpeg',
          },
          create_at: '2019-1-1',
          modified_at: '2019-1-2',
          answerList: [{
            id: 1,
            body: '123',
            creator: {
              user: '齐昊',
              avatarUrl: 'https://s3.amazonaws.com/youthchina/WechatIMG29.jpeg',
            },
            modified_at: '2019-01-01 00:00:00.0',
            create_at: '2019-01-01 00:00:00.0',
          }, {
            id: 2,
            body: '123',
            creator: {
              user: '齐昊',
              avatarUrl: 'https://s3.amazonaws.com/youthchina/WechatIMG29.jpeg',
            },
            modified_at: '2019-01-01 00:00:00.0',
            create_at: '2019-01-01 00:00:00.0',
          }],
          focus: 123,
          reading: 123,
          status: {
            // code: result.status.code,
            code: 2000
          }
        };
      this.setState(() => {
        return {
          backend: mockData,
          loading: false
        };
      });
    }
  }


  render() {
    return this.state.backend && (
      <div style={{backgroundColor:'#F2F2F2'}}>
        <Header></Header>
        <MDBRow style={{marginTop: '10px',backgroundColor:'#F2F2F2'}}>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="10">
            <QuestionDes
              questionId={this.state.backend.id}
              tags={this.state.backend.tags}
              content={this.state.backend.content}
              focus={this.state.backend.focus}
              reading={this.state.backend.reading}
              loading={this.state.loading}>
            </QuestionDes>
          </MDBCol>
        </MDBRow>
        <br/>
        <MDBRow style={{backgroundColor:'#F2F2F2'}}>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="10" middle>
            {this.state.backend.answerList.map((item) => (
              <QuestionCard
                type={1}
                key={item.id}
                questionId={item.id} title={this.state.backend.title}>
              </QuestionCard>
            ))}
          </MDBCol>
        </MDBRow>
        <Footer></Footer>
      </div>
    )
  }
}

QuestionAnswer.i18n = [];
