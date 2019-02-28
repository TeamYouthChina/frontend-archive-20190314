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

import {Header} from '../../../general-component/header/header';
import {Footer} from '../../../general-component/footer';
import {NotificationItem} from './notification-item';
import {languageHelper} from '../../../tool/language-helper';

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

      unreadNotifications: [
        {
          //type = 1: 系统推送; type = 2: 文章的赞; type = 3: 评论的赞;
          name: "gardness",
          type: 2,
          avatar: "https://mdbootstrap.com/img/Photos/Avatars/img(2).jpg",
          content: "诺基亚是一家什么样的公司？",
          when: "昨天 12:41"
        },
        {
          name: "齐昊",
          type: 3,
          avatar: "https://mdbootstrap.com/img/Photos/Avatars/img(2).jpg",
          content: "你有安全感么？",
          when: "一周前"
        },
      ],

      readNotifications: [
        {
          //type = 1: 系统推送; type = 2: 文章的赞; type = 3: 评论的赞;
          name: "Youth China",
          type: 1,
          avatar: "https://avatars1.githubusercontent.com/u/44857031?s=200&v=4",
          content: "欢迎你来到Youth China，一个认真、专业、友善的知识分享社区.在这里，无论是满足好奇，或者解答疑惑，你都有机会找到可信赖的回答，你还可以与来自天南地北的知友，分享你的知识、经验见解",
          when: "今天 03:09"
        },
        {
          name: "王二",
          type: 2,
          avatar: "https://mdbootstrap.com/img/Photos/Avatars/img(2).jpg",
          content: "诺基亚是一家什么样的公司？",
          when: "昨天 12:41"
        },
        {
          name: "John Doe",
          type: 3,
          avatar: "https://mdbootstrap.com/img/Photos/Avatars/img(2).jpg",
          content: "你有安全感么？",
          when: "一周前"
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
        <MDBRow className="mt-5">
          <MDBCol className="" size='8'>

            <MDBRow>
              <MDBCol size="10"><p className="mb-3" style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#454F69'
              }}>通知</p></MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol size="10"><p className="mb-3" style={{
                fontSize: '18px',
                fontWeight: '400',
                color: '#454F69'
              }}>新消息</p></MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol size="12">
                <MDBListGroup>
                  {this.state.unreadNotifications.map(notification => (
                    <div key={notification.name}>
                      <NotificationItem key={notification.name} notification={notification} style={{
                        backgroundColor: '#F4F4F4'
                      }}/>
                    </div>
                  ))}
                </MDBListGroup>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol size="10"><p className="mt-5 mb-3" style={{
                fontSize: '18px',
                fontWeight: '400',
                color: '#454F69'
              }}>以往消息</p></MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol size="12">
                <MDBListGroup>
                  {this.state.readNotifications.map(notification => (
                    <div key={notification.name}>
                      <NotificationItem key={notification.name} notification={notification}/>
                    </div>
                  ))}
                </MDBListGroup>
              </MDBCol>
            </MDBRow>

          </MDBCol>
        </MDBRow>
    ) : null;
  }
}

// const NotificationItem = (props) => {
//   return (
//     <MDBListGroupItem className={} style={{
//       backgroundColor: "#F4F4F4"
//     }}>
//       <MDBRow between>
//         <MDBCol className="d-none d-md-block px-4 py-3" md="1">
//           <MDBAvatar>
//             <img src={props.notification.avatar}
//                  style={{
//                    width: "60px"
//                  }}
//                  className="z-depth-1"/>
//           </MDBAvatar>
//         </MDBCol>
//         <MDBCol className="px-lg-5 px-4 py-3" size="10" lg="11">
//           <div style={{fontSize: "1.125rem"}}>
//             <MDBRow className=" align-middle text-muted">
//               <a href="#" style={{
//                 color: "#7C97B8",
//               }}>
//                 <strong>{props.notification.name}<span> </span></strong>
//               </a>
//               {props.notification.type === 1 ?
//                 <span style={{
//                   height: '4.5rem',
//                   lineHeight: '1.5rem',
//                   overflow: 'hidden'
//                 }}>
//                   {props.notification.content}
//                   <strong> {props.notification.when}</strong>
//                 </span>
//                 : null}
//               {props.notification.type === 2 ? <span>
//                   赞了你的文章<span> </span>
//                   <a href="#" style={{
//                     color: "#7C97B8"
//                   }}>
//                     {props.notification.content}
//                   </a>
//                   <strong> {props.notification.when}</strong>
//               </span>
//                 : null}
//               {props.notification.type === 3 ? <span>
//                   赞了你的评论<span> </span>
//                   <a href="#" style={{
//                     color: "#7C97B8"
//                   }}>
//                     {props.notification.content}
//                   </a>
//                   <strong> {props.notification.when}</strong>
//               </span>
//                 : null}
//             </MDBRow>
//           </div>
//         </MDBCol>
//       </MDBRow>
//
//     </MDBListGroupItem>
//   )
// };
Notification.i18n = [
  {},
  {},
];
