import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn
} from 'mdbreact';
import './public/style.css';
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

export class Article extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null,
      ifShown: false,
      showCom:'评论',
      pageConfig: {
        totalPage: 14 //总页码
      },
    };
    this.text = Article.i18n[languageHelper()];
    this.handleInputClick = this.handleInputClick.bind(this);
    this.addComments = this.addComments.bind(this);
    this.getCurrentPage = this.getCurrentPage.bind(this);
  }

  componentWillMount() {
    let mockData =
      {
        id: 0,
        contents: (<div>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            praesentium voluptatum deleniti atque corrupti quos dolores et
            quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa nemo enim ipsam voluptatem
            quia voluptas sit qui officia deserunt mollitia animi, id est
            laborum et dolorum fuga quidem rerum facilis est distinctio.
          </p>
          <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque
            nihil impedit quo minus id quod maxime placeat facere
            possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Quis autem vel eum iure reprehenderit qui in ea
            voluptate velit esse quam nihil molestiae consequatur.
            Temporibus autem quibusdam et aut officiis debitis aut rerum
            necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae itaque earum rerum.
          </p>
        </div>),
        imgUrl: 'https://mdbootstrap.com/img/Photos/Slides/img%20(142).jpg',
        title: '诺基亚是怎样的一家公司',
        // 计算几天前发布
        date: '26/08/2018',
        agree:'2k',
        author: '王某某',
        authorDes: '用户体验设计专家',
        readingTime:'6',
        time:1,
        commentLists: [1, 2],
        allReplys:[1,2],
        status: {
          code: 2000
        }
      };
    this.setState(() => {
      return {backend: mockData};
    });
  }

  handleInputClick() {
    if(this.state.ifShown === 'none') {
      this.setState({
        ifShown: ''
      });
    }
  }
  showReplys(){
    let ifShown = !this.state.ifShown
    let showCom = this.state.showCom === '评论'? '展开评论' : '评论'
    this.setState({
      ifShown,
      showCom
    })
  }
  getCurrentPage(){}
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
    const ifShown = this.state.ifShown
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        <Header/>
        <MDBCard style={{boxShadow:'none'}} className="my-5 px-5 pb-5">
          <MDBCardBody>
            <MDBRow>
              <MDBCol md="1"></MDBCol>
              <MDBCol md="10">
                <MDBCard reverse>

                  <MDBCardBody>
                    <h2 style={{fontSize: '18px',color: '#3E4850',...basicFont}}>
                      {this.state.backend.title}
                    </h2>
                    <p>
                      <a href="#!" style={{fontSize: '14px',color: '#3E4850',...basicFont}}>
                        <strong>{this.state.backend.author}    </strong>
                      </a>
                      <span style={{fontSize: '14px',color: '#62686C',...basicFont}}>{this.state.backend.authorDes}</span>
                    </p>
                    <p style={{fontSize: '14px',color: '#62686C',...basicFont}}>{this.state.backend.readingTime}分钟阅读时间</p>
                    <MDBView hover waves>
                      <img
                        src={this.state.backend.imgUrl}
                        alt=""
                        className="img-fluid"
                      />
                      <MDBMask overlay="white-slight" className="waves-light"/>
                    </MDBView>
                  </MDBCardBody>
                </MDBCard>
                <MDBContainer className="mt-5" style={{fontSize: '14px',color: '#62686C',...basicFont}}>
                  {this.state.backend.contents}
                  <MDBRow style={{paddingLeft:'17px'}}>
                    <span style={{padding:'5px 0px',fontSize: '14px',color: '#62686C',...basicFont}}>{this.state.backend.time}天前发布</span>
                    <MDBCol>
                      <div style={{float:'right'}}>
                        <MDBBtn onClick={() => {
                          this.showReplys()
                        }} flat style={{padding: '5px 0', marginLeft: '15px'}}>
                          <MDBIcon style={{marginRight: '5px'}} far icon="comment"/>{this.state.showCom}
                        </MDBBtn>
                        <MDBBtn flat style={{padding: '5px 0', marginLeft: '15px'}}>
                          <MDBIcon style={{marginRight: '5px'}} far icon="heart"/><span>{this.state.backend.agree}赞同</span>
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
                        {this.state.backend.commentLists.map((item)=>(
                          <CommentsCard key={item} message={item}></CommentsCard>

                        ))}

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
                        <MDBRow center style={{marginTop: '10px'}}>
                          <PaginationUse pageConfig={this.state.pageConfig} pageCallbackFn={this.getCurrentPage}></PaginationUse>
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

    ) : null;
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
