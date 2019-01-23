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
import {CollectionCo} from './collection-company';
import {CollectionJob} from './collection-job';


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
          <MDBCol size="11">
            <MDBRow>
              <MDBCol size="12" >
                <MDBBtn style={{padding:'10px'}} onClick={()=>{this.handleCompany();}}>关注职位</MDBBtn>
                <MDBBtn style={{padding:'10px'}} onClick={()=>{this.handlePosition();}}>关注公司</MDBBtn>
                {this.state.selectType === 1 ? <CollectionJob></CollectionJob> : <CollectionCo></CollectionCo>}

              </MDBCol>
                
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
