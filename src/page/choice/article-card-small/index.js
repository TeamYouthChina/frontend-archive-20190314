import React from 'react';
import {languageHelper} from '../../../tool/language-helper';
import {MDBIcon, MDBCard, MDBAvatar} from 'mdbreact';
import {getAsync} from '../../question/api-test/api-test';
import {withRouter} from 'react-router-dom';

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

class ArticleCardSquareFull1 extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend:{
        img:'https://s3.amazonaws.com/youthchina/WechatIMG29.jpeg',
      }
    }
    this.text = ArticleCardSquareFull1.i18n[languageHelper()];
  }

  async componentDidMount(){
    const result = await getAsync(`/articles/${this.props.fulltext}`)
    console.log(result)
    let title = result.content.title === null ? '求职的8个问题' : result.content.title
    this.setState({
      backend:{
        img:'https://s3.amazonaws.com/youthchina/WechatIMG29.jpeg',
        title
      }
    })
  }
  
  render() {
    return (this.props.fulltext) ? (

      <div>
        <MDBCard onClick={() => {
          this.props.history.push(`/article/${this.props.fulltext}`);
        }}>

          <ul style={{...ulBasicNoLine,padding:'30px'}}>
            <li style={{display:'flex',justifyContent: 'space-between',...liBasicNoLine}}>
              <span style={{fontSize:'16px',color:'#454F69',...basicFont}}>{this.state.backend.title}</span>
              <MDBIcon style={{justifyContent: 'flex-end'}} icon="ellipsis-h"/>
            </li>
            {/*<li style={{liBasicNoLine,marginTop:'29px',basicFont,color:'#454F69',fontSize:'14px'}}>*/}
              {/*文章小卡片的内容和描述*/}
            {/*</li>*/}
            {/*<li style={{liBasicNoLine,fontSize:'14px',color:'#8D9AAF',marginTop:'20px',basicFont}}>*/}
              {/*1天前*/}
            {/*</li>*/}
            <li style={{liBasicNoLine,marginTop:'15px'}}>
              <span style={{
                
                background: '#F0F3FA',
                borderRadius: '15px',
                // justifyContent: 'center',
                // display:'flex',
                // alignItems:'center',
                padding:'3px 5px',
                fontSize: '14px',
                color:'#4F65E1',
                ...basicFont}}>
                求职
              </span>
            </li>
            <li style={{liBasicNoLine,marginTop:'15px'}}>
              <MDBAvatar style={{height: '100%',display:'inline'}}>
                <img
                  style={{width: '32px', background: '#F4F4F4'}}
                  src={this.state.backend.img}
                  alt=""
                  className="rounded-circle"
                />
              </MDBAvatar>
              {/*<MDBAvatar style={{height: '100%',display:'inline',marginLeft:'-16px'}}>*/}
                {/*<img*/}
                  {/*style={{width: '32px', background: '#F4F4F4'}}*/}
                  {/*src={this.state.backend.img}*/}
                  {/*alt=""*/}
                  {/*className="rounded-circle"*/}
                {/*/>*/}
              {/*</MDBAvatar>*/}
              {/*<MDBAvatar style={{height: '100%',display:'inline',marginLeft:'-16px'}}>*/}
                {/*<img*/}
                  {/*style={{width: '32px', background: '#F4F4F4'}}*/}
                  {/*src={this.state.backend.img}*/}
                  {/*alt=""*/}
                  {/*className="rounded-circle"*/}
                {/*/>*/}
              {/*</MDBAvatar>*/}
              <span style={{marginLeft:'15px',fontSize:'14px',color:'#8D9AAF',basicFont}}>3个回答</span>
            </li>
          </ul>
        </MDBCard>

      </div>

    ) : null;
  }
}

ArticleCardSquareFull1.i18n = [
  {
    applyBefore: '申请截止'
  },
  {
    applyBefore: 'Apply Before'
  },
];

export const ArticleCardSquareFull = withRouter(ArticleCardSquareFull1)
