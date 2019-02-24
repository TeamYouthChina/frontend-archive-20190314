import React from 'react';

import {
  MDBCol,
  MDBRow,
  MDBListGroupItem,
  MDBAvatar
} from 'mdbreact';

export class NotificationItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notification: props.notification
    };
  }

  render() {

    return (
      <MDBListGroupItem>
        <MDBRow between>
          <MDBCol className="d-none d-md-block pl-3 py-2" md="1">
            <MDBAvatar>
              <img src={this.state.notification.avatar}
                   style={{width: '40px'}}
                   className="z-depth-1"/>
            </MDBAvatar>
          </MDBCol>
          <MDBCol className="px-lg-3 mx-lg-0 mx-3 px-2 py-2" md="10" lg="11">
            <div style={{fontSize: '18px'}}>
              <MDBRow className="text-muted pl-2 pr-2">

                <a href="#" style={{
                  color: '#7C97B8',
                  fontWeight: '400'
                }}>
                  {this.state.notification.name}<span> </span>
                </a>

                {/*type = 1: 系统推送; type = 2: 文章的赞; type = 3: 评论的赞;*/}
                {this.state.notification.type === 1 ?
                  <span style={{
                    height: '4.5rem',
                    lineHeight: '1.5rem',
                    overflow: 'hidden'
                  }}>
                    {this.state.notification.content}
                    <strong> {this.state.notification.when}</strong>
                  </span>
                  : null}

                {this.state.notification.type === 2 ? <span>
                  赞了你的文章<span> </span>
                  <a href="#" style={{
                    color: '#7C97B8',
                    fontWeight: '400'
                  }}>
                    {this.state.notification.content}
                  </a>
                  <strong> {this.state.notification.when}</strong>
                </span>
                  : null}

                {this.state.notification.type === 3 ? <span>
                  赞了你的评论<span> </span>
                  <a href="#" style={{
                    color: '#7C97B8',
                    fontWeight: '400'
                  }}>
                    {this.state.notification.content}
                  </a>
                  <strong> {this.state.notification.when}</strong>
                </span>
                  : null}

              </MDBRow>
            </div>
          </MDBCol>
        </MDBRow>

      </MDBListGroupItem>
    );
  }


}
  
