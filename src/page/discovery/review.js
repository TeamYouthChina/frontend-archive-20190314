import React from 'react';
import {languageHelper} from '../../tool/language-helper';


import {
  MDBContainer, 
  MDBRow, 
  MDBCol,
  MDBSpinner
} from 'mdbreact';

import {getAsync} from '../../tool/api-helper';
import {ReviewCard} from '../../general-component/review-card';

export class Review extends React.Component {
  constructor(props) {
    super(props);
    this.text = Review.i18n[languageHelper()];
    this.state = {};
  }

  async componentDidMount() {
    // const result = await getAsync(`/discovery/review`)
    // console.log(result)
    // if (result && result.status && result.status.code === 2000) {
    //   let mockData =
    //     {
    //       status: {
    //         code: result.status.code
    //       }
    //     };
    //   this.setState(() => {
    //     return {backend: mockData};
    //   });
    // } else {
    //   let mockData = {
    //     status: result.status
    //   }
    //   this.setState(() => {
    //     return {backend: mockData};
    //   });
    // }
    let mockdata = {
      status:{
        code:2000
      }
    }
    this.setState({
      backend:mockdata
    })
  }

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <MDBContainer
        fluid
        style={{padding: 0}}
      >
        <MDBRow style={{margin:'1rem 0rem'}}>
            <ReviewCard/>
        </MDBRow>
        <MDBRow style={{margin:'1rem 0rem'}}>
          <ReviewCard/>
        </MDBRow>
        <MDBRow style={{margin:'1rem 0rem'}}>
          <ReviewCard/>
        </MDBRow>
        <MDBRow style={{margin:'1rem 0rem'}}>
          <ReviewCard/>
        </MDBRow>
        
      </MDBContainer>
    ) :
      // a spinner displayed when data is loading
      <div className="my-5 text-center">
        <MDBSpinner/>
      </div>;
  }
}

Review.i18n = [
  {},
  {}
];
