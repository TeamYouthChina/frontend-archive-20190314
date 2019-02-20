import React, {Component} from 'react';

import classes from './SkillCard.module.css';
import SkillIcon from '../../../../assets/javascript.png';
import Dropdown from '../../Dropdown/Dropdown';

class skillCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            editing: false,
            skillData: {
                name: this.props.data.name,
            },
        } 
        this.nameRef = React.createRef();

    }

    editHandler=()=>{
        this.setState({editing: true});
        
        
    }
    deleteHandler=()=>{
        this.props.deleteHandler(this.props.id);
        // TODO: truely delete the card in server
    }

    saveHandler=()=>{
        this.setState({
            editing: false,
            skillData: {
                name: this.nameRef.current.value,
            }
        }, ()=>{
            console.log(this.state.skillData)
        });
        // TODO: truely edit the card in server
    }
    render(){
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
};

export default skillCard;