import React, {Component} from 'react';

import {languageHelper} from '../../../tool/language-helper';
import TopBar from '../Components/TopBar/topBar';
import Prompts from '../Components/Prompts/prompts';
import Resumes from '../Components/Resumes/resumes';
import {Header} from '../../../general-component/header';
import {Footer} from '../../../general-component/footer';

import classes from './OnlineApplication.module.css';


// dummy resume icon
// problem: cannot access resourses outside of src folder
import resumeIcon from '../../assets/icons8-overview-50.png';


const translation = [
    {
      positions: '职位列表',
      positionDetail: '职位详情',
      chooseResume: '选择简历',
      pleaseChooseYourResume: '请选择你的简历',
      importantToHaveGoodResume: '选择一份合适的简历是至关重要的',
      addResume: '添加简历'
    },
    {
      positions: 'Positions',
      positionDetail: 'Position Detail',
      chooseResume: 'Choose your resume',
      pleaseChooseYourResume: 'Please choose your resume',
      importantToHaveGoodResume: 'It is very important to select a fitting resuem',
      addResume: 'Add Resume'

    },
  ];


// dummy resumes, should get resumes through api in reality
const dummyResumes = [
    {
        name: 'my first resume',
        icon: resumeIcon,
        language: 'English',
        lastEdit: '2019-02-06 16:45'
    },
    {
        name: 'my first resume',
        icon: resumeIcon,
        language: 'English',
        lastEdit: '2019-02-06 16:45'
    },
    {
        name: 'my first resume',
        icon: resumeIcon,
        language: 'English',
        lastEdit: '2019-02-06 16:45'
    },
    {
        name: 'my first resume',
        icon: resumeIcon,
        language: 'English',
        lastEdit: '2019-02-06 16:45'
    },
    {
        name: 'my first resume',
        icon: resumeIcon,
        language: 'English',
        lastEdit: '2019-02-06 16:45'
    }
];

class OnlineApplication extends Component{
    constructor(props){
        super(props);
        this.text = translation[languageHelper()];
    }

    state = {
        resumes: dummyResumes,
        selected: -1 // record which resume is selected

    };

    componentDidMount = () => {
        // api get resumes
    }

    componentDidUpdate = () => {
        // update resumes, and update databases
        console.log('selected has been updated which is now '+this.state.selected+' !');

    }
    
    exportHandler = () => {
        // TODO
        console.log('export clicked');
    }

    deleteHandler = () => {
        // TODO
        console.log('delete clicked');

    }

    addResumeHandler = () =>{
        // TODO
        console.log('adding resume');
    }

    submitHandler = () => {
        // TODO 
        console.log('submit!');
    }

    selectHandler = (event) => {
        this.setState({selected: event.target.id});
        console.log('selecting ' +event.target.id+ ' !');
    }


    
    render(){
        let toShow = 
            <div className={classes.main}>
                <Header/>
                <TopBar trans={this.text}/>
                <Prompts trans = {this.text}/>
                <Resumes 
                    trans = {this.text} 
                    exportClicked={this.exportHandler}
                    deleteClicked={this.deleteHandler}
                    addResumeClicked={this.addResumeHandler}
                    resumes={this.state.resumes}
                    selectHandler={this.selectHandler}
                    selected={this.state.selected}/>
                <div className={classes.control}>
                    <button 
                        className={classes.submit}
                        onClick={this.submitHandler}>Submit</button>
                </div>
                <Footer/>
            </div>;


        return(
            toShow
        );
    }
}

export default OnlineApplication;