import React, {Component} from 'react';

import classes from './CertificationCard.module.css';
import certificationIcon from '../../../../assets/coursera.png';
import Dropdown from '../../Dropdown/Dropdown';

class CertificationCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            editing: false,
            certiData: {
                name: this.props.data.name,
                auth: this.props.data.authority,
                begin: this.props.data.duration.begin,
                end: this.props.data.duration.end,
                note: this.props.data.note
            },
        } 
        this.nameRef = React.createRef();
        this.authRef = React.createRef();
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
            certiData: {
                name: this.nameRef.current.value,
                auth: this.authRef.current.value,
                begin: this.beginRef.current.value,
                end: this.endRef.current.value,
                note: this.noteRef.current.value
            }
        }, ()=>{
            console.log(this.state.certiData)
        });
        
        // API PUT!

    }

    render(){
        let toShow =
            <div className={classes.CertificationCard}>
                <img src={certificationIcon} alt="no img"></img>
                <div className={classes.certifiInfo}>
                    <input disabled type="text" defaultValue={this.state.certiData.name} ref={this.nameRef}/>
                    <input disabled type="text" defaultValue={this.state.certiData.auth} ref={this.authRef}/>
                    <div>
                        <input disabled type="text" defaultValue={this.state.certiData.begin} ref={this.beginRef}/>
                        <p>-</p>
                        <input disabled type="text" defaultValue={this.state.certiData.end} ref={this.endRef}/>
                    </div>
                    <input disabled type="text" defaultValue={this.state.certiData.note} ref={this.noteRef}/>
                </div>
                <Dropdown delete={this.deleteHandler} edit={this.editHandler}/>
            </div>

        if(this.state.editing){
            toShow = 
                <div className={classes.CertificationCard}>
                    <img src={certificationIcon} alt="no img"></img>
                    <div className={classes.certifiInfo}>
                        <input type="text" defaultValue={this.state.certiData.name} ref={this.nameRef}/>
                        <input type="text" defaultValue={this.state.certiData.auth} ref={this.authRef}/>
                        <div>
                            <input type="text" defaultValue={this.state.certiData.begin} ref={this.beginRef}/>
                            <p>-</p>
                            <input type="text" defaultValue={this.state.certiData.end} ref={this.endRef}/>
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
   
};

export default CertificationCard;