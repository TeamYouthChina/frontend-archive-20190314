import React, { Component } from 'react';

import classes from './SocialActivityCard.module.css';
import socialActivityIcon from '../../../assets/activity-icon.png';
import Dropdown from '../../Dropdown/Dropdown';

class SocialActivityCard extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            editing: this.props.data
                ? false
                : true,
            socialData: this.props.data
                ? {
                    name: this.props.data.name,
                    organization: this.props.data.organization,
                    duration: {
                        begin: this.props.data.duration.begin,
                        end: this.props.data.duration.end
                    },
                    note: this.props.data.note
                }
                : { 
                    name: '',
                    organization: '',
                    duration: {
                        begin: '',
                        end: ''   
                    },
                    note: ''
                }
        } 
        this.nameRef = React.createRef();
        this.orgRef = React.createRef();
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

    saveHandler=()=>{
        this.setState({
            editing: false,
            socialData: {
                name: this.nameRef.current.value,
                organization: this.orgRef.current.value,
                duration: {
                    begin: this.beginRef.current.value,
                    end: this.endRef.current.value,
                },
                note: this.noteRef.current.value
            }
        }, ()=>{
            this.props.saveHandler(this.state.socialData, this.props.id);     
        });
    }

    render(){
        if(this.props.modal){
            let toShow =
                <div className={classes.SocialActivityCard}>
                    <div onClick={(event)=>(this.props.toggle(this.props.id,event))} style={{position: 'absolute', zIndex: '1', height: '100%', width: '100%'}}></div>
                    <img src={socialActivityIcon} alt="no img"></img>
                    <div className={classes.ActivityInfo}>
                        <input disabled type="text" defaultValue={this.state.socialData.name} ref={this.nameRef}/>
                        <input disabled type="text" defaultValue={this.state.socialData.organization} ref={this.orgRef}/>
                        <div>
                            <input disabled type="text" defaultValue={this.state.socialData.duration.begin} ref={this.beginRef}/>
                            <p> - </p>
                            <input disabled type="text" defaultValue={this.state.socialData.duration.end} ref={this.endRef}/>
                        </div>
                        <input disabled type="text" defaultValue={this.state.socialData.note} ref={this.noteRef}/>
                    </div>
                    <Dropdown delete={this.deleteHandler} edit={this.editHandler}/>
                </div>;
            
            if(this.state.editing){
                toShow = 
                    <div className={classes.SocialActivityCard}>
                        <div onClick={(event)=>(this.props.toggle(this.props.id,event))} style={{position: 'absolute', zIndex: '1', height: '100%', width: '100%'}}></div>                        
                        <img src={socialActivityIcon} alt="no img"></img>
                        <div className={classes.ActivityInfo}>
                            <input type="text" defaultValue={this.state.socialData.name} ref={this.nameRef}/>
                            <input type="text" defaultValue={this.state.socialData.organization} ref={this.orgRef}/>
                            <div>
                                <input type="text" defaultValue={this.state.socialData.duration.begin} ref={this.beginRef}/>
                                <p> - </p>
                                <input type="text" defaultValue={this.state.socialData.duration.end} ref={this.endRef}/>
                            </div>
                            <input type="text" defaultValue={this.state.socialData.note} ref={this.noteRef}/>
                        </div>
                        <Dropdown delete={this.deleteHandler} edit={this.editHandler} editing save={this.saveHandler}/>
                    </div>
            }

            return (toShow)
        }
        else {
            let toShow = <div></div>
            return (toShow)
        }
    }
};

export default SocialActivityCard;