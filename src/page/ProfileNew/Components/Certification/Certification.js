import React, {Component} from 'react';
import { MDBBtn } from "mdbreact";


import CertificationCard from './CertificationCard/CertificationCard';
import classes from './Certification.module.css';


const MDBButtonStyle = {
    font_family: "IBM Plex Sans",
    font_style: "normal",
    font_weight: "600",
    line_height: "normal",
    font_size: "18px",
    text_align: "center"};

class Certification extends Component{

    addHandler = () => {
        this.setState({deleteCounter: this.state.deleteCounter-1})
    }

    deleteHandler = (id, e) => {
        this.state.cards.splice(id,1);
        this.setState({deleteCounter: this.state.deleteCounter+1})
    }

    state = {
        cards: this.props.data 
            ? this.props.data.map((e,i)=>(<CertificationCard key={i} id={i} data={e} deleteHandler={this.deleteHandler}/>))
            : Array(),
        
        deleteCounter: 0
    }

    render(){
        console.log(this.state.cards.length)
        let toShow;
        if(this.state.cards.length == 0){
            toShow = 
                <div className={classes.Certification}>
                    <div className={classes.row}>
                        <p className={classes.SectionName}>Certification</p>
                    </div>
                    <p>no certification</p>
                    <MDBBtn 
                        flat 
                        className={classes.MDBButton}
                        style={MDBButtonStyle}
                        onClick={this.addHandler}>
                            + Add Certification
                    </MDBBtn>
                </div>;
        }
        else {
            toShow =
                <div className={classes.Certification}>
                    <div className={classes.row}>
                        <p className={classes.SectionName}>Certification</p>
                    </div>
                    {this.state.cards}
                    <MDBBtn 
                        flat 
                        className={classes.MDBButton}
                        style={MDBButtonStyle}
                        onClick={this.addHandler}>
                            + Add Certification
                    </MDBBtn>
                </div>
        }
        return(toShow);
    }
};

export default Certification;