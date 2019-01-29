import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import {
  MDBBadge,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBIcon,
} from 'mdbreact';


export class QuestionDes extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null,
      selectType: 1
    };
    this.text = QuestionDes.i18n[languageHelper()];
  }

  // componentWillMount() {
  //   let mockData =
  //     {
  //       id: 0,
  //       name: 'Summer 2019 Tech Internship',
  //       // 下面四个从父组件传进来
  //       tag: ['tag1', 'tag2', 'tag3', 'tag4'],
  //       content: {
  //         title: 'this is a title',
  //         descrption: 'wen ti de miao shu'
  //       },
  //       focus: 123,
  //       reading: 123,
  //       status: {
  //         code: 2000
  //       }
  //     };
  //   this.setState(() => {
  //     return {backend: mockData};
  //   });
  // }


  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div style={{width: '100%'}}>
        <MDBRow>
          <MDBCol size="9">
            <MDBRow>
              {/*展现标签*/}
              {/*todo,超过一定数量就不显示*/}
              {this.props.tags.map((item) => {
                return (
                  <MDBCol key={item} size="1">
                    <MDBBadge key={item} color="light-blue lighten-2"
                              text="white"
                              style={{borderRadius: '100px', padding: '5px 10px'}}>
                      {item}
                    </MDBBadge>
                  </MDBCol>

                );
              })}
            </MDBRow>
            <br/>
            <h3><strong>{this.props.content.title}</strong></h3>

            <h5>{this.props.content.descrption}</h5>
          </MDBCol>
          <MDBCol size="3">
            <MDBRow>
              <MDBCol size="4"></MDBCol>
              <MDBCol size="4">
                <dl>
                  <dd style={{color: '#8590A6'}}>{this.text.focusNum}</dd>
                  <dd style={{color: '#1A1A1A'}}>{this.props.focus}</dd>
                </dl>
              </MDBCol>
              <MDBCol size="4" style={{paddingRight: '0px'}}>
                <dl>
                  <dd style={{color: '#8590A6'}}>{this.text.readingNum}</dd>
                  <dd style={{color: '#1A1A1A'}}>{this.props.reading}</dd>
                </dl>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBBtn color="primary" style={{padding: '5px 10px',marginLeft:'15px'}}>
            关注问题
          </MDBBtn>
          <MDBBtn color="primary" style={{padding: '5px 10px',}}>
            <MDBIcon style={{marginRight: '5px'}} far icon="edit"/>写回答
          </MDBBtn>
          <MDBBtn color="primary" style={{padding: '5px 10px',}}>
            <MDBIcon style={{marginRight: '5px'}} icon="user-plus"/>邀请回答
          </MDBBtn>
          <MDBBtn color="primary" style={{padding: '5px 10px',}}>
            <MDBIcon style={{marginRight: '5px'}} far icon="comment"/>评论
          </MDBBtn>
          <MDBBtn color="primary" style={{padding: '5px 10px',}}>
            <MDBIcon style={{marginRight: '5px'}} icon="share"/>分享
          </MDBBtn>
          <MDBBtn color="primary" style={{padding: '5px 10px',}}>
            <MDBIcon style={{marginRight: '5px'}} icon="ban"/>
            举报
          </MDBBtn>
        </MDBRow>

      </div>
    ) : null;
  }
}

QuestionDes.i18n = [
  {
    focusNum: '关注者',
    readingNum: '浏览次数',
  },
  {
    focusNum: 'focus number',
    readingNum: 'reading number'
  },
];
