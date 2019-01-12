import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import {
  MDBScrollspyBox,
  MDBScrollspyText,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBCol,
} from 'mdbreact';

import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';
import {CompanyCard} from '../../general-component/company-card';
import CoDetail from '../../general-component/company-detail';
import {CareerCard} from '../../general-component/career-card';



export class Company extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null,
      active: 0,
      sections: []
    };
    this.text = Company.i18n[languageHelper()];
  }

  componentWillMount() {
    let mockData =
      {
        id: 0,
        jobs:['1','2','3','5','6'],
        status: {
          code: 2000
        }
      };
    this.setState(() => {
      return {
        backend: mockData,
      };
    });
  }
  
  
  
  
  
  
  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        <Header/>
        <br/>
        <MDBRow>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="10">
            <p className='card-text'>公司详情</p>
            <div style={{
              boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)'
            }}>

              <CompanyCard></CompanyCard>
            </div>
            
            
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="10">
            <p className='card-text'>查看发表职位</p>
            <div style={{
              boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)'
            }}>
              
              {this.state.backend.jobs.map((item) => {
                return(
                  <CareerCard key={item} idNum={item}></CareerCard>
                );
              })}
            </div>
            
            
          </MDBCol>
          <MDBCol size="1"></MDBCol>
        </MDBRow>
        <Footer></Footer>
      </div>

    ) : null;
  }
}

Company.i18n = [
  {
    detail: '公司详情',
    jobList: '查看发表的职位',
    comments: '评论      ',
    answer:'回答',
    benefit:'公司福利',
    condition:'工作环境',
    live:'公司live',
    picture:'公司照片',
    student:'在此公司实习过的学生'
  },
  {
    detail: 'Company detail',
    jobList: 'Jobs in list',
    comments: 'Comments',
    answer:'Reply',
    benefit:'Company Reward',
    condition:'Working Condition',
    live:'Company live',
    picture:'Company photo',
    student:'Students worked in here'
  },
];
