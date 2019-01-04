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
import {HomeHeader} from '../home-header';
import {Footer} from '../../general-component/footer';

export class Article extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null,
      ifShown: 'none',
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

  render() {
    const ifShown = this.state.ifShown
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        <HomeHeader/>
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
                    <h2 className="font-weight-bold">
                      <a href="#!">{this.state.backend.title}</a>
                    </h2>
                    <p>
                      {this.text.written}
                      <a href="#!">
                        <strong>{this.state.backend.author}</strong>
                      </a>
                      , {this.state.backend.date}
                    </p>
                    <MDBBtn className="btn-fb waves-light">
                      <MDBIcon icon="facebook" className="pr-2"/>
                      Facebook
                    </MDBBtn>
                    <span className="counter">46</span>
                    <MDBBtn className="btn-tw waves-light">
                      <MDBIcon icon="twitter" className="pr-2"/>
                      Twitter
                    </MDBBtn>
                    <span className="counter">22</span>
                    <MDBBtn className="btn-gplus waves-light">
                      <MDBIcon icon="google-plus" className="pr-2"/>
                      Google
                    </MDBBtn>
                    <span className="counter">31</span>
                    <MDBBtn color="default" className="waves-light">
                      <MDBIcon icon="comments" className="pr-2"/>
                      Comments
                    </MDBBtn>
                    <span className="counter">18</span>
                  </MDBCardBody>
                </MDBCard>
                <MDBContainer className="mt-5" style={{marginLeft: '2rem'}}>
                  {this.state.backend.contents}
                </MDBContainer>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol style={{marginLeft: '2rem'}}>
                <MDBBtn size="sm" rounded color="info" onClick={this.handleInputClick}>{this.text.submitBtn}</MDBBtn>
              </MDBCol>
            </MDBRow>
            <div>
              <MDBRow style={{margin: '1rem 2.5rem',display: ifShown}}>
                <div className="card-header border-0 font-weight-bold">4 comments</div>

                <div className="media d-block d-md-flex mt-4">
                  <img className="card-img-64 d-flex mx-auto mb-3"
                       src="https://mdbootstrap.com/img/Photos/Avatars/img (20).jpg" alt="Generic placeholder image"/>
                  <div className="media-body text-center text-md-left ml-md-3 ml-0">
                    <h5 className="font-weight-bold mt-0">
                      <a href="">Miley Steward</a>
                      <a href="" className="pull-right">
                        <i className="fa fa-reply"></i>
                      </a>
                    </h5>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <div className="media d-block d-md-flex mt-4">
                      <img className="card-img-64 d-flex mx-auto mb-3"
                           src="https://mdbootstrap.com/img/Photos/Avatars/img (27).jpg"
                           alt="Generic placeholder image"/>
                      <div className="media-body text-center text-md-left ml-md-3 ml-0">
                        <h5 className="font-weight-bold mt-0">
                          <a href="">Tommy Smith</a>
                          <a href="" className="pull-right">
                            <i className="fa fa-reply"></i>
                          </a>
                        </h5>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque
                        ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo.
                      </div>
                    </div>

                    <div className="form-group mt-4">
                      <label htmlFor="quickReplyFormComment">Your comment</label>
                      <textarea className="form-control" id="quickReplyFormComment" rows="5"></textarea>

                      <div className="text-center my-4">
                        <button className="btn btn-primary btn-sm waves-effect waves-light" type="submit">Post
                        </button>
                      </div>
                    </div>

                    <div className="media d-block d-md-flex mt-3">
                      <img className="card-img-64 d-flex mx-auto mb-3"
                           src="https://mdbootstrap.com/img/Photos/Avatars/img (21).jpg"
                           alt="Generic placeholder image"/>
                      <div className="media-body text-center text-md-left ml-md-3 ml-0">
                        <h5 className="font-weight-bold mt-0">
                          <a href="">Sylvester the Cat</a>
                          <a href="" className="pull-right">
                            <i className="fa fa-reply"></i>
                          </a>
                        </h5>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                        velit, sed quia non numquam eius modi
                        tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="media d-block d-md-flex mt-3">
                  <img className="card-img-64 d-flex mx-auto mb-3"
                       src="https://mdbootstrap.com/img/Photos/Avatars/img (30).jpg" alt="Generic placeholder image"/>
                  <div className="media-body text-center text-md-left ml-md-3 ml-0">
                    <h5 className="font-weight-bold mt-0">
                      <a href="">Caroline Horwitz</a>
                      <a href="" className="pull-right">
                        <i className="fa fa-reply"></i>
                      </a>
                    </h5>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                    deleniti atque corrupti
                    quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt
                    in
                    culpa officia deserunt mollitia animi, id est laborum et dolorum fuga.
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
            </div>
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
