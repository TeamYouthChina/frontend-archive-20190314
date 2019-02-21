import React from 'react';
import {languageHelper} from '../tool/language-helper';
import {Link} from 'react-router-dom';
import {CommentsCard} from '../page/question/comment-test'
import {PaginationUse} from '../page/question/pagination-test'
import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBAvatar
} from 'mdbreact';

const basicFont = {
  fontFamily: 'IBM Plex Sans',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: 'normal',
}

// type={
//   1:'discovery里面',
//   2:'question里面'
// }

export class ArticleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: null,
      isCollapsed: true,
      showBottom: true,
      showComments: false,
      commontsText: '评论',
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
    this.text = ArticleCard.i18n[languageHelper()];
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

  componentWillMount() {
    let mockData =
      {
        id: '0100',
        title: 'YouthChina是怎样的一个公司',
        short: '关于这是一家什么公司，我想没有人比我更有发言权了，这要从远古时代开始讲起，记得那是一个平凡却又不平凡的下午，那天的夕阳很美，美的就像那个什么，对，就像那个什么。如果有其他问题，欢迎向我提问，反正你也没有我联系方式...',
        long: '关于这是一家什么公司，我想没有人比我更有发言权了，这要从远古时代开始讲起，记得那是一个平凡却又不平凡的下午，那天的夕阳很美，美的就像那个什么，对，就像那个什么。如果有其他问题，欢迎向我提问，反正你也没有我联系方式关于这是一家什么公司，我想没有人比我更有发言权了，这要从远古时代开始讲起，记得那是一个平凡却又不平凡的下午，那天的夕阳很美，美的就像那个什么，对，就像那个什么。如果有其他问题，欢迎向我提问，反正你也没有我联系方式关于这是一家什么公司，我想没有人比我更有发言权了，这要从远古时代开始讲起，记得那是一个平凡却又不平凡的下午，那天的夕阳很美，美的就像那个什么，对，就像那个什么。如果有其他问题，欢迎向我提问，反正你也没有我联系方式关于这是一家什么公司，我想没有人比我更有发言权了，这要从远古时代开始讲起，记得那是一个平凡却又不平凡的下午，那天的夕阳很美，美的就像那个什么，对，就像那个什么。如果有其他问题，欢迎向我提问，反正你也没有我联系方式关于这是一家什么公司，我想没有人比我更有发言权了，这要从远古时代开始讲起，记得那是一个平凡却又不平凡的下午，那天的夕阳很美，美的就像那个什么，对，就像那个什么。如果有其他问题，欢迎向我提问，反正你也没有我联系方式关于这是一家什么公司，我想没有人比我更有发言权了，这要从远古时代开始讲起，记得那是一个平凡却又不平凡的下午，那天的夕阳很美，美的就像那个什么，对，就像那个什么。如果有其他问题，欢迎向我提问，反正你也没有我联系方式关于这是一家什么公司，我想没有人比我更有发言权了，这要从远古时代开始讲起，记得那是一个平凡却又不平凡的下午，那天的夕阳很美，美的就像那个什么，对，就像那个什么。如果有其他问题，欢迎向我提问，反正你也没有我联系方式',
        user: '齐昊',
        img: 'https://s3.amazonaws.com/youthchina/WechatIMG29.jpeg',
        description: '莫以为敌消彼长，然乾坤逆之天崩',
        commentLists: [1, 2],
        agree: '',
        disagree: '',
        status: {
          code: 2000
        }
      };
    this.setState(() => {
      return {backend: mockData};
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.orderScroll.bind(this));
  }

  orderScroll() {
    setTimeout(() => {
      if (!this.state.isCollapsed) {
        if(this.scrollSpan){
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

    let commontsText = this.state.commontsText === '评论' ? '收起评论' : '评论'
    let showComments = !this.state.showComments
    this.setState({
      showComments,
      commontsText
    })
  }

  addComments(e){
    let {commentLists = []} = this.state.backend
    commentLists.unshift(this.input.value)
    // console.log(commentLists,this.props.id)
    this.setState({
      backend:{
        commentLists,
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
    return (
      <div style={{padding: '30px', boxShadow: '1px 1px 20px rgba(0, 0, 0, 0.08)', marginTop: '20px'}}
           ref={(span) => this.scrollSpan = span}>
        {this.props.type === 1 ? (
          <Link to={`/question/${this.state.backend.id}`} style={{color: '#3E4850', fontSize: '18px', ...basicFont}}>{this.state.backend.title}</Link>
        ) : null}
        {this.state.isCollapsed ? (
          <div>
            <span style={{color: '#3E4850', fontSize: '14px', ...basicFont}}>{this.state.backend.user}</span>:
            <span style={{color: '#62686C', fontSize: '14px', ...basicFont}}>  {this.state.backend.short}</span>
            <span onClick={this.handleSpanClick}
                  style={{color: '#175199', fontSize: '14px', ...basicFont}}>阅读全文</span><MDBIcon icon="angle-down"/>
          </div>
        ) : (
          <div>
            <MDBRow style={{margin: '10px 0px'}}>
              <MDBAvatar style={{marginRight: '5px'}}>
                <img
                  style={{width: '32px', background: '#F4F4F4'}}
                  src={this.state.backend.img}
                  alt=""
                  className="rounded-circle"
                />
              </MDBAvatar>
              <span style={{
                marginRight: '5px',
                padding: '5px 0px',
                color: '#3E4850',
                fontSize: '14px', ...basicFont
              }}>{this.state.backend.user}</span>
              <span style={{
                padding: '5px 0px',
                color: '#62686C',
                fontSize: '14px', ...basicFont
              }}>{this.state.backend.description}</span>
            </MDBRow>
            <span style={{color: '#3E4850', fontSize: '14px', ...basicFont}}>{this.state.backend.long}</span>
          </div>
        )}
        {this.state.showBottom || this.state.isCollapsed ? (
          <MDBRow style={this.state.stickyRow}>
            <MDBBtn flat style={{padding: '5px 0', marginLeft: '15px'}}>
              <MDBIcon style={{marginRight: '5px'}} far icon="star"/>关注问题
            </MDBBtn>
            <MDBBtn flat style={{padding: '5px 10px',}}>
              <MDBIcon style={{marginRight: '5px'}} icon="user-plus"/>邀请回答
            </MDBBtn>
            <MDBBtn onClick={this.showComments} flat style={{padding: '5px 10px',}}>
              <MDBIcon style={{marginRight: '5px'}} far icon="comment"/>{this.state.commontsText}
            </MDBBtn>
            <MDBBtn flat style={{padding: '5px 10px',}}>
              <MDBIcon style={{marginRight: '5px'}} icon="share"/>分享
            </MDBBtn>
            <MDBBtn flat style={{padding: '5px 10px',}}>
              <MDBIcon style={{marginRight: '5px'}} icon="ban"/>
              举报
            </MDBBtn>
            {this.state.isCollapsed ? null :
              <MDBBtn onClick={this.handleSpanClick} flat
                      style={{padding: '5px 10px', color: '#175199', fontSize: '14px', ...basicFont}}>
                收起
                <MDBIcon style={{marginRight: '5px'}} icon="arrow-up"/>
              </MDBBtn>}
          </MDBRow>
        ) : null}

        {this.state.showComments ? (
          <div>
            <div style={{
              background: 'linear-gradient(to left, transparent 0%, #8C8C8C 15%, #8C8C8C 85%, transparent 100%)',
              height: '1px'
            }}>
            </div>
            {this.state.backend.commentLists.map((item)=>(
              <CommentsCard key={item} message={item}></CommentsCard>

            ))}

            <MDBRow>
              <MDBCol size="10" center>
                <input ref={(input)=>(this.input = input)} className="form-control" placeholder="你的回复"/>
              </MDBCol>
              <MDBCol style={{paddingLeft: '0px'}}>
                <MDBBtn onClick={(e)=>this.addComments(e)} flat style={{background: '#C4C4C4', padding: '5px 10px', color: '#FFFFFF', ...basicFont}}>
                  发布
                </MDBBtn>
              </MDBCol>

            </MDBRow>
            <MDBRow center style={{marginTop: '10px'}}>
              <PaginationUse pageConfig={this.state.pageConfig} pageCallbackFn={this.getCurrentPage}></PaginationUse>
            </MDBRow>
          </div>

        ) : null}
      </div>
    );
  }
}

ArticleCard.i18n = [
  {
    related: '类似职位推荐',
  },
  {
    related: 'Related Work',
  },
];
