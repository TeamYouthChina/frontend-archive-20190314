import React from 'react';
import {languageHelper} from '../../tool/language-helper';

import {MDBContainer, MDBRow} from 'mdbreact';
import {ApplicantCard} from '../../general-component/applicant-card';
import {getAsync} from "../../tool/api-helper";

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
    console.log(this.state.backend)
    if(this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000){
      console.log(this.state.backend.content.users)
      const cards = this.state.backend.content.users.map((e,i)=>(
        <ApplicantCard id={e.id}/>
      ))
      toShow = 
        <MDBContainer fluid>
          <MDBRow style={{margin: '1rem 0rem'}}>
            {cards}
          </MDBRow>
        </MDBContainer>
    }
    
    return toShow;
  }
}

Connection.i18n = [
  {},
  {}
];
