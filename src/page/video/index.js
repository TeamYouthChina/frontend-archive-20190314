import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import {
  MDBAvatar,
  MDBBtn,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBContainer, Iframe
} from 'mdbreact';

import {Header} from '../../general-component/header/header';
import {Footer} from '../../general-component/footer';
import {CommentsCard} from "../question/comment-test";
import {PaginationUse} from "../question/pagination-test";

const basicFont = {
  fontFamily: 'IBM Plex Sans',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: 'normal',
}

export class Video extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null,
      selectType: 1,
      ifShown: false,
      showCom: '评论',
      pageConfig: {
        totalPage: 14 //总页码
      },
    };
    this.text = Video.i18n[languageHelper()];
    this.handleInputClick = this.handleInputClick.bind(this);
    this.addComments = this.addComments.bind(this);
    this.getCurrentPage = this.getCurrentPage.bind(this);
  }

  componentWillMount() {
    let mockData =
      {
        id: 0,
        name: 'Summer 2019 Tech Internship',
        tags: ['tag1', 'tag2', 'tag3', 'tag4'],
        content: {
          title: 'this is a title',
          descrption: 'wen ti de miao shu'
        },
        time:8,
        img:'https://s3.amazonaws.com/youthchina/WechatIMG29.jpeg',
        commonLists: [1, 2, 3],
        allReplys: [1, 2],
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

  handleInputClick() {
    if (this.state.ifShown === 'none') {
      this.setState({
        ifShown: ''
      });
    }
  }

  showReplys() {
    let ifShown = !this.state.ifShown
    let showCom = this.state.showCom === '评论' ? '收起评论' : '评论'
    this.setState({
      ifShown,
      showCom
    })
  }

  getCurrentPage() {
  }

  addComments(e, input) {
    let {allReplys = []} = this.state.backend
    allReplys.unshift(input.value)
    // console.log(commonLists,this.props.id)
    this.setState({
      backend: {
        allReplys,
        ...this.state.backend
      }
    })
    e.stopPropagation();
  }

  render() {
    const ifShown = this.state.ifShown
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        <Header></Header>
        <br/>
        <MDBRow>
          <MDBCol size="1">

          </MDBCol>
          <MDBCol size="9">
            <MDBRow>
              <MDBCol size="8" style={{paddingLeft: '0px'}}>
                <MDBContainer className="text-center" style={{paddingLeft: '0px'}}>
                  {/*<Iframe src="http://www.youtube.com/embed/M7lc1UVf-VE?origion=https://www.youtube.com/embed/v64KOxKVLVg"/>*/}
                  <video width="640" height="480" controls
                         src="http://youthchinatest.oss-cn-shanghai.aliyuncs.com/2848699711584473088?Expires=1549472548&OSSAccessKeyId=LTAI0j1nGyLy6XMw&Signature=iKKT0zlXISw1eJXddMRsBSLV%2B2M%3D">
                  </video>
                </MDBContainer>
                <br/>
                <h3 style={{
                  fontSize: '1.2rem',
                  lineHeight: '2.4rem',
                }}><strong>
                  The Future of the Web // Mikeal Rogers // CascadiaJS 2018
                </strong></h3>
                <MDBRow>
                  <MDBCol size="4" style={{margin: 'auto'}}>
                    <strong>32000次观看</strong>
                  </MDBCol>
                  <MDBCol style={{paddingLeft: '17px',paddingRight:'10px'}}>
                    <div style={{float: 'right'}}>
                        <span style={{
                          padding: '5px 0px',
                          fontSize: '14px',
                          color: '#62686C', ...basicFont
                        }}>{this.state.backend.time}天前发布</span>
                      <MDBBtn onClick={() => {
                        this.showReplys()
                      }} flat style={{padding: '5px 0', marginLeft: '15px'}}>
                        <MDBIcon style={{marginRight: '5px'}} far icon="comment"/>{this.state.showCom}
                      </MDBBtn>
                      <MDBBtn flat style={{padding: '5px 0', marginLeft: '15px'}}>
                        <MDBIcon style={{marginRight: '5px'}} far
                                 icon="heart"/><span>{this.state.backend.agree}赞同</span>
                      </MDBBtn>
                      <MDBBtn flat style={{padding: '5px 0', marginLeft: '15px'}}>
                        <MDBIcon style={{marginRight: '5px'}} far icon="star"/>收藏
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
                {ifShown && (
                  <div>
                    <div>
                      <MDBRow style={{margin: '0px', display: 'flex'}}>
                        <MDBAvatar style={{height: '100%', margin: '6px 11px 6px 0px', flexGrow: '0'}}>
                          <img
                            style={{width: '32px', background: '#F4F4F4'}}
                            src={this.state.backend.img}
                            alt=""
                            className="rounded-circle"
                          />
                        </MDBAvatar>
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


                        <MDBBtn onClick={(e) => this.addComments(e)} flat
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
                      {this.state.backend.commonLists.map((item) => (
                        <CommentsCard key={item} message={item}></CommentsCard>

                      ))}
                      <MDBRow center style={{marginTop: '10px'}}>
                        <PaginationUse pageConfig={this.state.pageConfig}
                                       pageCallbackFn={this.getCurrentPage}></PaginationUse>
                      </MDBRow>
                    </div>
                  </div>)
                }

              </MDBCol>
              <MDBCol size="1"></MDBCol>
              <MDBCol size="3">
                <h3></h3>
              </MDBCol>
            </MDBRow>

          </MDBCol>
        </MDBRow>
        <br/>
        <Footer></Footer>
      </div>
    ) : null;
  }
}

Video.i18n = [
  {
    applyBefore: '申请截止'
  },
  {
    applyBefore: 'Apply Before'
  },
];
