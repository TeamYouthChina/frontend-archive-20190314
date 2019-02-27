import React, {Component} from 'react';
import { MDBBtn } from "mdbreact";


import CertificationCard from './CertificationCard/CertificationCard';
import classes from './Certification.module.css';
import {getAsync} from '../../../tool/api-helper';
import ModalPage from '../Modal/Modal';
import BraftEditor from 'braft-editor'
import Dropdown from '../Dropdown/Dropdown';
import { ContentUtils } from 'braft-utils';

class Certification extends Component{

    constructor(props){
        super(props)        
        this.state = {
            cards: Array(), 
            requestedData: null,
            cardsToModal: [],
            editorState: BraftEditor.createEditorState(),
            showEditor: false
        }
        this.date = null;
    }

    // get work data set requestedData and cards in state
    async componentDidMount(){
        let data = await getAsync('/applicants/'+this.props.requestID+'/certificates');
        this.setState({...this.state, requestedData: data});
        this.date = new Date();
        const time = this.date.getTime();
        let temp1 = this.state.requestedData && this.state.requestedData.content && this.state.requestedData.status.code === 2000
            ? this.state.requestedData.content.map((e)=>{
                return <CertificationCard 
                    key={time} 
                    id={time} 
                    data={e} 
                    deleteHandler={this.deleteHandler}
                    saveHandler={this.saveHandler}/>
            })
            : Array();
        
            let temp2 = this.state.requestedData && this.state.requestedData.content && this.state.requestedData.status.code === 2000
            ? this.state.requestedData.content.map((e)=>{
                return <CertificationCard 
                    key={time} 
                    id={time} 
                    data={e} 
                    deleteHandler={this.deleteHandler}
                    saveHandler={this.saveHandler}/>
            })
            : Array();

            this.setState({
                ...this.state,
                cards: temp1,
                cardsToModal: temp2
            });
    }

    async componentDidUpdate(){
    }

    deleteHandler = () => {
        this.setState({
            ...this.state,
            showEditor: false,
            editorState: ContentUtils.clear(this.state.editorState)
          })
    }

    // save data locally and send back to server
    saveHandler = () =>{
        this.setState({
            ...this.state,
            showEditor: false
        })
    }

    editHandler = ()=>{
        this.setState({
            ...this.state,
            showEditor: true
        })
    }

    addHandler = (id) => {
        let copy;
        this.state.cards.forEach((e,i)=>{
            if(e.props.id == id){
                copy = e
            }
        })
        // const plainText = JSON.stringify(copy.props.data);
        const name = copy.props.data.name;
        const a = copy.props.data.authority;
        const b = copy.props.data.duration.begin;
        const e = copy.props.data.duration.end;
        const n = copy.props.data.note;
        const manullyParsed = name + '\n' + a + '\n' + b + ' ' + e + '\n' + n + '\n';

        // const parsed = plainText.replace(/{/g, '\b').replace(/}/g, '').replace(/"/g, ' ').replace(/,/g, '\n');
        // console.log(manullyParsed);
        // console.log(plainText)
        const newState = ContentUtils.insertText(this.state.editorState, manullyParsed);
        this.setState({
            ...this.state,
            showEditor: true,
            editorState: newState
        })
    }

    handleEditorChange = (editorState) => {
        this.setState({ editorState })
    }

    render(){
        let toShow;
        if(this.state.showEditor){
            toShow = 
                <div className={classes.Certification}>
                    <div className={classes.row}>
                        <p className={classes.SectionName}>Certification</p>
                        <Dropdown save={this.saveHandler} delete={this.deleteHandler} editing />
                    </div>
                    <BraftEditor
                        contentClassName={classes.editorContent}
                        className={classes.editor} 
                        value={this.state.editorState}
                        onChange={this.handleEditorChange}/>
                    <div>
                        <ModalPage
                            buttonName="+ Add Certification"
                            requestID={this.props.requestID}
                            cards={this.state.cardsToModal}
                            addHandler={this.addHandler}/>
                    </div>
                </div>;
        }
        else {
            const plainText = this.state.editorState.toHTML();
            const text = <div dangerouslySetInnerHTML={{__html: plainText}} />;
            toShow =
                <div className={classes.Certification}>
                    <div className={classes.row}>
                        <p className={classes.SectionName}>Certification</p>
                        <Dropdown edit={this.editHandler} delete={this.deleteHandler}/>
                    </div>
                    <div style={{width: '90%'}}>
                        {text} 
                    </div>
                    <div>
                        <ModalPage
                            buttonName="+ Add Certification"
                            requestID={this.props.requestID}
                            cards={this.state.cardsToModal}
                            addHandler={this.addHandler}/>
                    </div>
                </div>
        }
        return(toShow);
    }
};

export default Certification;