import React from 'react';
import {Redirect} from 'react-router-dom';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, Col } from 'mdbreact';
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBIcon,
    MDBBtn,
    MDBRow,
    MDBCol,
    MDBInput, 
    MDBFormInline,
    MDBTable, MDBTableBody, MDBTableHead
   
} from 'mdbreact';

import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';
import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';
import './style.css';
export class Message extends React.Component{
    constructor(props) {
        super(props);
        this.text = Message.i18n[languageHelper()];
      }
    render(){
        const pathname = removeUrlSlashSuffix(this.props.location.pathname);
        if (pathname) {
            return (<Redirect to={pathname}/>);
          }
    return(
        <div>
             <Header/>
             <MDBRow>
             <br/>
             <MDBCol size='2'></MDBCol>
             <MDBCol size='8'>
             <MDBRow size='1'></MDBRow>
             <div>
                 <MDBCard 
                 style={{
                 margin: '10px',
                  boxShadow: 'none',
                   }}>
             <MDBRow size='1'></MDBRow>
            
               <MDBRow size="1">
               <MDBCol size='3'>
               <MDBCard style={{boxShadow: 'none',}}>
               <MDBBtn color="blue"  size="sm">消息</MDBBtn>
               </MDBCard>
               </MDBCol>
               <MDBCol size='3'>
               <MDBCard  style={{boxShadow: 'none',}}>
               <MDBBtn color="blue"  size="sm">通知</MDBBtn>
               </MDBCard>
               </MDBCol>
               </MDBRow>
               <MDBRow height='1'></MDBRow>  
               <MDBRow>
                <MDBCard style={{boxShadow: 'none',}}>
               <MDBRow>
                <MDBCol size=''>
                <MDBRow>
                    <div>
                    <MDBCard >
                        <MDBRow>
                    <MDBCol>
                    <input type="email" id="exampleInput" className="form-control" />
                    </MDBCol>
                    <MDBCol>
                    <button type="button" className="close" aria-label="Close">
                    <span aria-hidden="true"><MDBIcon icon="edit" /></span>
                    </button>   
                    </MDBCol>
                    </MDBRow>
                    </MDBCard>
                    </div>
                </MDBRow>
                </MDBCol>
                <MDBCol size=''></MDBCol>
                </MDBRow>
                </MDBCard>
             </MDBRow>
             </MDBCard>
             </div>
             <MDBRow size='1'></MDBRow>
             </MDBCol>
             <MDBCol size='2'></MDBCol>
             </MDBRow>
             <Footer/>
        </div>
    );
    }    
}
Message.i18n = [
    {},
    {}
  ];
  