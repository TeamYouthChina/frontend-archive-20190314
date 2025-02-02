import React from 'react';
import BraftEditor from 'braft-editor'
import {languageHelper} from '../tool/language-helper';
import {Link} from 'react-router-dom';
import {CommentsCard} from '../page/question/comment-test'
import {PaginationUse} from '../page/question/pagination-test'
import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBAvatar, MDBBadge
} from 'mdbreact';
import {getAsync} from "../tool/api-helper";
import {data} from "../page/discovery/question-data";

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

export class ReviewCard extends React.Component {
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
    // 多语言
    this.text = ReviewCard.i18n[languageHelper()];
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

  componentDidMount() {
    window.addEventListener('scroll', this.orderScroll.bind(this));
    let editorial
    let mockData
    if(this.props.editorial) {
      editorial = this.props.editorial
      mockData =
        {
          id: editorial.id,
          long: editorial.body.braftEditorRaw,
          user: '齐昊',
          img: 'https://s3.amazonaws.com/youthchina/WechatIMG29.jpeg',
          // description: '莫以为敌消彼长，然乾坤逆之天崩',
          description: editorial.author || '职道负责人',
          readingTime: 10,
          editTime: '2019-1-1',
          score: 5,
          commonLists: editorial.comments.comments,
          agree: '',
          disagree: '',
          status: {
            code: 2000
          }
        };
    } else {
      mockData = {
        id:1,
        long:''
      }
    }
    
    this.setState({
      backend: mockData,
      editorState: BraftEditor.createEditorState(mockData.long),
      commontsText:`${mockData.commonLists.length}条评论`
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
    return this.state.backend && (

      <div>
        <div style={{background: '#FFFFFF', padding: '20px 30px', borderRadius: '2px'}}
             ref={(span) => this.scrollSpan = span}>

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
                    marginTop:'-4px',
                    textAlign: 'center',
                  }}>
                    <span style={{
                      margin: '1px 14px',
                      fontSize: '12px',
                      color: '#4F65E1', ...basicFont
                    }}>{this.state.backend.score}分</span>
                  </MDBBtn>
                </li>
              </ul>
            </MDBRow>
            <span dangerouslySetInnerHTML={{__html: this.state.editorState.toHTML()}} style={{color: '#31394D', fontSize: '14px', ...basicFont}}>
              {/*{this.state.backend.long}*/}
            </span>
          </div>
          {this.state.showBottom || this.state.isCollapsed ? (
            <MDBRow style={this.state.stickyRow}>
              <MDBCol size="12" md="3" middle>
              <span  style={{color: '#8D9AAF', fontSize: '14px', ...basicFont}}>
                {this.state.backend.editTime}
              </span>
              </MDBCol>
              <MDBCol size="9">
                <div style={{float: 'right'}}>
                  <MDBBtn flat style={{padding: '5px 10px', marginLeft: '15px'}}>
                    <MDBIcon style={{marginRight: '5px'}} far icon="thumbs-up"/>点赞
                  </MDBBtn>
                  <MDBBtn flat style={{padding: '5px 10px',}}>
                    <MDBIcon style={{marginRight: '5px'}} icon="heart"/>收藏
                  </MDBBtn>
                  <MDBBtn onClick={this.showComments} flat style={{padding: '5px 10px',}}>
                    <MDBIcon style={{marginRight: '5px'}} far icon="comment"/>{this.state.commontsText}
                  </MDBBtn>
                  <MDBBtn flat style={{padding: '5px 10px',}}>
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

              <input style={{
                flexGrow: '1',
                background: '#FFFFFF',
                border: '1px solid #DBE5F7',
                boxSizing: 'border-box',
                borderRadius: '2px',
                padding: '8px 0px 8px 20px'
              }} ref={(input) => (this.input = input)} placeholder="发表你的评论..."/>


              <MDBBtn onClick={(e) => this.addComments(e)} flat
                      style={{
                        flexGrow: '0',
                        background: '#C4C4C4',
                        padding: '10px 20px',
                        color: '#FFFFFF', ...basicFont,
                        margin: '0px',
                        marginLeft: '8px'
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
            <MDBRow center style={{marginTop:'9px'}}>
              <MDBBtn onClick={this.showComments} flat style={{margin:'0px',padding: '5px 10px',fontSize:'14px',color:'#8D9AAF',...basicFont}}>
                收起评论<MDBIcon style={{marginLeft: '5px'}} icon="arrow-up"/>
              </MDBBtn>
            </MDBRow>
          </div>

        ) : null}
      </div>

    );
  }
}

ReviewCard.i18n = [
  {
    related: '类似职位推荐',
  },
  {
    related: 'Related Work',
  },
];
