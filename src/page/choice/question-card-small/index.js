import React from 'react';
import {Link} from 'react-router-dom';
import {languageHelper} from '../../../tool/language-helper';
import {MDBIcon, MDBCard, MDBAvatar, MDBSpinner} from 'mdbreact';
import {getAsync} from '../../../tool/api-helper';
// import {getAsync} from '../../question/api-test/api-test';
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

class QuestionCardSquareFull1 extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: {
        img: 'https://s3.amazonaws.com/youthchina/WechatIMG29.jpeg',
      }
    }
    this.text = QuestionCardSquareFull1.i18n[languageHelper()];
  }

  async componentDidMount() {
    if (this.props.fulltext) {
      const result = await getAsync(`/questions/${this.props.fulltext}`,true)
      // console.log(result)
      let title = result.content.title === null ? '求职的8个问题' : result.content.title
      this.setState({
        backend: {
          img: 'https://s3.amazonaws.com/youthchina/WechatIMG29.jpeg',
          title,
          answersLength: result.content.answers.length
        }
      })
    }

  }

  render() {
    const fulltext = this.props.fulltext
    return (this.state.backend) ? (

      <div>
        <Link to={{
          pathname: `question/${this.props.fulltext}`,
          state: this.props.fulltext
        }}>
          <MDBCard>

            <ul style={{...ulBasicNoLine, padding: '30px'}}>
              <li style={{display: 'flex', justifyContent: 'space-between', ...liBasicNoLine}}>
              <span ref={(span) => (this.span = span)} style={{
                fontSize: '16px', color: '#454F69', ...basicFont,
                overflow: 'hidden', height: '22px',
              }}>
                {this.state.backend.title}
                </span>
                {this.span && this.span.offsetWidth < 100 ? null : (
                  <span style={{position: 'absolute', left: '100px'}}>...</span>
                )}

                <MDBIcon style={{justifyContent: 'flex-end'}} icon="ellipsis-h"/>
              </li>
              {/*<li style={{liBasicNoLine,marginTop:'29px',basicFont,color:'#454F69',fontSize:'14px'}}>*/}
              {/*问题小卡片的内容和描述*/}
              {/*</li>*/}
              {/*<li style={{liBasicNoLine,fontSize:'14px',color:'#8D9AAF',marginTop:'20px',basicFont}}>*/}
              {/*1天前*/}
              {/*</li>*/}
              <li style={{liBasicNoLine, marginTop: '15px'}}>
              <span style={{

                background: '#F0F3FA',
                borderRadius: '15px',
                // justifyContent: 'center',
                // display:'flex',
                // alignItems:'center',
                padding: '3px 5px',
                fontSize: '14px',
                color: '#4F65E1',
                ...basicFont
              }}>
                腾讯
              </span>
              </li>
              <li style={{liBasicNoLine, marginTop: '15px'}}>
                <MDBAvatar style={{height: '100%', display: 'inline'}}>
                  <img
                    style={{width: '32px', background: '#F4F4F4'}}
                    src={this.state.backend.img}
                    alt=""
                    className="rounded-circle"
                  />
                </MDBAvatar>
                {/*<MDBAvatar style={{height: '100%',display:'inline',marginLeft:'-14px'}}>*/}
                {/*<img*/}
                {/*style={{width: '32px', background: '#F4F4F4'}}*/}
                {/*src={this.state.backend.img}*/}
                {/*alt=""*/}
                {/*className="rounded-circle"*/}
                {/*/>*/}
                {/*</MDBAvatar>*/}
                {/*<MDBAvatar style={{height: '100%',display:'inline',marginLeft:'-14px'}}>*/}
                {/*<img*/}
                {/*style={{width: '32px', background: '#F4F4F4'}}*/}
                {/*src={this.state.backend.img}*/}
                {/*alt=""*/}
                {/*className="rounded-circle"*/}
                {/*/>*/}
                {/*</MDBAvatar>*/}
                <span style={{marginLeft: '15px', fontSize: '14px', color: '#8D9AAF', basicFont}}>
                {this.state.backend.answersLength}个回答
              </span>
              </li>
            </ul>
          </MDBCard>
        </Link>


      </div>

    ) : (
      <div className="my-5 text-center">
        <MDBSpinner/>
      </div>
    );
  }
}

QuestionCardSquareFull1.i18n = [
  {
    applyBefore: '申请截止'
  },
  {
    applyBefore: 'Apply Before'
  },
];

export const QuestionCardSquareFull = withRouter(QuestionCardSquareFull1)
