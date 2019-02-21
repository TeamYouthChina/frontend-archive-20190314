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
            newCards : null,
            selected: -1
        }
    }

    componentDidMount(){
        // this changed cards in education
        let newCards = this.props.cards.splice(0).map((e,i)=>(React.cloneElement(e,{toggle: this.toggle})))
        this.setState({newCards: newCards});
    }

    async componentDidUpdate(){
    }

    toggle = (id,event) => {
        console.log(this.state.newCards)
        console.log("clicked")
        this.setState({
            modal: !this.state.modal,
            selected: id}, ()=>{
                console.log(this.state.selected)
                if(!isNaN(id)){
                    console.log(id)
                    this.props.addHandler(id);
                }
            });
    }


    
    render(){

        return (
            <MDBContainer>
                <MDBRow center>
                    <MDBBtn flat onClick={this.toggle}>+ Add Education</MDBBtn>
                    <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="lg">
                        <MDBModalHeader toggle={this.toggle}>Choose To Add In Your Resume</MDBModalHeader>
                        <MDBModalBody>
                            {this.state.newCards}
                            {/* {newCards} */}
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