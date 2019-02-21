import React from 'react';

import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBDataTable,

} from 'mdbreact';
import {languageHelper} from "../../tool/language-helper";
import {Header} from '../../general-component/header';
import {Footer} from "../../general-component/footer";
import {JobApp} from "../job/job-app-progress";
import {getAsync, get} from "../../tool/api-helper";
import {ResumeTitle} from "../../general-component/resumeTitle";
import {UserMenu} from "./menu";


export class Application extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      data: {
        columns: [
          {
            label: '职位名称',
            field: 'jobname',
            sort: 'asc',
            width: 150
          },
          {
            label: '公司名称',
            field: 'companyname',
            sort: 'asc',
            width: 250
          },
          {
            label: '工作类型',
            field: 'type',
            sort: 'asc',
            width: 200
          },

          {
            label: '状态',
            field: 'status',
            sort: 'asc',
            width: 100
          }
        ],
        rows: []
      }
    };
    this.text = Application.i18n[languageHelper()];
    this.pip = 0;
  }


  async componentDidMount() {
    let backend = null;
    if (this.props.id) {
      backend = await getAsync(`/applicants/${this.props.id}/applications`);
    } else {
      backend = await getAsync('/applicants/1/applications');
    }
    if (backend && backend.status && backend.status.code === 2000) {
      let data = this.state.data;
      data.rows = [];
      for (let i = 0; i < backend.content.length; i++) {
        data.rows.push({
          jobname: backend.content[i].position.name,
          companyname: backend.content[i].position.organization.name,
          type: backend.content[i].position.organization.location,
          status: backend.content[i].status
        });
      }
      this.setState({
        tabledata: data
      });
    }
  }

  render() {

    return (
      <div>
        <Header/>
        <ResumeTitle/>
        <MDBRow top>
          <MDBCol md="10" className="offset-md-1 my-5 p-0">

            <div className="d-flex flex-row">
              <div><UserMenu/></div>
              <div className="flex-fill">
                <MDBCard className="px-5 pb-3 mx-5">
                  <br/>
                  <MDBCardBody>
                    <JobApp/>
                    <MDBDataTable
                      striped
                      hover
                      big
                      data={this.state.tabledata}
                      style={{fontSize: 'large', fontStyle: 'Helvetica Neue'}}
                    />
                  </MDBCardBody>
                </MDBCard>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
        <Footer/>
      </div>
    );


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
