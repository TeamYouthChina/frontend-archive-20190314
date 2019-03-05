import React from 'react';
import {languageHelper} from '../../tool/language-helper';

import {
  MDBContainer, 
  MDBRow, 
  MDBCol,
  MDBSpinner
} from 'mdbreact';
import {ApplicantCard} from '../../general-component/applicant-card/applicant-card';
import {getAsync} from '../../tool/api-helper';
import {ArticleCard} from '../article/article-card';

export class Connection extends React.Component {
  constructor(props) {
    super(props);
    this.text = Connection.i18n[languageHelper()];
    this.state = {};
  }

  async componentDidMount() {
    const result = await getAsync(`/discovery/users`)
    console.log(result)
    if (result && result.status && result.status.code === 2000) {
      let mockData =
        {
          content: result.content,
          status: {
            code: result.status.code
          }
        };
      this.setState(() => {
        return {backend: mockData};
      });
    } else {
      let mockData = {
        status: result.status
      }
      this.setState(() => {
        return {backend: mockData};
      });
    }
  }

  render() {
    let toShow = <div>No Such Data</div>;
    if (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) {
      const cards = this.state.backend.content.users.map((e, i) => (
        <ApplicantCard id={e.id}/>
      ))
      toShow =
        <MDBContainer fluid>
          <MDBRow style={{margin: '1rem 0rem'}}>
            {cards}
          </MDBRow>
        </MDBContainer>
    }

    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <MDBContainer
        fluid
        style={{padding: 0}}
      >
        <MDBRow left>
          {
            this.state.backend.content.users.map((e, i) => (
              <MDBCol size={4} key={i} style={{marginTop: 20, marginBottom: 20}}>
                <ApplicantCard id={e.id}/>
              </MDBCol>
            ))
          }
        </MDBRow>
      </MDBContainer>
    ) :
      // a spinner displayed when data is loading
      <div className="my-5 text-center">
        <MDBSpinner/>
      </div>;
  }
}

Connection.i18n = [
  {},
  {}
];
