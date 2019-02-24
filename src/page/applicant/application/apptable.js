import React from 'react';

import {
  MDBCard,
  MDBCardBody,
  MDBDataTable,
} from 'mdbreact';
import {languageHelper} from "../../../tool/language-helper";
import {JobApp} from "../../job/job-app-progress";
import {getAsync} from "../../../tool/api-helper";

export class AppTable extends React.Component {
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
    this.text = AppTable.i18n[languageHelper()];
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

    );


  }
}

AppTable.i18n = [
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
