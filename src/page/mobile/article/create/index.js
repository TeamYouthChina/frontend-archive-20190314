import React from 'react';
import {languageHelper} from '../../../../tool/language-helper';

import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBView,
  MDBMask,
  MDBIcon
} from 'mdbreact';

import {ArticleEditInit} from '../../../article/articleEditInit';
// import './public/style.css';
// import {Header} from '../../../general-component/header';
// import {Footer} from '../../../general-component/footer';

const basicFont = {
  fontFamily: 'IBM Plex Sans',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: 'normal',
}

export class MobileArticleCreate extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null,
      showPic: false
    };
    this.text = MobileArticleCreate.i18n[languageHelper()];
    this.handleInputClick = this.handleInputClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getObjectURL = this.getObjectURL.bind(this);
    this.deletePic = this.deletePic.bind(this);
  }

  componentWillMount() {
    let mockData =
      {
        id: 0,
        status: {
          code: 2000
        }
      };
    this.setState(() => {
      return {backend: mockData};
    });
  }
  //todo,和服务器的链接
  handleInputChange(e) {
    // if(e.target.files.length > 1){
    //   e.target.value = null
    //   e.target.files.unshift()
    // }
    // 利用自带方法制造url
    let imgSrcI = this.getObjectURL(e.target.files[0]);
    this.setState({
      showPic: true
    })
    this.imgUrl.src = imgSrcI
  }

  handleInputClick() {
    //todo,通过refs调用的方法
    this.answerText.submitContent();
    // this.refs.answerText.submitContent();
  }
  deletePic(){
    this.imgUrl.src = ''
    // 避免重复照片不能上传
    this.input.value = null
    this.setState({
      showPic: false
    })
  }

  getObjectURL(file) {
    let url = null;
    if (window.createObjectURL !== undefined) { // basic
      url = window.createObjectURL(file);
    } else if (window.URL !== undefined) { // mozilla(firefox)
      url = window.URL.createObjectURL(file);
    } else if (window.webkitURL !== undefined) { // webkit or chrome
      url = window.webkitURL.createObjectURL(file);
    }
    return url;
  }

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        {/*<Header/>*/}
        <MDBRow center style={{margin: '47px 0px'}}>
          <MDBCol size="11" style={{height: '100%'}}>
            <MDBRow style={{margin: '22px 0px'}}>
              <MDBCol size="4">
              </MDBCol>
              <MDBCol size="4" style={{fontSize: '18px', textAlign: 'center', verticalAlign: 'middle', ...basicFont}}>
                {this.text.write}
              </MDBCol>
              <MDBCol size="4" style={{paddingRight: '0px'}}>
                <MDBBtn color="indigo" style={{
                  fontSize: '14px',
                  padding: '10px 34px',
                  margin: '-5px 0px',
                  float: 'right', ...basicFont
                }}>发布
                </MDBBtn>
              </MDBCol>

            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <MDBView hover>
                  <div style={this.state.showPic === false ? {display:'none'} : null}>
                    <img ref={(imgInput) => this.imgUrl = imgInput} width="100%" height="auto"
                         src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                         className="img-fluid"
                         alt=''
                    />
                    <MDBMask overlay="grey-light">
                      <MDBBtn style={{position:'absolute',right:'0',bottom:'0',padding:'10px'}} flat onClick={this.deletePic}>
                        <MDBIcon icon="trash" />删除</MDBBtn>
                    </MDBMask>
                  </div>
                  <div style={Object.assign({backgroundColor:'#F2F2F2'},this.state.showPic === true ? {display:'none'} : null)}>
                    <MDBIcon className="flex-center" icon="camera" style={{fontSize:'25px',width:'100%',position:'absolute',zIndex:'0'}} ></MDBIcon>
                    <input ref={(fileInput)=>this.input=fileInput} style={{width:'80vmax',height:'20vmax',opacity:'0'}} type="file" accept="image/*" onChange={(e) => this.handleInputChange(e)}></input>
                  </div>

                </MDBView>
              </MDBCol>
            </MDBRow>
            <MDBRow style={{marginTop:'20px'}}>
              <MDBCol middle>
                <input className="form-control" placeholder={this.text.title}/>
              </MDBCol>
            </MDBRow>
            <br/>
            <ArticleEditInit ref={(answerText) => this.answerText = answerText}></ArticleEditInit>
          </MDBCol>
        </MDBRow>
        
        {/*<Footer/>*/}
      </div>

    ) : null;
  }
}

MobileArticleCreate.i18n = [
  {
    title: '标题',
    submitBtn: '提交文章',
    write: '写文章'
  },
  {
    title: 'Title',
    submitBtn: 'submit article',
    write: 'write article'
  },
];
