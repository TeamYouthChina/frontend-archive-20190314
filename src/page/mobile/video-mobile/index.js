import React from 'react';
import {languageHelper} from '../../../tool/language-helper';
import {
  MDBNavLink, MDBCardBody,
  MDBCard,
  MDBBtn,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBContainer, Iframe
} from 'mdbreact';

import {CommentsCard} from '../../question/comment-test';
import {PaginationUse} from '../../question/pagination-test';

const basicFont = {
  fontFamily: 'IBM Plex Sans',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: 'normal',
}

export class VideoMobile extends React.Component {
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
    this.text = VideoMobile.i18n[languageHelper()];
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
        time: 8,
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
        <MDBRow center>
          <MDBCol size="12">
            <video style={{width: '100%'}} controls
                   src="http://youthchinatest.oss-cn-shanghai.aliyuncs.com/2848699711584473088?Expires=1549472548&OSSAccessKeyId=LTAI0j1nGyLy6XMw&Signature=iKKT0zlXISw1eJXddMRsBSLV%2B2M%3D">
            </video>

            <MDBRow center>
              <MDBCol size="11">
                <h6 style={{
                  fontSize: '1.2rem',
                  lineHeight: '2.4rem',
                }}><strong>
                  The Future of the Web // Mikeal Rogers // Use the whole section as a button to implement Dropdown
                </strong></h6>
              </MDBCol>
              <MDBCol size="8">
                <strong>32000次观看</strong>
              </MDBCol>
              <MDBCol size="3">
                <span style={{
                  padding: '5px 0px',
                  fontSize: '14px',
                  color: '#62686C', ...basicFont
                }}>{this.state.backend.time}天前发布</span>
              </MDBCol>
              <MDBRow center>

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
              </MDBRow>
            </MDBRow>
            {ifShown && (
              <div>
                <div>
                  <MDBCol size="11">
                    {this.state.backend.commonLists.map((item) => (
                      <CommentsCard key={item} message={item}></CommentsCard>

                    ))}
                  </MDBCol>

                  <MDBCol size="11" center>
                    <input ref={(input) => (this.input = input)} className="form-control" placeholder="你的回复"/>
                    <MDBBtn onClick={(e) => this.addComments(e, this.input)} flat
                            style={{background: '#C4C4C4', padding: '5px 10px', color: '#FFFFFF', ...basicFont}}>
                      发布
                    </MDBBtn>
                  </MDBCol>

                  <MDBRow center style={{marginTop: '10px'}}>
                    <PaginationUse pageConfig={this.state.pageConfig}
                                   pageCallbackFn={this.getCurrentPage}></PaginationUse>
                  </MDBRow>
                </div>
              </div>)
            }
          </MDBCol>
        </MDBRow>

      </div>

    ) : null;
  }
}

VideoMobile.i18n = [
  {
    applyBefore: '申请截止'
  },
  {
    applyBefore: 'Apply Before'
  },
];
