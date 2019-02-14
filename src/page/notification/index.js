import React from 'react';

import {
  MDBBadge,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBListGroupItem,
  MDBAvatar,
  MDBListGroup,
  MDBPopover,
  MDBPopoverBody,
  MDBPopoverHeader,
} from 'mdbreact';

import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';
import {languageHelper} from '../../tool/language-helper';

import './chat-room.css';

export class Notification extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null,
      selectType: 1,
      flipped: false,
      collapseID: "",
      modal: false,

      notifications: [
        {
          //type = 1: 系统推送; type = 2: 文章的赞; type = 3: 评论的赞;
          name: "Youth China",
          type: 1,
          avatar: "https://avatars1.githubusercontent.com/u/44857031?s=200&v=4",
          content: "欢迎你来到Youth China，一个认真、专业、友善的知识分享社区.在知乎，无论是满足好奇，或者解答疑惑，你都有机会找到可信赖的回答，你还可以与来自天南地北的知友，分享你的知识、经验见解",
          when: "今天 03:09"
        },
        {
          name: "John Doe",
          type: 2,
          avatar: "https://mdbootstrap.com/img/Photos/Avatars/img(2).jpg",
          content: "诺基亚是一家什么样的公司？",
          when: "今天 03:09"
        },
        {
          name: "John Doe",
          type: 3,
          avatar: "https://mdbootstrap.com/img/Photos/Avatars/img(2).jpg",
          content: "你有安全感么？",
          when: "今天 03:09"
        },
      ]
    };
    this.text = Notification.i18n[languageHelper()];
  }

  handleFlipping = () => {
    this.setState({flipped: !this.state.flipped});
  }

  componentWillMount() {
    let mockData =
      {
        status: {
          code: 2000
        }
      };
    this.setState(() => {
      return {backend: mockData};
    });
  }

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        <Header/>
        <MDBRow className="mt-5">
          <MDBCol className="offset-2" size='8'>
            <MDBRow>
              <MDBCol size="10"><h4 className="font-weight-bold">通知</h4></MDBCol>
              {/*<MDBCol>*/}
              {/*<MDBBtn onClick={this.toggle} color="primary" style={{padding: '5px 10px',}}>*/}
              {/*写私信*/}
              {/*</MDBBtn>*/}
              {/*<MDBModal isOpen={this.state.modal} toggle={this.toggle}>*/}
              {/*<MDBModalHeader toggle={this.toggle}>请选择回复的信息</MDBModalHeader>*/}
              {/*<MDBModalBody>*/}
              {/*<MDBCol md="18">*/}
              {/*<form className="form-inline mt-4 mb-4">*/}
              {/*<MDBIcon icon="search"/>*/}
              {/*<input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="搜索要回复用户"*/}
              {/*aria-label="Search"/>*/}
              {/*</form>*/}
              {/*</MDBCol>*/}
              {/*<div className="form-group basic-textarea">*/}
              {/*<textarea*/}
              {/*className="form-control pl-2 my-0"*/}
              {/*id="exampleFormControlTextarea2"*/}
              {/*rows="3"*/}
              {/*placeholder="请输入回复信息"*/}
              {/*/>*/}
              {/*<MDBBtn*/}
              {/*color="info"*/}
              {/*rounded*/}
              {/*size="sm"*/}
              {/*className="float-right mt-4"*/}
              {/*>*/}
              {/*Send*/}
              {/*</MDBBtn>*/}
              {/*</div>*/}
              {/*</MDBModalBody>*/}
              {/*<MDBModalFooter>*/}
              {/*<MDBBtn color="secondary" onClick={this.toggle}>关闭</MDBBtn>*/}
              {/*<MDBBtn color="primary">保存</MDBBtn>*/}
              {/*</MDBModalFooter>*/}
              {/*</MDBModal>*/}
              {/*</MDBCol>*/}
            </MDBRow>
            <MDBRow>
              <MDBListGroup>
                {this.state.notifications.map(notification => (
                  <div key={notification.name}>
                    <NotificationItem key={notification.name} notification={notification}/>
                  </div>
                ))}
              </MDBListGroup>
            </MDBRow>
            <p/>
            <MDBRow>
              <a href="http://localhost:3000/message">
                <MDBIcon icon="undo"/> 返回消息页
              </a>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <Footer/>
      </div>
    ) : null;
  }
}

const NotificationItem = (props) => {
  return (
    <MDBListGroupItem>
      <MDBRow>
        <MDBCol className="d-none d-md-inline-block mx-3 my-3" md="2">
          <MDBAvatar>
            <img src={props.notification.avatar}
                 style={{
                   width: "100px"
                 }}
                 className="z-depth-1"/>
          </MDBAvatar>
        </MDBCol>
        <MDBCol className="my-3">
          <div style={{fontSize: "1.125rem"}}>
            <MDBRow bottom className="text-muted">
              <a href="#" style={{
                color: "#7C97B8"
              }}>
                <strong>{props.notification.name}<span> </span></strong>
              </a>
              {props.notification.type === 1 ? <span>
                  {props.notification.content}
                  <strong> {props.notification.when}</strong>
              </span>
                : null}
              {props.notification.type === 2 ? <span>
                  赞了你的文章<span> </span>
                  <a href="#" style={{
                    color: "#7C97B8"
                  }}>
                    {props.notification.content}
                  </a>
                  <strong> {props.notification.when}</strong>
              </span>
                : null}
              {props.notification.type === 3 ? <span>
                  赞了你的评论<span> </span>
                  <a href="#" style={{
                    color: "#7C97B8"
                  }}>
                    {props.notification.content}
                  </a>
                  <strong> {props.notification.when}</strong>
              </span>
                : null}
            </MDBRow>
          </div>
        </MDBCol>
      </MDBRow>

    </MDBListGroupItem>
  )
};
Notification.i18n = [
  {},
  {},
];
