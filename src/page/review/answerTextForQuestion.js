import React from 'react'
import Cookies from 'js-cookie';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import {getAsync} from "../../tool/api-helper";
import {postAsync} from "../../tool/api-helper";
import {MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBBtn,MDBIcon} from 'mdbreact'

const myUploadFn = async (param) => {
  // console.log(param)
  const serverURL = 'http://youthchinatest.oss-cn-shanghai.aliyuncs.com/2848699711584473088?Expires=1549472548&OSSAccessKeyId=LTAI0j1nGyLy6XMw&Signature=iKKT0zlXISw1eJXddMRsBSLV%2B2M%3D'
  // 数据传输协议，添加注释，类似json
  const xhr = new XMLHttpRequest
  // 构建键值对，给内容加标记
  const fd = new FormData()
  const result = await getAsync(serverURL)
  // console.log(result,'result')
  const successFn = (response) => {
    // 假设服务端直接返回文件上传后的地址
    // 上传成功后调用param.success并传入上传后的文件地址
    param.success({
      url: 'http://youthchinatest.oss-cn-shanghai.aliyuncs.com/2848699711584473088?Expires=1549472548&OSSAccessKeyId=LTAI0j1nGyLy6XMw&Signature=iKKT0zlXISw1eJXddMRsBSLV%2B2M%3D',
      meta: {
        id: '123',
        title: '123',
        alt: '123',
        loop: true, // 指定音视频是否循环播放
        autoPlay: true, // 指定音视频是否自动播放
        controls: true, // 指定音视频是否显示控制栏
        poster: 'https://margox.cn/wp-content/uploads/2018/09/IMG_9508.jpg', // 指定视频播放器的封面
      }
    })
  }

  const progressFn = (event) => {
    // 上传进度发生变化时调用param.progress
    param.progress(event.loaded / event.total * 100)
  }

  const errorFn = (response) => {
    // 上传发生错误时调用param.error
    param.error({
      msg: 'unable to upload.'
    })
  }

  xhr.upload.addEventListener('progress', progressFn, false)
  xhr.addEventListener('load', successFn, false)
  xhr.addEventListener('error', errorFn, false)
  xhr.addEventListener('abort', errorFn, false)

  fd.append('file', param.file)
  xhr.open('POST', serverURL, true)
  xhr.send(fd)

}

export class AnswerTextForQuestion extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      backend: null,
      editorState: null,
      showNow: 0,
      myUploadFn: null,
      previewNow: false
    }
    this.showData = this.showData.bind(this)
  }

  async componentDidMount() {
    // 假设此处从服务端获取html格式的编辑器内容
    // const htmlContent = await fetchEditorContent()
    const htmlContent = ''
    // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorState数据
    this.setState({
      editorState: BraftEditor.createEditorState(htmlContent)
    })
  }

  async submitContent() {
    let showNow = this.state.showNow + 1
    // const result = await postAsync('commonLists/1/comments',{
    //   RichText:{
    //     braftEditorRaw:{},
    //     previewText:{},
    //     resourceText:[]
    //   }
    // })
    // console.log(result)
    this.setState({
      showNow
    })
    // 在编辑器获得焦点时按下ctrl+s会执行此方法
    // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
    // const htmlContent = this.state.editorState.toHTML()
    // const result = await saveEditorContent(htmlContent)
  }
  async showData(){
    // let result = await postAsync('commonLists/1/comments',{
    //   RichText:{
    //     braftEditorRaw:{},
    //     previewText:{},
    //     resourceText:[]
    //   }
    // })
    const token = Cookies.get('token');
  }

  handleEditorChange(editorState) {

    this.setState({editorState});
    let a = JSON.stringify(this.state.editorState.toRAW(true))
    // console.log(Object.assign({blocks:this.state.editorState.toRAW(true)},{id:1}));
  }

  preview = () => {
    // this.buildPreviewHtml()
    let previewNow = !this.state.previewNow
    this.setState({
      previewNow
    })
  }

  buildPreviewHtml() {
  }


  render() {
    // 这里是上传函数

    const {editorState} = this.state
    const extendControls = [
      {
        key: 'custom-button',
        type: 'button',
        text: '预览',
        onClick: this.preview
      }
    ]

    return (
      <div className="myAnswerText">
        <div className="editor-wrapper" style={{height: '100%',minHeight:'400px'}}>
          <BraftEditor media={{uploadFn: myUploadFn}}
                       value={editorState} contentStyle={{height: '100%'}}
                       onChange={(editorState) => this.handleEditorChange(editorState)} extendControls={extendControls}
          />
        </div>
        <br/>
        <MDBModal isOpen={this.state.previewNow}>
          
          <MDBModalBody>
            {this.state.editorState !== null ? (
              <div
                   dangerouslySetInnerHTML={{__html: this.state.editorState.toHTML()}}>
              </div>) : null}

          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn onClick={this.preview} flat style={{padding: '5px 0', marginLeft: '15px'}}>
              <MDBIcon style={{marginRight: '5px'}} far icon="thumbs-up"/>提交
            </MDBBtn>
            <MDBBtn onClick={this.preview} flat style={{padding: '5px 10px',}}>
              <MDBIcon style={{marginRight: '5px'}} far icon="thumbs-down"/>返回
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
        {/*<br/><br/><br/><br/><br/><br/>*/}
        {/*<MDBBtn style={{zIndex:'100'}} onClick={this.showData}></MDBBtn>*/}
      </div>
    )

  }

}

