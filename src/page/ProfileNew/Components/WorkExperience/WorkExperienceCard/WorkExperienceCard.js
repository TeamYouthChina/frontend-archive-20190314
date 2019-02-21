import React, {Component} from 'react';

import classes from './WorkExperienceCard.module.css';
import workIcon from '../../../../assets/google.jpg';
import Dropdown from '../../Dropdown/Dropdown';

class WorkExperienceCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            editing: this.props.data
                ? false
                : true,
            workData: this.props.data 
                ? {
                    position: this.props.data.position,
                    employer: this.props.data.employer,
                    duration: {
                        begin: this.props.data.duration.begin,
                        end: this.props.data.duration.end   
                    },
                    note: this.props.data.note
                }
                : {
                    position: '',
                    employer: '',
                    duration: {
                        begin: '',
                        end: ''   
                    },
                    note: ''
                }
        } 
        
        this.posRef = React.createRef();
        this.employerRef = React.createRef();
        this.beginRef = React.createRef();
        this.endRef = React.createRef();
        this.noteRef = React.createRef();

    }
    
    // this method only toggle 'editing'
    editHandler=()=>{
        this.setState({editing: true});
    }

    // tell parent the id of the current card
    deleteHandler=()=>{
        this.props.deleteHandler(this.props.id);
    }

    // packup new data for this card and send to parent
    saveHandler=()=>{
        this.setState({
            editing: false,
            workData: {
                position: this.posRef.current.value,
                employer: this.employerRef.current.value,
                duration: {
                    begin: this.beginRef.current.value,
                    end: this.endRef.current.value,
                },
                note: this.noteRef.current.value
            }
        }, ()=>{
            this.props.saveHandler(this.state.workData, this.props.id);     
        });

    }
    render(){
        let toShow =
            <div className={classes.WorkExperienceCard}>
                <img src={workIcon} alt="no img"></img>
                <div className={classes.WorkInfo}>
                    <input disabled type="text" defaultValue={this.state.workData.position} ref={this.posRef}/>
                    <input disabled type="text" defaultValue={this.state.workData.employer} ref={this.employerRef}/>
                    <div>
                        <input disabled type="text" defaultValue={this.state.workData.duration.begin} ref={this.beginRef}/>
                        <p> - </p>
                        <input disabled type="text" defaultValue={this.state.workData.duration.end} ref={this.endRef}/>
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
                            <input type="text" defaultValue={this.state.workData.duration.begin} ref={this.beginRef}/>
                            <p> - </p>
                            <input type="text" defaultValue={this.state.workData.duration.end} ref={this.endRef}/>
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