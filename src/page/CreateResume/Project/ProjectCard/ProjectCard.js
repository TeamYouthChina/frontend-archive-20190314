import React, {Component} from 'react';

import classes from './ProjectCard.module.css';
import Dropdown from '../../Dropdown/Dropdown';


class projectCard extends Component {
  
  constructor(props){
    super(props)
    this.state = {
        editing: this.props.data ? false : true,
        proData: this.props.data ? {
            name: this.props.data.name,
            duration: {
                begin: this.props.data.duration.begin,
                end: this.props.data.duration.end
            },
            note: this.props.data.note
        } : {
            name: '',
            duration: {
                begin: '',
                end: ''   
            },
            note: ''
        }
    } 
    this.nameRef = React.createRef();
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
            proData: {
                name: this.nameRef.current.value,
                duration: {
                    begin: this.beginRef.current.value,
                    end: this.endRef.current.value,
                },
                note: this.noteRef.current.value
            }
        }, ()=>{
            this.props.saveHandler(this.state.proData, this.props.id);     
        });
    }

    render(){

        if(this.props.modal){
            let toShow =
                    <div className={classes.ProjectCard}>
                        <div onClick={(event)=>(this.props.toggle(this.props.id,event))} style={{position: 'absolute', zIndex: '1', height: '100%', width: '100%'}}></div>                        
                        <input disabled type="text" defaultValue={this.state.proData.name} ref={this.nameRef}/>
                        <div className={classes.Time}>
                            <input disabled type="text" defaultValue={this.state.proData.duration.begin} ref={this.beginRef}/>
                            <p> - </p>
                            <input disabled type="text" defaultValue={this.state.proData.duration.end} ref={this.endRef}/>
                        </div>
                        <input disabled type="text" defaultValue={this.state.proData.note} ref={this.noteRef}/>
                        <Dropdown delete={this.deleteHandler} edit={this.editHandler}/>
                    </div>;

            if(this.state.editing){
            toShow = 
                <div className={classes.ProjectCard}>
                    <div onClick={(event)=>(this.props.toggle(this.props.id,event))} style={{position: 'absolute', zIndex: '1', height: '100%', width: '100%'}}></div>
                    <input type="text" defaultValue={this.state.proData.name} ref={this.nameRef}/>
                    <div className={classes.Time}>
                        <input type="text" defaultValue={this.state.proData.duration.begin} ref={this.beginRef}/>
                        <p> - </p>
                        <input type="text" defaultValue={this.state.proData.duration.end} ref={this.endRef}/>
                    </div>
                    <input type="text" defaultValue={this.state.proData.note} ref={this.noteRef}/>
                    <Dropdown delete={this.deleteHandler} edit={this.editHandler} editing save={this.saveHandler}/>
                </div>
            }
            return( toShow )
        }
        else {
            let toShow = <div></div>
            return( toShow )
        }
    }
}

export default projectCard;