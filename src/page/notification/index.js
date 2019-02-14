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
          name: "John Doe",
          avatar: "https://mdbootstrap.com/img/Photos/Avatars/img(2).jpg",
          message: "欢迎你来到知乎，一个认真、专业、友善的知识分享社区.在知乎，无论是满足好奇，或者解答疑惑，你都有机会找到可信赖的回答，你还可以与来自天南地北的知友，分享你的知识、经验见解",
          when: "今天 03:09",
          friend: true,
        },
        {
          name: "John Doe",
          avatar: "https://mdbootstrap.com/img/Photos/Avatars/img(2).jpg",
          message: "欢迎你来到知乎，一个认真、专业、友善的知识分享社区.在知乎，无论是满足好奇，或者解答疑惑，你都有机会找到可信赖的回答，你还可以与来自天南地北的知友，分享你的知识、经验见解",
          when: "今天 03:09",
          friend: false,
        },
        {
          name: "John Doe",
          avatar: "https://mdbootstrap.com/img/Photos/Avatars/img(2).jpg",
          message: "欢迎你来到知乎，一个认真、专业、友善的知识分享社区.在知乎，无论是满足好奇，或者解答疑惑，你都有机会找到可信赖的回答，你还可以与来自天南地北的知友，分享你的知识、经验见解",
          when: "今天 03:09",
          friend: false,
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
                      <NotificationItem key={notification.name} pinglun={notification}/>
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

const NotificationItem = ({pinglun: {name, avatar, message, when, friend,}}) => {
  return (
    <MDBListGroupItem>
      <MDBRow>
        <MDBCol className="d-none d-md-inline-block mx-3 my-3" md="2">
              <MDBAvatar>
                <img src={avatar}
                     style={{
                       width: "100px"
                     }}
                     className="z-depth-1" />
              </MDBAvatar>
        </MDBCol>
        <MDBCol className="my-3">
          <div style={{fontSize: "0.95rem"}}>
            <p className="text-muted">
              <strong>{name}</strong>
              {message}       {when}
            </p>
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
