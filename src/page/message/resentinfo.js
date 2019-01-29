import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import {
  MDBBadge,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBRotatingCard,

} from 'mdbreact';
import{Listview}from'./list';

export class RensentInfo extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null,
      selectType: 1
    };
    this.text = RensentInfo.i18n[languageHelper()];
  }

  componentWillMount() {
    let mockData =
      {
        status: {
          code: 2000
        }
      };
    this.setState(() => {
      return {backend: mockData};
    });
  }

  state = {
    flipped: false
  }
  
  handleFlipping = () => {
    this.setState({ flipped: !this.state.flipped });
  }
  

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div style={{width: '100%'}}>
          <MDBCol>
          
         
          <MDBRow> 
          <MDBCard className="card-body px-3 pb-3" block>
            <MDBCardBody>
            <MDBRow>
             <MDBCol md="5" style={{}}>
             <MDBRow>
                <input
                  className="form-control form-control-sm ml-3 w-75"
                  type="text"
                  placeholder="搜索消息"
                  aria-label="Search"
                />
                <MDBIcon style={{marginLeft: '10px'}} far icon="edit" size='2x'/>
            </MDBRow>
            </MDBCol>
            <MDBCol md="6">
            <MDBCardText><h3>First Last </h3> </MDBCardText>
            </MDBCol>
            </MDBRow>
             </MDBCardBody>
            </MDBCard>
          </MDBRow>
          <MDBRow>
             <Listview></Listview>
          </MDBRow>
       
         
          </MDBCol> 
      </div>
    ) : null;
  }
}

RensentInfo.i18n = [
  {

  },
  {

  },
];
