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

import {Header} from '../../../general-component/header';
import {Footer} from '../../../general-component/footer';
import {ResumeTitle} from '../../../general-component/resumeTitle';
import {getAsync} from '../../../tool/api-helper'

import './home.css';
import {JobApp} from "../../job/job-app-progress";

const data = {
  columns: [
    {
      label: '职位名称',
      field: 'name',
      sort: 'asc',
      width: 150
    },
    {
      label: '公司名称',
      field: 'position',
      sort: 'asc',
      width: 250
    },
    {
      label: '工作类型',
      field: 'office',
      sort: 'asc',
      width: 200
    },

    {
      label: '更新时间',
      field: 'date',
      sort: 'asc',
      width: 150
    },
    {
      label: '状态',
      field: 'salary',
      sort: 'asc',
      width: 100
    }
  ],
  rows: [
    {
      name: 'Tiger Nixon',
      position: 'System Architect',
      office: 'Edinburgh',
      date: '2011/04/25',
      salary: '已投递'
    },
    {
      name: 'Garrett Winters',
      position: 'Accountant',
      office: 'Tokyo',
      date: '2011/07/25',
      salary: '已投递'
    },
    {
      name: 'Ashton Cox',
      position: 'Junior Technical Author',
      office: 'San Francisco',
      date: '2009/01/12',
      salary: '已查阅'
    },
    {
      name: 'Cedric Kelly',
      position: 'Senior Javascript Developer',
      office: 'Edinburgh',
      date: '2012/03/29',
      salary: '拟面试'
    },
    {
      name: 'Airi Satou',
      position: 'Accountant',
      office: 'Tokyo',
      date: '2008/11/28',
      salary: '已面试'
    },
    {
      name: 'Brielle Williamson',
      position: 'Integration Specialist',
      office: 'New York',
      date: '2012/12/02',
      salary: 'Offer'
    },
    {
      name: 'Herrod Chandler',
      position: 'Sales Assistant',
      office: 'San Francisco',
      date: '2012/08/06',
      salary: 'Offer'
    },
    {
      name: 'Rhona Davidson',
      position: 'Integration Specialist',
      office: 'Tokyo',
      date: '2010/10/14',
      salary: '已投递'
    },

  ]
};

export class ApplicationHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: null,
      activeItemClassicTabs2: "1"
    };
    this.text = ApplicationHome.i18n[languageHelper()];
  }
  toggleClassicTabs2 = tab => () => {
    if (this.state.activeItemClassicTabs2 !== tab) {
      this.setState({
        activeItemClassicTabs2: tab
      });
    }
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
              <ResumeTitle data = {this.state.backend.resumeTitle}></ResumeTitle>
            </MDBRow>
            <MDBRow style={{marginTop:'20px'}}>
              <MDBCol size="1"></MDBCol>
              <MDBCol size="2">
                <MDBBtn flat style={{color:'##3E4850'}}>我的申请</MDBBtn>
                <MDBBtn flat style={{cplpr:'##3F3F3F'}}>个人档案库</MDBBtn>
                <MDBBtn flat>我的简历</MDBBtn>
                <MDBBtn flat>收藏</MDBBtn>
                <MDBBtn flat>好友列表</MDBBtn>
                <MDBBtn flat>消息</MDBBtn>
              </MDBCol>
              <MDBCol size="9">
                <MDBCard className="px-3 pb-3">
                  <br/>
                  <MDBCardBody>
                    <JobApp/>
                    <MDBDataTable
                      striped
                      hover
                      big
                      data={data}
                      style={{fontSize:'large',fontStyle:'Helvetica Neue'}}
                    />
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <Footer></Footer>
          </div>
        )}
      </div>
    ) : null;
  }
}

ApplicationHome.i18n = [
  {
    applyBefore: '申请截止'
  },
  {
    applyBefore: 'Apply Before'
  },
];
