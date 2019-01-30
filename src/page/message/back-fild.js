import React from 'react';
import {languageHelper} from '../../tool/language-helper';
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
} from 'mdbreact';
import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';
import './chat-room.css';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';
import{RensentInfo}from'./resentinfo';
export class Backfild extends React.Component {
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
      pingluns:[
        {
          name: "John Doe",
          avatar: "https://mdbootstrap.com/img/Photos/Avatars/img(2).jpg",
          message: "欢迎你来到知乎，一个认真、专业、友善的知识分享社区.在知乎，无论是满足好奇，或者解答疑惑，你都有机会找到可信赖的回答，你还可以与来自天南地北的知友，分享你的知识、经验见解",
          when: "今天 03:09",
        },
        {
          name: "John Doe",
          avatar: "https://mdbootstrap.com/img/Photos/Avatars/img(2).jpg",
          message: "欢迎你来到知乎，一个认真、专业、友善的知识分享社区.在知乎，无论是满足好奇，或者解答疑惑，你都有机会找到可信赖的回答，你还可以与来自天南地北的知友，分享你的知识、经验见解",
          when: "今天 03:09",
        },
        {
          name: "John Doe",
          avatar: "https://mdbootstrap.com/img/Photos/Avatars/img(2).jpg",
          message: "欢迎你来到知乎，一个认真、专业、友善的知识分享社区.在知乎，无论是满足好奇，或者解答疑惑，你都有机会找到可信赖的回答，你还可以与来自天南地北的知友，分享你的知识、经验见解",
          when: "今天 03:09",
        },
      ]
    };
    this.text = Backfild.i18n[languageHelper()];
  }

  handleFlipping = () => {
    this.setState({ flipped: !this.state.flipped });
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
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  
  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div >
          <Header/>
         <MDBRow>
         <MDBCol size="2"></MDBCol>
        <MDBCol size='8'>

            <MDBCard className="grey lighten-3 chat-room">
            <MDBCardBody>
              <MDBRow>
                <MDBCol size="9"><h4 className="font-weight-bold">推送提醒</h4></MDBCol>
                <MDBCol>
                <MDBBtn onClick={this.toggle} color="primary" style={{padding: '5px 10px',}}>
              写私信
              </MDBBtn>
              <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>请选择回复的信息</MDBModalHeader>
        <MDBModalBody>
        <MDBCol md="18">
      <form className="form-inline mt-4 mb-4">
        <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="搜索要回复用户" aria-label="Search" />
      </form>
       </MDBCol>
        <div className="form-group basic-textarea">
         <textarea
          className="form-control pl-2 my-0"
          id="exampleFormControlTextarea2"
          rows="3"
          placeholder="请输入回复信息"
          />
          <MDBBtn
                  color="info"
                  rounded
                  size="sm"
                  className="float-right mt-4"
                >
                  Send
          </MDBBtn>
          </div>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle}>关闭</MDBBtn>
          <MDBBtn color="primary">保存</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
                </MDBCol>
              </MDBRow>
               <hr/>
              <MDBRow>
                <MDBCard>
                <MDBListGroup >
                    {this.state.pingluns.map(pinglun => (
                      <Pinglun key={pinglun.name} pinglun={pinglun} />
                    ))}
                  </MDBListGroup>
                </MDBCard>
              </MDBRow>
              <MDBRow>
               <a href="http://localhost:3000/message" >
                <MDBIcon icon="undo" /> 返回消息页
              </a>
              </MDBRow>
              
            </MDBCardBody>
             </MDBCard>
             
             </MDBCol>
             <MDBCol size="2"></MDBCol>
             </MDBRow> 
             <Footer/>
      </div>
    ) : null;
  }
}
const Pinglun = ({
  pinglun: { name, avatar, message, when }
}) => (
    <MDBListGroupItem>
     <MDBAvatar    
        tag="img"
        src={avatar}
        alt="avatar"/>
        <div style={{ fontSize: "0.95rem" }}>
        <strong>{name}</strong>
        <p className="text-muted">{message}</p>
        <p className="text-muted mb-0" style={{ fontSize: "0.75rem" }}>
          {when}
        </p>
        <a className="text-muted mb-0" style={{ fontSize: "0.75rem" }}>查看对话</a>
        <span>|</span>
        <a className="text-muted mb-0" style={{ fontSize: "0.75rem" }}>回复</a>
        <span>|</span>
        <a className="text-muted mb-0" style={{ fontSize: "0.75rem" }}>举报</a>
        <span>|</span>
        <a className="text-muted mb-0" style={{ fontSize: "0.75rem" }}>删除</a>
      </div>
    </MDBListGroupItem>
    
);
Backfild.i18n = [
  {

  },
  {

  },
];
