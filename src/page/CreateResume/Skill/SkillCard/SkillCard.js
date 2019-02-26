import React, {Component} from 'react';

import classes from './SkillCard.module.css';
import SkillIcon from '../../../assets/javascript.png';
import Dropdown from '../../Dropdown/Dropdown';

class skillCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            editing: this.props.data ? false : true,
            skillData: this.props.data ? {
                name: this.props.data.name,
            } : {
                name: ''
            }
        } 
        this.nameRef = React.createRef();

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
            skillData: {
                name: this.nameRef.current.value
            }
        }, ()=>{
            this.props.saveHandler(this.state.skillData, this.props.id);     
        });
    }


    render(){
        if(this.props.modal){
            let toShow =
                <div className={classes.SkillCard}>
                    <div onClick={(event)=>(this.props.toggle(this.props.id,event))} style={{position: 'absolute', zIndex: '1', height: '100%', width: '100%'}}></div>
                    <img src={SkillIcon} alt="no img"></img>
                    <div className={classes.SkillInfo}>
                        <input disabled type="text" defaultValue={this.state.skillData.name} ref={this.nameRef}/>
                    </div>                
                    <Dropdown delete={this.deleteHandler} edit={this.editHandler}/>
                </div>;
            
            if(this.state.editing){
                toShow = 
                    <div className={classes.SkillCard}>
                        <div onClick={(event)=>(this.props.toggle(this.props.id,event))} style={{position: 'absolute', zIndex: '1', height: '100%', width: '100%'}}></div>
                        <img src={SkillIcon} alt="no img"></img>
                        <div className={classes.SkillInfo}>
                            <input type="text" defaultValue={this.state.skillData.name} ref={this.nameRef}/>
                        </div>
                        <Dropdown delete={this.deleteHandler} edit={this.editHandler} editing save={this.saveHandler}/>
                    </div>;
            }
            return(toShow)
        }else{
            let toShow =
                <div className={classes.SkillCard}>
                    <img src={SkillIcon} alt="no img"></img>
                    <div className={classes.SkillInfo}>
                        <input disabled type="text" defaultValue={this.state.skillData.name} ref={this.nameRef}/>
                    </div>                
                    <Dropdown delete={this.deleteHandler} edit={this.editHandler}/>
                </div>;
            
            if(this.state.editing){
                toShow = 
                    <div className={classes.SkillCard}>
                        <img src={SkillIcon} alt="no img"></img>
                        <div className={classes.SkillInfo}>
                            <input type="text" defaultValue={this.state.skillData.name} ref={this.nameRef}/>
                        </div>
                        <Dropdown delete={this.deleteHandler} edit={this.editHandler} editing save={this.saveHandler}/>
                    </div>;
            }
            return(toShow)
        }
        
    }
};

export default skillCard;