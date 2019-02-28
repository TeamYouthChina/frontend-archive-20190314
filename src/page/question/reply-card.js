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
  fontFamily: 'PingFang SC',
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
      <div style={{width:'100%',paddingTop: '10px', marginTop: '20px'}}>
        <div>
          <MDBRow style={{margin: '10px 0px',display:'flex'}}>
            <MDBAvatar style={{marginRight: '5px'}}>
              <img
                style={{width: '32px', background: '#F4F4F4'}}
                src={this.state.backend.img}
                alt=""
                className="rounded-circle"
              />
            </MDBAvatar>
            <div style={{flexGrow:'1',paddingTop:'4px'}}>
              <span style={{
                marginRight: '5px',
                padding: '5px 0px',
                color: '#31394D',
                fontSize: '14px', ...basicFont
              }}>{this.state.backend.user}</span>
              <span style={{
                marginRight: '5px',
                padding: '5px 0px',
                color: '#8D9AAF',
                fontSize: '14px', ...basicFont
              }}>回复</span>
              <span style={{
                marginRight: '5px',
                padding: '5px 0px',
                color: '#31394D',
                fontSize: '14px', ...basicFont
              }}>{this.state.backend.to}</span>
            </div>
            
            <div style={{marginTop:'5px'}}>
              <div style={{transform:'rotate(90deg)',width:'3.75px',height:'3.75px',borderRadius:'50%'}}>...</div>
              {/*<div style={{background:'#8D9AAF',width:'3.75px',height:'3.75px',marginTop:'1.87px',borderRadius:'50%'}}></div>*/}
              {/*<div style={{background:'#8D9AAF',width:'3.75px',height:'3.75px',marginTop:'1.87px',borderRadius:'50%'}}></div>*/}
              
            </div>

          </MDBRow>

          <span style={{color: '#3E4850', fontSize: '14px', ...basicFont}}>{this.state.backend.long}</span>

        </div>

        <MDBRow style={this.state.stickyRow}>
          <MDBBtn flat style={{padding: '5px 0', marginLeft: '15px',fontSize: '14px',
            color: '#8D9AAF', ...basicFont}}>
            <MDBIcon style={{marginRight: '5px'}} far icon="thumbs-up"/>支持
          </MDBBtn>

          <MDBBtn flat style={{padding: '5px 10px',fontSize: '14px',
            color: '#8D9AAF', ...basicFont}}>
            <MDBIcon style={{marginRight: '5px'}} far icon="thumbs-down"/>反对
          </MDBBtn>
          <MDBBtn onClick={this.showReplys} flat
                  style={{padding: '5px 10px', fontSize: '14px', color: '#8D9AAF', ...basicFont}}>
            <MDBIcon style={{marginRight: '5px'}} icon="reply"/>
            {this.state.commontsText}
          </MDBBtn>
        </MDBRow>
        {this.state.showReplys ? (


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
