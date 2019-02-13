import React from 'react';
import {languageHelper} from '../../tool/language-helper';
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

export class ReplyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: null,
      showReplys: false,
      commontsText: '回复',
      stickyRow: {}
    }
    this.showReplys = this.showReplys.bind(this);
    
    this.text = ReplyCard.i18n[languageHelper()];
  }

  componentWillMount() {
    let mockData =
      {
        id: 0,
        long: '关于这是一家什么公司，我想没有人比我更有发言权了',
        user: '齐昊',
        to: '别人家的孩子',
        img: 'https://s3.amazonaws.com/youthchina/WechatIMG29.jpeg',
        time: 8,
        allReplys: [1, ],
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
    let commontsText = this.state.commontsText === '回复' ? '取消回复' : '回复'
    this.setState({
      showReplys,
      commontsText
    })
  }
  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div style={{padding: '30px 0px 30px 30px', marginTop: '20px'}}>
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
              color: '#212529',
              fontSize: '14px', ...basicFont
            }}>{this.state.backend.user}</span>
            <span style={{
              marginRight: '5px',
              padding: '5px 0px',
              color: '#3E4850',
              fontSize: '14px', ...basicFont
            }}>回复</span>
            <span style={{
              marginRight: '5px',
              padding: '5px 0px',
              color: '#212529',
              fontSize: '14px', ...basicFont
            }}>{this.state.backend.to}</span>
            <MDBCol right>
              <span style={{
                float: 'right',
                color: '#3E4850',
                fontSize: '14px', ...basicFont
              }}>{this.state.backend.time}个月前回复</span>
            </MDBCol>

          </MDBRow>

          <span style={{color: '#3E4850', fontSize: '14px', ...basicFont}}>{this.state.backend.long}</span>

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
          <MDBBtn flat style={{padding: '5px 10px',}}>
            <MDBIcon style={{marginRight: '5px'}} icon="ban"/>
            举报
          </MDBBtn>
        </MDBRow>
        {this.state.showReplys ? (


          <MDBRow>
            <MDBCol size="10" center>
              <input ref={(input)=>this.input=input} type="email" className="form-control" placeholder="回复"/>
            </MDBCol>
            <MDBCol style={{paddingLeft: '0px'}}>
              <MDBBtn onClick={(e)=>this.props.addComments(e,this.input)} flat style={{background: '#C4C4C4', padding: '5px 10px', color: '#FFFFFF', ...basicFont}}>
                发布
              </MDBBtn>
            </MDBCol>

          </MDBRow>
          

        ) : null}

      </div>
    ) : null;
  }
}

ReplyCard.i18n = [
  {
    related: '类似职位推荐',
  },
  {
    related: 'Related Work',
  },
];
