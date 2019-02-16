import React, {Component} from 'react';

import {Header} from '../../../../general-component/header';
import {ResumeTitle} from '../../../../general-component/resumeTitle';
import MainBody from '../../Components/MainBody/MainBody';
import classes from './ProfileHome.module.css';
import {getAsync} from '../../../../tool/api-helper';


let dummyPersonalInfo = {
    id:'123',
    name:'郭益豪',
    img:'https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg',
    description:['美国乔治华盛顿大学,','数据科学家'],
    work:'张三技术总监',
    counts:86
  }


class ProfileHome extends Component{

    state = {
        requestID: null,
        requestedData: null
    }

    componentWillMount(){
        this.setState({requestID: this.props.match.params.id});
    }

    async componentDidMount(){
        let data = await getAsync('/applicants/'+this.state.requestID);
        this.setState({requestedData: data});
    }

    render(){
        let toShow = 
            <div className={classes.ProfileHome}>
                <Header/>
                <p>no such data</p>
            </div>;

        
        if(this.state.requestedData && this.state.requestedData.content && this.state.requestedData.status.code === 2000){
            
            let dataForResumeTitle = {
                img: this.state.requestedData.content.avatarUrl,
                name: this.state.requestedData.content.name,
                description: null,
                work: this.state.requestedData.content.currentCompany.name,
                influence: null
            };

            toShow = 
                <div className={classes.ProfileHome}>
                    <Header/>
                    <ResumeTitle data={dataForResumeTitle}/>
                    <MainBody data={this.state.requestedData.content}/>
                </div>;
        }
        return(
            toShow
        );
    }
}

export default ProfileHome;
