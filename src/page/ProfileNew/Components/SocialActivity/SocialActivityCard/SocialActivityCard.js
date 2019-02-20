import React, { Component } from 'react';

import classes from './SocialActivityCard.module.css';
import socialActivityIcon from '../../../../assets/activity-icon.png';
import Dropdown from '../../Dropdown/Dropdown';

class SocialActivityCard extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            editing: false,
            socialData: {
                name: this.props.data.name,
                organization: this.props.data.organization,
                begin: this.props.data.duration.begin,
                end: this.props.data.duration.end,
                note: this.props.data.note
            },
        } 
        this.nameRef = React.createRef();
        this.orgRef = React.createRef();
        this.beginRef = React.createRef();
        this.endRef = React.createRef();
        this.noteRef = React.createRef();

    }

    editHandler=()=>{
        this.setState({editing: true});
        
        
    }
    deleteHandler=(e)=>{
        this.props.deleteHandler(this.props.id,e);
        // TODO: truely delete the card in server
    }

    saveHandler=()=>{
        this.setState({
            editing: false,
            socialData: {
                name: this.nameRef.current.value,
                organization: this.orgRef.current.value,
                begin: this.beginRef.current.value,
                end: this.endRef.current.value,
                note: this.noteRef.current.value
            }
        }, ()=>{
            console.log(this.state.socialData)
        });
        // TODO: truely edit the card in server

    }

    render(){
        let toShow =
            <div className={classes.SocialActivityCard}>
                <img src={socialActivityIcon} alt="no img"></img>
                <div className={classes.ActivityInfo}>
                    <input disabled type="text" defaultValue={this.state.socialData.name} ref={this.nameRef}/>
                    <input disabled type="text" defaultValue={this.state.socialData.organization} ref={this.orgRef}/>
                    <div>
                        <input disabled type="text" defaultValue={this.state.socialData.begin} ref={this.beginRef}/>
                        <p> - </p>
                        <input disabled type="text" defaultValue={this.state.socialData.end} ref={this.endRef}/>
                    </div>
                    <input disabled type="text" defaultValue={this.state.socialData.note} ref={this.noteRef}/>
                </div>
                <Dropdown delete={this.deleteHandler} edit={this.editHandler}/>
            </div>;
        
        if(this.state.editing){
            toShow = 
                <div className={classes.SocialActivityCard}>
                    <img src={socialActivityIcon} alt="no img"></img>
                    <div className={classes.ActivityInfo}>
                        <input type="text" defaultValue={this.state.socialData.name} ref={this.nameRef}/>
                        <input type="text" defaultValue={this.state.socialData.organization} ref={this.orgRef}/>
                        <div>
                            <input type="text" defaultValue={this.state.socialData.begin} ref={this.beginRef}/>
                            <p> - </p>
                            <input type="text" defaultValue={this.state.socialData.end} ref={this.endRef}/>
                        </div>
                        <input type="text" defaultValue={this.state.socialData.note} ref={this.noteRef}/>
                    </div>
                    <Dropdown delete={this.deleteHandler} edit={this.editHandler} editing save={this.saveHandler}/>
                </div>
        }

        return (toShow)
    }
};

export default SocialActivityCard;