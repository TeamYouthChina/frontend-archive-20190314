import React from 'react';
import {Link} from 'react-router-dom';
import {AnswerText} from './answerText';
import {languageHelper} from '../../tool/language-helper';
import {
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBAvatar,
} from 'mdbreact';

import Loading from './loading'

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
      // testNum:true,
      selectType: 1,
      hiddenAns: false,
      showText: false,
    }
    this.handleClick = this.handleClick.bind(this)
    this.text = QuestionDes.i18n[languageHelper()];
  }

  handleClick() {
    const showText = !this.state.showText
    this.setState({
      showText
    });
  }

  render() {
    console.log(this.props.loading)
    return (
      <div style={{width: '100%'}}>
        {this.props.loading ? (
          <Loading></Loading>
        ) : (<MDBRow>
          <MDBCol size="9">
            {/*tag的样式*/}
            <MDBRow style={{display: 'none'}}>
              {/*展现标签*/}
              {/*todo,超过一定数量就不显示*/}
              {this.props.tags.map((item) => {
                return (
                  <MDBCol key={item} size="1">
                    <MDBBtn rounded outline color="info" key={item} style={{padding: '5px 10px', marginLeft: '15px'}}>
                      {item}
                    </MDBBtn>
                  </MDBCol>
                );
              })}
            </MDBRow>
            <br/>
            <p style={{color: '#3E4850', fontSize: '18px', ...basicFont}}>{this.props.content.title}</p>

            <p style={{color: '#62686C', fontSize: '14px', ...basicFont}}>{this.props.content.descrption.previewText}</p>
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
        </MDBRow>)}
        <MDBRow>
          <MDBBtn flat style={{padding: '5px 10px', marginLeft: '15px'}}>
            <MDBIcon style={{marginRight: '5px'}} far icon="heart"/>{this.text.toFocus}
          </MDBBtn>
          <MDBBtn onClick={this.handleClick} flat style={{padding: '5px 10px',}}>
            <MDBIcon style={{marginRight: '5px'}} far icon="edit"/>
            <Link to={`/question/${this.props.questionId}/answer/create`} style={{color: '#3E4850'}}>写回答</Link>
          </MDBBtn>
          <MDBBtn flat style={{padding: '5px 10px',}}>
            <MDBIcon style={{marginRight: '5px'}} icon="user-plus"/>{this.text.toInvite}
          </MDBBtn>
          <MDBBtn flat style={{padding: '5px 10px',}}>
            <MDBIcon style={{marginRight: '5px'}} icon="share"/>{this.text.share}
          </MDBBtn>
          <MDBBtn flat style={{padding: '5px 10px',}}>
            <MDBIcon style={{marginRight: '5px'}} icon="ban"/>
            {this.text.juBao}
          </MDBBtn>
        </MDBRow>
        {/*取消点击回复，变成跳转回复*/}
        {this.state.hiddenAns ? (
          <div style={{height: '100%', margin: '20px 0px 0px 0px', boxShadow: '1px 1px 20px rgba(0, 0, 0, 0.08)'}}>
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
              <MDBCol size="8" style={{paddingTop: '10px'}}>
                <MDBRow style={{paddingLeft: '5px'}}>{this.state.backend.user}</MDBRow>
                <MDBRow>
                  <MDBBtn flat style={{padding: '0px',}}>
                    <MDBIcon style={{marginRight: '5px'}} far icon="edit"/>添加备用内容
                  </MDBBtn>
                </MDBRow>
              </MDBCol>
              <MDBCol size="2"></MDBCol>
            </MDBRow>
            <MDBRow style={{height: '100%', margin: '20px 0px 0px 0px'}}>
              <AnswerText></AnswerText>
            </MDBRow>
            <MDBRow>
              <MDBCol size="10"></MDBCol>
              <MDBCol size="2">
                <MDBBtn flat style={{float: 'right', padding: '5px 10px', zIndex: 10}}>
                  提交回答
                </MDBBtn>
              </MDBCol>


            </MDBRow>
          </div>

        ) : null}

      </div>
    );
    
  }
}

QuestionDes.i18n = [
  {
    focusNum: '关注者',
    readingNum: '浏览次数',
    toFocus: '关注问题',
    toInvite: '邀请回答',
    share: '分享',
    juBao: '举报'
  },
  {
    focusNum: 'focus number',
    readingNum: 'reading number',
    toFocus: 'focus answer',
    toInvite: 'invite others',
    share: 'share',
    juBao: 'ju bao'
  },
];
