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
import {QuestionDes} from '../question-description';
import {getAsync} from '../../../tool/api-helper';
import {QuestionCard} from '../question-card-test';
import {data} from '../../discovery/question-data';

const basicFont = {
  fontFamily: 'IBM Plex Sans',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: 'normal',
};


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
    // console.log(this.props.location.state.h1)
    let result;
    let mockData;
    if (data.env) {
      mockData =
        {
          id: 1,
          tags: ['腾讯', '大学生', '求职', '互联网'],
          content: {
            title: '腾讯好么？',
            description: {
              entityMap: {},
              blocks: [
                {
                  key: 'dtj4a',
                  text: '<asdasd>',
                  type: 'unstyled',
                  depth: 0,
                  inlineStyleRanges: [],
                  entityRanges: [],
                  data: {}
                }
              ]
            },
          },
          author: 'Admin',
          editTime: '2019-01-01',
          answerList: [
            {
              id: 1,
              body: {
                braftEditorRaw: {
                  entityMap: {},
                  blocks: [
                    {
                      key: 'dtj4a',
                      text: '<在软件行业，操作系统平台就是那个八，其他的应用软件就是那个二。微软已经踩到了一次狗屎运，得到了软件行业80%的利润，现在，他所需要做的，就是保持住这个地位。但技术不是静止不动的，不断有新的技术生长出来，在成千上万种技术中，有一种会长成参天大树，利润无比丰厚，取代原来的技术平台，成为新的主流趋势。到了今天，微软在互联网时代江河日下，谷歌和facebook大肆收购，花上百亿美元去买下新兴的技术，为的是什么？就是在押宝呀。<br>技术在不断向前升级，哪一个方向才是未来的主流趋势呢？没有人知道。对于腾讯来说，也是一样的。小马哥每天都在为这件事情而焦虑。<br>截至目前，在国内，押中两次宝的就只有腾讯和阿里。阿里押中了淘宝和支付宝，腾讯押中了QQ和微信。<br>在移动互联网时代，腾讯可以稍稍松一口气了，但是在下一个主流技术趋势到来的时候，还有这个好运气么？>',
                      type: 'unstyled',
                      depth: 0,
                      inlineStyleRanges: [],
                      entityRanges: [],
                      data: {}
                    }
                  ]
                },
                previewText: '<在此填入你的文字>',
                resourceIdList: []
              },
              is_anonymous: false,
              creator: {
                id: 5,
                username: 'DEF',
                email: '123456@456.com',
                phonenumber: '9876543210123',
                register_date: '2019-01-01 00:00:00.0',
                real_name: 'DDDEEEFFF',
                gender: 'Female',
                nation: 'USA',
                avatar_url: null,
                role: 3,
                age: 28
              },
              modified_at: '2018-02-03 00:00:00.0',
              create_at: '2018-02-03 00:00:00.0'
            }
          ],
          question: {

            'id': 1,
            'creator': {
              'id': 1,
              'username': 'Admin',
              'email': '123456@123.com',
              'phonenumber': '1234657890123',
              'register_date': '2019-01-01 00:00:00.0',
              'real_name': 'AAABBBCCC',
              'gender': 'Male',
              'nation': 'CHN',
              'avatar_url': null,
              'role': 1,
              'age': 25
            },
            'title': '腾讯好么？',
            'is_anonymous': true,
            'create_at': '2019-01-01T00:00:00.000+0000',
            'modified_at': '2019-01-01T00:00:00.000+0000',
            'answers': [
              {
                'id': 1,
                'body': {
                  'braftEditorRaw': {
                    'entityMap': {},
                    'blocks': [
                      {
                        'key': 'dtj4a',
                        'text': '<在软件行业，操作系统平台就是那个八，其他的应用软件就是那个二。微软已经踩到了一次狗屎运，得到了软件行业80%的利润，现在，他所需要做的，就是保持住这个地位。但技术不是静止不动的，不断有新的技术生长出来，在成千上万种技术中，有一种会长成参天大树，利润无比丰厚，取代原来的技术平台，成为新的主流趋势。到了今天，微软在互联网时代江河日下，谷歌和facebook大肆收购，花上百亿美元去买下新兴的技术，为的是什么？就是在押宝呀。<br>技术在不断向前升级，哪一个方向才是未来的主流趋势呢？没有人知道。对于腾讯来说，也是一样的。小马哥每天都在为这件事情而焦虑。<br>截至目前，在国内，押中两次宝的就只有腾讯和阿里。阿里押中了淘宝和支付宝，腾讯押中了QQ和微信。<br>在移动互联网时代，腾讯可以稍稍松一口气了，但是在下一个主流技术趋势到来的时候，还有这个好运气么？>',
                        'type': 'unstyled',
                        'depth': 0,
                        'inlineStyleRanges': [],
                        'entityRanges': [],
                        'data': {}
                      }
                    ]
                  },
                  'previewText': '<在此填入你的文字>',
                  'resourceIdList': []
                },
                'is_anonymous': false,
                'creator': {
                  'id': 5,
                  'username': 'DEF',
                  'email': '123456@456.com',
                  'phonenumber': '9876543210123',
                  'register_date': '2019-01-01 00:00:00.0',
                  'real_name': 'DDDEEEFFF',
                  'gender': 'Female',
                  'nation': 'USA',
                  'avatar_url': null,
                  'role': 3,
                  'age': 28
                },
                'modified_at': '2018-02-03 00:00:00.0',
                'create_at': '2018-02-03 00:00:00.0'
              }
            ],
            'rela_type': 1,
            'rela_id': null,
            'body': {
              'braftEditorRaw': {
                'entityMap': {},
                'blocks': [
                  {
                    'key': 'dtj4a',
                    'text': '<asdasd>',
                    'type': 'unstyled',
                    'depth': 0,
                    'inlineStyleRanges': [],
                    'entityRanges': [],
                    'data': {}
                  }
                ]
              },
              previewText: '<在此填入你的文字>',
              resourceIdList: []
            }
            
          },
          focus: 123,
          reading: 123,
          status: {
            // code: result.status.code,
            code: 2000
          }
        };
    } else {
      if (this.props.questionId) {
        try {
          result = await getAsync(`/questions/${this.props.questionId}`);
          result = result.content
        } catch (e) {
          console.log(e);
        }
      } else {
        result = this.props.question;
      }
      mockData =
        {
          id: result.id,
          tags: ['腾讯', '大学生', '求职', '互联网'],
          content: {
            title: result.title,
            description: result.body.braftEditorRaw,
          },
          author: result.creator.username,
          editTime: result.modified_at,
          answerList: result.answers,
          focus: 123,
          reading: 123,
          question: result,
          status: {
            code: 2000,
            // code: 2000
          }
        };
    }
    this.setState({
      backend: mockData
    });

  }


  render() {
    return (this.state.backend && this.state.backend.status) ? (
      <div>
        <div style={{backgroundColor: '#F2F2F2'}}>
          <Header></Header>

          <MDBRow style={{marginTop: '10px'}}>
            <MDBCol size="1"></MDBCol>
            <MDBCol size="10">
              <QuestionDes
                tags={this.state.backend.tags}
                content={this.state.backend.content}
                focus={this.state.backend.focus}
                reading={this.state.backend.reading}
                questionId={this.state.backend.id}
                loading={false}>
              </QuestionDes>
            </MDBCol>
          </MDBRow>
          <br/>
          <MDBRow style={{backgroundColor:'#F2F2F2'}}>
            <MDBCol size="1"></MDBCol>
            <MDBCol size="10">
              <MDBRow style={{
                textAlign: 'center',
                background: '#FFFFFF',
                padding: '10px 0px',
                boxShadow: '1px 1px 20px rgba(0, 0, 0, 0.08)',
                margin: '20px 0px'
              }}>
                <MDBCol>
                  <MDBBtn flat style={{padding: '5px 0', marginLeft: '15px'}}>
                    <Link
                      to={{
                        pathname:`/question/${this.state.backend.id}`,
                        state:this.state.question
                      }}
                      style={{color: '#3E4850', fontSize: '15px', ...basicFont}}>
                      查看全部回答
                    </Link>
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
              {this.state.backend.answerList.length === 0 ? null : (
                <div style={{marginBottom: '20px'}}>
                  <QuestionCard question={this.state.backend.question}></QuestionCard>
                </div>
              )}
              <MDBRow style={{
                textAlign: 'center',
                background: '#FFFFFF',
                padding: '10px 0px',
                boxShadow: '1px 1px 20px rgba(0, 0, 0, 0.08)',
                margin: '20px 0px',
              }}>
                <MDBCol>
                  <MDBBtn flat style={{padding: '5px 0', marginLeft: '15px'}}>
                    <Link
                      to={{
                        pathname:`/question/${this.state.backend.id}`,
                        state:this.state.question
                      }}
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
