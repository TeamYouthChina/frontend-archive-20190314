import React, { Component } from 'react';
import { MDBBtn } from "mdbreact";


import ProjectCard from './ProjectCard/ProjectCard';
import classes from './Project.module.css';

const MDBButtonStyle = {
    font_family: "IBM Plex Sans",
    font_style: "normal",
    font_weight: "600",
    line_height: "normal",
    font_size: "18px",
    text_align: "center"};



class Project extends Component{

    addHandler = () => {
        this.setState({deleteCounter: this.state.deleteCounter-1})
    }

    deleteHandler = (id, e) => {
        this.state.cards.splice(id,1);
        this.setState({deleteCounter: this.state.deleteCounter+1})
    }

    state = {
        cards: this.props.data 
            ? this.props.data.map((e,i)=>(<ProjectCard key={i} id={i} data={e} deleteHandler={this.deleteHandler}/>))
            : Array(),
        
        deleteCounter: 0
    }

    render(){
        let toShow; 
        if(this.state.cards.length == 0){
            toShow = 
                <div className={classes.Project}>
                    <div className={classes.row}>
                        <p className={classes.SectionName}>Project</p>

                    </div>
                    <div className={classes.Container}>
                        <p>no project</p>
                        <MDBBtn 
                            outline
                            className={classes.MDBButton}
                            style={MDBButtonStyle}
                            color="blue-grey"
                            onClick={this.addHandler}>
                                + Add Certification
                        </MDBBtn>
                    </div>
                </div>;
        }
        else {
            toShow =
                <div className={classes.Project}>
                    <div className={classes.row}>
                        <p className={classes.SectionName}>Project</p>
                    </div>
                    <div className={classes.Container}>
                        {this.state.cards}   
                        <MDBBtn 
                            outline
                            className={classes.MDBButton}
                            style={MDBButtonStyle}
                            color="blue-grey"
                            onClick={this.addHandler}>
                                + Add Certification
                        </MDBBtn>
                    </div>
                </div>; 
        }
        return(toShow)
    }
};

export default Project;