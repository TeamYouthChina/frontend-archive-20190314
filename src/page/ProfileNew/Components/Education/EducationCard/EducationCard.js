import React, {Component} from 'react';


import classes from './EducationCard.module.css';
import schoolIcon from '../../../../assets/schoolIcon.jpg';
import Dropdown from '../../Dropdown/Dropdown';

class EducationCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            editing: false,
            educationData: {
                university: this.props.data.university,
                begin: this.props.data.duration.begin,
                end: this.props.data.duration.end,
                degree: this.props.data.degree
            },
            show: true
        } 
        this.uniRef = React.createRef();
        this.beginRef = React.createRef();
        this.endRef = React.createRef();
        this.degreeRef = React.createRef();
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
            educationData: {
                university: this.uniRef.current.value,
                begin: this.beginRef.current.value,
                end: this.endRef.current.value,
                degree: this.degreeRef.current.value
            }
        }, ()=>{
            console.log(this.state.educationData)
        });
        
        // TODO: truely edit the card in server

    }


    render(){
        if(!this.state.show){
            return(
                <div></div>
            )
        }
        let toShow =
            <div className={classes.EducationCard}>
                <img src={schoolIcon} alt="no img"></img>
                <div className={classes.SchoolInfo}>
                    <input disabled type="text" defaultValue={this.state.educationData.university} ref={this.uniRef}/>
                    <div>
                        <input disabled type="text" defaultValue={this.state.educationData.begin} ref={this.beginRef}/>
                        <p> - </p>
                        <input disabled type="text" defaultValue={this.state.educationData.end} ref={this.endRef}/>
                    </div>
                    <input disabled type="text" defaultValue={this.state.educationData.degree} ref={this.degreeRef}/>
                </div>
                <Dropdown delete={this.deleteHandler} edit={this.editHandler}/>
            </div>;
        
        if(this.state.editing){
            toShow =
                <div className={classes.EducationCard}>
                    <img src={schoolIcon} alt="no img"></img>
                    <div className={classes.SchoolInfo}>
                        <input type="text" defaultValue={this.state.educationData.university} ref={this.uniRef}/>
                        <div>
                            <input type="text" defaultValue={this.state.educationData.begin} ref={this.beginRef}/>
                            <p> - </p>
                            <input type="text" defaultValue={this.state.educationData.end} ref={this.endRef}/>
                        </div>
                        <input type="text" defaultValue={this.state.educationData.degree} ref={this.degreeRef}/>
                    </div>
                    <Dropdown delete={this.deleteHandler} edit={this.editHandler} editing save={this.saveHandler}/>
                </div>;
        }
        return(
            toShow
        );
    }  
};

export default EducationCard;