import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import {
  MDBRow,
  MDBCol,
  MDBBtn

} from 'mdbreact';


export class UserMenu extends React.Component {
  constructor(props) {
    super(props);
    this.text = UserMenu.i18n[languageHelper()];
  }


  render() {

    return (
      <div>
        <MDBRow>
          <MDBCol style={{textAlign: 'left'}}>
            <p>
              <MDBBtn flat>我的申请</MDBBtn>
            </p>
            <p>
              <MDBBtn flat>个人档案库</MDBBtn>
            </p>
            <p>
              <MDBBtn flat>我的简历</MDBBtn>
            </p>
            <p>
              <MDBBtn flat>收 藏</MDBBtn>
            </p>
            <p>
              <MDBBtn flat>好友列表</MDBBtn>
            </p>
            <p>
              <MDBBtn flat>消 息</MDBBtn>
            </p>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

UserMenu.i18n = [
  {
    applyBefore: '申请截止'
  },
  {
    applyBefore: 'Apply Before'
  },
];
