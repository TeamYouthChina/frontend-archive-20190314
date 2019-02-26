import React from 'react';
import {Redirect} from 'react-router-dom';
import {languageHelper} from '../../../tool/language-helper';
import {
  MDBDataTable,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBCol,
  MDBRow,
} from 'mdbreact';

import {Header} from '../../../general-component/header/header';
import {Footer} from '../../../general-component/footer';
import {QuestionCard} from '../../trash/question-card';
import {getAsync} from '../../../tool/api-helper'

import './home.css';
const basicFontStyle={
  fontFamily:'IBM Plex Sans',
  fontStyle:'normal',
  fontWeight:600,
  lineHeight:'normal',
}

export class ApplicationSuccess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: null,
    };
    this.text = ApplicationSuccess.i18n[languageHelper()];
  }


  async componentDidMount() {
    // const result = await getAsync(`/question/${this.props.match.params.questionId}`)
    const result = await getAsync('/question/0100')
    if (result && result.status && result.status.code === 2000) {
      let mockData =
        {
          id: result.id,
          resumeTitle:{
            id:'123',
            name:'郭益豪',
            img:'https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg',
            description:['美国乔治华盛顿大学,','数据科学家'],
            work:'张三技术总监',
            counts:86
          },
          status: {
            code: 2000
          }
        };
      this.setState(() => {
        return {backend: mockData};
      });
    } else {
      let mockData = {
        status: result.status
      }
      this.setState(() => {
        return {backend: mockData};
      });
    }
  }


  render() {
    return (this.state.backend && this.state.backend.status) ? (
      <div>
        {/*有状态码且为2000时候才渲染*/}
        {this.state.backend.status.code && this.state.backend.status.code !== 2000 ? (
          <div>
            <Redirect to="/404"></Redirect>
          </div>
        ) : (
          <div>
            <Header></Header>
            <MDBRow>
              <MDBCol size="1"></MDBCol>
              <MDBCol size="9">
                <h4 style={{fontSize:'24px',color:'#3E4850',...basicFontStyle}}>
                  恭喜您
                </h4>
                <h5 style={{fontSize:'16px',color:'#62686C',...basicFontStyle}}>
                  我们已经将简历发送给您投递的工资，恭喜您距离成功又近了一步
                </h5>
                <MDBBtn flat style={{padding:'5px',fontSize:'18px',color:'#3E4850',...basicFontStyle}}>查看我所有的简历</MDBBtn>
                <h4 style={{fontSize:'18px',color:'#3E4850',...basicFontStyle}}>您可能感兴趣</h4>
                <QuestionCard></QuestionCard>
                <QuestionCard></QuestionCard>
                <QuestionCard></QuestionCard>
              </MDBCol>
              <MDBCol></MDBCol>
            </MDBRow>
            
            <Footer></Footer>
          </div>
        )}
      </div>
    ) : null;
  }
}

ApplicationSuccess.i18n = [
  {
    applyBefore: '申请截止'
  },
  {
    applyBefore: 'Apply Before'
  },
];
