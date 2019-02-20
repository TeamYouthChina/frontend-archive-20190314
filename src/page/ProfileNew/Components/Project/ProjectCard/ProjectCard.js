import React, {Component} from 'react';

import classes from './ProjectCard.module.css';
import Dropdown from '../../Dropdown/Dropdown';


class projectCard extends Component {
  
  constructor(props){
    super(props)
    this.state = {
        editing: false,
        proData: {
            name: this.props.data.name,
            begin: this.props.data.duration.begin,
            end: this.props.data.duration.end,
            note: this.props.data.note
        },
    } 
    this.nameRef = React.createRef();
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
        console.log("saving");
        this.setState({
            editing: false,
            proData: {
                name: this.nameRef.current.value,
                begin: this.beginRef.current.value,
                end: this.endRef.current.value,
                note: this.noteRef.current.value
            }
        }, ()=>{
            console.log(this.state.proData)
        });
        // TODO: truely edit the card in server

    }

    render(){

        let toShow =
                <div className={classes.ProjectCard}>
                        <input disabled type="text" defaultValue={this.state.proData.name} ref={this.nameRef}/>
                        <div className={classes.Time}>
                            <input disabled type="text" defaultValue={this.state.proData.begin} ref={this.beginRef}/>
                            <p> - </p>
                            <input disabled type="text" defaultValue={this.state.proData.end} ref={this.endRef}/>
                        </div>
                        <input disabled type="text" defaultValue={this.state.proData.note} ref={this.noteRef}/>
                    <Dropdown delete={this.deleteHandler} edit={this.editHandler}/>
                </div>;

        if(this.state.editing){
        toShow = 
            <div className={classes.ProjectCard}>
                <input type="text" defaultValue={this.state.proData.name} ref={this.nameRef}/>
                <div className={classes.Time}>
                    <input type="text" defaultValue={this.state.proData.begin} ref={this.beginRef}/>
                    <p> - </p>
                    <input type="text" defaultValue={this.state.proData.end} ref={this.endRef}/>
                </div>
                <input type="text" defaultValue={this.state.proData.note} ref={this.noteRef}/>
                <Dropdown delete={this.deleteHandler} edit={this.editHandler} editing save={this.saveHandler}/>
            </div>
        }
        return( toShow )
    }
}

export default projectCard;