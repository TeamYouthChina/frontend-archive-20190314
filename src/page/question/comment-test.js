import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import {ReplyCard} from './reply-card'
import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBAvatar,
} from 'mdbreact';

const basicFont = {
  fontFamily: 'PingFang SC',
  lineHeight: 'normal',
}

export class CommentsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: null,
      showReplys: false,
      showGive: false,
      commontsText: '查看回复',
      giveCommons: '回复',
      stickyRow: {}
    }
    this.showReplys = this.showReplys.bind(this);
    this.giveReplys = this.giveReplys.bind(this);
    this.addComments = this.addComments.bind(this);
    this.text = CommentsCard.i18n[languageHelper()];
  }

  componentWillMount() {
    let mockData =
      {
        id: 0,
        long: '关于这是一家什么公司，我想没有人比我更有发言权了',
        user: '齐昊',
        img: 'https://s3.amazonaws.com/youthchina/WechatIMG29.jpeg',
        time: 8,
        allReplys: [1, 2,],
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

  }

  showReplys() {
    let showReplys = !this.state.showReplys
    let commontsText = this.state.commontsText === '查看回复' ? '收起回复' : '查看回复'
    this.setState({
      showReplys,
      commontsText
    })
  }

  giveReplys() {
    let showGive = !this.state.showGive
    let giveCommons = this.state.giveCommons === '回复' ? '取消回复' : '回复'
    this.setState({
      showGive,
      giveCommons
    })
  }

  addComments(e, input) {
    let {allReplys = []} = this.state.backend
    allReplys.unshift(input.value)
    // console.log(commentLists,this.props.id)
    this.setState({
      backend: {
        allReplys,
        ...this.state.backend
      }
    })
    e.stopPropagation();
  }

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (


      <div style={{padding: '0px', marginTop: '20px'}}>
        <div>
          <MDBRow style={{margin: '8px 0px', display: 'flex'}}>
            <MDBAvatar style={{marginRight: '10px', flexGrow: '0'}}>
              <img
                style={{width: '32px', background: '#F4F4F4'}}
                src={this.state.backend.img}
                alt=""
                className="rounded-circle"
              />
            </MDBAvatar>
            <div style={{paddingTop: '5px', flexGrow: '1'}}>
              <span style={{
                marginRight: '10px',
                padding: '5px 0px',
                color: '#31394D',
                fontSize: '16px', ...basicFont
              }}>{this.state.backend.user}</span>
              <span style={{
                padding: '5px 0px',
                color: '#8D9AAF',
                fontSize: '16px', ...basicFont
              }}>{this.state.backend.time}个月前</span>
              <MDBRow style={{
                color: '#31394D',
                fontSize: '14px', ...basicFont,
                margin: '0px',
                marginTop: '7px',
              }}>{typeof this.props.message === 'string' ? this.props.message : this.state.backend.long}</MDBRow>

              <MDBRow style={this.state.stickyRow}>
                <MDBBtn flat style={{
                  padding: '5px 0',
                  marginLeft: '15px',
                  fontSize: '14px',
                  color: '#8D9AAF', ...basicFont
                }}>
                  <MDBIcon style={{marginRight: '5px'}} far icon="thumbs-up"/>支持
                </MDBBtn>
                <MDBBtn onClick={this.giveReplys} flat
                        style={{padding: '5px 10px', fontSize: '14px', color: '#8D9AAF', ...basicFont}}>
                  <MDBIcon style={{marginRight: '5px'}} icon="reply"/>
                  {this.state.giveCommons}
                </MDBBtn>
              </MDBRow>
              {this.state.showGive ? (
                <MDBRow style={{margin: '0px', display: 'flex'}}>
                  <div style={{marginTop:'5px',flexGrow: '1',}}>
                    <input style={{
                      width:'100%',
                      background: '#FFFFFF',
                      border: '1px solid #DBE5F7',
                      boxSizing: 'border-box',
                      borderRadius: '2px',
                      padding:'8px 0px 8px 20px',
                      fontSize:'14px',
                      color:'#B3C1DB',
                      height:'37px',
                      ...basicFont,
                    }} ref={(input) => (this.input = input)} placeholder="发表你的评论..."/>

                  </div>


                  <MDBBtn onClick={(e) => this.addComments(e,this.input)} flat
                          style={{
                            flexGrow: '0',
                            background: '#C4C4C4',
                            padding: '8px 20px',
                            color: '#FFFFFF', ...basicFont,
                            margin:'6px 6px 5px 6px',
                          }}>
                    发布
                  </MDBBtn>

                </MDBRow>

              ) : null}
              <span onClick={this.showReplys} flat style={{fontSize: '14px', color: '#31394D', ...basicFont}}>
                {this.state.commontsText}<MDBIcon style={{marginLeft: '5px'}} far icon="angle-down"/>
              </span>
              {this.state.showReplys ? (

                this.state.backend.allReplys.map((item) => (
                    <MDBRow key={item}>
                      <MDBCol size="12">

                        <ReplyCard addComments={this.addComments} item={item}></ReplyCard>
                      </MDBCol>
                    </MDBRow>
                  )
                )

              ) : null}
            </div>


          </MDBRow>


        </div>


      </div>


    ) : null;
  }
}

CommentsCard.i18n = [
  {
    related: '类似职位推荐',
  },
  {
    related: 'Related Work',
  },
];
