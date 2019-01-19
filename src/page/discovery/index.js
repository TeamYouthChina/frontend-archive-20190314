import React from 'react';

import {languageHelper} from '../../tool/language-helper';
import {
  Col,
  MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage,
  Select,
  Fa,
  Row, Progress,
  SelectInput, SelectOptions, SelectOption,
  MDBCollapse,
  Input, MDBInput,
  Iframe,
  MDBContainer,
  MDBTabPane, MDBTabContent,
  MDBRow, MDBCol, MDBMask, MDBBtn, MDBIcon, MDBView,
  MDBChip,
  MDBListGroup, MDBListGroupItem,
  MDBNav, MDBNavItem, MDBNavLink,
} from 'mdbreact';

import classnames from 'classnames';
import {Header} from "../../general-component/header";
import {Footer} from "../../general-component/footer";
import {ArticleCard} from "../../general-component/article-card"

/* route: '/login' */

export class Discovery extends React.Component {
  constructor(props) {
    super(props);

    this.text = Discovery.i18n[languageHelper(this.props.language)];
    this.state = {
      activeItemClassicTabs1: '1',
    };
console.log(this.props)
  }

  toggleClassicTabs1 = (tab) => {
    if (this.state.activeItemClassicTabs1 !== tab) {
      this.setState({
        activeItemClassicTabs1: tab
      });
    }
  };


  render() {
    return (
      <div>
        <Header/>
        <Row>
          <MDBCol md="7" className="offset-md-1 pt-3">
            <div className="classic-tabs">
              <MDBNav classicTabs color="indigo">
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={classnames({
                      active: this.state.activeItemClassicTabs1 === '1'
                    })}
                    onClick={() => {
                      this.toggleClassicTabs1('1');
                    }}
                  >
                    {this.text.fst_tab}
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={classnames({
                      active: this.state.activeItemClassicTabs1 === '2'
                    })}
                    onClick={() => {
                      this.toggleClassicTabs1('2');
                    }}
                  >
                    {this.text.sec_tab}
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={classnames({
                      active: this.state.activeItemClassicTabs1 === '3'
                    })}

                    color="yellow accent-3"
                    
                    onClick={() => {
                      this.toggleClassicTabs1('3');
                    }}
                  >
                    {this.text.thd_tab}
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
              <MDBTabContent
                className="card"
                activeItem={this.state.activeItemClassicTabs1}
              >
                <MDBTabPane tabId="1">
                  <p>
                    <MDBRow>
                      <MDBCol lg="5" xl="4">
                        <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                          <img
                            className="img-fluid"
                            src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                            alt=""
                          />
                          <a href="#!">
                            <MDBMask overlay="white-slight"/>
                          </a>
                        </MDBView>
                      </MDBCol>
                      <MDBCol lg="7" xl="8">
                        <h3 className="font-weight-bold mb-3 p-0">
                          <strong>Title of the news</strong>
                        </h3>
                        <p className="dark-grey-text">
                          Nam libero tempore, cum soluta nobis est eligendi optio cumque
                          nihil impedit quo minus id quod maxime placeat facere possimus,
                          omnis voluptas assumenda est, omnis dolor repellendus et aut
                          officiis debitis cum soluta nobis est eligendi placeat facere
                          aut rerum.
                        </p>
                        <p>
                          by <a href="#!" className="font-weight-bold">Jessica Clark</a>, 19/04/2018
                        </p>
                        <MDBBtn color="primary" size="md" href="/article/1">
                          Read More
                        </MDBBtn>
                      </MDBCol>
                    </MDBRow>
                    <hr className="my-5"/>
                    <MDBRow>
                      <MDBCol lg="5" xl="4">
                        <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                          <img
                            className="img-fluid"
                            src="https://mdbootstrap.com/img/Photos/Others/images/31.jpg"
                            alt=""
                          />
                          <a href="#!">
                            <MDBMask overlay="white-slight"/>
                          </a>
                        </MDBView>
                      </MDBCol>
                      <MDBCol lg="7" xl="8">
                        <h3 className="font-weight-bold mb-3 p-0">
                          <strong>Title of the news</strong>
                        </h3>
                        <p className="dark-grey-text">
                          At vero eos et accusamus et iusto odio dignissimos ducimus qui
                          blanditiis praesentium voluptatum deleniti atque corrupti quos
                          dolores et quas molestias excepturi sint occaecati cupiditate
                          non provident et accusamus iusto odio dignissimos et dolorum
                          fuga.
                        </p>
                        <p>
                          by <a href="#!" className="font-weight-bold">Jessica Clark</a>, 16/04/2018
                        </p>
                        <MDBBtn color="primary" size="md" href="/article/2">
                          Read More
                        </MDBBtn>
                      </MDBCol>
                    </MDBRow>
                    <hr className="my-5"/>
                    <MDBRow>
                      <MDBCol>
                        <MDBCol>
                          <h3 className="font-weight-bold mb-3 p-0">
                            <strong>Title of the news</strong>
                          </h3>
                          <dl className="row">
                            <dt>
                              <MDBChip src="https://mdbootstrap.com/img/Photos/Avatars/img(7).jpg" alt="Contact Person"
                                       bgColor="blue lighten-4"
                                       waves>
                                Caroline Smith
                              </MDBChip>
                            </dt>
                            <dd className="col-sm-9">
                              , Software Developer
                            </dd>
                          </dl>

                          <h6>This is the sixth heading
                          </h6>
                        </MDBCol>
                        <p className="dark-grey-text">
                          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                          aut fugit, sed quia consequuntur magni dolores eos qui ratione
                          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                          ipsum quia dolor sit amet, psam voluptatem quia consectetur.
                        </p>
                        <blockquote className="blockquote">
                          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.</p>
                          <footer className="blockquote-footer mb-3">Someone famous in <cite title="Source Title">Source
                            Title</cite></footer>
                        </blockquote>
                      </MDBCol>
                    </MDBRow>
                  </p>
                </MDBTabPane>
                <MDBTabPane tabId="2">
                  <p>
                    <Row center className="mx-3">
                      <Col>
                        <Iframe height={420} src="https://www.youtube.com/embed/v64KOxKVLVg"/>
                        <hr/>
                      </Col>
                    </Row>
                    <Row center className="mt-3">
                      <MDBCol md="2">

                        <img
                          className="img-fluid rounded z-depth-1-half mb-3"
                          src="https://ws1.sinaimg.cn/large/94365dd2ly1fyhhfjkhk7j2069069glh.jpg"
                          alt=""
                          style={{width: '80px', height: '80px'}}
                        />


                      </MDBCol>
                      <MDBCol md="8">
                        <h5 className="font-weight-bold mb-3 p-0">
                          <strong>数据分析实习(2019 Summer), GE 通用电气</strong>
                          <MDBIcon icon="bookmark-o" size="1x" className="amber-text px-3"/>
                        </h5>

                        <br/>
                        <Row>
                          <Col md="3">
                            <MDBIcon icon="heart-o"/>
                            265 likes
                          </Col>
                          <Col md="4">
                            <MDBIcon icon="comment"/>
                            89 comments
                          </Col>
                        </Row>
                      </MDBCol>
                    </Row>
                    <Row center className="mx-3" style={{marginTop:"100px"}}>
                      <Col>
                        <Iframe height={420} src="https://www.youtube.com/embed/v64KOxKVLVg"/>
                        <hr/>
                      </Col>
                    </Row>
                    <Row center className="mt-3">
                      <MDBCol md="2">

                        <img
                          className="img-fluid rounded z-depth-1-half mb-3"
                          src="https://ws1.sinaimg.cn/large/94365dd2ly1fyhhfjkhk7j2069069glh.jpg"
                          alt=""
                          style={{width: '80px', height: '80px'}}
                        />


                      </MDBCol>
                      <MDBCol md="8">
                        <h5 className="font-weight-bold mb-3 p-0">
                          <strong>数据分析实习(2019 Summer), GE 通用电气</strong>
                          <MDBIcon icon="bookmark-o" size="1x" className="amber-text px-3"/>
                        </h5>

                        <br/>
                        <Row>
                          <Col md="3">
                            <MDBIcon icon="heart-o"/>
                            265 likes
                          </Col>
                          <Col md="4">
                            <MDBIcon icon="comment"/>
                            89 comments
                          </Col>
                        </Row>
                      </MDBCol>
                    </Row>
                    <Row center className="mx-3" style={{marginTop:"100px"}}>
                      <Col>
                        <Iframe height={420} src="https://www.youtube.com/embed/v64KOxKVLVg"/>
                        <hr/>
                      </Col>
                    </Row>
                    <Row center className="mt-3">
                      <MDBCol md="2">

                        <img
                          className="img-fluid rounded z-depth-1-half mb-3"
                          src="https://ws1.sinaimg.cn/large/94365dd2ly1fyhhfjkhk7j2069069glh.jpg"
                          alt=""
                          style={{width: '80px', height: '80px'}}
                        />


                      </MDBCol>
                      <MDBCol md="8">
                        <h5 className="font-weight-bold mb-3 p-0">
                          <strong>数据分析实习(2019 Summer), GE 通用电气</strong>
                          <MDBIcon icon="bookmark-o" size="1x" className="amber-text px-3"/>
                        </h5>

                        <br/>
                        <Row>
                          <Col md="3">
                            <MDBIcon icon="heart-o"/>
                            265 likes
                          </Col>
                          <Col md="4">
                            <MDBIcon icon="comment"/>
                            89 comments
                          </Col>
                        </Row>
                      </MDBCol>
                    </Row>

                  </p>
                </MDBTabPane>
                <MDBTabPane tabId="3">
                  <p>
                    <MDBBtn color="primary">Primary</MDBBtn>
                    <MDBRow>
                      <MDBCol md="12">
                        <div className="card-group my-5">
                          <MDBCard personal className="mb-md-0 mb-4">
                            <MDBView hover>
                              <MDBCardImage
                                top
                                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
                                alt="MDBCard image cap"
                              />
                              <a href="#!">
                                <MDBMask overlay="white-slight"/>
                              </a>
                            </MDBView>
                            <MDBCardBody>
                              <a href="#!">
                                <MDBCardTitle>Anna</MDBCardTitle>
                              </a>
                              <a href="#!" className="card-meta">
                                Friends
                              </a>
                              <MDBCardText>
                                Anna is a web designer living in New York.
                              </MDBCardText>
                              <hr/>
                              <a href="#!" className="card-meta">
                <span>
                  <MDBIcon icon="user"/>
                  83 Friends
                </span>
                              </a>
                              <p className="card-meta float-right">Joined in 2012</p>
                            </MDBCardBody>
                          </MDBCard>

                          <MDBCard personal className="mb-md-0 mb-4">
                            <MDBView hover>
                              <MDBCardImage
                                top
                                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
                                alt="MDBCard image cap"
                              />
                              <a href="#!">
                                <MDBMask overlay="white-slight"/>
                              </a>
                            </MDBView>
                            <MDBCardBody>
                              <a href="#!">
                                <MDBCardTitle>John</MDBCardTitle>
                              </a>
                              <a href="#!" className="card-meta">
                                Coworker
                              </a>
                              <MDBCardText>John is a copywriter living in Seattle.</MDBCardText>
                              <hr/>
                              <a href="#!" className="card-meta">
                <span>
                  <MDBIcon icon="user"/>
                  48 Friends
                </span>
                              </a>
                              <p className="card-meta float-right">Joined in 2015</p>
                            </MDBCardBody>
                          </MDBCard>

                          <MDBCard personal className="mb-md-0 mb-4">
                            <MDBView hover>
                              <MDBCardImage
                                top
                                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(28).jpg"
                                alt="MDBCard image cap"
                              />
                              <a href="#!">
                                <MDBMask overlay="white-slight"/>
                              </a>
                            </MDBView>
                            <MDBCardBody>
                              <a href="#!">
                                <MDBCardTitle>Sara</MDBCardTitle>
                              </a>
                              <a href="#!" className="card-meta">
                                Coworker
                              </a>
                              <MDBCardText>Sara is a video maker living in Tokyo.</MDBCardText>
                              <hr/>
                              <a href="#!" className="card-meta">
                <span>
                  <MDBIcon icon="user"/>
                  127 Friends
                </span>
                              </a>
                              <p className="card-meta float-right">Joined in 2014</p>
                            </MDBCardBody>
                          </MDBCard>
                        </div>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow center>
                      <MDBBtn color="primary" size="md">
                        Read More
                      </MDBBtn>
                    </MDBRow>
                  </p>
                </MDBTabPane>
              </MDBTabContent>
            </div>
          </MDBCol>

          <MDBCol md="3" className="pt-3" style={{marginTop: '50px'}}>
            <p>
              <MDBCard style={{height: '200px', width: '400px'}}>
                <Row>
                  <Col>
                    <div className="px-10">
                      <Row center style={{marginTop: '20px'}}>
                        <MDBIcon icon="shield" size="3x"/>
                      </Row>
                      <Row center>
                        normal
                      </Row>
                    </div>
                  </Col>
                  <Col>
                    <div className="px-10">
                      <Row center style={{marginTop: '20px'}}>
                        <MDBIcon icon="shield" size="3x"/>
                      </Row>
                      <Row center>
                        normal
                      </Row>
                    </div>
                  </Col>
                  <Col>
                    <div className="px-10">
                      <Row center style={{marginTop: '20px'}}>
                        <MDBIcon icon="shield" size="3x"/>
                      </Row>
                      <Row center>
                        normal
                      </Row>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md="4">
                    <div className="px-10">
                      <Row center style={{marginTop: '20px'}}>
                        <MDBIcon icon="shield" size="3x"/>
                      </Row>
                      <Row center>
                        normal
                      </Row>
                    </div>
                  </Col>
                </Row>
              </MDBCard>
            </p>
            <p>
              <MDBCard>
                <MDBListGroup>
                  <MDBListGroupItem><MDBIcon icon="home" fixed/> Home</MDBListGroupItem>
                  <MDBListGroupItem><MDBIcon icon="book" fixed/> Library</MDBListGroupItem>
                  <MDBListGroupItem><MDBIcon icon="pencil" fixed/> Applications</MDBListGroupItem>
                  <MDBListGroupItem><MDBIcon icon="cog" fixed/> Settings</MDBListGroupItem>
                </MDBListGroup>
              </MDBCard>
            </p>
          </MDBCol>
        </Row>
        <Footer/>
      </div>
    );
  }
}

Discovery.i18n = [
  {
    fst_tab: '文章',
    sec_tab: '视频',
    thd_tab: '人脉',
    button: '登陆'
  },
  {
    fst_tab: 'DiscoverArticle',
    sec_tab: 'Videos',
    thd_tab: 'Connection',
    button: 'Login'
  }
];
