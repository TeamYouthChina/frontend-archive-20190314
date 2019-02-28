import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import BraftEditor from 'braft-editor'

import EducationCard from '../Education/EducationCard/EducationCard';
import {getAsync} from '../../../tool/api-helper';



class ModalPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            editorState: BraftEditor.createEditorState(null),
            newCards : [],
            selected: -1
        }
    }

    componentDidMount(){
        // this changed cards in education
        let temp = this.props.cards.map((e,i)=>(
            React.cloneElement(e,{toggle: this.toggle})
        ))
        this.setState({...this.state, newCards: temp},()=>{
        });
    }

    componentDidUpdate(){
        
    }

    toggle = (id,event) => {
        this.setState({
            modal: !this.state.modal,
            selected: id}, ()=>{
                if(!isNaN(id)){
                    this.props.addHandler(id);
                }
            });
    }


    
    render(){
        let temp = this.props.cards.map((e,i)=>(
            React.cloneElement(e,{toggle: this.toggle, modal: true})
        ))
        return (
            <MDBContainer>
                <MDBRow center>
                    <MDBBtn flat onClick={this.toggle}>{this.props.buttonName}</MDBBtn>
                    <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="lg">
                        <MDBModalHeader toggle={this.toggle}>Choose To Add In Your Resume</MDBModalHeader>
                        <MDBModalBody>
                            {temp}
                        </MDBModalBody>
                        <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggle}>Cancel</MDBBtn>
                        </MDBModalFooter>
                    </MDBModal>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default ModalPage;