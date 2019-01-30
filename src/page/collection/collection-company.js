import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCol,
  MDBRow,
} from 'mdbreact';

import {CompanyCard} from '../../general-component/company-card'

export class CollectionCompany extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null
    };
    this.text = CollectionCompany.i18n[languageHelper()];
  }

  componentWillMount() {
    let mockData =
      {
        id: 0,
        name: 'Summer 2019 Tech Internship',
        companyCollection: [
          {id:1},
          {id:2},
          {id:3},
          {id:4},
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
      <div style={{width:'100%'}}>
        {this.state.backend.companyCollection.map((item)=>{
          return(
            <MDBRow>
              <MDBCol size="12">
                <CompanyCard></CompanyCard>
              </MDBCol>
              
            </MDBRow>
            
          )
        })}
        <MDBRow></MDBRow>
      </div>
    ) : null;
  }
}

CollectionCompany.i18n = [
  {
    applyBefore: '申请截止'
  },
  {
    applyBefore: 'Apply Before'
  },
];
