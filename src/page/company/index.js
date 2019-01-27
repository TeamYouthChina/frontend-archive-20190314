import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import {
  MDBRow,
  MDBCol,
  View,
  MDBCard, MDBCardBody
} from 'mdbreact';
import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';
import {CompanyCard} from '../../general-component/company-card';
import CoDetail from '../../general-component/company-detail';





export class Company extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null,
     
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
        <div style={{marginBottom: '-150px' ,marginTop:'-7px'}}>
          <View>
            <img
              className="d-block w-100 card-background img-fluid" src="https://i.postimg.cc/gjFqt1dN/photo-1531497865144-0464ef8fb9a9.png"
            />
          </View>
        </div>
        <MDBRow>
          <MDBCol md="8" className="offset-md-1">
            <p><CompanyCard/></p>
            <p>
              <MDBCard className="my-5 px-3 pb-3">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol>
                      <CoDetail></CoDetail>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </p>
          </MDBCol>
          <MDBCol md="2" style={{marginTop:'150px'}}>
            <MDBCard
              style={{boxShadow:'none'}}
            >
              <MDBCardBody>
                <h5 
                  style={{borderLeft: '4px solid #7C97B8'}}
                  className="px-2 pt-2"
                >简介</h5>
                <h5 className="px-2 pt-2">公司详情</h5>
                <h5 className="px-2 pt-2">职位</h5>
                <h5 className="px-2 pt-2">评价</h5> 
                <h5 className="px-2 pt-2">问答</h5>
                <h5 className="px-2 pt-2">公司LIVE</h5>
                <h5 className="px-2 pt-2">公司照片</h5>
                <h5 className="px-2 pt-2">历史实习学生</h5>
                
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        
        <Footer/>
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
