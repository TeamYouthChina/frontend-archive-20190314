import React from 'react';
import {Link} from 'react-router-dom'
import {AnswerText} from './answerText'
import {languageHelper} from '../../tool/language-helper';
import {
  MDBBadge,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBAvatar,
} from 'mdbreact';

const basicFont = {
  fontFamily: 'IBM Plex Sans',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: 'normal',
}

export class QuestionDes extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null,
      selectType: 1,
      showText:false,
    }
    this.handleClick = this.handleClick.bind(this)
    this.text = QuestionDes.i18n[languageHelper()];
  }

  componentWillMount() {
    let mockData =
      {
        id: 0,
        name: 'Summer 2019 Tech Internship',
        // 下面四个从父组件传进来
        tag: ['tag1', 'tag2', 'tag3', 'tag4'],
        content: {
          title: 'this is a title',
          descrption: 'wen ti de miao shu'
        },
        user: '齐昊',
        img:'https://s3.amazonaws.com/youthchina/WechatIMG29.jpeg',
        focus: 123,
        reading: 123,
        status: {
          code: 2000
        }
      };
    this.setState(() => {
      return {backend: mockData};
    });
  }
  handleClick(){
    const showText = !this.state.showText
    this.setState({
      showText
    })
  }

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div style={{width: '100%'}}>
        <MDBRow>
          <MDBCol size="9">
            <MDBRow>
              {/*展现标签*/}
              {/*todo,超过一定数量就不显示*/}
              {this.props.tags.map((item) => {
                return (
                  <MDBCol key={item} size="1">
                    <MDBBadge key={item} color="light-blue lighten-2"
                              text="white"
                              style={{borderRadius: '100px', padding: '5px 10px'}}>
                      {item}
                    </MDBBadge>
                  </MDBCol>

                );
              })}
            </MDBRow>
            <br/>
            <p style={{color: '#3E4850', fontSize: '18px', ...basicFont}}>{this.props.content.title}</p>

            <p style={{color: '#62686C', fontSize: '14px', ...basicFont}}>{this.props.content.descrption}</p>
          </MDBCol>
          <MDBCol size="3">
            <MDBRow>
              <MDBCol size="4"></MDBCol>
              <MDBCol size="4">
                <dl>
                  <dd style={{color: '#8590A6'}}>{this.text.focusNum}</dd>
                  <dd style={{color: '#1A1A1A'}}>{this.props.focus}</dd>
                </dl>
              </MDBCol>
              <MDBCol size="4" style={{paddingRight: '0px'}}>
                <dl>
                  <dd style={{color: '#8590A6'}}>{this.text.readingNum}</dd>
                  <dd style={{color: '#1A1A1A'}}>{this.props.reading}</dd>
                </dl>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBBtn flat style={{padding: '5px 10px', marginLeft: '15px'}}>
            <MDBIcon style={{marginRight: '5px'}} far icon="heart"/>关注问题
          </MDBBtn>
          <MDBBtn onClick={this.handleClick} flat style={{padding: '5px 10px',}}>
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
        </MDBRow>
        {this.state.showText ? (
          <div style={{height:'100%',margin:'20px 0px 0px 0px',boxShadow: '1px 1px 20px rgba(0, 0, 0, 0.08)'}}>
            <MDBRow>
              <MDBCol size="1">
                <MDBAvatar style={{margin: '20px 5px 0px 20px'}}>
                  <img
                    style={{width: '32px', background: '#F4F4F4'}}
                    src={this.state.backend.img}
                    alt=""
                    className="rounded-circle"
                  />
                </MDBAvatar>
              </MDBCol>
              <MDBCol size="8" style={{paddingTop:'10px'}}>
                <MDBRow style={{paddingLeft:'5px'}}>{this.state.backend.user}</MDBRow>
                <MDBRow>
                  <MDBBtn flat style={{padding: '0px',}}>
                    <MDBIcon style={{marginRight: '5px'}} far icon="edit"/>添加备用内容
                  </MDBBtn>
                </MDBRow>
              </MDBCol>
              <MDBCol size="2"></MDBCol>
            </MDBRow>
            <MDBRow style={{height:'100%',margin:'20px 0px 0px 0px'}}>
              <AnswerText></AnswerText>
            </MDBRow>
            <MDBRow>
              <MDBCol size="10"></MDBCol>
              <MDBCol size="2">
                <MDBBtn flat style={{float:'right',padding: '5px 10px',zIndex:10}}>
                  提交回答
                </MDBBtn>
              </MDBCol>
                
              
            </MDBRow>
          </div>
          
        ): null}
        
      </div>
    ) : null;
  }
}

QuestionDes.i18n = [
  {
    focusNum: '关注者',
    readingNum: '浏览次数',
  },
  {
    focusNum: 'focus number',
    readingNum: 'reading number'
  },
];
