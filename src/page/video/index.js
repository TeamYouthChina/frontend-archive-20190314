import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import {
  MDBNavLink, MDBCardBody,
  MDBCard,
  MDBBtn,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBContainer, Iframe
} from 'mdbreact';

import {Header} from '../../general-component/header';
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
        commentLists: [1, 2, 3],
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
                      {this.state.backend.commentLists.map((item) => (
                        <CommentsCard key={item} message={item}></CommentsCard>

                      ))}

                      <MDBRow>
                        <MDBCol size="10" center>
                          <input ref={(input) => (this.input = input)} className="form-control" placeholder="你的回复"/>
                        </MDBCol>
                        <MDBCol style={{paddingLeft: '0px'}}>
                          <MDBBtn onClick={(e) => this.addComments(e, this.input)} flat
                                  style={{background: '#C4C4C4', padding: '5px 10px', color: '#FFFFFF', ...basicFont}}>
                            发布
                          </MDBBtn>
                        </MDBCol>

                      </MDBRow>
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
