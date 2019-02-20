import React, { Component } from 'react';
import { MDBBtn } from "mdbreact";


import WorkExperienceCard from './WorkExperienceCard/WorkExperienceCard';
import classes from './WorkExperience.module.css';


const MDBButtonStyle = {
    font_family: "IBM Plex Sans",
    font_style: "normal",
    font_weight: "600",
    line_height: "normal",
    font_size: "18px",
    text_align: "center"};

class WorkExperience extends Component {

    addHandler = () => {
        this.setState({deleteCounter: this.state.deleteCounter-1})
    }

    deleteHandler = (id, e) => {
        this.state.cards.splice(id,1);
        this.setState({deleteCounter: this.state.deleteCounter+1})
    }

    state = {
        cards: this.props.data 
            ? this.props.data.map((e,i)=>(<WorkExperienceCard key={i} id={i} data={e} deleteHandler={this.deleteHandler}/>))
            : Array(),
        
        deleteCounter: 0
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