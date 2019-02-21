import React, { Component } from 'react';
import { MDBBtn } from "mdbreact";


import WorkExperienceCard from './WorkExperienceCard/WorkExperienceCard';
import classes from './WorkExperience.module.css';
import {getAsync} from '../../../tool/api-helper';


const MDBButtonStyle = {
    font_family: "IBM Plex Sans",
    font_style: "normal",
    font_weight: "600",
    line_height: "normal",
    font_size: "18px",
    text_align: "center"};

class WorkExperience extends Component {

    constructor(props){
        super(props)        
        this.state = {
            cards: Array(), 
            flipper: true,
            requestedData: null,
        }
        this.date = null;
    }

    // get work data set requestedData and cards in state
    async componentDidMount(){
        let data = await getAsync('/applicants/'+this.props.requestID+'/experiences');
        this.setState({requestedData: data});
        let temp = this.state.requestedData && this.state.requestedData.content && this.state.requestedData.status.code === 2000
            ? this.state.requestedData.content.map((e)=>{
                this.date = new Date();
                const time = this.date.getTime();
                return <WorkExperienceCard 
                    key={time} 
                    id={time} 
                    data={e} 
                    deleteHandler={this.deleteHandler}
                    saveHandler={this.saveHandler}/>
            })
            : Array();
        this.setState({cards: temp});
    }

    async componentDidUpdate(){
    }

    // delte data on server, delete data in state.cards
    deleteHandler = (id) => {
        // TODO: delete data on server according to id
        // make a hard copy
        let temp = this.state.cards.splice(0);
        temp.forEach((e,i)=>{
            if(e.key == id){
                temp.splice(i,1);
                return;
            }
        })
        this.setState({
            cards: temp,
            flipper: !this.state.flipper
        },()=>{
            // prepare the data to be sent back to server
            let dataToSend = this.state.cards.map((e)=>{
                return e.props.data;
            })
        });
    }

    // save data locally and send back to server
    saveHandler = (newWork,id) =>{
        // TODO: update server with new saved cards
        // PUT {...this.state.requestedData, newEducation}
        // timestamp
        this.date = new Date();
        const time = this.date.getTime();
        // make a hard copy
        let temp = this.state.cards.splice(0);
        temp.forEach((e,i)=>{
            if(e.key == id){
                temp.splice(i,1,<WorkExperienceCard
                    key={time} 
                    id={time} 
                    data={newWork}
                    deleteHandler={this.deleteHandler}
                    saveHandler={this.saveHandler}/>);
                return;
            }
        })
        this.setState({
            cards: temp,
            flipper: !this.state.flipper
        },()=>{
            // prepare data to be sent back to server
            let dataToSend = this.state.cards.map((e)=>{
                return e.props.data;
            })
        });
    }

    // addhandler only create a empty cards in state.cards
    // update the data in server and local happens in saveHandler
    addHandler = () => {
        // timestamp
        this.date = new Date();
        const time = this.date.getTime();
        // make a hard copy
        let temp = this.state.cards.splice(0);
        temp.push(<WorkExperienceCard 
            key={time} 
            id={time} 
            deleteHandler={this.deleteHandler}
            saveHandler={this.saveHandler}/>)
        this.setState({
            cards: temp,
            flipper: !this.state.flipper});
        
    }

    
    
    render(){
        let toShow;
        if ( this.state.cards.length == 0 ) {
            toShow = 
                <div className={classes.WorkExperience}>
                    <div className={classes.row}>
                        <p className={classes.SectionName}>Work Experience</p>
                    </div>
                    <p>no work experience</p>
                    <MDBBtn 
                        flat 
                        className={classes.MDBButton}
                        style={MDBButtonStyle}
                        onClick={this.addHandler}>
                            + Add Work Experience
                    </MDBBtn>
                </div>;
        }
        else {
            toShow = 
                <div className={classes.WorkExperience}>
                    <div className={classes.row}>
                        <p className={classes.SectionName}>Work Experience</p>
                    </div>
                    {this.state.cards}
                    <MDBBtn 
                        flat 
                        className={classes.MDBButton}
                        style={MDBButtonStyle}
                        onClick={this.addHandler}>
                            + Add Work Experience
                    </MDBBtn>
                </div>;
        }

        return(
            toShow
        );
    }
};

export default WorkExperience;