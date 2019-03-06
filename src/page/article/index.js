import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import BraftEditor from 'braft-editor'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn,
  MDBAvatar,
  MDBSpinner
} from 'mdbreact';
import './public/style.css';
import {getAsync} from '../../tool/api-helper'
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

export class Article extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null,
      ifShown: false,
      editorState: null,
      showCom: '评论',
      pageConfig: {
        totalPage: 14 //总页码
      },
    };
    this.text = Article.i18n[languageHelper()];
    this.handleInputClick = this.handleInputClick.bind(this);
    this.addComments = this.addComments.bind(this);
    this.getCurrentPage = this.getCurrentPage.bind(this);
  }

  async componentDidMount() {
    let mockData
    let commonLists
    let article
    if(typeof this.props.location.state === 'string'){
      try{
        article = await getAsync(`/articles/${this.props.location.state}`,true)
        article = article.content
      }catch (e) {
        
      }
    } else {
      article = this.props.location.state
    }
    // try{
    //   commonLists = await getAsync(`/answers/${article.id}/comments`,true)
    // } catch (e) {
    //  
    // }
    mockData = {
      id: article.id,
      contents: article.body && article.body.braftEditorRaw,
      title: article.title,
      // 计算几天前发布
      date: article.modified_at.slice(0, 10),
      agree: '2k',
      author: article.author.username,
      authorDes: '用户体验设计专家',
      readingTime: '6',
      time: 1,
      commonLists: [1, 2],
      status: {
        code: 200
      }
    }
    
    this.setState({
      backend: mockData,
      editorState: BraftEditor.createEditorState(mockData.contents)
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
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 200) ? (
      <div>
        <Header/>
        <MDBCard style={{boxShadow: 'none'}} className="my-5 px-5 pb-5">
          <MDBCardBody>
            <MDBRow>
              <MDBCol md="1"></MDBCol>
              <MDBCol md="10">
                <MDBCard reverse>

                  <MDBCardBody>
                    <h2 style={{fontSize: '18px', color: '#3E4850', ...basicFont}}>
                      {this.state.backend.title}
                    </h2>
                    <p>
                      <a href="#!" style={{fontSize: '14px', color: '#3E4850', ...basicFont}}>
                        <strong>{this.state.backend.author}    </strong>
                      </a>
                      <span
                        style={{fontSize: '14px', color: '#62686C', ...basicFont}}>{this.state.backend.authorDes}</span>
                    </p>
                    <p style={{
                      fontSize: '14px',
                      color: '#62686C', ...basicFont
                    }}>{this.state.backend.readingTime}分钟阅读时间</p>

                  </MDBCardBody>
                </MDBCard>
                <MDBContainer style={{marginTop:'24px',fontSize: '14px', color: '#62686C', ...basicFont}}>
                  <div dangerouslySetInnerHTML={{__html: this.state.editorState.toHTML()}}>
                    {/*{this.state.backend.contents}*/}
                  </div>
                  
                  <MDBRow style={{paddingLeft: '17px'}}>
                    <span style={{
                      padding: '5px 0px',
                      fontSize: '14px',
                      color: '#62686C', ...basicFont
                    }}>{this.state.backend.time}天前发布</span>
                    <MDBCol>
                      <div style={{float: 'right'}}>
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
                          <div style={{marginTop: '5px', flexGrow: '1',}}>
                            <input style={{
                              width: '100%',
                              background: '#FFFFFF',
                              border: '1px solid #DBE5F7',
                              boxSizing: 'border-box',
                              borderRadius: '2px',
                              padding: '8px 0px 8px 20px',
                              fontSize: '14px',
                              color: '#B3C1DB',
                              height: '37px',
                              ...basicFont,
                            }} ref={(input) => (this.input = input)} placeholder="发表你的评论..."/>

                          </div>


                          <MDBBtn onClick={(e) => this.addComments(e)} flat
                                  style={{
                                    flexGrow: '0',
                                    background: '#C4C4C4',
                                    padding: '8px 20px',
                                    color: '#FFFFFF', ...basicFont,
                                    margin: '6px 6px 5px 6px',
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
                    </div>

                  )}

                </MDBContainer>

              </MDBCol>
              <MDBCol md="1"></MDBCol>

            </MDBRow>

          </MDBCardBody>
        </MDBCard>
        <Footer/>
      </div>

    ) : (
      <div className="my-5 text-center">
        <MDBSpinner/>
      </div>
    );
  }
}

Article.i18n = [
  {
    written: '作者',
    submitBtn: '添加评论',
  },
  {
    written: 'Written by',
    submitBtn: 'submit commit',
  },
];
