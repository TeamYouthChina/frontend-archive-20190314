import React from 'react';
import {
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon
  
} from 'mdbreact';

export class HomeIntro extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {

    return (

      <div>

        <MDBRow between>
          <MDBCol>
            <p style={{fontFamily: 'Ping Fang SC', fontSize: '12px'}}>超过10,000家公司资源</p>
            <p style={{fontFamily: 'Raleway', fontWeight: 'bold', fontSize: '56px'}}>YouthChina</p>
            <p style={{fontFamily: 'Ping Fang SC', fontSize: '18px'}}>为1000万华人留学生打造的只能求职社交平台</p>
            <br/>
            <p><MDBBtn rounded color="indigo">开启求职之旅</MDBBtn></p>
          </MDBCol>
          <MDBCol>
            <p><MDBIcon icon="quote-left" size="1x" pull="left" /></p>
            <br/>
            <p style={{fontFamily: 'Ping Fang SC', fontSize: '24px'}}>IBM的面试主要分为三个阶段，最重要的是考验你的逻辑思维的能力</p>
            <br/>
            <p>
              <p style={{fontFamily: 'Ping Fang SC', fontSize: '16px', textAlign: 'first'}}>---郭同学</p>
              <p style={{fontSize: '24px', textAlign: 'end'}}><MDBBtn flat>更多经验分享 -></MDBBtn></p>
            </p>
           
           
          </MDBCol>
        </MDBRow>

      </div>
    );
  }
}
