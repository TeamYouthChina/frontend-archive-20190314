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
import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';

import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';
import{RensentInfo}from'./resentinfo';
export class Backfild extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null,
      selectType: 1,
      flipped: false
    };
    this.text = Backfild.i18n[languageHelper()];
  }

  handleFlipping = () => {
    this.setState({ flipped: !this.state.flipped });
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

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div >
          <Header/>
         <MDBRow>
         <MDBCol size="1"></MDBCol>
        <MDBCol size='10'>
           <MDBRow>
             <MDBCol >
            <MDBCard className="face back">
            <MDBCardBody>
              <h4 className="font-weight-bold">推送提醒</h4>
              <hr />

              <a href="http://localhost:3000/message" >
                <MDBIcon icon="undo" /> Click here to rotate back
              </a>
            </MDBCardBody>
          </MDBCard>
             </MDBCol>
             </MDBRow>
             </MDBCol>
             <MDBCol size="1"></MDBCol>
             </MDBRow> 
             <Footer/>
      </div>
    ) : null;
  }
}

Backfild.i18n = [
  {

  },
  {

  },
];
