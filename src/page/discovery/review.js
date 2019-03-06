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
    let mockData
    try {
      const result = await getAsync('/discovery/editorials',true)
      if (result && result.status && result.status.code === 200) {
        mockData =
          {
            editorials:result.content.editorials,
            status: {
              code: result.status.code
            }
          };
        // console.log(result.content.questions)
      } else {
        mockData = {
          status: result.status
        }
      }
    } catch (e) {
      alert(e)
    }
    
    this.setState({
      backend:mockData
    })
  }

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 200) ? (
      <MDBContainer
        fluid
        style={{padding: 0}}
      >
        {this.state.backend.editorials.map((editorial)=>(
          <MDBRow key={editorial.id} style={{margin:'1rem 0rem'}}>
            <ReviewCard editorial={editorial}/>
          </MDBRow>
        ))}
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
