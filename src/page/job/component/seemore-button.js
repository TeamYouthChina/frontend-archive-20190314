import React from 'react';

import {
  MDBBtn
} from 'mdbreact';

export class SeeMoreBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //定义按钮颜色
    const btnColor = '#E3E9EE';

    return (
      <MDBBtn
        rounded size="sm"
        style={{
          ...this.props.basicCHNFont,
          color: '#8D9AAF',
          fontSize: '16px',
          boxShadow: 'none',
          backgroundColor: '#E3E9EE'
        }}
        color={btnColor}
        // props里面传入的handle see more函数(未实现）
        onClick={this.props.clickable}>
        {this.props.btnText}
      </MDBBtn>
    );
  }
}
