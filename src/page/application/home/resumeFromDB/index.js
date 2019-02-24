import React from 'react';
import {languageHelper} from '../../../../tool/language-helper';
import {MDBRow, MDBCol, MDBInput, MDBBtn} from "mdbreact";

import {Header} from '../../../../general-component/header/header';
import {Footer} from '../../../../general-component/footer';
import TopBar from '../../../OnlineApplication/Components/TopBar/topBar'


const basicFontStyle = {
  fontFamily: 'IBM Plex Sans',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
}

export class ResumeFromDB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: null,
    };
    this.text = ResumeFromDB.i18n[languageHelper()];
  }

  async componentDidMount() {
    // const result = await getAsync(`/question/${this.props.match.params.questionId}`)
    // const result = await getAsync('/question/0100')
    let mockData =
      {
        id: 123,
        resumeTitle: {
          id: '123',
          name: '郭益豪',
          img: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg',
          description: ['美国乔治华盛顿大学,', '数据科学家'],
          work: '张三技术总监',
          counts: 86
        },
        status: {
          code: 2000
        }
      };
    this.setState(() => {
      return {backend: mockData};
    });

  }


  render() {
    return (
      <div>
        <Header></Header>
        <Footer></Footer>
      </div>
    )

  }
}

ResumeFromDB.i18n = [
  {
    positions: '职位列表',
    positionDetail: '职位详情',
    chooseResume: '新建简历',
  },
  {
    positions: 'position lists',
    positionDetail: 'position details',
    chooseResume: 'create resume',
  },
];
