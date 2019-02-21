import React, { Component } from 'react';
import { MDBBtn } from "mdbreact";

import EducationCard from './EducationCard/EducationCard';
import classes from './Education.module.css';
import {getAsync} from '../../../tool/api-helper';
import ModalPage from '../Modal/Modal';



const MDBButtonStyle = {
    font_family: "IBM Plex Sans",
    font_style: "normal",
    font_weight: "600",
    line_height: "normal",
    font_size: "18px",
    text_align: "center"};

class Education extends Component {

    constructor(props){
        super(props)        
        this.state = {
            cards: Array(), 
            flipper: true,
            requestedData: null,
            cardShown: Array()
        }
        this.date = null;
    }

    // get educations data set requestedData and cards in state
    async componentDidMount(){
        let data = await getAsync('/applicants/'+this.props.requestID+'/educations');
        this.setState({requestedData: data});
        let temp = this.state.requestedData && this.state.requestedData.content && this.state.requestedData.status.code === 2000
            ? this.state.requestedData.content.map((e)=>{
                this.date = new Date();
                const time = this.date.getTime();
                return <EducationCard 
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
            // let dataToSend = this.state.cards.map((e)=>{
            //     return e.props.data;
            // })
        });
    }

    
    // save data locally and send back to server
    saveHandler = (newEducation,id) =>{
        // TODO: update server with new saved cards
        // PUT {...this.state.requestedData, newEducation}
        // timestamp
        this.date = new Date();
        const time = this.date.getTime();
        let temp = this.state.cards.splice(0);
        temp.forEach((e,i)=>{
            if(e.key == id){
                temp.splice(i,1,<EducationCard 
                    key={time} 
                    id={time} 
                    data={newEducation}
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
            // let dataToSend = this.state.cards.map((e)=>{
            //     return e.props.data;
            // })
        });
    }

    
    // add a card
    addHandler = (id) => {
        // this.date = new Date();
        // const time = this.date.getTime();
        let copy;
        this.state.cards.forEach((e,i)=>{
            if(e.id == id){
                copy = React.cloneElement(e);
            }
        })
        let temp = this.state.cards.splice(0);
        temp.push(copy);



        this.setState({
            cardShown: temp,
            flipper: !this.state.flipper
        },()=>{
            // prepare data to be sent back to server
            // let dataToSend = this.state.cards.map((e)=>{
            //     return e.props.data;
            // })
        });
    }

    
    
    
    render(){
        let toShow; 
        if(this.state.cards.length == 0){
            console.log(this.state.cards)
            toShow = 
                <div className={classes.Education}>
                    <div className={classes.row}>
                        <p className={classes.SectionName}>Education</p>
                    </div>
                    <p>no education </p>
                    <ModalPage 
                        requestID={this.props.requestID}
                        cards={this.state.cards}
                        addHandler={this.addHandler}/>
                </div>;
        }
        else {
            console.log(this.state.cards)
            toShow =
                <div className={classes.Education}>
                    <div className={classes.row}>
                        <p className={classes.SectionName}>Education</p>
                    </div>
                    <ModalPage 
                        requestID={this.props.requestID}
                        cards={this.state.cards}
                        addHandler={this.addHandler}/>
                </div>;
        }
        return(
            toShow
        );
    }
};

export default Education;