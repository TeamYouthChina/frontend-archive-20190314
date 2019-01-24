import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import {
  MDBNavLink,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBContainer, Iframe
} from 'mdbreact';

import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';
import {QuestionAnswer} from '../question/question-answer'

export class VideoView extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null,
      selectType: 1
    };
    this.text = VideoView.i18n[languageHelper()];
  }

  componentWillMount() {
    let mockData =
      {
        id: 0,
        name: 'Summer 2019 Tech Internship',
        tags: ['tag1', 'tag2', 'tag3', 'tag4'],
        content: {
          title: 'this is a title',
          descrption: 'wen ti de miao shu'
        },
        focus: 123,
        reading: 123,
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
      <div>
        <Header></Header>
        <MDBRow>
          <MDBCol size="1">

          </MDBCol>
          <MDBCol size="9">
            <MDBRow>
              <MDBCol size="8">
                <MDBContainer className="text-center" style={{paddingLeft: '0px'}}>
                  <Iframe src="https://www.youtube.com/embed/v64KOxKVLVg"/>
                </MDBContainer>
                <br/>
                <br/>
                <br/>
                <QuestionAnswer></QuestionAnswer>


              </MDBCol>
              <MDBCol size="4">
                <h3>this is a sideBar</h3>
              </MDBCol>
            </MDBRow>

          </MDBCol>
        </MDBRow>

        <Footer></Footer>
      </div>
    ) : null;
  }
}

VideoView.i18n = [
  {
    applyBefore: '申请截止'
  },
  {
    applyBefore: 'Apply Before'
  },
];
