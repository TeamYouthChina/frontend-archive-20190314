import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon,
} from 'mdbreact';

const basicFont = {
  fontFamily: 'IBM Plex Sans',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: 'normal',
}

class RelatedPosition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: null,
      isCollapsed: true,
      showBottom:true,
      stickyRow: {background: '#FFFFFF'}
    }
    this.handleSpanClick = this.handleSpanClick.bind(this);
    this.orderScroll = this.orderScroll.bind(this)
    this.text = RelatedPosition.i18n[languageHelper()];
  }

  handleSpanClick() {
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
        id: 0,
        title: 'YouthChina是怎样的一个公司',
        short: '关于这是一家什么公司，我想没有人比我更有发言权了，这要从远古时代开始讲起，记得那是一个平凡却又不平凡的下午，那天的夕阳很美，美的就像那个什么，对，就像那个什么。如果有其他问题，欢迎向我提问，反正你也没有我联系方式...',
        long: '关于这是一家什么公司，我想没有人比我更有发言权了，这要从远古时代开始讲起，记得那是一个平凡却又不平凡的下午，那天的夕阳很美，美的就像那个什么，对，就像那个什么。如果有其他问题，欢迎向我提问，反正你也没有我联系方式关于这是一家什么公司，我想没有人比我更有发言权了，这要从远古时代开始讲起，记得那是一个平凡却又不平凡的下午，那天的夕阳很美，美的就像那个什么，对，就像那个什么。如果有其他问题，欢迎向我提问，反正你也没有我联系方式关于这是一家什么公司，我想没有人比我更有发言权了，这要从远古时代开始讲起，记得那是一个平凡却又不平凡的下午，那天的夕阳很美，美的就像那个什么，对，就像那个什么。如果有其他问题，欢迎向我提问，反正你也没有我联系方式关于这是一家什么公司，我想没有人比我更有发言权了，这要从远古时代开始讲起，记得那是一个平凡却又不平凡的下午，那天的夕阳很美，美的就像那个什么，对，就像那个什么。如果有其他问题，欢迎向我提问，反正你也没有我联系方式关于这是一家什么公司，我想没有人比我更有发言权了，这要从远古时代开始讲起，记得那是一个平凡却又不平凡的下午，那天的夕阳很美，美的就像那个什么，对，就像那个什么。如果有其他问题，欢迎向我提问，反正你也没有我联系方式关于这是一家什么公司，我想没有人比我更有发言权了，这要从远古时代开始讲起，记得那是一个平凡却又不平凡的下午，那天的夕阳很美，美的就像那个什么，对，就像那个什么。如果有其他问题，欢迎向我提问，反正你也没有我联系方式关于这是一家什么公司，我想没有人比我更有发言权了，这要从远古时代开始讲起，记得那是一个平凡却又不平凡的下午，那天的夕阳很美，美的就像那个什么，对，就像那个什么。如果有其他问题，欢迎向我提问，反正你也没有我联系方式',
        user: '齐昊',
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
    window.addEventListener('scroll', this.orderScroll);
  }

  orderScroll() {
    setTimeout(() => {
      if (!this.state.isCollapsed) {
        // 浏览器窗口减去元素的高度
        let discount = document.documentElement.clientHeight - this.scrollSpan.getBoundingClientRect().top
        console.log(document.documentElement.clientHeight,this.scrollSpan.getBoundingClientRect().top,discount)
        // 手动给的250
        if (discount < 250) {
          this.setState({
            showBottom:false
          })

        } else if (discount > 260) {
          this.setState({
            showBottom:true
          })
        }

      }
    }, 100)
  }
  componentWillUnmount() {
    window.removeListener('scroll', this.orderScroll);
  }

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div style={{padding: '30px'}} ref={(span) => this.scrollSpan = span}>
        <h4 style={{color: '#3E4850', fontSize: '18px', ...basicFont}}>{this.state.backend.title}</h4>
        
        {this.state.isCollapsed ? (
          <div>
            <span style={{color: '#3E4850', fontSize: '14px', ...basicFont}}>{this.state.backend.user}</span>:
            <span style={{color: '#62686C', fontSize: '14px', ...basicFont}}>  {this.state.backend.short}</span>
            <span onClick={this.handleSpanClick} style={{color: '#175199', fontSize: '14px', ...basicFont}}>阅读全文</span><MDBIcon icon="angle-down"/>
          </div>
        ) : (
          <div>
            <span style={{color: '#3E4850', fontSize: '14px', ...basicFont}}>{this.state.backend.long}</span>
          </div>
        )}
        <br/>
        {this.state.showBottom || this.state.isCollapsed ? (
          <MDBRow style={this.state.stickyRow}>
            <MDBBtn flat style={{padding: '5px 0', marginLeft: '15px'}}>
              <MDBIcon style={{marginRight: '5px'}} far icon="star"/>关注问题
            </MDBBtn>

            <MDBBtn flat style={{padding: '5px 10px',}}>
              <MDBIcon style={{marginRight: '5px'}} far icon="edit"/>写回答
            </MDBBtn>
            <MDBBtn flat style={{padding: '5px 10px',}}>
              <MDBIcon style={{marginRight: '5px'}} icon="user-plus"/>邀请回答
            </MDBBtn>
            <MDBBtn flat style={{padding: '5px 10px',}}>
              <MDBIcon style={{marginRight: '5px'}} far icon="comment"/>评论
            </MDBBtn>
            <MDBBtn flat style={{padding: '5px 10px',}}>
              <MDBIcon style={{marginRight: '5px'}} icon="share"/>分享
            </MDBBtn>
            <MDBBtn flat style={{padding: '5px 10px',}}>
              <MDBIcon style={{marginRight: '5px'}} icon="ban"/>
              举报
            </MDBBtn>
            {this.state.isCollapsed ? null :
              <MDBBtn onClick={this.handleSpanClick} flat style={{padding: '5px 10px', color: '#175199', fontSize: '14px', ...basicFont}}>
                收起
                <MDBIcon style={{marginRight: '5px'}} icon="arrow-up"/>
              </MDBBtn>}
          </MDBRow>
        ) : null}
        
      </div>
    ) : null;
  }
}

RelatedPosition.i18n = [
  {
    related: '类似职位推荐',
  },
  {
    related: 'Related Work',
  },
];

export default RelatedPosition;
