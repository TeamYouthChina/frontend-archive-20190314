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
          <MDBCol className="d-none d-md-block px-4 py-3" md="1">
            <MDBAvatar>
              <img src={this.state.notification.avatar}
                   style={{width: '60px'}}
                   className="z-depth-1"/>
            </MDBAvatar>
          </MDBCol>
          <MDBCol className="px-lg-5 px-4 py-3" md="10" lg="11">
            <div style={{fontSize: '1.125rem'}}>
              <MDBRow className="text-muted">
                <a href="#" style={{
                  color: '#7C97B8',
                }}>
                  <strong>{this.state.notification.name}<span> </span></strong>
                </a>
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
                    color: '#7C97B8'
                  }}>
                    {this.state.notification.content}
                  </a>
                  <strong> {this.state.notification.when}</strong>
                </span>
                  : null}
                {this.state.notification.type === 3 ? <span>
                  赞了你的评论<span> </span>
                  <a href="#" style={{
                    color: '#7C97B8'
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
  
