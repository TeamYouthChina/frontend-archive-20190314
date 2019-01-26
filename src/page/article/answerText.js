import React from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'

export class AnswerText extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      backend: null,
      editorState: null,
      showNow:0
    }
  }
  

  async componentDidMount () {
    // 假设此处从服务端获取html格式的编辑器内容
    // const htmlContent = await fetchEditorContent()
    const htmlContent = ''
    // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorState数据
    this.setState({
      editorState: BraftEditor.createEditorState(htmlContent)
    })
  }

  submitContent() {
    let showNow = this.state.showNow + 1
    this.setState({
      showNow
    })
    // 在编辑器获得焦点时按下ctrl+s会执行此方法
    // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
    // const htmlContent = this.state.editorState.toHTML()
    // const result = await saveEditorContent(htmlContent)
  }

  handleEditorChange(editorState) {
    
    this.setState({ editorState})
  }

  render () {

    const { editorState } = this.state

    return (
      <div>
        <div className="editor-wrapper">
          <BraftEditor className="myAnswerText"
            value={editorState}
            onChange={(editorState)=>{this.handleEditorChange(editorState)}}
          />
        </div>
        <br/>
        {this.state.showNow === 0 ? null : (
          <div className="output-content" 
               dangerouslySetInnerHTML={{ __html: editorState.toHTML()}}>
          </div>
        )}
      </div>
    )

  }

}

