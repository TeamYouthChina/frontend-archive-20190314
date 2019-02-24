import React, { Component } from 'react'

import {Header} from '../../general-component/header';
import MainBody from './MainBody/MainBody'
import {getAsync} from '../../tool/api-helper';
import classes from './CreateResume.module.css';


class CreateResume extends Component {

    state = {
        requestID: null,
        requestedData: null
    }
    
    componentWillMount(){
        this.setState({requestID: this.props.match.params.id});
    }

    async componentDidMount(){
        // ideally only get /applicants/id/basicinfo
        let data = await getAsync('/applicants/'+this.state.requestID);
        this.setState({requestedData: data});
    }

    render() {
        let toShow = 
            <div className={classes.ProfileHome}>
                <Header/>
                <p>no such data</p>
            </div>;

        
        if(this.state.requestedData && this.state.requestedData.content && this.state.requestedData.status.code === 2000){

            toShow = 
                <div className={classes.ProfileHome}>
                    <Header/>
                    <MainBody requestID={this.state.requestID} data={this.state.requestedData.content}/>
                </div>;
        }
        
        return(
            toShow
        );
    }
}

export default CreateResume
