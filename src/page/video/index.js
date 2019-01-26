import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import {
  MDBNavLink,MDBCardBody,
  MDBCard,
  MDBBtn,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBContainer, Iframe
} from 'mdbreact';

import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';
import {QuestionAnswerPart} from '../question/question-answer-part'

export class Video extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null,
      selectType: 1
    };
    this.text = Video.i18n[languageHelper()];
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
  showReplys(){}

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        <Header></Header>
        <br/>
        <MDBRow>
          <MDBCol size="1">

          </MDBCol>
          <MDBCol size="9">
            <MDBRow>
              <MDBCol size="8">
                <MDBContainer className="text-center" style={{paddingLeft: '0px'}}>
                  <Iframe src="https://www.youtube.com/embed/v64KOxKVLVg"/>
                </MDBContainer>
                <br/>
                <h3 style={{
                  fontSize: '1.2rem',
                  lineHeight: '2.4rem',
                  }}><strong>
                  The Future of the Web // Mikeal Rogers // CascadiaJS 2018
                </strong></h3>
                <MDBRow>
                  <MDBCol size="4" style={{margin:'auto'}}>
                    <strong>32000次观看</strong>
                  </MDBCol>
                  <MDBCol size="8" style={{paddingRight:'25px'}}>
                    <div style={{float:'right'}}>
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
                    </div>
                    
                  </MDBCol>
                </MDBRow>
                <MDBCard
                  className="my-5"
                  style={{
                    boxShadow:'none',
                    borderTop: '1px solid #e8e8e8',
                    borderBottom: '1px solid #e8e8e8',
                    padding:'20px 0px'
                  }}
                >

                  <MDBCardBody className="py-0" >
                    <MDBRow >
                      <div className="mdb-feed">
                        <div className="news">
                          <div className="label">
                            <img
                              src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg"
                              alt=""
                              className="rounded-circle z-depth-1-half"
                            />
                          </div>
                          <div className="excerpt">
                            <div className="brief">

                              John Doe
                              <div className="date">1 hour ago</div>
                              <p>this is a description of this film and after reading this you will find that some you can not understand, because akjlsdakhdlkajshljhlhdiahjsdi </p>
                            </div>
                            <div className="feed-footer">
                            </div>
                          </div>
                        </div>
                      </div>
                    </MDBRow>

                  </MDBCardBody>
                </MDBCard>
                <QuestionAnswerPart></QuestionAnswerPart>
              </MDBCol>
              <MDBCol size="4">
                <h3>this is a sideBar</h3>
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
