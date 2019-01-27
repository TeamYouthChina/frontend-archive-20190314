import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText
} from 'mdbreact';

export class ArticleCard extends React.Component {
  render() {
    return (
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>内向型求职者在面试中如何灵活应对，顺利通过</MDBCardTitle>
          <MDBCardText>
            在这个强调竞争、高调与张扬的现代社会，外向者往往被赋予更有能力的假象。而对内向型人格而言，可能从小就生活在许多偏见之中。譬如小时候怯生，就会被预言为「长大肯定没出息」；上学时不善言谈，被归类为「胆小怕事、性格孤僻」；长大后找工作，又被定义为「没有进取心，沟通界面差」。事实上，很多同学非常优秀，自身能力也很强。但就因为性格内向，在面试过程中不能很好表达自己而惨遭pass。那么，是不是内向型人格就很难获得成功呢？
          </MDBCardText>
          <MDBCardText>
            by <a href="#!" className="font-weight-bold">Jessica Clark</a>, 19/04/2018
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    );
  }
}


ArticleCard.i18n = [
  {},
  {},
];
