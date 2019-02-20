import React, {Component} from 'react';

import classes from './WorkExperienceCard.module.css';
import workIcon from '../../../../assets/google.jpg';
import Dropdown from '../../Dropdown/Dropdown';

class WorkExperienceCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            editing: false,
            workData: {
                position: this.props.data.position,
                employer: this.props.data.employer,
                begin: this.props.data.duration.begin,
                end: this.props.data.duration.end,
                note: this.props.data.note
            },
            show: true
        } 
        this.posRef = React.createRef();
        this.employerRef = React.createRef();
        this.beginRef = React.createRef();
        this.endRef = React.createRef();
        this.noteRef = React.createRef();

    }

    editHandler=()=>{
        console.log("editing")
        this.setState({editing: true});
    }
    deleteHandler=()=>{
        console.log("deleteing")
        this.setState({show: false})
        // TODO: truely delete the card in server
    }

    saveHandler=()=>{
        console.log("saving");
        this.setState({
            editing: false,
            workData: {
                position: this.posRef.current.value,
                employer: this.employerRef.current.value,
                begin: this.beginRef.current.value,
                end: this.endRef.current.value,
                note: this.noteRef.current.value
            }
        }, ()=>{
            console.log(this.state.workData)
        });
        
        // API PUT!

    }
    render(){
        if(!this.state.show){
            return(
                <div></div>
            )
        }
        let toShow =
            <div className={classes.WorkExperienceCard}>
                <img src={workIcon} alt="no img"></img>
                <div className={classes.WorkInfo}>
                    <input disabled type="text" defaultValue={this.state.workData.position} ref={this.posRef}/>
                    <input disabled type="text" defaultValue={this.state.workData.employer} ref={this.employerRef}/>
                    <div>
                        <input disabled type="text" defaultValue={this.state.workData.begin} ref={this.beginRef}/>
                        <p> - </p>
                        <input disabled type="text" defaultValue={this.state.workData.end} ref={this.endRef}/>
                    </div>
                    <input disabled type="text" defaultValue={this.state.workData.note} ref={this.noteRef}/>
                </div>
                <Dropdown delete={this.deleteHandler} edit={this.editHandler}/>
            </div>;
        
        if(this.state.editing){
            toShow = 
                <div className={classes.WorkExperienceCard}>
                    <img src={workIcon} alt="no img"></img>
                    <div className={classes.WorkInfo}>
                        <input type="text" defaultValue={this.state.workData.position} ref={this.posRef}/>
                        <input type="text" defaultValue={this.state.workData.employer} ref={this.employerRef}/>
                        <div>
                            <input type="text" defaultValue={this.state.workData.begin} ref={this.beginRef}/>
                            <p> - </p>
                            <input type="text" defaultValue={this.state.workData.end} ref={this.endRef}/>
                        </div>
                        <input type="text" defaultValue={this.state.workData.note} ref={this.noteRef}/>
                    </div>
                    <Dropdown delete={this.deleteHandler} edit={this.editHandler} editing save={this.saveHandler}/>
                </div>
        }
        
        return(toShow);
    }
};

export default WorkExperienceCard;