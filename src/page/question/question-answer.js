import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import {
  MDBNavLink,
  MDBBtn,
  MDBCol,
  MDBRow,
} from 'mdbreact';


export class QuestionAnswer extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null,
      selectType: 1
    };
    this.text = QuestionAnswer.i18n[languageHelper()];
  }

  componentWillMount() {
    let mockData =
      {
        id: 0,
        name: 'Summer 2019 Tech Internship',
        // 类似下面的内容。但是放到了props里面
        answer: [
          {
            user: 1,
            content: 'this is a content',
            agree: '123'
          },
          {
            user: 2,
            content: 'this is a content',
            agree: '123'
          },
          {
            user: 3,
            content: 'this is a content',
            agree: '123'
          },
        ],
        status: {
          code: 2000
        }
      };
    this.setState(() => {
      return {backend: mockData};
    });
  }


  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <MDBRow>
        {/*<UserCard></UserCard>*/}
        {this.props.data.user}
        {this.props.data.content}
        {this.props.data.agree}
      </MDBRow>
    ) : null;
  }
}

QuestionAnswer.i18n = [
  {
    applyBefore: '申请截止'
  },
  {
    applyBefore: 'Apply Before'
  },
];
