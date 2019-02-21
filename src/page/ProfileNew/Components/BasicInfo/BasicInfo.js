import React, {Component} from 'react';

import classes from './BasicInfo.module.css';
import {getAsync} from '../../../../tool/api-helper';

// this section have no seperate api
class BasicInfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            editing: false,
            personalInfo: {
                name: this.props.data.name,
                DOB: this.props.data.DOB,
                gender: this.props.data.gender,
                email: this.props.data.email,
                phone: this.props.data.phone
            }
        } 
        this.nameRef = React.createRef();
        this.DOBRef = React.createRef();
        this.genderRef = React.createRef();
        this.emailRef = React.createRef();
        this.phoneRef = React.createRef();
    }

    editHandler = (e) => {
        this.setState({editing: true});
    }

    saveHandler = () => {
        this.setState({
            editing: false,
            personalInfo: {
                name: this.nameRef.current.value,
                DOB: this.DOBRef.current.value,
                gender: this.genderRef.current.value,
                email: this.emailRef.current.value,
                phone: this.phoneRef.current.value
            }
        });
    }


    render() {
        let toShow = 
            <div className={classes.BasicInfo}>
                <div className={classes.Headline}>
                    <p className={classes.SectionName}>
                        Basic Info
                    </p>
                    <button 
                        className={classes.CornerButton}
                        onClick={this.editHandler}>
                        edit
                    </button>
                </div>
                <div className={classes.row}>
                    <p className={classes.AttributeName}>
                        Name
                    </p>
                    <input disabled type="text" defaultValue={this.props.data.name} ref={this.nameRef}/>
                </div>
                <div className={classes.row}>
                    <p className={classes.AttributeName}>
                        Date of Birth
                    </p>
                    <input disabled type="text" defaultValue={this.props.data.DOB} ref={this.DOBRef}/>
                </div>
                <div className={classes.row}>
                    <p className={classes.AttributeName}>
                        Gender
                    </p>
                    <input disabled type="text" defaultValue={this.props.data.gender} ref={this.genderRef}/>
                </div>
                <div className={classes.row}>
                    <p className={classes.AttributeName}>
                        Email
                    </p>
                    <input disabled type="text" defaultValue={this.props.data.email} ref={this.emailRef}/>
                </div>
                <div className={classes.row}>
                    <p className={classes.AttributeName}>
                        Phone Number
                    </p>
                    <input disabled type="text" defaultValue={this.props.data.phone} ref={this.phoneRef}/>
                </div>  
            </div>

        if(this.state.editing == true) {
            toShow = 
                <div className={classes.BasicInfo}>
                    <div className={classes.Headline}>
                            <p className={classes.SectionName}>
                                Basic Info
                            </p>
                            <button 
                                className={classes.CornerButton}
                                onClick={this.saveHandler}>
                                save
                            </button>
                        </div>
                        <div className={classes.row}>
                            <p className={classes.AttributeName}>
                                Name
                            </p>
                            <input type="text" defaultValue={this.props.data.name} ref={this.nameRef}/>
                        </div>
                        <div className={classes.row}>
                            <p className={classes.AttributeName}>
                                Date of Birth
                            </p>
                            <input type="text" defaultValue={this.props.data.DOB} ref={this.DOBRef}/>
                        </div>
                        <div className={classes.row}>
                            <p className={classes.AttributeName}>
                                Gender
                            </p>
                            <input type="text" defaultValue={this.props.data.gender} ref={this.genderRef}/>
                        </div>
                        <div className={classes.row}>
                            <p className={classes.AttributeName}>
                                Email
                            </p>
                            <input type="text" defaultValue={this.props.data.email} ref={this.emailRef}/>
                        </div>
                        <div className={classes.row}>
                            <p className={classes.AttributeName}>
                                Phone Number
                            </p>
                            <input type="text" defaultValue={this.props.data.phone} ref={this.phoneRef}/>
                        </div>  
                </div>
        }
        return (
            toShow
        );
    }
}

export default BasicInfo;