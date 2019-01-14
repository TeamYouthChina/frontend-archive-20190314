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




export class ScrollBar extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null,
      active: 0,
      sections: []
    };
    this.text = ScrollBar.i18n[languageHelper()];
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
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>

    ) : null;
  }
}

ScrollBar.i18n = [
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
