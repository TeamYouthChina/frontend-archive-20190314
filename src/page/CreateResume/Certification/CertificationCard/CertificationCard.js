import React, {Component} from 'react';

import classes from './CertificationCard.module.css';
import certificationIcon from '../../../assets/coursera.png';
import Dropdown from '../../Dropdown/Dropdown';

class CertificationCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            editing: this.props.data
                ? false
                : true,
            certiData: this.props.data
                ? {
                    name: this.props.data.name,
                    auth: this.props.data.authority,
                    duration: {
                        begin: this.props.data.duration.begin,
                        end: this.props.data.duration.end
                    },
                    note: this.props.data.note
                }
                : {
                    name: '',
                    auth: '',
                    duration: {
                        begin: '',
                        end: ''   
                    },
                    note: ''
                }
        } 
        this.nameRef = React.createRef();
        this.authRef = React.createRef();
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
            certiData: {
                name: this.nameRef.current.value,
                auth: this.authRef.current.value,
                duration: {
                    begin: this.beginRef.current.value,
                    end: this.endRef.current.value,
                },
                note: this.noteRef.current.value
            }
        }, ()=>{
            this.props.saveHandler(this.state.certiData, this.props.id);     
        });

    }

    render(){
        if(this.props.modal){
            let toShow =
                <div className={classes.CertificationCard}>
                    <div onClick={(event)=>(this.props.toggle(this.props.id,event))} style={{position: 'absolute', zIndex: '1', height: '100%', width: '100%'}}></div>                    
                    <img src={certificationIcon} alt="no img"></img>
                    <div className={classes.certifiInfo}>
                        <input disabled type="text" defaultValue={this.state.certiData.name} ref={this.nameRef}/>
                        <input disabled type="text" defaultValue={this.state.certiData.auth} ref={this.authRef}/>
                        <div>
                            <input disabled type="text" defaultValue={this.state.certiData.duration.begin} ref={this.beginRef}/>
                            <p>-</p>
                            <input disabled type="text" defaultValue={this.state.certiData.duration.end} ref={this.endRef}/>
                        </div>
                        <input disabled type="text" defaultValue={this.state.certiData.note} ref={this.noteRef}/>
                    </div>
                    <Dropdown delete={this.deleteHandler} edit={this.editHandler}/>
                </div>

            if(this.state.editing){
                toShow = 
                    <div className={classes.CertificationCard}>
                        <div onClick={(event)=>(this.props.toggle(this.props.id,event))} style={{position: 'absolute', zIndex: '1', height: '100%', width: '100%'}}></div>
                        <img src={certificationIcon} alt="no img"></img>
                        <div className={classes.certifiInfo}>
                            <input type="text" defaultValue={this.state.certiData.name} ref={this.nameRef}/>
                            <input type="text" defaultValue={this.state.certiData.auth} ref={this.authRef}/>
                            <div>
                                <input type="text" defaultValue={this.state.certiData.duration.begin} ref={this.beginRef}/>
                                <p>-</p>
                                <input type="text" defaultValue={this.state.certiData.duration.end} ref={this.endRef}/>
                            </div>
                            <input type="text" defaultValue={this.state.certiData.note} ref={this.noteRef}/>
                        </div>
                        <Dropdown delete={this.deleteHandler} edit={this.editHandler} editing save={this.saveHandler}/>
                    </div>
            }
            return(
                toShow
            );
        }
        else {
            let toShow = <div></div>
            return toShow
        }
        
    }
   
};

export default CertificationCard;