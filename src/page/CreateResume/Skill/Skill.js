import React, {Component} from 'react';
import { MDBBtn } from "mdbreact";


import SkillCard from './SkillCard/SkillCard';
import classes from './Skill.module.css';
import {getAsync} from '../../../tool/api-helper';
import ModalPage from '../Modal/Modal';


const MDBButtonStyle = {
    font_family: "IBM Plex Sans",
    font_style: "normal",
    font_weight: "600",
    line_height: "normal",
    font_size: "18px",
    text_align: "center"};

class skill extends Component {
    
    constructor(props){
        super(props)        
        this.state = {
            cards: Array(), 
            flipper: true,
            requestedData: null,
            cardShown: Array(),
            cardsToModal: []
        }
        this.date = null;
    }

    // get work data set requestedData and cards in state
    async componentDidMount(){
        // this api is now currently unavailable
        let data = await getAsync('/applicants/'+this.props.requestID+'/skills');
        this.setState({requestedData: data});
        let temp1 = this.state.requestedData && this.state.requestedData.content && this.state.requestedData.status.code === 2000
            ? this.state.requestedData.content.map((e)=>{
                this.date = new Date();
                const time = this.date.getTime();
                return <SkillCard 
                    key={time} 
                    id={time} 
                    data={e} 
                    deleteHandler={this.deleteHandler}
                    saveHandler={this.saveHandler}/>
            })
            : Array();

        let temp2 = this.state.requestedData && this.state.requestedData.content && this.state.requestedData.status.code === 2000
            ? this.state.requestedData.content.map((e)=>{
                this.date = new Date();
                const time = this.date.getTime();
                return <SkillCard 
                    key={time} 
                    id={time} 
                    data={e} 
                    deleteHandler={this.deleteHandler}
                    saveHandler={this.saveHandler}/>
            })
            : Array();

        this.setState({
            ...this.state,
            cards: temp1,
            cardsToModal: temp2
        });
    }

    async componentDidUpdate(){
    }

    // delte data on server, delete data in state.cards
    deleteHandler = (id) => {
        // TODO: delete data on server according to id
        
        let temp = this.state.cardShown.filter((e,i)=>(
            e.id == id
        ));

        let copy;
        this.state.cards.forEach((e,i)=>{
            if(e.props.id == id){
                copy = React.cloneElement(e);
            }
        })

        let temp2 = this.state.cardsToModal.concat(copy);
        this.setState({
            ...this.state,
            cardShown: temp,
            cardsToModal: temp2,
            flipper: !this.state.flipper
        },()=>{
            // prepare the data to be sent back to server
            // let dataToSend = this.state.cards.map((e)=>{
            //     return e.props.data;
            // })
        });
    }

    // save data locally and send back to server
    saveHandler = (newSkill,id) =>{
        // TODO: update server with new saved cards
        // PUT {...this.state.requestedData, newEducation}
        
        // timestamp
        this.date = new Date();
        const time = this.date.getTime();
        let tempCards = this.state.cards.map((e,i)=>{
            if(e.props.id == id){
                return (
                    <SkillCard 
                        key={time} 
                        id={time} 
                        data={newSkill}
                        deleteHandler={this.deleteHandler}
                        saveHandler={this.saveHandler}/>
                )  
            }
            return e;
        })
        let tempCardShown = this.state.cardShown.map((e,i)=>{
            if(e.props.id == id){
                return (
                    <SkillCard 
                        key={time} 
                        id={time} 
                        data={newSkill}
                        deleteHandler={this.deleteHandler}
                        saveHandler={this.saveHandler}/>
                )  
            }
            return e;
        })

        this.setState({
            cards: tempCards,
            cardShown: tempCardShown,
            flipper: !this.state.flipper
        },()=>{
            // prepare data to be sent back to server
            // let dataToSend = this.state.cards.map((e)=>{
            //     return e.props.data;
            // })
        });
    }

    // addhandler only create a empty cards in state.cards
    // update the data in server and local happens in saveHandler
    addHandler = (id) => {
        let copy;
        this.state.cards.forEach((e,i)=>{
            if(e.props.id == id){
                copy = React.cloneElement(e);
            }
        })
        let temp1 = this.state.cardShown.concat(copy);

        let temp2 = this.state.cardsToModal.filter((e,i)=>(
            e.props.id ==! id
        ))
        this.setState({
            ...this.state,
            cardShown: temp1,
            cardsToModal: temp2,
            flipper: !this.state.flipper
        },()=>{});
        
    }

    render(){
        let toShow; 
        if(this.state.cardShown.length == 0){
            toShow = 
                <div className={classes.Skill}>
                    <div className={classes.row}>
                        <p className={classes.SectionName}>Skill</p>
                    </div>
                    <p>no skill</p>
                    <ModalPage 
                        requestID={this.props.requestID}
                        cards={this.state.cardsToModal}
                        addHandler={this.addHandler}/>
                </div>;
        }
        else {
            toShow =
                <div className={classes.Skill}>
                    <div className={classes.row}>
                        <p className={classes.SectionName}>Skill</p>
                    </div>
                    {this.state.cardShown}
                    <ModalPage 
                        requestID={this.props.requestID}
                        cards={this.state.cardsToModal}
                        addHandler={this.addHandler}/>
                </div>;
        }
        return(
            toShow
        );
    }
};

export default skill;