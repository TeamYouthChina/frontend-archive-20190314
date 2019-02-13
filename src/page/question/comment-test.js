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
  fontFamily: 'IBM Plex Sans',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: 'normal',
}

export class CommentsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: null,
      showReplys: false,
      showGive:false,
      commontsText: '查看回复',
      giveCommons:'回复',
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
  giveReplys(){
    let showGive = !this.state.showGive
    let giveCommons = this.state.giveCommons === '回复' ? '取消回复' : '回复'
    this.setState({
      showGive,
      giveCommons
    })
  }
  addComments(e,input){
    let {allReplys = []} = this.state.backend
    allReplys.unshift(input.value)
    // console.log(commentLists,this.props.id)
    this.setState({
      backend:{
        allReplys,
        ...this.state.backend
      }
    })
    e.stopPropagation();
  }

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (


      <div style={{padding: '30px 0 30px 30px', marginTop: '20px'}}>
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
            <MDBCol right>
              <span style={{
                float: 'right',
                color: '#3E4850',
                fontSize: '14px', ...basicFont
              }}>{this.state.backend.time}个月前回复</span>
            </MDBCol>

          </MDBRow>

          <span style={{color: '#3E4850', fontSize: '14px', ...basicFont}}>{typeof this.props.message === 'string' ? this.props.message : this.state.backend.long}</span>

        </div>

        <MDBRow style={this.state.stickyRow}>
          <MDBBtn flat style={{padding: '5px 0', marginLeft: '15px'}}>
            <MDBIcon style={{marginRight: '5px'}} far icon="thumbs-up"/>支持
          </MDBBtn>

          <MDBBtn flat style={{padding: '5px 10px',}}>
            <MDBIcon style={{marginRight: '5px'}} far icon="thumbs-down"/>反对
          </MDBBtn>
          <MDBBtn onClick={this.showReplys} flat style={{padding: '5px 10px',}}>
            <MDBIcon style={{marginRight: '5px'}} far icon="comment"/>{this.state.commontsText}
          </MDBBtn>
          <MDBBtn flat style={{padding: '5px 10px',}}>
            <MDBIcon style={{marginRight: '5px'}} icon="share"/>分享
          </MDBBtn>
          <MDBBtn onClick={this.giveReplys} flat style={{padding: '5px 10px',}}>
            <MDBIcon style={{marginRight: '5px'}} icon="reply"/>
            {this.state.giveCommons}
          </MDBBtn>
        </MDBRow>
        {this.state.showGive ? (
          <MDBRow>
            <MDBCol size="10" center>
              <input ref={(input)=>(this.input = input)} className="form-control" placeholder="你的回复"/>
            </MDBCol>
            <MDBCol style={{paddingLeft: '0px'}}>
              <MDBBtn onClick={(e)=>this.addComments(e,this.input)} flat style={{background: '#C4C4C4', padding: '5px 10px', color: '#FFFFFF', ...basicFont}}>
                发布
              </MDBBtn>
            </MDBCol>

          </MDBRow>
        ):null}
        {this.state.showReplys ? (
          <div>
            {this.state.backend.allReplys.map((item) => (
                <ReplyCard addComments={this.addComments} key={item} item={item}></ReplyCard>
              )
            )}
          </div>) : null}


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
