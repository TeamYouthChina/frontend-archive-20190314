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
        profileData: null
    }

    componentWillMount(){
        console.log(this.props.match.params.id);
        this.setState({requestID: this.props.match.params.id});
    }

    async componentDidMount(){
        console.log(this.state.requestID);
        let data = await getAsync('/applicants/'+this.state.requestID);
        console.log(data);
        this.setState({profileData: data});
    }

    render(){
        let toShow = 
            <div className={classes.ProfileHome}>
                <Header/>
                <p>no data</p>
            </div>;
        if(this.state.profileData && this.state.profileData.content && this.state.profileData.status.code === 2000){
            toShow = 
                <div className={classes.ProfileHome}>
                    <Header/>
                    {/* <ResumeTitle data={this.state.profileData}/> */}
                    <MainBody profileData={this.state.profileData}/>
                </div>;
        }
        return(
            toShow
        );
    }
}

export default ProfileHome;