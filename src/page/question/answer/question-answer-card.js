import React from 'react';
import BraftEditor from 'braft-editor'
import {languageHelper} from '../../../tool/language-helper';
import {Link} from 'react-router-dom';
import {getAsync} from '../../../tool/api-helper'
import {CommentsCard} from '../comment-test'
import {PaginationUse} from '../pagination-test'
import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBAvatar,
} from 'mdbreact';

import {data} from '../../discovery/question-data'

const basicFont = {
  fontFamily: 'PingFang SC',
  lineHeight: 'normal'
}
const ulBasicNoLine = {
  listStyle: 'none',
  padding: '0px',
  margin: '0px'
}
const liBasicNoLine = {
  listStyle: 'none',
  padding: '0px',
  margin: '0px'
}

// type={
//   1:'discovery里面',
//   2:'question里面'
// }

export class QuestionAnswerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: null,
      editorState: null,
      isCollapsed: true,
      showBottom: true,
      showComments: false,
      commontsText: null,
      pageConfig: {
        totalPage: 14 //总页码
      },
      stickyRow: {background: '#FFFFFF'}
    }
    // 展开全文
    this.handleSpanClick = this.handleSpanClick.bind(this);
    // 得到当前分页
    this.getCurrentPage = this.getCurrentPage.bind(this);
    // 展开评论
    this.showComments = this.showComments.bind(this);
    // 添加评论
    this.addComments = this.addComments.bind(this);
    // 监听滚动事件
    this.orderScroll = this.orderScroll.bind(this)
    this.sliceText = this.sliceText.bind(this)
    // 多语言
    this.text = QuestionAnswerCard.i18n[languageHelper()];
  }

  handleSpanClick() {
    // console.log(this.props.type,1)
    let isCollapsed = !this.state.isCollapsed
    if (isCollapsed) {
      // this.divNow.style.height='100px'
      this.setState({
        stickyRow: {background: '#FFFFFF'},
        isCollapsed: true
      });
    } else {
      // this.divNow.style.height='400px'
      this.setState({
        isCollapsed: false,
        stickyRow: {
          background: '#FFFFFF',
          position: 'sticky',
          bottom: '0px'
        }
      })
    }
  }

  sliceText(text) {
    if (text.length > 300) {
      return text.slice(1, 300) + '......'
    } else {
      return text
    }
  }

  async componentDidMount() {
    window.addEventListener('scroll', this.orderScroll.bind(this));
    let mockData
    let answer
    let commonLists
    if (data.env) {
      commonLists = [1, 2]
      mockData = {
        id: 1,
        short: this.sliceText("<在软件行业，操作系统平台就是那个八，其他的应用软件就是那个二。微软已经踩到了一次狗屎运，得到了软件行业80%的利润，现在，他所需要做的，就是保持住这个地位。但技术不是静止不动的，不断有新的技术生长出来，在成千上万种技术中，有一种会长成参天大树，利润无比丰厚，取代原来的技术平台，成为新的主流趋势。到了今天，微软在互联网时代江河日下，谷歌和facebook大肆收购，花上百亿美元去买下新兴的技术，为的是什么？就是在押宝呀。<br>技术在不断向前升级，哪一个方向才是未来的主流趋势呢？没有人知道。对于腾讯来说，也是一样的。小马哥每天都在为这件事情而焦虑。<br>截至目前，在国内，押中两次宝的就只有腾讯和阿里。阿里押中了淘宝和支付宝，腾讯押中了QQ和微信。<br>在移动互联网时代，腾讯可以稍稍松一口气了，但是在下一个主流技术趋势到来的时候，还有这个好运气么？>"),
        long: {
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
        user: 'DEF',
        img: 'https://s3.amazonaws.com/youthchina/WechatIMG29.jpeg',
        // description: '莫以为敌消彼长，然乾坤逆之天崩',
        description: 'WeYouth负责人',
        readingTime: 10,
        editTime: '2018-02-03',
        score: 5,
        commonLists: commonLists === [] ? [1, 2] : commonLists,
        agree: '',
        disagree: '',
        status: {
          code: 2000
        }
      }
    } else {
      try {
        commonLists = await getAsync(`/answers/${this.props.answer.id}/comments`,!data.env)
        commonLists = commonLists.content.comments
      } catch (e) {
        console.log(e)
        // alert(e)
      }
      // 传入id就自己fetch
      if (this.props.answer.id) {
        try{
          const result = await getAsync(`/answers/${this.props.answer.id}`,!data.env)
          answer = result.content
        } catch (e) {
          
        }
        
      } else {
        answer = this.props.answer
      }
      mockData = {
        id: answer.id,
        short: this.sliceText(answer.body.braftEditorRaw.blocks[0].text) || '关于这是一家什么公司，我想没有人比我更有发言权了，这要从远古时代开始讲起，记得那是一个平凡却又不平凡的下午，那天的夕阳很美，美的就像那个什么，对，就像那个什么。如果有其他问题，欢迎向我提问，反正你也没有我联系方式关于这是一家什么公司，我想没有人比我更有发言权了，这要从远古时代开始讲起，记得那是一个平凡却又不平凡的下午，那天的夕阳很美，美的就像那个什么，对，就像那个什么。如果有其他问题，欢迎向我提问，反正你也没有我联系方式关于这是一家什么公司，我想没有人比我更有发言权了，这要从远古时代开始讲起，记得那是一个平凡却又不平凡的下午，那天的夕阳很美，美的就像那个什么，对，就像那个什么。如果有其他问题，欢迎向我提问，反正你也没有我联系方式...',
        long: answer.body.braftEditorRaw || '关于这是一家什么公司，我想没有人比我更有发言权了，这要从远古时代开始讲起，记得那是一个平凡却又不平凡的下午，那天的夕阳很美，美的就像那个什么，对，就像那个什么。如果有其他问题，欢迎向我提问，反正你也没有我联系方式关于这是一家什么公司，我想没有人比我更有发言权了，这要从远古时代开始讲起，记得那是一个平凡却又不平凡的下午，那天的夕阳很美，美的就像那个什么，对，就像那个什么。如果有其他问题，欢迎向我提问，反正你也没有我联系方式关于这是一家什么公司，我想没有人比我更有发言权了，这要从远古时代开始讲起，记得那是一个平凡却又不平凡的下午，那天的夕阳很美，美的就像那个什么，对，就像那个什么。如果有其他问题，欢迎向我提问，反正你也没有我联系方式关于这是一家什么公司，我想没有人比我更有发言权了，这要从远古时代开始讲起，记得那是一个平凡却又不平凡的下午，那天的夕阳很美，美的就像那个什么，对，就像那个什么。如果有其他问题，欢迎向我提问，反正你也没有我联系方式关于这是一家什么公司，我想没有人比我更有发言权了，这要从远古时代开始讲起，记得那是一个平凡却又不平凡的下午，那天的夕阳很美，美的就像那个什么，对，就像那个什么。如果有其他问题，欢迎向我提问，反正你也没有我联系方式关于这是一家什么公司，我想没有人比我更有发言权了，这要从远古时代开始讲起，记得那是一个平凡却又不平凡的下午，那天的夕阳很美，美的就像那个什么，对，就像那个什么。如果有其他问题，欢迎向我提问，反正你也没有我联系方式关于这是一家什么公司，我想没有人比我更有发言权了，这要从远古时代开始讲起，记得那是一个平凡却又不平凡的下午，那天的夕阳很美，美的就像那个什么，对，就像那个什么。如果有其他问题，欢迎向我提问，反正你也没有我联系方式',
        user: answer.creator.username || '齐昊',
        img: answer.creator.avatar_url || 'https://s3.amazonaws.com/youthchina/WechatIMG29.jpeg',
        // description: '莫以为敌消彼长，然乾坤逆之天崩',
        description: 'WeYouth负责人',
        readingTime: 10,
        editTime: answer.modified_at.slice(0, 10) || 1,
        score: 5,
        commonLists: commonLists === [] ? [1, 2] : commonLists,
        agree: '',
        disagree: '',
        status: {
          code: 2000
        }
      };
    }
    this.setState({
      backend: mockData,
      commontsText: `${commonLists.length}条评论`,
      editorState: BraftEditor.createEditorState(mockData.long)
    });
  }

  orderScroll() {
    setTimeout(() => {
      if (!this.state.isCollapsed) {
        if (this.scrollSpan) {
          // 浏览器窗口减去元素的高度
          let discount = document.documentElement.clientHeight - this.scrollSpan.getBoundingClientRect().top
          // console.log(document.documentElement.clientHeight,this.scrollSpan.getBoundingClientRect().top,discount)
          // 手动给的250
          if (discount < 250) {
            this.setState({
              showBottom: false
            })

          } else if (discount > 260) {
            this.setState({
              showBottom: true
            })
          }
        }


      }
    }, 100)
  }

  showComments() {

    let commontsText = this.state.commontsText === `${this.state.backend.commonLists.length}条评论` ? '收起评论' : `${this.state.backend.commonLists.length}条评论`
    let showComments = !this.state.showComments
    this.setState({
      showComments,
      commontsText
    })
  }

  addComments(e) {
    let {commentLists = []} = this.state.backend
    commentLists.unshift(this.input.value)
    // console.log(commonLists,this.props.id)
    this.setState({
      backend: {
        commentLists: commentLists,
        ...this.state.backend
      }
    })
    e.stopPropagation();
  }

  // todo,拿到点击好的页吗
  getCurrentPage(currentPage) {

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.orderScroll.bind(this));
  }

  render() {
    if (this.state.backend && this.state.backend.status) {
      return (

        <div>
          <div style={{background: '#FFFFFF', padding: '20px 30px', borderRadius: '2px'}}
               ref={(span) => this.scrollSpan = span}>
            <strong
              style={{color: '#31394D', fontSize: '18px', ...basicFont}}>{this.state.backend.title}
            </strong>

            <div>
              <MDBRow style={{margin: '10px 0px'}}>
                <MDBAvatar style={{height: '100%', margin: '6px 11px 6px 0px'}}>
                  <img
                    style={{width: '32px', background: '#F4F4F4'}}
                    src={this.state.backend.img}
                    alt=""
                    className="rounded-circle"
                  />
                </MDBAvatar>
                <ul style={{
                  listStyle: 'none',
                  padding: '0px',
                  margin: '0px'
                }}>
                  <li style={{
                    listStyle: 'none',
                    color: '#31394D',
                    fontSize: '16px',
                    ...basicFont
                  }}>
                    {this.state.backend.user}
                  </li>
                  <li style={{
                    listStyle: 'none',
                    color: '#8D9AAF',
                    fontSize: '14px',
                    ...basicFont
                  }}>
                    {this.state.backend.description}
                    <MDBBtn disabled flat style={{
                      background: '#F0F3FA',
                      borderRadius: '8px',
                      padding: '0px',
                      margin: '0px',
                      marginLeft: '15px',
                      marginTop: '-4px',
                      textAlign: 'center',
                    }}>
                    <span style={{
                      margin: '1px 14px',
                      fontSize: '12px',
                      color: '#4F65E1', ...basicFont
                    }}>{this.state.backend.score}</span>
                    </MDBBtn>
                  </li>
                </ul>
              </MDBRow>

              {this.state.isCollapsed ? (
                <div>
                  {/*<span style={{color: '#3E4850', fontSize: '14px', ...basicFont}}>{this.state.backend.user}</span>:*/}
                  <ul style={ulBasicNoLine}>
                    <li style={{color: '#8D9AAF', fontSize: '14px', ...liBasicNoLine, margin: '10px 0px'}}>
                      预计阅读时间: {this.state.backend.readingTime}分钟
                    </li>
                    <li style={{color: '#31394D', fontSize: '14px', ...liBasicNoLine, ...basicFont}}>
                      {this.state.backend.short}
                    </li>
                    <li onClick={this.handleSpanClick} style={{
                      color: '#4F65E1',
                      fontSize: '14px', ...liBasicNoLine, ...basicFont,
                      margin: '10px 0px 0px 0px'
                    }}>
                      展开更多<MDBIcon style={{marginLeft: '5px'}} icon="arrow-down"/>
                    </li>
                  </ul>

                </div>
              ) : (


                <span
                  dangerouslySetInnerHTML={{__html: this.state.editorState.toHTML()}}
                  style={{color: '#31394D', fontSize: '14px', ...basicFont}}>
                  {/*{this.state.backend.long}*/}
                  </span>

              )}
            </div>
            {this.state.showBottom || this.state.isCollapsed ? (


              <MDBRow style={this.state.stickyRow}>
                <MDBCol size="12" md="3" middle>
              <span style={{color: '#8D9AAF', fontSize: '14px', ...basicFont}}>
                {this.state.backend.editTime}
              </span>
                </MDBCol>
                <MDBCol size="9">
                  <div style={{float: 'right'}}>
                    <MDBBtn flat style={{
                      padding: '5px 10px',
                      marginLeft: '15px',
                      fontSize: '14px',
                      color: '#8D9AAF', ...basicFont
                    }}>
                      <MDBIcon style={{marginRight: '5px'}} far icon="thumbs-up"/>点赞
                    </MDBBtn>
                    <MDBBtn flat style={{padding: '5px 10px', fontSize: '14px', color: '#8D9AAF', ...basicFont}}>
                      <MDBIcon style={{marginRight: '5px'}} icon="heart"/>收藏
                    </MDBBtn>
                    <MDBBtn onClick={this.showComments} flat
                            style={{padding: '5px 10px', fontSize: '14px', color: '#8D9AAF', ...basicFont}}>
                      <MDBIcon style={{marginRight: '5px'}} far icon="comment"/>{this.state.commontsText}
                    </MDBBtn>
                    <MDBBtn flat style={{padding: '5px 10px', fontSize: '14px', color: '#8D9AAF', ...basicFont}}>
                      <MDBIcon style={{marginRight: '5px'}} icon="share"/>分享
                    </MDBBtn>
                    {/*<MDBBtn flat style={{padding: '5px 10px',}}>*/}
                    {/*<MDBIcon style={{marginRight: '5px'}} icon="ban"/>*/}
                    {/*举报*/}
                    {/*</MDBBtn>*/}
                    {this.state.isCollapsed ? null :
                      <MDBBtn onClick={this.handleSpanClick} flat
                              style={{padding: '5px 10px', color: '#4F65E1', fontSize: '14px', ...basicFont}}>
                        收起
                        {/*<MDBIcon style={{marginRight: '5px'}} icon="arrow-up"/>*/}
                      </MDBBtn>}
                  </div>

                </MDBCol>

              </MDBRow>

            ) : null}
          </div>
          {this.state.showComments ? (
            <div style={{marginTop: '15px', background: '#FFFFFF', padding: '19px 32px', borderRadius: '2px'}}>
              <MDBRow style={{
                margin: '0px 0px 11px 0px',
                fontSize: '16px',
                color: '#8D9AAF', ...basicFont
              }}>{this.state.backend.commonLists.length}条评论</MDBRow>
              <MDBRow style={{margin: '0px', display: 'flex'}}>
                <MDBAvatar style={{height: '100%', margin: '6px 11px 6px 0px', flexGrow: '0'}}>
                  <img
                    style={{width: '32px', background: '#F4F4F4'}}
                    src={this.state.backend.img}
                    alt=""
                    className="rounded-circle"
                  />
                </MDBAvatar>
                <div style={{marginTop: '5px', flexGrow: '1',}}>
                  <input style={{
                    width: '100%',
                    background: '#FFFFFF',
                    border: '1px solid #DBE5F7',
                    boxSizing: 'border-box',
                    borderRadius: '2px',
                    padding: '8px 0px 8px 20px',
                    fontSize: '14px',
                    color: '#B3C1DB',
                    height: '37px',
                    ...basicFont,
                  }} ref={(input) => (this.input = input)} placeholder="发表你的评论..."/>

                </div>


                <MDBBtn onClick={(e) => this.addComments(e)} flat
                        style={{
                          flexGrow: '0',
                          background: '#C4C4C4',
                          padding: '8px 20px',
                          color: '#FFFFFF', ...basicFont,
                          margin: '6px 6px 5px 6px',
                        }}>
                  发布
                </MDBBtn>

              </MDBRow>
              {this.state.backend.commonLists.map((item) => (
                <CommentsCard key={item} message={item}></CommentsCard>

              ))}
              {this.state.backend.commonLists.length !== 0 ? (
                <MDBRow center style={{marginTop: '10px'}}>
                  <PaginationUse pageConfig={{totalPage: Math.ceil(this.state.backend.commonLists.length / 3)}}
                                 pageCallbackFn={this.getCurrentPage}></PaginationUse>
                </MDBRow>
              ) : null}
              <MDBRow center style={{marginTop: '9px'}}>
                <MDBBtn onClick={this.showComments} flat
                        style={{margin: '0px', padding: '5px 10px', fontSize: '14px', color: '#8D9AAF', ...basicFont}}>
                  收起评论<MDBIcon style={{marginLeft: '5px'}} icon="arrow-up"/>
                </MDBBtn>
              </MDBRow>
            </div>

          ) : null}
        </div>

      );
    } else {
      return <div></div>
    }
  }
}

QuestionAnswerCard.i18n = [
  {
    related: '类似职位推荐',
  },
  {
    related: 'Related Work',
  },
];
