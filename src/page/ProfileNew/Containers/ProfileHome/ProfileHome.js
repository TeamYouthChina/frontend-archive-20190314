import React, {Component} from 'react';

import {Header} from '../../../../general-component/header';
import {ResumeTitle} from '../../../../general-component/resumeTitle';
import MainBody from '../../Components/MainBody/MainBody';
import classes from './ProfileHome.module.css';

let dummyPersonalInfo = {
    id:'123',
    name:'郭益豪',
    img:'https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg',
    description:['美国乔治华盛顿大学,','数据科学家'],
    work:'张三技术总监',
    counts:86
  }


class ProfileHome extends Component{
    render(){
        return(
            <div className={classes.ProfileHome}>
                <Header/>
                <ResumeTitle data={dummyPersonalInfo}/>
                <MainBody/>
            </div>
        );
    }
}

export default ProfileHome;