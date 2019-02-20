import React, {Component} from 'react';
import { MDBBtn } from "mdbreact";


import SocialActivityCard from './SocialActivityCard/SocialActivityCard';
import classes from './SocialActivity.module.css';


const MDBButtonStyle = {
    font_family: "IBM Plex Sans",
    font_style: "normal",
    font_weight: "600",
    line_height: "normal",
    font_size: "18px",
    text_align: "center"};

class SocialActivity extends Component {

    addHandler = () => {
        this.setState({deleteCounter: this.state.deleteCounter-1})
    }

    deleteHandler = (id, e) => {
        this.state.cards.splice(id,1);
        this.setState({deleteCounter: this.state.deleteCounter+1})
    }

    state = {
        cards: this.props.data 
            ? this.props.data.map((e,i)=>(<SocialActivityCard key={i} id={i} data={e} deleteHandler={this.deleteHandler}/>))
            : Array(),
        
        deleteCounter: 0
    }
    render(){
        let toShow; 
        if(this.state.cards.length == 0){
            toShow = 
                <div className={classes.SocialActivity}>
                    <div className={classes.row}>
                        <p className={classes.SectionName}>Social Activity</p>
                    </div>
                    <p>no social activity</p>
                    <MDBBtn 
                        flat 
                        className={classes.MDBButton}
                        style={MDBButtonStyle}
                        onClick={this.addHandler}>
                            + Add Social Activity
                    </MDBBtn>
                </div>
        }
        else {
            toShow = 
                <div className={classes.SocialActivity}>
                    <div className={classes.row}>
                        <p className={classes.SectionName}>Social Activity</p>
                    </div>
                    {this.state.cards}
                    <MDBBtn 
                        flat 
                        className={classes.MDBButton}
                        style={MDBButtonStyle}
                        onClick={this.addHandler}>>
                            + Add Social Activity
                    </MDBBtn>
                </div>
        }
        return(
            toShow
        );
    }
};

export default SocialActivity;