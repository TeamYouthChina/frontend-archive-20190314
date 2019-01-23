import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import {
  MDBNavLink,
  MDBBtn,
  MDBCol,
  MDBRow,
} from 'mdbreact';

import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';


export class Collection extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null,
      selectType:1
    };
    this.text = Collection.i18n[languageHelper()];
  }

  componentWillMount() {
    let mockData =
      {
        id: 0,
        name: 'Summer 2019 Tech Internship',
        status: {
          code: 2000
        }
      };
    this.setState(() => {
      return {backend: mockData};
    });
  }

  handleCompany(){
    this.setState({
      selectType:1
    });
  }
  
  handlePosition(){
    this.setState({
      selectType:2
    });
  }
  
  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        <Header></Header>
        <MDBRow>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="9">
            <MDBRow>
              <MDBCol size="2">
                <MDBBtn onClick={()=>{this.handleCompany();}}>关注公司</MDBBtn>
              </MDBCol>
              <MDBCol size="2">
                <MDBBtn onClick={()=>{this.handlePosition();}}>关注职位</MDBBtn>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              {}
            </MDBRow>
          </MDBCol>
          
        </MDBRow>
        <MDBRow></MDBRow>
        <Footer></Footer>
      </div>
    ) : null;
  }
}

Collection.i18n = [
  {
    applyBefore: '申请截止'
  },
  {
    applyBefore: 'Apply Before'
  },
];
