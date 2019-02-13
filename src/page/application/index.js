import React from 'react';

import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBDataTable,
  MDBAvatar,
  MDBIcon,
} from 'mdbreact';
import {languageHelper} from "../../tool/language-helper";
import {Header} from '../../general-component/header';
import {Footer} from "../../general-component/footer";
import {JobApp} from "../job/job-app-progress";
import {getAsync, get} from "../../tool/api-helper";

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
export class Application extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backend: null,
      isOpen: false
    };
    this.text = Application.i18n[languageHelper()];
  }


  async componentDidMount() {
    if (this.props.id) {
      this.setState({
        backend: await getAsync(`/applicants/${this.props.id}/applications`)
      });
    } else {
      this.setState({
        backend: await getAsync(`/applicants/1/applications`)
      });
    }
  }
  render() {

    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        <Header/>

        <MDBRow top>
          <MDBCol md="2" className="offset-md-1 my-5 px-3 pb-3">

            <MDBRow>
              <MDBCol style={{textAlign: 'center'}}>
                <MDBRow center>
                  <MDBCol size='7'>
                    <MDBAvatar
                      tag="img"
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                      className="rounded z-depth-1-half img-fluid"
                      alt="Sample avatar"
                    />
                    <h6 className="font-weight-bold dark-grey-text my-4">
                      Maria Kate
                    </h6>
                  </MDBCol>
                </MDBRow>
                <p>
                  <MDBBtn flat>已投递 6</MDBBtn>
                </p>
                <p>
                  <MDBBtn flat>已查阅 3</MDBBtn>
                </p>
                <p>
                  <MDBBtn flat>拟面试 1</MDBBtn>
                </p>
                <p>
                  <MDBBtn flat>已面试 2</MDBBtn>
                </p>
                <p>
                  <MDBBtn flat>offer 1</MDBBtn>
                </p>

              </MDBCol>

            </MDBRow>



          </MDBCol>
          <MDBCol size="8">
            <MDBCard className="my-5 px-3 pb-3">
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

        <Footer/>
      </div>
    ): null;


  }
}
Application.i18n = [
  {
    description: '职位描述',
    requirements: '职位要求',
    better: '加分项'
  },
  {
    description: 'Job Description',
    requirements: 'Candidate Requirements',
    better: 'Good to have'
  },
];
