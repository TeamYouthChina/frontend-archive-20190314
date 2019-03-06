import React from 'react';
import {languageHelper} from '../../../tool/language-helper';
import {
  MDBNavLink,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBCardBody,
  MDBCard,
} from 'mdbreact';


export class QuestionAnswerPart extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null,
      selectType: 1,
      ifShownAdd: [],
      ifShownComments: [],
      ifShownReplys: [],
      addComment: ''
    };
    this.text = QuestionAnswerPart.i18n[languageHelper()];
    this.showComments = this.showComments.bind(this)
  }

  componentDidMount() {
    let mockData =
      {
        id: 0,
        name: 'Summer 2019 Tech Internship',
        commonLists: [
          {
            user: {
              name: 'John Doe',
              img: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg',

            },
            content: '问题的答案，这个人回答了这个问题',
            agree: '123',
            comments: [
              {
                user: {
                  name: 'hanmeimei',
                  img: 'https://mdbootstrap.com/img/Photos/Avatars/img (20).jpg'
                },
                content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
                  '                                    pariatur. Excepteur sint occaecat\n' +
                  '                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                reply: [
                  {
                    from: {
                      name: 'Tommy Smith',
                      img: 'https://mdbootstrap.com/img/Photos/Avatars/img (27).jpg',
                    },
                    to: 'to',
                    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium\n' +
                      '                                            doloremque\n' +
                      '                                            laudantium, totam rem aperiam, eaque\n' +
                      '                                            ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta\n' +
                      '                                            sunt\n' +
                      '                                            explicabo.'
                  },
                  {
                    from: {
                      name: 'Tommy Smith',
                      img: 'https://mdbootstrap.com/img/Photos/Avatars/img (27).jpg',
                    },
                    to: '',
                    content: 'this is content'
                  },
                  {
                    from: {
                      name: 'Tommy Smith',
                      img: 'https://mdbootstrap.com/img/Photos/Avatars/img (27).jpg',
                    },
                    to: 'to',
                    content: 'this is content'
                  },
                  {
                    from: {
                      name: 'Tommy Smith',
                      img: 'https://mdbootstrap.com/img/Photos/Avatars/img (27).jpg',
                    },
                    to: 'to',
                    content: 'this is content'
                  },
                ]
              },

            ]
          },
          {
            user: {
              name: 'John Doe',
              img: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg',

            },
            content: '问题的答案，这个人回答了这个问题',
            agree: '123',
            comments: [
              {
                user: {
                  name: 'hanmeimei',
                  img: 'https://mdbootstrap.com/img/Photos/Avatars/img (20).jpg'
                },
                content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
                  '                                    pariatur. Excepteur sint occaecat\n' +
                  '                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                reply: [
                  {
                    from: {
                      name: 'Tommy Smith',
                      img: 'https://mdbootstrap.com/img/Photos/Avatars/img (27).jpg',
                    },
                    to: 'to',
                    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium\n' +
                      '                                            doloremque\n' +
                      '                                            laudantium, totam rem aperiam, eaque\n' +
                      '                                            ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta\n' +
                      '                                            sunt\n' +
                      '                                            explicabo.'
                  },
                  {
                    from: {
                      name: 'Tommy Smith',
                      img: 'https://mdbootstrap.com/img/Photos/Avatars/img (27).jpg',
                    },
                    to: '',
                    content: 'this is content'
                  },
                  {
                    from: {
                      name: 'Tommy Smith',
                      img: 'https://mdbootstrap.com/img/Photos/Avatars/img (27).jpg',
                    },
                    to: 'to',
                    content: 'this is content'
                  },
                  {
                    from: {
                      name: 'Tommy Smith',
                      img: 'https://mdbootstrap.com/img/Photos/Avatars/img (27).jpg',
                    },
                    to: 'to',
                    content: 'this is content'
                  },
                ]
              },

            ]
          },
        ],
        status: {
          code: 2000
        }
      };
    let ifShownComments = []
    let ifShownAdd = []
    let ifShownReplys = []
    for (let i = 0; i < mockData.answers.length; i++) {
      ifShownComments.push(false)
      for (let p = 0; p < mockData.answers[i].comments.length; p++) {
        ifShownReplys.push(false)
        for (let q = 0; q < mockData.answers[i].comments[p].reply.length; q++) {
          ifShownAdd.push(false)
        }
      }
    }

    this.setState(() => {
      return {
        backend: mockData,
        ifShownReplys,
        ifShownComments,
        ifShownAdd
      };
    });
  }

  showComments(comIndex) {
    let {ifShownComments = []} = this.state
    ifShownComments[comIndex] = !this.state.ifShownComments[comIndex]
    this.setState({
      ifShownComments
    })
  }

  showReplys(comIndex,replyIndex,prefix) {
    let {ifShownReplys = []} = this.state
    ifShownReplys[prefix+replyIndex] = !this.state.ifShownReplys[prefix+replyIndex]
    this.setState({
      ifShownReplys
    })
  }
  
  showAddComments(prefix2, addCommentsIndex){
    let {ifShownAdd = []} = this.state
    ifShownAdd[prefix2+addCommentsIndex] = !this.state.ifShownAdd[prefix2+addCommentsIndex]
    this.setState({
      ifShownAdd
    })
  }

  handleChangeComment(e) {
    const addComment = e.target.value
    this.setState({
      addComment
    });
  }

  addComments(replyIndex) {
    // todo,添加评论有问题
    // const reply = {
    //   user: {
    //     name: 'hanmeimei',
    //     img: 'https://mdbootstrap.com/img/Photos/Avatars/img (20).jpg'
    //   },
    //   content: this.state.addComment,
    //   reply: []
    // }
    // let commonLists = this.state.backend.commonLists
    // commonLists[replyIndex].comments.push(reply)
    // console.log(commonLists)
    // this.setState({
    //   backend:{
    //     commonLists
    //   }
    // });
  }

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        <MDBRow>
            <strong style={{paddingLeft:'15px'}}>
              {this.state.backend.commonLists.length}个回答
            </strong>
          
        </MDBRow>
        {this.state.backend.commonLists.map((item, comIndex) => {
          return (
            <MDBCard
              className="my-5 px-3 pt-4"
              key={comIndex}
            >

              <MDBCardBody className="py-0">
                <MDBRow className="px-3 pt-4">
                  <div className="mdb-feed">
                    <div className="news">
                      <div className="label">
                        <img
                          src={item.user.img}
                          alt=""
                          className="rounded-circle z-depth-1-half"
                        />
                      </div>
                      <div className="excerpt">
                        <div className="brief">

                          {item.user.name}
                          <div className="date">1 hour ago</div>
                          <p>{item.content}</p>
                        </div>
                        <div className="feed-footer">
                          {/*功能栏*/}
                          <MDBBtn color="primary" style={{padding: '5px 10px', marginLeft: '0px'}}>
                            <MDBIcon style={{marginRight: '5px'}} icon="heart"/>喜欢
                          </MDBBtn>
                          <MDBBtn onClick={() => {
                            this.showComments(comIndex)
                          }} color="primary" style={{padding: '5px 10px',}}>
                            <MDBIcon style={{marginRight: '5px'}} far icon="comment"/>评论
                          </MDBBtn>
                          <MDBBtn color="primary" style={{padding: '5px 10px',}}>
                            <MDBIcon style={{marginRight: '5px'}} icon="share"/>分享
                          </MDBBtn>
                          <MDBBtn color="primary" style={{padding: '5px 10px',}}>
                            <MDBIcon style={{marginRight: '5px'}} icon="ban"/>
                            举报
                          </MDBBtn>
                          {this.state.ifShownComments[comIndex] ? (
                            <MDBRow style={{margin: '1rem 0rem'}}>
                              <div className="card-header border-0 font-weight-bold">{item.comments.length} 个评论</div>
                              {item.comments.map((comment,replyIndex) => {
                                let prefix = 0
                                for(let p = 0; p < comIndex; p++){
                                  prefix += this.state.backend.commonLists[p].comments.length
                                }
                                return (
                                  <div key={replyIndex} className="media d-block d-md-flex mt-4">
                                    <img className="card-img-64 d-flex mx-auto mb-3"
                                         src={comment.user.img} alt="Generic placeholder image"/>
                                    <div className="media-body text-center text-md-left ml-md-3 ml-0">
                                      <h5 className="font-weight-bold mt-0">
                                        <a href="#!">{comment.user.name}</a>
                                      </h5>
                                      {comment.content}
                                      <br/>
                                      <MDBBtn color="primary" style={{padding: '5px 10px', marginLeft: '0px'}}>
                                        <MDBIcon style={{marginRight: '5px'}} icon="heart"/>喜欢
                                      </MDBBtn>
                                      <MDBBtn onClick={() => {
                                        this.showReplys(comIndex,replyIndex,prefix)
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
                                      {this.state.ifShownReplys[prefix+replyIndex] && comment.reply ? comment.reply.map((reply, addCommentsIndex) => {
                                        let prefix2 = 0
                                        for(let i = 0;i<comIndex;i++){
                                          for(let p = 0;p<replyIndex;p++){
                                            prefix2 += this.state.backend.commonLists[i].comments[p].length
                                          }
                                        }
                                        return (
                                          <div key={addCommentsIndex} className="media d-block d-md-flex mt-4">
                                            <img className="card-img-64 d-flex mx-auto mb-3"
                                                 src={reply.from.img}
                                                 alt="Generic placeholder image"/>
                                            <div className="media-body text-center text-md-left ml-md-3 ml-0">
                                              <h5 className="font-weight-bold mt-0">
                                                <a href="">{reply.from.name}</a>
                                                {reply.to ? `回复${reply.to}` : null}
                                                <a href="#!" className="pull-right">
                                                  <i onClick={()=>{this.showAddComments(prefix2,addCommentsIndex)}} className="fa fa-reply"></i>
                                                </a>
                                              </h5>
                                              {reply.content}
                                              {this.state.ifShownAdd[prefix2+addCommentsIndex] ? (
                                                <div className="form-group mt-4" style={{width: '100%'}}>
                                                  <label htmlFor="quickReplyFormComment">Your comment</label>
                                                  <textarea onChange={(e) => {
                                                    this.handleChangeComment(e)
                                                  }} className="form-control" id="quickReplyFormComment" rows="3"></textarea>

                                                  <div className="text-center my-4">
                                                    <button onClick={() => {
                                                      this.addComments(comIndex)
                                                    }} className="btn btn-primary btn-sm waves-effect waves-light">Post
                                                    </button>
                                                  </div>
                                                </div>
                                              ) : null}
                                            </div>
                                            
                                          </div>
                                        );
                                      }) : null}
                                    </div>
                                  </div>
                                )
                              })}
                              <div className="form-group mt-4" style={{width: '100%'}}>
                                <label htmlFor="quickReplyFormComment">Your comment</label>
                                <textarea onChange={(e) => {
                                  this.handleChangeComment(e)
                                }} className="form-control" id="quickReplyFormComment" rows="3"></textarea>

                                <div className="text-center my-4">
                                  <button onClick={() => {
                                    this.addComments(comIndex)
                                  }} className="btn btn-primary btn-sm waves-effect waves-light">Post
                                  </button>
                                </div>
                              </div>
                              <MDBRow>
                                <MDBCol size="4"></MDBCol>
                                <MDBCol size="4">
                                  <nav className="d-flex justify-content-center mt-5">
                                    <ul className="pagination pg-blue mb-0">


                                      <li className="page-item disabled">
                                        <a className="page-link waves-effect waves-effect">First</a>
                                      </li>


                                      <li className="page-item disabled">
                                        <a className="page-link waves-effect waves-effect" aria-label="Previous">
                                          <span aria-hidden="true">«</span>
                                          <span className="sr-only">Previous</span>
                                        </a>
                                      </li>


                                      <li className="page-item active">
                                        <a className="page-link waves-effect waves-effect">1</a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link waves-effect waves-effect">2</a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link waves-effect waves-effect">3</a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link waves-effect waves-effect">4</a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link waves-effect waves-effect">5</a>
                                      </li>


                                      <li className="page-item">
                                        <a className="page-link waves-effect waves-effect" aria-label="Next">
                                          <span aria-hidden="true">»</span>
                                          <span className="sr-only">Next</span>
                                        </a>
                                      </li>


                                      <li className="page-item">
                                        <a className="page-link waves-effect waves-effect">Last</a>
                                      </li>

                                    </ul>
                                  </nav>
                                </MDBCol>
                                <MDBCol size="4"></MDBCol>
                              </MDBRow>


                            </MDBRow>
                            
                          ) : null}

                        </div>
                      </div>
                    </div>
                  </div>
                </MDBRow>

              </MDBCardBody>
            </MDBCard>
          );
        })}
      </div>


    ) : null;
  }
}

QuestionAnswerPart.i18n = [
  {
    applyBefore: '申请截止'
  },
  {
    applyBefore: 'Apply Before'
  },
];
