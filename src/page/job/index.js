import React from 'react';

import {
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBRow,
  View,
  Mask,
  MDBContainer
} from 'mdbreact';
import {languageHelper} from '../../tool/language-helper';
import {Header} from '../../general-component/header/header';
import {Footer} from '../../general-component/footer';
import {CoDetail} from './component/company-detail';

import {JobDescri} from './component/job-descri';
import {JobApp} from './component/job-app-progress';
import {QuestionCard} from '../question/question-card-test';
import {JobCardSquare} from '../../general-component/job-card-square/job-card-square';
import {ReviewCard} from '../../general-component/review-card';
import {SeeMoreBtn} from './component/seemore-button';
import {JobCardBar} from "./component/jobinfo/job-card-bar";
import {getAsync} from '../../tool/api-helper';

//define the basic font style and then pass them into children components.
const basicCHNFont

  = {
  fontFamily: 'PingFang SC',
  fontStyle: 'normal',
  fontWeight: 'normal',
  lineHeight: 'normal'
};


export class Job extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backend: null,

    };
    this.text = Job.i18n[languageHelper()];
  }

  //todo，向SeeMoreBtn里面传入handleSeeMore函数（未实现）

  async componentDidMount() {
    this.setState({
      backend: await getAsync(`/jobs/${this.props.match.params.id}`)
    });
  }

  render() {
    const btnColor = '#E3E9EE';

    return this.state.backend ? (
      <div>
        <Header/>

        <div style={{marginBottom: '-120px', marginTop: '-7px'}}>
          <View>
            <img
              className="d-block w-100 card-background"
              src="http://47.254.46.117:5000/discovery/rawpixel-665368-1.png"
            />
            <Mask className="flex-center  text-white text-center">
            </Mask>
          </View>

        </div>

        <MDBRow style={{backgroundColor: '#F3F5F7'}} center top>

          <MDBCol size="10" md="8">

            {/*todo，最好使用grid，不要用p。*/}
            <p>
              <MDBCard style={{boxShadow: 'none'}} className="px-3">
                <MDBCardBody>
                  <MDBRow>
                    <JobCardBar id={this.props.match.params.id}/>
                  </MDBRow>

                </MDBCardBody>
              </MDBCard>
            </p>
            <p>
              <MDBCard style={{boxShadow: 'none'}} className="px-3">
                <MDBCardBody>


                  <JobDescri id={this.props.match.params.id} basicCHNFont={basicCHNFont}/>
                </MDBCardBody>
              </MDBCard>
            </p>

            <p>
              <MDBCard style={{boxShadow: 'none'}} className="mt-4 px-3">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol>
                      <CoDetail basicCHNFont={basicCHNFont}/> {/*写死了*/}
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </p>

            {/*todo，这里公司卡片需要长条状的，参考高保真设计。*/}
            <p id="job">
              <MDBCard style={{boxShadow: 'none'}} className="mt-4 px-3 py-3">
                <p style={{...basicCHNFont, color: '#454F69', fontWeight: '500', fontSize: '18px'}}
                   className="mt-2 mb-1 px-3">
                  相似职位
                </p>
                <MDBContainer className="mt-2">
                  <MDBRow between>
                    <MDBCol>
                      <JobCardSquare style={{boxShadow: 'none'}}/> {/*没后端*/}
                    </MDBCol>
                    <MDBCol>
                      <JobCardSquare/> {/*没后端*/}
                    </MDBCol>
                    <MDBCol>
                      <JobCardSquare/> {/*没后端*/}
                    </MDBCol>
                    <MDBCol>
                      <JobCardSquare/> {/*没后端*/}
                    </MDBCol>
                  </MDBRow>
                  <MDBRow center className="mt-4">
                    <div className="text-center">
                      <SeeMoreBtn basicCHNFont={basicCHNFont} btnText={'查看更多'}/>
                    </div>
                  </MDBRow>
                </MDBContainer>
              </MDBCard>
            </p>
            {/*
            <p id="comment">
              <MDBCard style={{boxShadow: 'none'}} className="mt-4 px-3 py-3">
                <p style={{...basicCHNFont, color: '#454F69', fontWeight: '500', fontSize: '18px'}}
                   className="mt-2 mb-1 px-3">评论</p>
                <ReviewCard/>
                <ReviewCard/>
              </MDBCard>
            </p>


            <p id="questionanswer">
              <MDBCard style={{boxShadow: 'none'}} className="mt-4 mb-5 px-3 py-3">
                <p style={{...basicCHNFont, color: '#454F69', fontWeight: '500', fontSize: '18px'}}
                   className="mt-2 mb-1 px-3">
                  问答
                </p>
                <QuestionCard/>
                <MDBRow center>
                  <div className="text-center">
                    <SeeMoreBtn basicCHNFont={basicCHNFont} btnText={'查看更多'}/>
                  </div>
                </MDBRow>
              </MDBCard>
            </p>
            */}
          </MDBCol>

        </MDBRow>

        <Footer/>
      </div>
    ) : null;


  }
}

Job.i18n = [
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
