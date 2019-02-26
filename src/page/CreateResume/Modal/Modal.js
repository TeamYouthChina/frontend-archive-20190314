import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import BraftEditor from 'braft-editor'

import EducationCard from '../Education/EducationCard/EducationCard';
import {getAsync} from '../../../tool/api-helper';



class ModalPage extends Component {
    state = {
        modal: false,
        editorState: BraftEditor.createEditorState(null),
        cards: Array()
    }

    // get educations data set requestedData and cards in state
    async componentDidMount(){
        let data = await getAsync('/applicants/'+this.props.requestID+'/educations');
        let temp = data && data.content && data.status.code === 2000
            ? data.content.map((e)=>{
                const date = new Date();
                const time = date.getTime();
                return <EducationCard 
                    key={time} 
                    id={time} 
                    data={e} 
                    deleteHandler={this.deleteHandler}
                    saveHandler={this.saveHandler}/>
            })
            : Array();
        this.setState({cards: temp});
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        console.log(this.state.cards)
        return (
            <MDBContainer>
                <MDBRow center>
                    <MDBBtn flat onClick={this.toggle}>+ Add Education</MDBBtn>
                    <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="lg">
                        <MDBModalHeader toggle={this.toggle}>Choose To Add In Your Resume</MDBModalHeader>
                        <MDBModalBody>
                            {this.state.cards}
                        </MDBModalBody>
                        <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                        <MDBBtn color="primary">Save changes</MDBBtn>
                        </MDBModalFooter>
                    </MDBModal>
                </MDBRow>
            </MDBContainer>
            );
    }
}

export default ModalPage;