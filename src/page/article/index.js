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
      pageConfig: {
        totalPage: 14 //总页码
      },
    };
    this.text = Article.i18n[languageHelper()];
    this.handleInputClick = this.handleInputClick.bind(this);
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
        title: 'this is a title',
        date: '26/08/2018',
        author: 'John Smith',
        commentLists: [1, 2],
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
    this.setState({
      ifShown
    })
  }
  
  render() {
    const ifShown = this.state.ifShown
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        <Header/>
        <MDBCard className="my-5 px-5 pb-5">
          <MDBCardBody>
            <MDBRow>
              <MDBCol md="12">
                <MDBCard reverse>
                  <MDBView hover cascade waves>
                    <img
                      src={this.state.backend.imgUrl}
                      alt=""
                      className="img-fluid"
                    />
                    <MDBMask overlay="white-slight" className="waves-light"/>
                  </MDBView>
                  <MDBCardBody cascade className="text-center">
                    <h2 style={{fontSize: '18px',color: '#3E4850',...basicFont}}>
                      {this.state.backend.title}
                    </h2>
                    <p>
                      {this.text.written}
                      <a href="#!">
                        <strong>{this.state.backend.author}</strong>
                      </a>
                      , {this.state.backend.date}
                    </p>
                    
                    <span className="counter">18</span>
                  </MDBCardBody>
                </MDBCard>
                <MDBContainer className="mt-5" style={{marginLeft: '2rem'}}>
                  {this.state.backend.contents}
                  <MDBRow style={{paddingLeft:'17px'}}>
                    <MDBBtn color="primary" style={{padding: '5px 10px', marginLeft: '0px'}}>
                      <MDBIcon style={{marginRight: '5px'}} icon="heart"/>喜欢
                    </MDBBtn>
                    <MDBBtn onClick={() => {
                      this.showReplys()
                    }} color="primary" style={{padding: '5px 10px',}}>
                      <MDBIcon style={{marginRight: '5px'}} far icon="comment"/>回复
                    </MDBBtn>
                    <MDBBtn color="primary" style={{padding: '5px 10px',}}>
                      <MDBIcon style={{marginRight: '5px'}} icon="share"/>分享
                    </MDBBtn>
                    <MDBBtn color="primary" style={{padding: '5px 10px',}}>
                      <MDBIcon style={{marginRight: '5px'}} icon="ban"/>
                      举报
                    </MDBBtn>
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
                            <MDBBtn onClick={(e)=>this.addComments(e)} flat style={{background: '#C4C4C4', padding: '5px 10px', color: '#FFFFFF', ...basicFont}}>
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
