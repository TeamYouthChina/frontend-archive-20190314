import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'
import {ContentUtils} from 'braft-utils'
import {languageHelper} from '../../../tool/language-helper';
import {MDBContainer, MDBCol, MDBRow, MDBBtn} from 'mdbreact';


export default class AnswerUploadMobile extends React.Component {
  constructor(props) {
    super(props);
    this.text = AnswerUploadMobile.i18n[languageHelper()];
  }

  componentWillMount() {
    let mockData =
      {
        id: 0,
        editorState: BraftEditor.createEditorState(null),
        status: {
          code: 2000
        }
      };
    this.setState(() => {
      return {backend: mockData};
    });
  }

  handleChange = (editorState) => {
    this.setState({editorState})
  }

  insertHello = () => {
    this.setState({
      editorState: ContentUtils.insertText(this.state.editorState, '你好啊！')
    })
  }

  render() {
    const {editorState} = this.state
    const controls = ['bold', 'italic', 'underline', 'separator']
    const extendControls = [
      {
        key: 'custom-button',
        type: 'button',
        text: '按钮',
        onClick: this.insertHello
      }, {
        key: 'custom-dropdown',
        type: 'dropdown',
        text: '下拉组件',
        component: <div style={{color: '#fff', padding: 10}}>你好啊！</div>
      }, {
        key: 'custom-modal',
        type: 'modal',
        text: '模态框',
        modal: {
          id: 'my-moda-1',
          title: '你好啊',
          children: (
            <div style={{width: 400, padding: '0 10px'}}>
              <img src="https://margox.cn/wp-content/uploads/2016/10/FA157E13E8B77E6E11290E9DF4C5ED7D-480x359.jpg"
                   style={{width: '100%', height: 'auto'}}/>
            </div>
          )
        }
      }
    ]

    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        <div>
          <div className="form-group">
            <h4>{this.text.write}</h4>
            <MDBRow>
              <MDBCol size="11">
                {this.props.children}
              </MDBCol>
            </MDBRow>
            <MDBRow center>
              <MDBCol size="11">
                <input className="form-control" placeholder={this.text.title}/>
              </MDBCol>
              <MDBCol size="11" style={{marginTop: '1rem'}}>
                <MDBBtn style={{margin: '0px', float: 'right'}} size="sm" rounded color="info"
                        onClick={this.handleInputClick}>{this.text.submitBtn}</MDBBtn>
              </MDBCol>
            </MDBRow>

          </div>
          <br/>
          <div className="editor-wrapper">
            <BraftEditor
              value={editorState}
              onChange={this.handleChange}
              controls={controls}
              extendControls={extendControls}
              contentStyle={{height: 200}}
            />
          </div>
        </div>
      </div>
    ) : null;
  }
}

AnswerUploadMobile.i18n = [
  {
    title: '标题',
    submitBtn: '提交更改',
    write: '编辑视频'
  },
  {
    title: 'Title',
    submitBtn: 'submit modification',
    write: 'edit video-mobile'
  }
];
